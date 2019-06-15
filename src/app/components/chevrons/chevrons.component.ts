import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'chevrons',
  providers: [
  ],
  styleUrls: ['./chevrons.component.scss'],
  templateUrl: './chevrons.component.html',
})

export class ChevronsComponent {

  @Output() public onPageResult: EventEmitter<number> = new EventEmitter<number>();

  private pageCounter: number = 0;

  public previousPage(): void {
    this.pageCounter =  this.pageCounter - 5 < 0 ? 0 : this.pageCounter - 5;
    this.onPageResult.emit(this.pageCounter);
  }

  public nextPage(): void {
    this.pageCounter =  this.pageCounter + 5 >= 20 ? 20 : this.pageCounter + 5;
    this.onPageResult.emit(this.pageCounter);
  }
}
