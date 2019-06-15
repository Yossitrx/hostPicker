import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Icons } from '../../common/icons/icons.enum';
@Component({
  selector: 'os-toggle',
  providers: [
  ],
  styleUrls: ['./osToggle.component.scss'],
  templateUrl: './osToggle.component.html',
})

export class OsToggleComponent {

  @Input() public icons: Icons[];
  @Input() public osName: string;
  @Output() public onToggleChange: EventEmitter<string> = new EventEmitter<string>();

  public toggleOsName(osName): void {
    if (this.osName !== osName) {
      this.osName = osName;
      this.onToggleChange.emit(osName);
    }
  }
}
