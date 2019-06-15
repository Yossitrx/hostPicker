import { Injectable } from '@angular/core';
import { find } from 'lodash';
import { Option, System } from '../../../common/system.interface';

@Injectable()
export class HostsService {

  public hostsToAddHandler(selectedHosts: Option[], systems: System[]) {
    const systemId = selectedHosts[0].systemId;
    const systemToAddHost = find(systems, (sy) => sy.id === systemId );
    const index = systems.indexOf(systemToAddHost);
    return {
      index,
      selectedHosts: new Set([...selectedHosts])
    };
  }

  public hostToDeleteHandler(selectedHost: Option, systems: System[]) {
    const systemId = selectedHost.systemId;
    const systemToDeleteHost = find(systems, (sy) => sy.id === systemId );
    return systems.indexOf(systemToDeleteHost);
  }

}
