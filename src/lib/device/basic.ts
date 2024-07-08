import type { Program } from 'gimblocks';
export type { Program } from 'gimblocks';

export type DeviceBase = {
  transform: Transform;
};
export type Transform = { x: number; y: number; depth?: number };
export type ChannelCodeGrid = {
  type: 'channel_radio';
  channel: string;
  blocks: Program;
};

export type Color = `#${string}`;
