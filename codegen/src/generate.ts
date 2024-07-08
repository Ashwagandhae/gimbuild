import * as worldOptions from '../../data/worldOptions.json';
import { writeFileSync } from 'fs';
import { generateDeviceTypes } from './lib/device';

writeFileSync(
  './src/lib/device/generated.ts',
  generateDeviceTypes(worldOptions.deviceOptions as unknown as any)
);
