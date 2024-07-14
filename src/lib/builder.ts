import { Build } from './buildType';
import {
  Device,
  DeviceTypeMap,
  getDefaultDeviceOptions,
  Transform,
} from './device';

export class TransformBuilder {
  private transform: Transform;

  constructor(x = 0, y = 0) {
    this.transform = { x, y };
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

function defaultDeviceForType<T extends keyof DeviceTypeMap<any>>(
  type: keyof DeviceTypeMap<any>
): DeviceTypeMap<any>[T] {
  return {
    type: type,
    transform: { x: 0, y: 0 },
    options: getDefaultDeviceOptions(type),
    codeGrids: [],
  } as DeviceTypeMap<any>[T];
}

export class DeviceBuilder<Program, T extends keyof DeviceTypeMap<Program>> {
  private device: DeviceTypeMap<Program>[T];

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

  options(options: Partial<DeviceTypeMap<Program>[T]['options']>): this {
    this.device.options = { ...this.device.options, ...options };
    return this;
  }

  setOption<K extends keyof DeviceTypeMap<Program>[T]['options']>(
    key: K,
    value: DeviceTypeMap<Program>[T]['options'][K]
  ): this {
    (this.device.options as DeviceTypeMap<Program>[T]['options'])[key] = value;
    return this;
  }

  addCodeGrid(codeGrid: DeviceTypeMap<Program>[T]['codeGrids'][number]): this {
    this.device.codeGrids.push(codeGrid as never);
    return this;
  }

  addTriggerCodeGrid(
    type: EnsureTriggerType<
      DeviceTypeMap<Program>[T]['codeGrids'][number]['type']
    >,
    blocks: Program
  ): this {
    this.device.codeGrids.push({ type, blocks } as never);
    return this;
  }

  addChannelCodeGrid(
    channel: EnsureHasChannel<Program, T, string>,
    blocks: Program
  ): this {
    this.device.codeGrids.push({
      type: 'channel_radio',
      channel: channel.toString(),
      blocks,
    } as never);
    return this;
  }

  build(): DeviceTypeMap<Program>[T] {
    return this.device as DeviceTypeMap<Program>[T];
  }
}

type EnsureTriggerType<T> = T extends 'channel_radio'
  ? never
  : T extends never
    ? never
    : T;

type EnsureHasChannel<
  Program,
  T extends keyof DeviceTypeMap<Program>,
  U,
> = 'channel_radio' extends DeviceTypeMap<Program>[T]['codeGrids'][number]['type']
  ? U
  : never;

export class BuildBuilder<Program> {
  private _build: Build<Program>;

  constructor(positionType: 'relative' | 'absolute') {
    this._build = { positionType, devices: [] };
  }

  name(name: string): this {
    this._build.name = name;
    return this;
  }

  devices(devices: Device<Program>[]): this {
    this._build.devices = devices;
    return this;
  }

  addDevice<T extends keyof DeviceTypeMap<Program>>(
    device: DeviceTypeMap<Program>[T] | DeviceBuilder<Program, T>
  ): this {
    if (device instanceof DeviceBuilder) {
      this._build.devices.push(device.build());
    } else {
      this._build.devices.push(device);
    }
    return this;
  }

  build(): Build<Program> {
    return this._build;
  }
}
