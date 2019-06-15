import { Option, System } from './system.interface';
import { Icons } from './icons/icons.enum';

export const MAC_OS: System = {
  osName: 'MacOs Mojavi',
  osType: null,
  icons: [Icons.macOs, Icons.linuxOs],
  status: null,
  hosts: new Set <Option> ([]),
  name: 'MacOs',
  id: 1
};

export const LINUX_OS: System = {
  osName: 'Linux Ubuntu',
  osType: null,
  icons: [Icons.linuxOs],
  status: null,
  hosts: new Set <Option> ([]),
  name: 'For Linux',
  id: 2
};

export const WIN_OS: System = {
  osName: 'Windows 10',
  osType: null,
  icons: [Icons.windowsOs],
  status: null,
  hosts: new Set <Option> ([]),
  name: 'For Win',
  id: 3
};

export const STATIC_ICONS: Icons[] = [
  Icons.chevronLeft,
  Icons.chevronRight,
  Icons.macOs,
  Icons.linuxOs,
  Icons.windowsOs
];

export const OS_NAME: string = 'osName';
export const LIKE: string = 'like';
export const SORT_BY_ID: string = 'id';
export const ASC: string = 'asc';
export const STATUS: string = 'status';
export const DIALOG_SIZE: string = '450px';
export const DELETE_DIALOG_SIZE: string = '350px';
