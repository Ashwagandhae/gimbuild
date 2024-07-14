import { Program } from 'gimblocks';
import { DeviceTypeMap } from './device';

import {
  BuildBuilder as BuildBuilderGeneric,
  DeviceBuilder as DeviceBuilderGeneric,
  TransformBuilder,
} from './builder';
import { Build as BuildGeneric, Device as DeviceGeneric } from './buildType';

export { TransformBuilder } from './builder';
export type { Transform } from './buildType';

export type Build = BuildGeneric<Program>;
export type Device = DeviceGeneric<Program>;

export class DeviceBuilder<
  T extends keyof DeviceTypeMap<Program>,
> extends DeviceBuilderGeneric<Program, T> {
  constructor(deviceType: T) {
    super(deviceType);
  }
}

export class BuildBuilder extends BuildBuilderGeneric<Program> {
  constructor(positionType: 'relative' | 'absolute') {
    super(positionType);
  }
}

export function transform(x = 0, y = 0): TransformBuilder {
  return new TransformBuilder(x, y);
}

export function device<T extends keyof DeviceTypeMap<Program>>(
  deviceType: T
): DeviceBuilder<T> {
  return new DeviceBuilder(deviceType);
}

export function build(positionType: 'relative' | 'absolute'): BuildBuilder {
  return new BuildBuilder(positionType);
}
