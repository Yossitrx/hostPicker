import { Component, Inject, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DeviceApiService } from '../../common/deviceService/deviceServiceApi/deviceApi.service';
import { map as _map, invoke } from 'lodash';
import { OS_NAME, STATUS } from '../../common/system.const';
import { Devices, Option, System } from '../../common/system.interface';
import { HostDialogService } from './hostDialogService/hostDialog.service';
import { ErrorService } from '../../common/errorService/error.service';

@Component({
  selector: 'host-dialog',
  providers: [
  ],
  styleUrls: ['./hostDialog.component.scss'],
  templateUrl: './hostDialog.component.html',
})

export class HostDialogComponent implements OnInit, OnDestroy {
  @ViewChild('triggerHostName') public triggerHostName;

  public myControl = new FormControl();
  public options: Option[] | any = [];
  public filteredOptions: Observable<string[]>;
  public viewReady: boolean = false;

  private osName: string;
  private hostSelectedOptions: Option[];

  constructor(
    public dialogRef: MatDialogRef<HostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: System,
    private deviceApiService: DeviceApiService,
    private errorService: ErrorService) {

  }

  public ngOnInit(): void {
    this.deviceApiService
      .updateOsName(DeviceApiService.transformActionToServerReady(OS_NAME, this.data.osName))
      .subscribe( (devices: Devices) => {
        this.initOptions(devices, this.data.id);
        this.viewReady = true;
      }, () => this.errorService.openSnackBar());
  }

  public ngOnDestroy(): void {
    invoke(this.deviceApiService, 'unsubscribe');
  }

  public onSelect(listChange, selectedOptions): void {
    this.hostSelectedOptions = selectedOptions.selected.map((item) => item.value);
  }

  public onDoneClick(): void {
    this.dialogRef.close(this.hostSelectedOptions);
  }

  public pageResult(pageCounter: number): void {
    this.deviceApiService.updatePageResult(pageCounter)
      .subscribe( (data) => {
        this.initOptions(data, this.data.id);
      }, () => this.errorService.openSnackBar());
  }

  public toggleOsName(osName: string): void {
    const toggleOsName = this.deviceApiService
      .updateOsName(
        DeviceApiService.transformActionToServerReady(OS_NAME, osName));
    toggleOsName.subscribe((data) => this.initOptions(data, this.data.id),
      () => this.errorService.openSnackBar());
  }

  public statusChange(status: string): void {
    this.deviceApiService
      .updateStatus(
        DeviceApiService.transformActionToServerReady(STATUS, status))
      .subscribe( (data) => {
        this.initOptions(data, this.data.id);
    }, () => this.errorService.openSnackBar());
  }

  private initOptions(options, systemId = 0): void {
    this.options = _map(options, (op) => ({
        systemId,
        name: op.host,
        identity: op.osName,
        lastSeen: HostDialogService.generateDateString(op.lastSeen),
        ip: op.ip,
      }));
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''), map((value) => this._filter(value)));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) => option.name.toLowerCase().includes(filterValue));
  }

}
