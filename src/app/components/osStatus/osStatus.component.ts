import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'os-status',
  providers: [
  ],
  styleUrls: ['./osStatus.component.scss'],
  templateUrl: './osStatus.component.html',
})

export class OsStatusComponent {

  @Input() public status: string;
  @Output() public onStatusChange: EventEmitter<string> = new EventEmitter<string>();

  public statusChange(osName): void {
    this.onStatusChange.emit(osName);
  }
}
