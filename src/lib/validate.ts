import { countProgramBlocks, Program } from 'gimblocks';
import { Build, Device } from './build';
import { BuildInfo, getInfo } from './info';
import { deviceOptions } from './device';

export type ValidationResult =
  | {
      type: 'success';
    }
  | {
      type: 'error';
      errorType: 'tooManyDevices';
      deviceType: string;
      maxOnMap: number;
      actualOnMap: number;
    }
  | {
      type: 'error';
      errorType: 'memoryTooHigh';
      memory: number;
    }
  | {
      type: 'error';
      errorType: 'tooManyCodeGrids';
      device: Device;
    }
  | {
      type: 'error';
      errorType: 'tooManyBlocks';
      device: Device;
      codeGrid: Program;
    };

export function validate(build: Build): ValidationResult {
  let info = getInfo(build);

  let res = validateDeviceCounts(info.deviceCounts);
  if (res.type === 'error') return res;

  res = validateMemory(info.memory);
  if (res.type === 'error') return res;

  res = validateCodeGridCounts(build);
  if (res.type === 'error') return res;

  res = validateCodeGrids(build);
  if (res.type === 'error') return res;

  return { type: 'success' };
}

function validateDeviceCounts(
  deviceCounts: BuildInfo['deviceCounts']
): ValidationResult {
  for (const [type, count] of Object.entries(deviceCounts)) {
    let deviceOption = deviceOptions.find((d) => d.id === type)!;
    if (deviceOption.maxOnMap != null && count > deviceOption.maxOnMap) {
      return {
        type: 'error',
        errorType: 'tooManyDevices',
        deviceType: type,
        maxOnMap: deviceOption.maxOnMap,
        actualOnMap: count,
      };
    }
  }
  return {
    type: 'success',
  };
}

function validateMemory(memory: number): ValidationResult {
  if (memory > 100_000) {
    return {
      type: 'error',
      errorType: 'memoryTooHigh',
      memory,
    };
  }
  return {
    type: 'success',
  };
}

function validateCodeGridCounts(build: Build): ValidationResult {
  for (const device of build.devices) {
    if (device.codeGrids.length > 6) {
      return {
        type: 'error',
        errorType: 'tooManyCodeGrids',
        device: device,
      };
    }
  }
  return {
    type: 'success',
  };
}

function validateCodeGrids(build: Build): ValidationResult {
  for (const device of build.devices) {
    for (const grid of device.codeGrids) {
      if (countProgramBlocks(grid.blocks) > 75) {
        return {
          type: 'error',
          errorType: 'tooManyBlocks',
          device: device,
          codeGrid: grid.blocks,
        };
      }
    }
  }
  return {
    type: 'success',
  };
}
