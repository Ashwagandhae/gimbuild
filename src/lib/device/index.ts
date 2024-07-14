import { defaultDeviceOptions, DeviceTypeMap } from './generated';

export * from './generated';
export * from './basic';

export function getDefaultDeviceOptions(
  id: keyof DeviceTypeMap<any>
): DeviceTypeMap<any>[keyof DeviceTypeMap<any>]['options'] {
  return defaultDeviceOptions[
    id
  ] as DeviceTypeMap<any>[keyof DeviceTypeMap<any>]['options'];
}
