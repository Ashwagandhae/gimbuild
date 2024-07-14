const sendKeys = {
  ping: 'MAP_PING',
  dropItem: 'DROP_ITEM',
  moved: 'MOVED',
  messageForDevice: 'MESSAGE_FOR_DEVICE',
  placeTerrain: 'PLACE_TERRAIN',
  removeTerrain: 'REMOVE_TERRAIN',
  placeDevice: 'PLACE_DEVICE',
  removeDevice: 'REMOVE_DEVICE',
  startGame: 'START_GAME',
  endGame: 'END_GAME',
  restoreMapEarlier: 'RESTORE_MAP_EARLIER',
  createCodeGrid: 'CREATE_CODE_GRID',
  setCodeGridJSON: 'SET_CODE_GRID_JSON',
  joinCodeGrid: 'JOIN_CODE_GRID',
  leaveCodeGrid: 'LEAVE_CODE_GRID',
  setNewCodeGridOwner: 'SET_NEW_CODE_GRID_OWNER',
  deleteCodeGrid: 'DELETE_CODE_GRID',
  updateDeviceUIPresence: 'UPDATE_DEVICE_UI_PRESENCE',
  kickPlayer: 'KICK_PLAYER',
  save: 'SAVE',
  publish: 'PUBLISH',
  requestInitialWorld: 'REQUEST_INITIAL_WORLD',
  refetchLatestAppearance: 'REFETCH_LATEST_APPEARANCE',
  updateAuthToken: 'UPDATE_AUTH_TOKEN',
  hookAction: 'HOOK_ACTION',
  hookOptionAction: 'HOOK_OPTION_ACTION',
  placeSticker: 'PLACE_STICKER',
  placeWire: 'PLACE_WIRE',
  removeWire: 'REMOVE_WIRE',
  fire: 'FIRE',
  setActiveInteractiveItem: 'SET_ACTIVE_INTERACTIVE_ITEM',
  setInteractiveSlotsOrder: 'SET_INTERACTIVE_SLOTS_ORDER',
  reload: 'RELOAD',
  consume: 'CONSUME',
  aiming: 'AIMING',
  addGameTime: 'ADD_GAME_TIME',
  requestAllProps: 'REQUEST_ALL_PROPS',
  setGlobalPermissions: 'SET_GLOBAL_PERMISSIONS',
  togglePhase: 'TOGGLE_PHASE',
  setSpeed: 'SET_SPEED',
  input: 'INPUT',
} as const;

export let gimkitInternalSend: (
  A: (typeof sendKeys)[keyof typeof sendKeys],
  t: any
) => void;

GL.parcel.interceptRequire(
  'Gimbuild',
  (exports) => {
    return (
      typeof exports?.default == 'function' &&
      exports.default.toString().includes('.send(') &&
      exports.default.toString().includes('(A,t)=>')
    );
  },
  (exports) => {
    console.log('loaded send', exports.default.toString());
    gimkitInternalSend = exports.default;
  }
);
