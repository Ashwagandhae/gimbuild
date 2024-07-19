import { Program } from 'gimblocks';
import { Build } from './build';
import { deviceOptions, DeviceTypeMap } from './device';

export type BuildInfo = {
  deviceCounts: Partial<Record<keyof DeviceTypeMap<Program>, number>>;
  memory: number;
};
export function getInfo(build: Build): BuildInfo {
  let deviceCounts: BuildInfo['deviceCounts'] = {};
  let memory = 0;
  for (const device of build.devices) {
    deviceCounts[device.type] = (deviceCounts[device.type] ?? 0) + 1;
    let deviceOption = deviceOptions.find((d) => d.id === device.type)!;
    if (deviceCounts[device.type] == 1) {
      memory += deviceOption.initialMemoryCost ?? 0;
    } else {
      memory += deviceOption.subsequentMemoryCost ?? 0;
    }
  }
  return { deviceCounts, memory };
}
