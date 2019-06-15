import { Component, OnInit } from '@angular/core';
import { DeviceApiService } from '../../common/deviceService/deviceServiceApi/deviceApi.service';
import { System } from '../../common/system.interface';
import { IconService } from '../../common/icons/icon.service';
import { MatDialog } from '@angular/material';
import { HostDialogComponent } from '../hostDialog/hostDialog.component';
import { RemoveHostDialogComponent } from '../removeHostDialog/removeHostDialog.component';
import { HostsService } from './hostsService/hosts.service';
// tslint:disable-next-line:max-line-length
import { DELETE_DIALOG_SIZE, DIALOG_SIZE, LINUX_OS, MAC_OS, WIN_OS } from '../../common/system.const';

@Component({
  selector: 'hosts',
  providers: [
  ],
  styleUrls: ['./hosts.component.scss'],
  templateUrl: './hosts.component.html',
})
export class HostsComponent implements OnInit {

  public systems: System[];

  constructor(private deviceApiService: DeviceApiService,
              private iconService: IconService,
              public dialog: MatDialog,
              public hostsService: HostsService) {
  }

  public ngOnInit(): void {
    this.iconService.initIcons();
    this.systems = [
      MAC_OS,
      LINUX_OS,
      WIN_OS
    ];
  }

  public openDialog(system) {
    const dialogRef = this.dialog.open(HostDialogComponent, {
      width: DIALOG_SIZE,
      data: system
    });
    dialogRef.afterClosed().subscribe((selectedHosts) => {
      if (selectedHosts) {
        const systemsSelectedHosts = this.hostsService
          .hostsToAddHandler(selectedHosts, this.systems);
        this.systems[systemsSelectedHosts.index].hosts = systemsSelectedHosts.selectedHosts;
      }
    });
  }

  public removeHost(host) {
    const dialogRef = this.dialog.open(RemoveHostDialogComponent, {
      width: DELETE_DIALOG_SIZE,
      data: host
    });

    dialogRef.afterClosed().subscribe((selectedHost) => {
      if (selectedHost) {
        const index = this.hostsService.hostToDeleteHandler(selectedHost, this.systems);
        this.systems[index].hosts.delete(selectedHost);
      }
    });
  }

}
