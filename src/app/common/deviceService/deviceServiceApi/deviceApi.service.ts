import { Injectable } from '@angular/core';
import { API } from '../../API.const';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devices, FilterProperty } from '../../system.interface';
import { ASC, LIKE, OS_NAME, SORT_BY_ID } from '../../system.const';

@Injectable()
export class DeviceApiService {

  public static transformActionToServerReady(field: string, value: string): FilterProperty {
    return {
      field,
      value,
      op: field === OS_NAME ? LIKE : '=',
    };
  }

  private status: FilterProperty;
  private osName: FilterProperty;
  private filterBy: FilterProperty[] = [];

  constructor(private httpClient: HttpClient) {}

  public getDevicesObservable(payload): Observable<Devices> {
    return this.httpClient.post<Devices>(API.devices, payload);
  }

  public updateStatus(status: FilterProperty): Observable<Devices> {
    this.status = status;
    return this.getNewServerData();
  }

  public updateOsName(osName: FilterProperty): Observable<Devices> {
    this.osName = osName;
    return this.getNewServerData();
  }

  public updatePageResult(toSkip: number): Observable<Devices> {
   return this.getNewServerData(toSkip);
  }

  private getNewServerData(toSkip: number = 0): Observable<Devices> {
    this.filterBy = [];
    if (this.osName) {
      this.filterBy.push(this.osName);
    }
    if (this.status) {
      this.filterBy.push(this.status);
    }
    const objectToSend: Devices = {
      skip: toSkip,
      take: 5,
      filter: this.filterBy,
      sort: SORT_BY_ID,
      order: ASC
    };
    return this.getDevicesObservable(objectToSend);
  }

}
