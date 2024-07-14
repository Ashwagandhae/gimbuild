export type DeviceOptions = DeviceOption[];

export type DeviceOption = {
  id: string;
  name: string;
  description?: string;
  defaultState: Record<string, any>;
  optionSchema: OptionSchema;
  codeGridSchema: CodeGridSchema;
  wireConfig?: WireConfig;
  minimumRoleLevel?: number;
  maximumRoleLevel?: number;
  initialMemoryCost?: number;
  subsequentMemoryCost?: number;
  maxOnMap?: number;
  supportedMapStyles?: ('topDown' | 'sideScroller' | 'platformer')[];
};

export type CodeGridSchema = {
  allowChannelGrids: boolean;
  triggers: {
    type: string;
    name: string;
    blockedGlobalBlocks?: string[];
    blockedCustomBlocks?: string[];
    customBlocks?: string[];
  }[];
  customBlocks: string[];
};

export type WireConfig = {
  in?: {
    connections: { id: string; name: string }[];
  };
  out?: {
    connections: { id: string; name: string }[];
  };
};

export type OptionSchema = {
  categories?: {
    categories: {
      id: string;
      name: string;
      hideIf?: {
        key: string;
        compare: 'EQUAL' | 'NOT_EQUAL' | 'LESS_THAN';
        value: any;
      }[][];
    }[];
    showAllOptionsAt: 'start' | 'end';
  };
  options: {
    key: string;
    option: Option;
    categories?: string[];
    minimumRoleLevel?: number;
    maximumRoleLevel?: number;
    supportedMapStyles?: ('topDown' | 'sideScroller' | 'platformer')[];
  }[];
};

export type Option =
  | SelectOption
  | TextInputOption
  | NumberInputOption
  | TerrainIdOption
  | ColorOption
  | ItemIdOption;

export type OptionBase = {
  label: string;
  description?: string;
  hidden?: boolean;
  validators: any[];
  hideIf?: any;
};

export type SelectOption = OptionBase & {
  type: 'select';
  defaultValue: string | number | boolean;
  props: {
    options: {
      name: string;
      value: string | number | boolean;
      supportedMapStyles?: ('topDown' | 'sideScroller')[];
      minimumRoleLevel?: number;
      maximumRoleLevel?: number;
    }[];
    allowEmpty: boolean;
  };
};

export type TextInputOption = OptionBase & {
  type: 'textInput';
  defaultValue: string;
  props: {
    placeholder: string;
    category?: string;
    maxLength?: number;
    textArea?: boolean;
  };
};

export type NumberInputOption = OptionBase & {
  type: 'numberInput';
  defaultValue?: number;
  props: { min?: number; max?: number; step?: number; allowEmpty?: boolean };
};

export type TerrainIdOption = OptionBase & {
  type: 'terrainId';
  defaultValue?: string;
  props: { allowEmpty?: boolean };
};

export type ColorOption = OptionBase & { type: 'color'; defaultValue: string };

export type ItemIdOption = OptionBase & {
  type: 'itemId';
  defaultValue?: string;
  props: {
    allowEmpty?: boolean;
    blockedItems?: string[];
    allowedItemsCategories?: string[];
  };
};

export function generateDeviceTypes(deviceOptions: DeviceOptions): string {
  let out = `
  import { DeviceBase, ChannelCodeGrid, Color } from './basic';
  `;
  let names = [];
  for (const device of deviceOptions) {
    let name = deviceTypeName(device);
    let { out: deviceType, needsProgram } = generateDeviceType(device);
    if (needsProgram) {
      name = `${name}<Program>`;
    }
    names.push([name, device.id]);
    out += `export type ${name} = ${deviceType};\n`;
  }
  out += `export type Device<Program> = ${names.map(([name, _]) => name).join(' | ')};`;

  out += `export type DeviceTypeMap<Program> = {`;
  for (const [name, id] of names) {
    out += `'${id}': ${name},`;
  }
  out += `};`;

  out += `export const defaultDeviceOptions: Record<string, Device<any>['options']> = {`;
  for (const device of deviceOptions) {
    out += `'${device.id}': ${generateDefaultDeviceOptions(device.optionSchema.options)},`;
  }
  out += `};`;
  return out;
}

function deviceTypeName(device: DeviceOption) {
  return `${device.id[0]!.toUpperCase()}${device.id.slice(1)}Device`;
}

function generateDeviceType(device: DeviceOption): {
  out: string;
  needsProgram: boolean;
} {
  let out = `DeviceBase & {
    type: '${device.id}';
    options: ${generateDeviceOptions(device)};`;
  let codeGrids = generateCodeGrids(device);
  let needsProgram;
  if (codeGrids != null) {
    out += `codeGrids: ${codeGrids};`;
    needsProgram = true;
  } else {
    out += `codeGrids: never[];`;
    needsProgram = false;
  }
  out += '}';
  return {
    out,
    needsProgram,
  };
}

function generateDeviceOptions(device: DeviceOption): string {
  let out = '{';
  for (const option of device.optionSchema.options) {
    out += `${option.key}: ${generateOption(option.option)},\n`;
  }
  out += '}';
  return out;
}

function generateOption(option: Option): string {
  let out;
  switch (option.type) {
    case 'select':
      out = option.props.options
        .map((option) => literalType(option.value))
        .join(' | ');
      break;
    case 'textInput':
      out = 'string';
      break;
    case 'numberInput':
      out = 'number';
      break;
    case 'color':
      out = 'Color';
      break;
    case 'terrainId':
      out = 'string';
      break;
    case 'itemId':
      out = 'string | undefined';
      break;
  }
  if (
    'props' in option &&
    'allowEmpty' in option.props &&
    option.props.allowEmpty
  ) {
    out += ' | undefined';
  }
  return out;
}

function generateCodeGrids(device: DeviceOption): string | null {
  let codeGridTypes = device.codeGridSchema.triggers.map((trigger) => {
    return generateCodeGridType(trigger);
  });
  if (device.codeGridSchema.allowChannelGrids) {
    codeGridTypes.push('ChannelCodeGrid<Program>');
  }
  if (codeGridTypes.length === 0) {
    return null;
  }
  return `(${codeGridTypes.join(' | ')})[]`;
}

function generateCodeGridType(
  trigger: CodeGridSchema['triggers'][number]
): string {
  return `{
    type: '${trigger.type}';
    blocks: Program;
  }`;
}

function generateDefaultDeviceOptions(device: OptionSchema['options']): string {
  let out = '{';
  for (const option of device) {
    out += `${option.key}: ${generateDefaultOption(option.option)},\n`;
  }
  out += '}';
  return out;
}

function generateDefaultOption(option: Option): string {
  switch (option.type) {
    case 'select':
      return literalType(option.defaultValue);
    case 'textInput':
      return `"${option.defaultValue}"`;
    case 'numberInput':
      return option.defaultValue?.toString() ?? 'undefined';
    case 'color':
      return option.defaultValue == undefined
        ? 'undefined'
        : `"${option.defaultValue}"`;
    case 'terrainId':
      return option.defaultValue == undefined
        ? 'undefined'
        : `"${option.defaultValue}"`;
    case 'itemId':
      return option.defaultValue == undefined
        ? 'undefined'
        : `"${option.defaultValue}"`;
    default:
      throw new Error(`Unknown option: ${option}`);
  }
}

function literalType(value: string | number | boolean): string {
  switch (typeof value) {
    case 'string':
      return `"${value}"`;
    default:
      return value.toString();
  }
}
