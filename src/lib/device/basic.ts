export type DeviceBase = {
  transform: Transform;
};
export type Transform = { x: number; y: number; depth?: number };
export type ChannelCodeGrid<Program> = {
  type: 'channel_radio';
  channel: string;
  blocks: Program;
};

export type Color = `#${string}`;

export { type DeviceOptions } from '../../../codegen/src/lib/device';
