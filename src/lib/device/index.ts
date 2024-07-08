import { defaultDeviceOptions, DeviceTypeMap } from './generated';

export * from './generated';
export * from './basic';

export function getDefaultDeviceOptions(
  id: keyof DeviceTypeMap
): DeviceTypeMap[keyof DeviceTypeMap]['options'] {
  return defaultDeviceOptions[
    id
  ] as DeviceTypeMap[keyof DeviceTypeMap]['options'];
}
