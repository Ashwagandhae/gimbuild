import { Device } from './device';

export type { Device, Transform } from './device';

export type Build<Program> = {
  positionType: 'relative' | 'absolute';
  devices: Device<Program>[];
  name?: string;
};
