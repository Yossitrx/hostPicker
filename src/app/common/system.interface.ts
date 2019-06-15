import { Icons } from './icons/icons.enum';

export interface System {
  osType: number;
  osName: string;
  icons: Icons[];
  hosts: Set<Option>;
  status: string;
  name: string;
  id: number;
}

export interface FilterProperty {
  field: string;
  value: string;
  op: string;
}

export interface Devices {
  skip: number;
  take: number;
  filter: FilterProperty[];
  sort: string;
  order: string;
}

export interface Option {
  name: string;
  identity: string;
  systemId: number;
  lastSeen: string;
  ip: string;
}
