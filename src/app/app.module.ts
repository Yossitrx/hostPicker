import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostsComponent } from './components/hosts/hosts.component';
import { DeviceApiService } from './common/deviceService/deviceServiceApi/deviceApi.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { IconService } from './common/icons/icon.service';
import { HostDialogComponent } from './components/hostDialog/hostDialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OsToggleComponent } from './components/osToggle/osToggle.component';
import { OsStatusComponent } from './components/osStatus/osStatus.component';
import { ChevronsComponent } from './components/chevrons/chevrons.component';
// tslint:disable-next-line:max-line-length
import { RemoveHostDialogComponent } from './components/removeHostDialog/removeHostDialog.component';
import { HostDialogService } from './components/hostDialog/hostDialogService/hostDialog.service';
import { HostsService } from './components/hosts/hostsService/hosts.service';
import { ErrorService } from './common/errorService/error.service';
// tslint:disable-next-line:max-line-length
import { ErrorTemplateComponent } from './common/errorService/errorTemplate/errorTemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    HostsComponent,
    HostDialogComponent,
    RemoveHostDialogComponent,
    OsToggleComponent,
    OsStatusComponent,
    ChevronsComponent,
    ErrorTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DeviceApiService,
    IconService,
    HostDialogService,
    HostsService,
    ErrorService
  ],
  entryComponents: [HostDialogComponent, RemoveHostDialogComponent, ErrorTemplateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
