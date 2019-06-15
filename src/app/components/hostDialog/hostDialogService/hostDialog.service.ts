import { Injectable } from '@angular/core';

@Injectable()
export class HostDialogService {

  public static generateDateString(date): string {
    return new Date(date).toLocaleDateString('en-US');
  }
}
