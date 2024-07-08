export * from './device/index';
import {
  Device,
  getDefaultDeviceOptions,
  DeviceTypeMap,
  Transform,
  Program,
} from './device/index';

export type Build = {
  positionType: 'relative' | 'absolute';
  devices: Device[];
  name?: string;
};

export class TransformBuilder {
  private transform: Transform;

  constructor() {
    this.transform = { x: 0, y: 0 };
  }

  x(x: number): this {
    this.transform.x = x;
    return this;
  }

  y(y: number): this {
    this.transform.y = y;
    return this;
  }

  depth(depth: number): this {
    this.transform.depth = depth;
    return this;
  }

  addX(x: number): this {
    this.transform.x += x;
    return this;
  }

  addY(y: number): this {
    this.transform.y += y;
    return this;
  }

  add(transform: Transform): this {
    this.transform.x += transform.x;
    this.transform.y += transform.y;
    return this;
  }

  negative(): this {
    this.transform.x = -this.transform.x;
    this.transform.y = -this.transform.y;
    return this;
  }

  build(): Transform {
    return this.transform;
  }
}

export class DeviceBuilder<T extends keyof DeviceTypeMap> {
  private device: DeviceTypeMap[T];

  constructor(deviceType: T) {
    this.device = defaultDeviceForType(deviceType);
  }

  transform(transform: Transform | TransformBuilder): this {
    if (transform instanceof TransformBuilder) {
      this.device.transform = transform.build();
    } else {
      this.device.transform = transform;
    }
    return this;
  }

  options(options: Partial<DeviceTypeMap[T]['options']>): this {
    this.device.options = { ...this.device.options, ...options };
    return this;
  }

  setOption<K extends keyof DeviceTypeMap[T]['options']>(
    key: K,
    value: DeviceTypeMap[T]['options'][K]
  ): this {
    (this.device.options as DeviceTypeMap[T]['options'])[key] = value;
    return this;
  }

  codeGrids(codeGrids: DeviceTypeMap[T]['codeGrids']): this {
    this.device.codeGrids = codeGrids;
    return this;
  }

  addCodeGrid(codeGrid: DeviceTypeMap[T]['codeGrids'][number]): this {
    this.device.codeGrids.push(codeGrid as never);
    return this;
  }

  addTrigger(
    type: EnsureTriggerType<DeviceTypeMap[T]['codeGrids'][number]['type']>,
    blocks: Program
  ): this {
    this.device.codeGrids.push({ type, blocks } as never);
    return this;
  }

  addChannel(channel: EnsureHasChannel<T, string>, blocks: Program): this {
    this.device.codeGrids.push({
      type: 'channel_radio',
      channel: channel.toString(),
      blocks,
    } as never);
    return this;
  }

  build(): DeviceTypeMap[T] {
    return this.device as DeviceTypeMap[T];
  }
}

type EnsureTriggerType<T> = T extends 'channel_radio'
  ? never
  : T extends never
    ? never
    : T;

type EnsureHasChannel<
  T extends keyof DeviceTypeMap,
  U,
> = 'channel_radio' extends DeviceTypeMap[T]['codeGrids'][number]['type']
  ? U
  : never;

export class BuildBuilder {
  private _build: Build;

  constructor(positionType: 'relative' | 'absolute') {
    this._build = { positionType, devices: [] };
  }

  name(name: string): this {
    this._build.name = name;
    return this;
  }

  devices(devices: Device[]): this {
    this._build.devices = devices;
    return this;
  }

  addDevice<T extends keyof DeviceTypeMap>(
    device: DeviceTypeMap[T] | DeviceBuilder<T>
  ): this {
    if (device instanceof DeviceBuilder) {
      this._build.devices.push(device.build());
    } else {
      this._build.devices.push(device);
    }
    return this;
  }

  build(): Build {
    return this._build;
  }
}

function defaultDeviceForType<T extends keyof DeviceTypeMap>(
  type: keyof DeviceTypeMap
): DeviceTypeMap[T] {
  return {
    type: type,
    transform: { x: 0, y: 0 },
    options: getDefaultDeviceOptions(type),
    codeGrids: [],
  } as DeviceTypeMap[T];
}

export function build(
  positionType: 'relative' | 'absolute',
  devices: Device[],
  name?: string
): Build {
  let ret = { positionType, devices };
  if (name) {
    return { ...ret, name };
  }
  return ret;
}
