import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { STATIC_ICONS } from '../system.const';

@Injectable()
export class IconService {

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
  }

  public initIcons(): void {
    for (const icon of STATIC_ICONS) {
      this.iconRegistry.addSvgIcon(icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${icon}.svg`));
    }
  }
}
