import { DeviceBase, ChannelCodeGrid, Program, Color } from "./basic";
export type AssignmentCheckpointDevice = DeviceBase & {
  type: "assignmentCheckpoint";
  options: {
    action: "set" | "increment" | "decrement";
    actionValue: number | undefined;
    applyActionOnChannel: string;
  };
  codeGrids: (
    | {
        type: "wire";
        blocks: Program;
      }
    | ChannelCodeGrid
  )[];
};
export type AssignmentContextDevice = DeviceBase & {
  type: "assignmentContext";
  options: { objective: string };
  codeGrids: {
    type: "WHEN_PLAYER_LOADS_IN";
    blocks: Program;
  }[];
};
export type BackgroundTilesZoneDevice = DeviceBase & {
  type: "backgroundTilesZone";
  options: {
    terrainId: string;
    layer: "AdditionalBackground1" | "AdditionalBackground2";
    width: number;
    height: number;
  };
  codeGrids: never[];
};
export type BallDevice = DeviceBase & {
  type: "ball";
  options: {
    appearance:
      | "primary"
      | "inverted"
      | "blue"
      | "green"
      | "purple"
      | "red"
      | "solid"
      | "teal"
      | "yellow";
    resetCooldown: number;
    topSpeed: 500 | 1000 | 1500 | 2000 | 2500;
    hitSensitivity: 0.5 | 1 | 1.5 | 2 | 2.5;
    bounciness: number;
    damping: number;
    massMultiplier: 0.5 | 1 | 1.5 | 2 | 2.5;
    radius: number;
    activeOnStart: true | false;
    activateChannel: string;
    deactivateChannel: string;
    identifier: string;
  };
  codeGrids: never[];
};
export type BallZoneDevice = DeviceBase & {
  type: "ballZone";
  options: {
    resetTheBall: true | false;
    visibleInGame: true | false;
    style: "None" | "Blastball";
    side: "Left" | "Right";
    color: Color;
    backgroundAlpha: number;
    activeOnStart: true | false;
    ballEntersChannel: string;
    activateChannel: string;
    deactivateChannel: string;
    width: number;
    height: number;
  };
  codeGrids: never[];
};
export type BarrierDevice = DeviceBase & {
  type: "barrier";
  options: {
    shape: "rectangle" | "circle";
    activeOnGameStart: true | false;
    color: Color;
    scope: "global" | "player" | "team";
    activateChannel: string;
    deactivateChannel: string;
    alpha: number;
    showBorder: true | false;
    visibleInGame: true | false;
    collisionEnabled: true | false;
    height: number;
    width: number;
    angle: number;
    radius: number;
  };
  codeGrids: never[];
};
export type BlockingZoneDevice = DeviceBase & {
  type: "blockingZone";
  options: {
    blockBuilding: 1 | 2 | 3;
    visibleInGame: true | false;
    color: Color;
    activeOnStart: true | false;
    activateChannel: string;
    deactivateChannel: string;
    width: number;
    height: number;
  };
  codeGrids: never[];
};
export type ButtonDevice = DeviceBase & {
  type: "button";
  options: {
    guiMessage: string;
    channel: string;
    visibleInGame: true | false;
    interactionDuration: 0 | 1 | 3 | 5;
    activeOnStart: true | false;
    activateChannel: string;
    deactivateChannel: string;
    scope: "global" | "player" | "team";
    radius: number;
    size: number;
  };
  codeGrids: never[];
};
export type CameraPointDevice = DeviceBase & {
  type: "cameraPoint";
  options: { activateChannel: string; deactivateChannel: string };
  codeGrids: never[];
};
export type CameraSizeDevice = DeviceBase & {
  type: "cameraSize";
  options: { width: number; height: number };
  codeGrids: never[];
};
export type CharacterDevice = DeviceBase & {
  type: "character";
  options: {
    skinId: string;
    flipX: false | true;
    interactionEnabled: true | false;
    interactionMessage: string;
    interactionChannel: string;
    interactionDuration: 0 | 1 | 3 | 5;
    activeOnStart: true | false;
    activateChannel: string;
    deactivateChannel: string;
    scope: "global" | "player" | "team";
    radius: number;
  };
  codeGrids: never[];
};
export type CheckerDevice = DeviceBase & {
  type: "checker";
  options: {
    checkWhenReceivedOnChannel: string;
    whenValidTransmitOnChannel: string;
    whenInvalidTransmitOnChannel: string;
    check1Type: "none" | "item" | "property" | "score";
    check1ScoreComparison: "less" | "equal" | "greater";
    check1ScoreValue: number;
    check1PropertyName: string;
    check1PropertyComparison: "less" | "equal" | "greater";
    check1PropertyValue: number;
    check1ItemId: string | undefined;
    check1ItemComparison: "less" | "equal" | "greater";
    check1ItemValue: number;
    check2Type: "none" | "item" | "property" | "score";
    check2ScoreComparison: "less" | "equal" | "greater";
    check2ScoreValue: number;
    check2PropertyName: string;
    check2PropertyComparison: "less" | "equal" | "greater";
    check2PropertyValue: number;
    check2ItemId: string | undefined;
    check2ItemComparison: "less" | "equal" | "greater";
    check2ItemValue: number;
    check3Type: "none" | "item" | "property" | "score";
    check3ScoreComparison: "less" | "equal" | "greater";
    check3ScoreValue: number;
    check3PropertyName: string;
    check3PropertyComparison: "less" | "equal" | "greater";
    check3PropertyValue: number;
    check3ItemId: string | undefined;
    check3ItemComparison: "less" | "equal" | "greater";
    check3ItemValue: number;
    check4Type: "none" | "item" | "property" | "score";
    check4ScoreComparison: "less" | "equal" | "greater";
    check4ScoreValue: number;
    check4PropertyName: string;
    check4PropertyComparison: "less" | "equal" | "greater";
    check4PropertyValue: number;
    check4ItemId: string | undefined;
    check4ItemComparison: "less" | "equal" | "greater";
    check4ItemValue: number;
    check5Type: "none" | "item" | "property" | "score";
    check5ScoreComparison: "less" | "equal" | "greater";
    check5ScoreValue: number;
    check5PropertyName: string;
    check5PropertyComparison: "less" | "equal" | "greater";
    check5PropertyValue: number;
    check5ItemId: string | undefined;
    check5ItemComparison: "less" | "equal" | "greater";
    check5ItemValue: number;
    checkCount: 1 | 2 | 3 | 4 | 5;
    operation: "and" | "or";
  };
  codeGrids: never[];
};
export type CheckpointDevice = DeviceBase & {
  type: "checkpoint";
  options: {
    enabled: true | false;
    visibleInGame: true | false;
    playAudio: true | false;
    maxActivations: 0 | 1;
    setAsActiveChannel: string;
    onActiveChannel: string;
    width: number;
  };
  codeGrids: never[];
};
export type ClassDesignerDevice = DeviceBase & {
  type: "classDesigner";
  options: {
    activateChannel: string;
    allowedToUseGadget: 1 | 2 | 3;
    immunity: 1 | 2 | 3;
  };
  codeGrids: never[];
};
export type CosmosModifierDevice = DeviceBase & {
  type: "cosmosModifier";
  options: {
    skinId: string;
    trailId: string;
    applyChannel: string;
    resetChannel: string;
  };
  codeGrids: never[];
};
export type CountdownDevice = DeviceBase & {
  type: "countdown";
  options: {
    minutes: number;
    seconds: number;
    startWhenReceivingFrom: string;
    onEndTransmitOn: string;
  };
  codeGrids: {
    type: "OnTick";
    blocks: Program;
  }[];
};
export type CounterDevice = DeviceBase & {
  type: "counter";
  options: {
    startingValue: number;
    incrementWhenReceivingOn: string;
    decrementWhenReceivingOn: string;
    visibleInGame: true | false;
    scope: "global" | "player" | "team";
    resetToStartingValueWhenReceivingOn: string;
    updateProperty: true | false;
    property: string;
    useTarget: true | false;
    target: number;
    whenTargetReachedTransmitOn: string;
  };
  codeGrids: never[];
};
export type CraftingRecipeDevice = DeviceBase & {
  type: "craftingRecipe";
  options: {
    item: string | undefined;
    itemAmount: number;
    numberOfIngredients: 1 | 2 | 3 | 4 | 5;
    ingredient1Item: string | undefined;
    ingredient1Amount: number;
    ingredient2Item: string | undefined;
    ingredient2Amount: number;
    ingredient3Item: string | undefined;
    ingredient3Amount: number;
    ingredient4Item: string | undefined;
    ingredient4Amount: number;
    ingredient5Item: string | undefined;
    ingredient5Amount: number;
    timeToCraftMs:
      | 0
      | 1000
      | 3000
      | 5000
      | 10000
      | 20000
      | 30000
      | 60000
      | 120000
      | 180000
      | 240000
      | 300000
      | 600000
      | 900000
      | 1200000;
    itemDisposes: true | false;
    disposeItemAfterMs:
      | 5000
      | 10000
      | 20000
      | 30000
      | 60000
      | 120000
      | 180000
      | 240000
      | 300000
      | 600000
      | 900000
      | 1200000;
    group: string;
    activeOnGameStart: true | false;
    whenCraftingStartsChannel: string;
    whenCraftedChannel: string;
    activeScope: "global" | "player" | "team";
    activateChannel: string;
    deactivateChannel: string;
  };
  codeGrids: never[];
};
export type CraftingTableDevice = DeviceBase & {
  type: "craftingTable";
  options: {
    style: "craft" | "plant";
    craftingScope: "global" | "player" | "team";
    group: string;
    useCrafterCollectionAdvantage: true | false;
    channelItemBeginsCrafting: string;
    channelItemFinishesCrafting: string;
    channelItemCollected: string;
    channelItemDisposed: string;
  };
  codeGrids: never[];
};
export type DamageBoostDevice = DeviceBase & {
  type: "damageBoost";
  options: {
    multiplier:
      | 0.25
      | 0.5
      | 0.75
      | 1
      | 1.25
      | 1.5
      | 1.75
      | 2
      | 2.5
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10;
    durationMS:
      | -1
      | 5000
      | 10000
      | 20000
      | 30000
      | 60000
      | 120000
      | 180000
      | 300000;
    activateChannel: string;
    deactivateChannel: string;
  };
  codeGrids: never[];
};
export type DamagerDevice = DeviceBase & {
  type: "damager";
  options: {
    amount: number;
    damageOnChannel: string;
    knockoutActivityFeedMessage: string;
  };
  codeGrids: (
    | {
        type: "wire";
        blocks: Program;
      }
    | ChannelCodeGrid
  )[];
};
export type DialogueDevice = DeviceBase & {
  type: "dialogue";
  options: {
    message: string;
    group: string;
    action1Text: string;
    action1Channel: string;
    action2Text: string;
    action2Channel: string;
    action3Text: string;
    action3Channel: string;
    action4Text: string;
    action4Channel: string;
    font:
      | "Rubik"
      | "Roboto"
      | "Staatliches"
      | "Galindo"
      | "Kalam"
      | "Bangers"
      | "Fugaz One"
      | "Outfit"
      | "PT Mono"
      | "Space Grotesk"
      | "Lobster"
      | "Zeyada"
      | "Titan One"
      | "Rye"
      | "Caprasimo";
    character: string;
    typewriter: true | false;
    darkenBackground: true | false;
    openChannel: string;
    closeChannel: string;
    whenClosedChannel: string;
  };
  codeGrids: never[];
};
export type DialogueActionDevice = DeviceBase & {
  type: "dialogueAction";
  options: {
    text: string;
    group: string;
    selectChannel: string;
    scope: "global" | "player" | "team";
    activeOnGameStart: true | false;
    deactivateAfterUse: true | false;
    activateChannel: string;
    deactivateChannel: string;
  };
  codeGrids: never[];
};
export type DroppedItemDevice = DeviceBase & {
  type: "droppedItem";
  options: {
    itemId: string | undefined;
    amount: number;
    placedByCharacterId: string;
    useCurrentClipCount: true | false;
    currentClip: number;
    useCurrentDurability: true | false;
    currentDurability: number;
    decay: number;
  };
  codeGrids: never[];
};
export type EndGameDevice = DeviceBase & {
  type: "endGame";
  options: { activateWhenReceivingFrom: string };
  codeGrids: never[];
};
export type EndOfGameWidgetDevice = DeviceBase & {
  type: "endOfGameWidget";
  options: {
    widgetType: "Statistic" | "Image" | "Game Time";
    widgetPlacement: "Featured" | "Primary" | "Secondary";
    statisticProperty: string;
    gameTimeLabel: string;
    statisticLabel: string;
    imageStyle: "Contain" | "Cover" | "fullWidth";
    imageUrl: string;
    imageHeight: number;
    imageBackgroundColor: Color;
    showTo: "all" | "nonGameOwners" | "gameOwners";
    showForModeType: "all" | "liveGame" | "assignment";
    activeOnGameStart: true | false;
    scope: "global" | "player" | "team";
    activateChannel: string;
    deactivateChannel: string;
  };
  codeGrids: never[];
};
export type FlagDevice = DeviceBase & {
  type: "flag";
  options: {
    flagColor:
      | "black"
      | "blue"
      | "green"
      | "orange"
      | "purple"
      | "red"
      | "white";
    owningTeamId:
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    useSafeZone: true | false;
    automaticBackToBaseAfterSeconds: number;
    otherTeamPickupAlerts: true | false;
    onCapturedBroadcastOnChannel: string;
    captureWhenReceiveFromChannel: string;
    onPickupBroadcastOnChannel: string;
    onPickupFromBaseBroadcastOnChannel: string;
    onDropBroadcastOnChannel: string;
    dropWhenReceiveFromChannel: string;
    onBackToBaseBroadcastOnChannel: string;
    onBackToBaseManuallyBroadcastOnChannel: string;
    backToBaseWhenReceiveFromChannel: string;
    radius: number;
  };
  codeGrids: never[];
};
export type CaptureFlagZoneDevice = DeviceBase & {
  type: "captureFlagZone";
  options: {
    flagColor:
      | "black"
      | "blue"
      | "green"
      | "orange"
      | "purple"
      | "red"
      | "white";
    activeOnStart: true | false;
    visibleInGame: true | false;
    color: Color;
    whenCapturedTransmitOnChannel: string;
    activateChannel: string;
    deactivateChannel: string;
    width: number;
    height: number;
    rotation: number;
  };
  codeGrids: never[];
};
export type GuiDeviceDevice = DeviceBase & {
  type: "guiDevice";
  options: {
    type: "Text" | "Button" | "Tracked Item";
    position: "Top Left" | "Top Right" | "Bottom Left" | "Bottom Right";
    text: string;
    trackedItemId: string | undefined;
    showTrackedItemMaximumAmount: true | false;
    whenButtonClickedTransmitOnChannel: string;
    showOnGameStart: true | false;
    color: Color;
    contentScope: "global" | "player" | "team";
    visibilityScope: "global" | "player" | "team";
    showWhenReceivingFromChannel: string;
    hideWhenReceivingFromChannel: string;
  };
  codeGrids: ChannelCodeGrid[];
};
export type HealthGranterDevice = DeviceBase & {
  type: "healthGranter";
  options: {
    amount: number;
    grantType: "health" | "shield" | "healthFirst";
    grantChannel: string;
  };
  codeGrids: never[];
};
export type ImageBillboardDevice = DeviceBase & {
  type: "imageBillboard";
  options: {
    imageUrl: string;
    frameColor:
      | "#212121"
      | "#fafafa"
      | "#455a64"
      | "#8A24E0"
      | "#1b5e20"
      | "#01579b"
      | "#c62828"
      | "Transparent";
    scope: "global" | "player" | "team";
    alpha: number;
    visibleOnGameStart: "Yes" | "No";
    showWhenReceivingFrom: string;
    hideWhenReceivingFrom: string;
    visibleDuringPhase: "all" | "game" | "preGame";
    width: number;
    height: number;
    rotation: number;
  };
  codeGrids: (
    | {
        type: "wire";
        blocks: Program;
      }
    | ChannelCodeGrid
  )[];
};
export type InventoryItemManagerDevice = DeviceBase & {
  type: "inventoryItemManager";
  options: {
    itemId: string | undefined;
    useAsDefault: true | false;
    activateWhenReceivingFrom: string;
    useMaxAmount: true | false;
    maxAmount: number;
    overrideRespawnBehavior: true | false;
    respawnBehavior: "Keep" | "Delete";
    showAlert: true | false;
    customItemName: string;
    customItemDescription: string;
    clearItemFromInventoryOnChannel: string;
    updateProperty: true | false;
    property: string;
  };
  codeGrids: {
    type: "WHEN_AMOUNT_OF_ITEM_CHANGES";
    blocks: Program;
  }[];
};
export type ItemGranterDevice = DeviceBase & {
  type: "itemGranter";
  options: {
    itemId: string | undefined;
    itemChange: number;
    grantWhenReceivingFromChannel: string;
    fullStrategy: "overflow" | "safeAmount" | "noGrant";
    initialWeaponAmmo: number | undefined;
  };
  codeGrids: (
    | {
        type: "WHEN_GRANTED";
        blocks: Program;
      }
    | {
        type: "wire";
        blocks: Program;
      }
    | ChannelCodeGrid
  )[];
};
export type ItemImageDevice = DeviceBase & {
  type: "itemImage";
  options: {
    itemId: string | undefined;
    outline: true | false;
    outlineColor: Color;
    outlineSize: "automatic" | "custom";
    customOutlineSize: number;
    visibleOnGameStart: true | false;
    scope: "global" | "player" | "team";
    showChannel: string;
    hideChannel: string;
    size: number;
    angle: number;
  };
  codeGrids: never[];
};
export type ItemSpawnerDevice = DeviceBase & {
  type: "itemSpawner";
  options: {
    itemId: string | undefined;
    itemAmount: number;
    msTimeBetweenSpawns:
      | 0
      | 1000
      | 3000
      | 5000
      | 10000
      | 30000
      | 60000
      | 120000
      | 180000
      | 300000
      | 600000;
    scope: "global" | "player" | "team";
  };
  codeGrids: never[];
};
export type KnockoutManagerDevice = DeviceBase & {
  type: "knockoutManager";
  options: {
    target: "player" | "sentry";
    onKnockoutChannel: string;
    grantItem: true | false;
    itemId: string | undefined;
    itemAmount: number;
    grantStrategy: "grant" | "onPlayer" | "onKnockedOutLocation";
    dropChance: true | false;
    dropPercentage: number;
    activeOnGameStart: true | false;
    scope: "global" | "player" | "team";
    activateChannel: string;
    deactivateChannel: string;
  };
  codeGrids: {
    type: "onKnockout";
    blocks: Program;
  }[];
};
export type LaserBeamDevice = DeviceBase & {
  type: "laserBeam";
  options: {
    damageToDeal: number;
    appearance: "Standard" | "Plant";
    laserColor: Color;
    activeOnGameStart: true | false;
    laserGroup: string;
    scope: "global" | "player" | "team";
    transmitOnWhenHitPlayer: string;
    activateOnChannel: string;
    deactivateOnChannel: string;
    angle: number;
    distance: number;
    showPath: true | false;
    showOrigin: true | false;
    showEndPoint: true | false;
  };
  codeGrids: never[];
};
export type LaserBeamManagerDevice = DeviceBase & {
  type: "laserBeamManager";
  options: {
    laserGroup: string;
    autoSwitch: true | false;
    activatedDuration: number;
    deactivatedDuration: number;
    activateOnChannel: string;
    deactivateOnChannel: string;
  };
  codeGrids: never[];
};
export type LifecycleDevice = DeviceBase & {
  type: "lifecycle";
  options: {
    event:
      | "Game Starts"
      | "characterStartsMoving"
      | "characterStopsMoving"
      | "characterJoinsLate"
      | "characterKnocksOut"
      | "characterKnockedOut"
      | "characterFiresGadget"
      | "characterDestroysTerrain"
      | "characterPlacesTerrain";
    transmitOnChannel: string;
  };
  codeGrids: never[];
};
export type MapOptionsDevice = DeviceBase & {
  type: "mapOptions";
  options: {
    backgroundTerrain: string;
    platformerBackground: "sky" | "pixelStar";
    bottomTerrain: string;
    gameClockMode: "Off" | "Count Down" | "Count Up";
    countdownTimeMinutes: number;
    allowedGameClockModeType: "all" | "liveGame" | "assignment";
    musicUrl: string;
    presetMusicId:
      | "NONE"
      | "the_shakedown"
      | "anchor_crawl"
      | "stay_up_high"
      | "whisperer"
      | "heroes_are_back"
      | "all_out"
      | "four_am"
      | "inferno"
      | "demogorgon"
      | "surfin_versailles";
    musicVolume: number;
    minPlayers: 1 | 2;
    teams:
      | "Free For All"
      | "Cooperative"
      | "Split Into Size"
      | "Specific Team Amount";
    teamSize:
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 17
      | 18
      | 19
      | 20
      | 21
      | 22
      | 23
      | 24
      | 25
      | 26
      | 27
      | 28
      | 29
      | 30;
    teamsNumber:
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 17
      | 18
      | 19
      | 20
      | 21
      | 22
      | 23
      | 24
      | 25
      | 26
      | 27
      | 28
      | 29
      | 30;
    splitModeForSpecificTeamAmount: "Split Evenly" | "Random" | "Custom";
    latePlayersJoinAsSpectators: true | false;
    allyIndicator: "Disabled" | "Enabled";
    enemyIndicator: "Disabled" | "Enabled";
    allowGameOwnerToSpectate: true | false;
    healthMode: "healthAndShield" | "fragility";
    maxHealth:
      | 1
      | 10
      | 15
      | 20
      | 25
      | 30
      | 40
      | 50
      | 60
      | 75
      | 100
      | 125
      | 150
      | 200
      | 250
      | 300
      | 350
      | 400
      | 450
      | 500
      | 750
      | 1000
      | 2000
      | 5000;
    maxShield:
      | 1
      | 10
      | 15
      | 20
      | 25
      | 30
      | 40
      | 50
      | 60
      | 75
      | 100
      | 125
      | 150
      | 200
      | 250
      | 300
      | 350
      | 400
      | 450
      | 500
      | 750
      | 1000
      | 2000
      | 5000;
    startingHealth: 1 | 25 | 50 | 75 | 100;
    startingShield: 0 | 25 | 50 | 75 | 100;
    startingFragility: number;
    showHealthAndShield: true | false;
    spawnImmunity: number;
    playerVsPlayerDamageEnabled: true | false;
    interactiveItemsSlots: 0 | 1 | 2 | 3 | 4 | 5;
    infiniteAmmo: true | false;
    instantReload: true | false;
    allowWeaponDrop: true | false;
    allowItemDrop: true | false;
    allowResourceDrop: true | false;
    weaponRespawnBehavior: "Keep" | "Delete";
    itemRespawnBehavior: "Keep" | "Delete";
    resourceRespawnBehavior: "Keep" | "Delete";
    infiniteDurability: true | false;
    droppedItemScope: "global" | "player" | "team";
    useScoreboard: true | false;
    scoreType: "Knockout" | "Resource" | "Property";
    scoreResource: string | undefined;
    propertyResource: string;
    scoreName: string;
    scoreGroup: "player" | "team";
    sortMode: "Highest to lowest" | "Lowest to Highest";
    showScoreboardOnGameEnd: true | false;
    showPlayersPlacement: true | false;
    knockoutActivityFeedDisabled: true | false;
    dynamicBuildingAllowFloatingBuilds: true | false;
  };
  codeGrids: never[];
};
export type MoodDevice = DeviceBase & {
  type: "mood";
  options: {
    useVignette: true | false;
    vignetteStrength: number;
    activeOnGameStart: true | false;
    activateChannel: string;
    deactivateChannel: string;
  };
  codeGrids: never[];
};
export type MovementMeterDevice = DeviceBase & {
  type: "movementMeter";
  options: {
    itemToTrack: string | undefined;
    drainAmount: number;
    drainIntervalMs: 250 | 500 | 1000;
    outOfItemChannel: string;
    speedWhenOutOfItem: number;
    useAsDefault: true | false;
    warningAmount: number;
    warningChannel: string;
    activateChannel: string;
    deactivateChannel: string;
  };
  codeGrids: never[];
};
export type MusicDevice = DeviceBase & {
  type: "music";
  options: {
    audioUrl: string;
    volume: number;
    playWhenReceivingFrom: string;
    stopWhenReceivingFrom: string;
  };
  codeGrids: never[];
};
export type NotificationDevice = DeviceBase & {
  type: "notification";
  options: {
    title: string;
    description: string;
    notifyChannel: string;
    notificationType: "none" | "info" | "success" | "warning" | "error";
    notificationPlacement:
      | "topRight"
      | "topLeft"
      | "bottomRight"
      | "bottomLeft";
    notificationDurationStrategy: "auto" | "manual";
    customDurationSeconds: number;
    sendTo:
      | "characterTriggering"
      | "allOnTeam"
      | "allOnTeamExceptTriggeringPlayer"
      | "allCharacters";
  };
  codeGrids: (
    | {
        type: "wire";
        blocks: Program;
      }
    | ChannelCodeGrid
  )[];
};
export type OutlineDevice = DeviceBase & {
  type: "outline";
  options: {
    shape: "rectangle" | "circle";
    lineLength: number;
    circleRadius: number;
    circlePercentage: number;
    circleFill: true | false;
    thickness: number;
    angle: number;
    color: Color;
    alpha: number;
    style: "solid" | "dashed";
    dashLength: number;
    dashSpacing: number;
    visibleOnGameStart: true | false;
    showChannel: string;
    hideChannel: string;
    scope: "global" | "player" | "team";
  };
  codeGrids: never[];
};
export type PasswordLockDevice = DeviceBase & {
  type: "passwordLock";
  options: {
    password: string;
    onSuccessChannel: string;
    openChannel: string;
    useMaxAttempts: true | false;
    maxAttempts: number;
    maxAttemptsScope: "global" | "player" | "team";
    outOfAttemptsChannel: string;
  };
  codeGrids: never[];
};
export type PlacedStickerDevice = DeviceBase & {
  type: "placedSticker";
  options: {
    stickerId: string;
    depth: number;
    scale: number;
    placedByCharacterId: string;
    placedAtTimeStamp: number;
  };
  codeGrids: never[];
};
export type PlayerAppearanceModifierDevice = DeviceBase & {
  type: "playerAppearanceModifier";
  options: {
    modifyTransparency: true | false;
    transparencyAmount: number;
    selfTransparency: "match" | "custom";
    selfTransparencyAmount: number;
    modifyTint: true | false;
    tint: Color;
    activateChannel: string;
    deactivateChannel: string;
  };
  codeGrids: never[];
};
export type PlayerPositionDetectorDevice = DeviceBase & {
  type: "playerPositionDetector";
  options: {
    whenPositionChangeDetectedTransmitOn: string;
    updateProperties: true | false;
    xProperty: string;
    yProperty: string;
  };
  codeGrids: {
    type: "On Player Position Change";
    blocks: Program;
  }[];
};
export type CharacterProximityDevice = DeviceBase & {
  type: "characterProximity";
  options: {
    detectionArea: "everywhere" | "zone";
    allowedMatch: "everybody" | "sameTeam" | "differentTeam";
    channelFound: string;
    channelLost: string;
    broadcastAs: "everybody" | "firstPerson";
    activeOnGameStart: true | false;
    activateWhenReceivingFrom: string;
    deactivateWhenReceivingFrom: string;
    detectionDistance: number;
    width: number;
    height: number;
    delay: number;
  };
  codeGrids: (
    | {
        type: "onFound";
        blocks: Program;
      }
    | {
        type: "onLost";
        blocks: Program;
      }
  )[];
};
export type TextExplainerDevice = DeviceBase & {
  type: "textExplainer";
  options: {
    header: string;
    content: string;
    openWhenReceivingFrom: string;
    iconImage: string;
    style: "modal" | "banner";
    callToActionLabel: string;
    callToActionChannel: string;
    secondaryCallToActionLabel: string;
    secondaryCallToActionChannel: string;
    scope: "global" | "player" | "team";
    backgroundColor: Color;
    fontFamily:
      | "Rubik"
      | "Roboto"
      | "Staatliches"
      | "Galindo"
      | "Kalam"
      | "Bangers"
      | "Fugaz One"
      | "Outfit"
      | "PT Mono"
      | "Space Grotesk"
      | "Lobster"
      | "Zeyada"
      | "Titan One"
      | "Rye"
      | "Caprasimo";
    closableByUser: true | false;
    closeWhenReceivingFrom: string;
    whenClosedTransmitOn: string;
  };
  codeGrids: (
    | {
        type: "wire";
        blocks: Program;
      }
    | ChannelCodeGrid
  )[];
};
export type ProceduralTerrainZoneDevice = DeviceBase & {
  type: "proceduralTerrainZone";
  options: {
    width: number;
    height: number;
    variability: number;
    seed: string;
    collision: true | false;
    depth: 1 | 2 | 3 | 4 | 5;
  };
  codeGrids: never[];
};
export type ProceduralTerrainZoneZoneInstructionDevice = DeviceBase & {
  type: "proceduralTerrainZoneZoneInstruction";
  options: {
    terrain: string | undefined;
    weight: number;
    constraint1:
      | "none"
      | "above"
      | "below"
      | "left"
      | "right"
      | "betweenHorizontal"
      | "betweenVertical";
    constraint1Column: number;
    constraint1Row: number;
    constraint1Column1: number;
    constraint1Column2: number;
    constraint1Row1: number;
    constraint1Row2: number;
    constraint2:
      | "none"
      | "above"
      | "below"
      | "left"
      | "right"
      | "betweenHorizontal"
      | "betweenVertical";
    constraint2Column: number;
    constraint2Row: number;
    constraint2Column1: number;
    constraint2Column2: number;
    constraint2Row1: number;
    constraint2Row2: number;
  };
  codeGrids: never[];
};
export type PropDevice = DeviceBase & {
  type: "prop";
  options: {
    propId: string;
    shadowsEnabled: true | false;
    shadowsPlacement: "Floor" | "Beneath Prop";
    UseColliders: true | false;
    Scale: number;
    Angle: number;
    Tint: Color;
    FlipX: true | false;
    Alpha: number;
    visibleOnGameStart: true | false;
    visibilityScope: "global" | "player" | "team";
    showWhenReceivingFrom: string;
    hideWhenReceivingFrom: string;
    canBeDamaged: true | false;
    health: number;
    onDestroyedChannel: string;
    useAdaptiveHealth: true | false;
    adaptiveHealthPerPlayer: number;
  };
  codeGrids: never[];
};
export type PropertyDevice = DeviceBase & {
  type: "property";
  options: {
    propertyName: string;
    valueType: "string" | "number" | "boolean";
    defaultValueText: string;
    defaultValueNumber: number;
    defaultValueBoolean: true | false;
    propertyType: "global" | "player" | "team";
    whenValueChangesBroadcastOnChannel: string;
    broadcastValueChangesOnGameStart: true | false;
  };
  codeGrids: never[];
};
export type GimkitLiveQuestionDevice = DeviceBase & {
  type: "gimkitLiveQuestion";
  options: {
    kitId: string;
    whenAnsweredCorrectlyTransmitOn: string;
    whenAnsweredIncorrectlyTransmitOn: string;
    openWhenReceivingOn: string;
    closable: true | false;
    textShownWhenAnsweringCorrectly: string;
    textShownWhenAnsweringIncorrectly: string;
    textShownWhenAnsweringScope: "global" | "player" | "team";
    closeWhenReceivingOn: string;
    enableWhenReceivingOn: string;
    disableWhenReceivingOn: string;
    whenOpenedChannel: string;
    whenClosedChannel: string;
    sound: "none" | "default" | "gimkitLive" | "advanced";
    correctSound: "none" | "default" | "gimkitLive";
    incorrectSound: "none" | "default" | "gimkitLive";
    actionSound: "none" | "default" | "gimkitLive";
    useCustomAction: true | false;
    customActionText: string;
    channelToTriggerCustomAction: string;
    size: number;
  };
  codeGrids: (
    | {
        type: "whenQuestionAnsweredCorrectly";
        blocks: Program;
      }
    | {
        type: "whenQuestionAnsweredIncorrectly";
        blocks: Program;
      }
    | {
        type: "wire";
        blocks: Program;
      }
    | ChannelCodeGrid
  )[];
};
export type RelayDevice = DeviceBase & {
  type: "relay";
  options: {
    relayAs:
      | "All Players"
      | "All Other Players"
      | "All Players On My Team"
      | "Random Player"
      | "All Players On Team..."
      | "Random Player On Team"
      | "Single Player On Each Team";
    team:
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    channelToTrigger: string;
    triggerWhenReceivingOnChannel: string;
  };
  codeGrids: never[];
};
export type RepeaterDevice = DeviceBase & {
  type: "repeater";
  options: {
    startChannel: string;
    actionChannel: string;
    repeatInterval: number;
    stopRepeatingStrategy: "time" | "numberOfRepetitions" | "channel";
    timePeriod: number;
    numberOfRepetitions: number;
    stopChannel: string;
    maxConcurrentTasksPerPlayer: number;
    triggerTaskOnStart: true | false;
  };
  codeGrids: never[];
};
export type RespawnDevice = DeviceBase & {
  type: "respawn";
  options: { respawnOnChannel: string };
  codeGrids: never[];
};
export type ScorebarDevice = DeviceBase & {
  type: "scorebar";
  options: {
    numberOfTeams: 1 | 2 | 3 | 4;
    team1:
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    colorTeam1: Color;
    team2:
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    colorTeam2: Color;
    team3:
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    colorTeam3: Color;
    team4:
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    colorTeam4: Color;
  };
  codeGrids: never[];
};
export type SentryDevice = DeviceBase & {
  type: "sentry";
  options: {
    weapon: string | undefined;
    aimAccuracy: 0 | 0.25 | 0.5 | 0.7 | 0.9 | 1;
    fireRate: 0 | 0.1 | 0.25 | 0.5 | 0.75 | 0.9 | 1;
    baseHealth: number;
    baseShield: number;
    useAdaptiveHealth: true | false;
    adaptiveHealth: number;
    adaptiveShield: number;
    skinId:
      | "character_sentryRobot"
      | "character_evilPlantGreen"
      | "character_evilPlantPink"
      | "character_skeleton"
      | "character_pirate"
      | "character_redDinoCostume"
      | "character_detective"
      | "character_echoAgent"
      | "character_redNinja"
      | "character_luchador"
      | "character_mummy"
      | "character_witch"
      | "character_mustache"
      | "character_vortexAgent";
    team:
      | "__SENTRY_TEAM"
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    doesRespawn: true | false;
    respawnDurationSeconds: number;
    characterName: string;
    rangeRadius: number;
    dropItem: true | false;
    itemId: string | undefined;
    itemAmount: number;
    onKnockoutChannel: string;
    activeOnGameStart: true | false;
    activateChannel: string;
    deactivateChannel: string;
  };
  codeGrids: never[];
};
export type ShadowDevice = DeviceBase & {
  type: "shadow";
  options: { width: number; height: number };
  codeGrids: never[];
};
export type SoundEffectDevice = DeviceBase & {
  type: "soundEffect";
  options: {
    audioUrl: string;
    volume: number;
    playWhenReceivingFrom: string;
    characterType: "all" | "gameOwner";
  };
  codeGrids: never[];
};
export type CharacterSpawnPadDevice = DeviceBase & {
  type: "characterSpawnPad";
  options: {
    visibleInGame: true | false;
    phase: "All" | "Game" | "Pre-Game";
    teamId:
      | "__ANY_TEAM__"
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    characterType: "all" | "gameOwner" | "nonGameOwner";
  };
  codeGrids: never[];
};
export type SpeedDevice = DeviceBase & {
  type: "speed";
  options: { speed: number; activateWhenReceivingFrom: string };
  codeGrids: never[];
};
export type StartingInventoryDevice = DeviceBase & {
  type: "startingInventory";
  options: {
    itemId: string | undefined;
    itemAmount: number;
    equipOnGrant: true | false;
    grantDuringPhase: "all" | "game" | "preGame";
    grantForSavedCharacters: true | false;
    enabled: true | false;
  };
  codeGrids: never[];
};
export type TagZoneDevice = DeviceBase & {
  type: "tagZone";
  options: {
    taggingTeam:
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    whenTaggedTransmitOn: string;
    whenTagsTransmitOn: string;
    respawnWhenTagged: true | false;
    detectionArea: "everywhere" | "zone";
    detectionDistance: number;
    activeOnGameStart: true | false;
    activateWhenReceivingFrom: string;
    deactivateWhenReceivingFrom: string;
    width: number;
    height: number;
  };
  codeGrids: (
    | {
        type: "onTags";
        blocks: Program;
      }
    | {
        type: "onTagged";
        blocks: Program;
      }
  )[];
};
export type TeamSettingsDevice = DeviceBase & {
  type: "teamSettings";
  options: {
    team:
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    teamName: string;
    whenPlayerJoinsTransmitOn: string;
    maxPlayers:
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 17
      | 18
      | 19
      | 20
      | 21
      | 22
      | 23
      | 24
      | 25
      | 26
      | 27
      | 28
      | 29
      | 30
      | 31
      | 32
      | 33
      | 34
      | 35
      | 36
      | 37
      | 38
      | 39
      | 40
      | 41
      | 42
      | 43
      | 44
      | 45
      | 46
      | 47
      | 48
      | 49
      | 50
      | 51
      | 52
      | 53
      | 54
      | 55
      | 56
      | 57
      | 58
      | 59
      | 60;
    placementPriorityOnGameStart:
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 17
      | 18
      | 19
      | 20
      | 21
      | 22
      | 23
      | 24
      | 25
      | 26
      | 27
      | 28
      | 29
      | 30
      | 31
      | 32
      | 33
      | 34
      | 35
      | 36
      | 37
      | 38
      | 39
      | 40
      | 41
      | 42
      | 43
      | 44
      | 45
      | 46
      | 47
      | 48
      | 49
      | 50
      | 51
      | 52
      | 53
      | 54
      | 55
      | 56
      | 57
      | 58
      | 59
      | 60;
    placementPriorityDuringGame:
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 17
      | 18
      | 19
      | 20
      | 21
      | 22
      | 23
      | 24
      | 25
      | 26
      | 27
      | 28
      | 29
      | 30
      | 31
      | 32
      | 33
      | 34
      | 35
      | 36
      | 37
      | 38
      | 39
      | 40
      | 41
      | 42
      | 43
      | 44
      | 45
      | 46
      | 47
      | 48
      | 49
      | 50
      | 51
      | 52
      | 53
      | 54
      | 55
      | 56
      | 57
      | 58
      | 59
      | 60;
    allowCustomHostPlacement: true | false;
  };
  codeGrids: {
    type: "WHEN_PLAYER_COUNT_CHANGES";
    blocks: Program;
  }[];
};
export type TeamSwitcherDevice = DeviceBase & {
  type: "teamSwitcher";
  options: {
    switchToStrategy: "randomTeam" | "specificTeam";
    specificTeam:
      | "__SPECTATORS_TEAM"
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    switchChannel: string;
  };
  codeGrids: never[];
};
export type TeleporterDevice = DeviceBase & {
  type: "teleporter";
  options: {
    group: string;
    targetGroup: string;
    whenTeleportedHereChannel: string;
    teleportToOnChannel: string;
    teleportToTargetChannel: string;
    visibleInGame: true | false;
  };
  codeGrids: never[];
};
export type TerrainLayerAppearanceDevice = DeviceBase & {
  type: "terrainLayerAppearance";
  options: {
    layer: "AdditionalBackground1" | "AdditionalBackground2";
    modifyTint: true | false;
    tint: Color;
  };
  codeGrids: never[];
};
export type TextBillboardDevice = DeviceBase & {
  type: "textBillboard";
  options: {
    text: string;
    fontSize: number;
    scope: "global" | "player" | "team";
    googleFont:
      | "Rubik"
      | "Roboto"
      | "Staatliches"
      | "Galindo"
      | "Kalam"
      | "Bangers"
      | "Fugaz One"
      | "Outfit"
      | "PT Mono"
      | "Space Grotesk"
      | "Lobster"
      | "Zeyada"
      | "Titan One"
      | "Rye"
      | "Caprasimo";
    color: Color;
    alpha: number;
    strokeThickness: number;
    strokeColor: Color;
    rotation: number;
    visibleOnGameStart: "Yes" | "No";
    showWhenReceivingFrom: string;
    hideWhenReceivingFrom: string;
  };
  codeGrids: (
    | {
        type: "wire";
        blocks: Program;
      }
    | ChannelCodeGrid
  )[];
};
export type TriggerDevice = DeviceBase & {
  type: "trigger";
  options: {
    channelToTrigger: string;
    triggerWhenReceivingOnChannel: string;
    triggerDelay: number | undefined;
    visibleInGame: true | false;
    team:
      | "__ANY_TEAM__"
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    maxTriggers: number | undefined;
    scope: "global" | "player" | "team";
    allowedModeType: "all" | "liveGame" | "assignment";
    activeOnGameStart: true | false;
    activateChannel: string;
    deactivateChannel: string;
    activeScope: "global" | "player" | "team";
    triggeredByPlayerCollision: true | false;
  };
  codeGrids: {
    type: "WHEN_TRIGGERED";
    blocks: Program;
  }[];
};
export type VendingMachineDevice = DeviceBase & {
  type: "vendingMachine";
  options: {
    grantAction: "Grant Item" | "Broadcast On Channel";
    requiredItemId: string | undefined;
    amountOfRequiredItem: number;
    grantedItemId: string | undefined;
    amountOfGrantedItem: number;
    purchaseChannel: string;
    visibleInGame: true | false;
    grantedItemImageUrl: string;
    grantedItemName: string;
    grantedItemDescription: string;
    deactivateOnPurchase: true | false;
    useAdaptiveCost: true | false;
    adaptiveCostIncreasePerPlayer: number;
    allowFunding: true | false;
    fundingScope: "global" | "player" | "team";
    useLimitedStock: true | false;
    maxStock: number;
    maxStockScope: "global" | "player" | "team";
    attachCostToNameWhenHidden: true | false;
    activeOnStart: true | false;
    activeScope: "global" | "player" | "team";
    activateChannel: string;
    deactivateChannel: string;
    allowedPurchaseTeam:
      | "__ANY_TEAM__"
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
    attemptToPurchaseChannel: string;
    onAttemptedPurchaseFailedChannel: string;
    interactionDuration: 0 | 1 | 3 | 5;
    matchItemRarity: true | false;
    backgroundColor1: Color;
    backgroundColor2: Color;
    raysColor: Color;
    numberOfRays: number;
    raysWidthFactor: number;
    raysAlpha: number;
    raysAdditive: true | false;
    soundEnabled: true | false;
    showShadow: true | false;
    width: number;
    height: number;
    radius: number;
  };
  codeGrids: never[];
};
export type VoiceLineDevice = DeviceBase & {
  type: "voiceLine";
  options: {
    playBehavior: "interrupt" | "queue" | "cancel";
    volume: number;
    playChance: number;
    audioUrl1: string;
    audioUrl2: string;
    audioUrl3: string;
    audioUrl4: string;
    audioUrl5: string;
    audioUrl6: string;
    audioUrl7: string;
    audioUrl8: string;
    activeOnGameStart: true | false;
    playWhenReceivingOnChannel: string;
  };
  codeGrids: never[];
};
export type WaypointDevice = DeviceBase & {
  type: "waypoint";
  options: {
    target: "deviceLocation" | "player" | "flag" | "ball";
    flagColor:
      | "black"
      | "blue"
      | "green"
      | "orange"
      | "purple"
      | "red"
      | "white";
    ballId: string;
    name: string;
    useDeactivateWithinRange: true | false;
    deactivateWithinRange: number;
    startFollowingPlayer: string;
    stopFollowingPlayer: string;
    hideWhenFlagIsInBase: true | false;
    activeOnGameStart: true | false;
    color: Color;
    activateChannel: string;
    deactivateChannel: string;
    scope: "global" | "player" | "team";
  };
  codeGrids: never[];
};
export type WireRepeaterDevice = DeviceBase & {
  type: "wireRepeater";
  options: {
    delaySeconds: number;
    team:
      | "__ANY_TEAM__"
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60";
  };
  codeGrids: never[];
};
export type XpDevice = DeviceBase & {
  type: "xp";
  options: {
    amount: number;
    reason: string;
    grantOnChannel: string;
    useIncrementalGrant: true | false;
    incrementalGrantCharacterRequirement: number;
    useMinimumCharacterCount: true | false;
    minimumCharacterCount: number;
  };
  codeGrids: never[];
};
export type ZoneDevice = DeviceBase & {
  type: "zone";
  options: {
    playerEntersChannel: string;
    playerLeavesChannel: string;
    allowWeaponFire: true | false;
    shape: "rectangle" | "circle";
    visibleInGame: true | false;
    color: Color;
    activeOnStart: true | false;
    activateChannel: string;
    deactivateChannel: string;
    allowWeaponDrop: "Do Not Override" | "Yes" | "No";
    allowItemDrop: "Do Not Override" | "Yes" | "No";
    allowResourceDrop: "Do Not Override" | "Yes" | "No";
    droppedItemDecayEnabled: true | false;
    droppedItemDecay: number;
    width: number;
    height: number;
    radius: number;
    rotation: number;
  };
  codeGrids: never[];
};
export type Device =
  | AssignmentCheckpointDevice
  | AssignmentContextDevice
  | BackgroundTilesZoneDevice
  | BallDevice
  | BallZoneDevice
  | BarrierDevice
  | BlockingZoneDevice
  | ButtonDevice
  | CameraPointDevice
  | CameraSizeDevice
  | CharacterDevice
  | CheckerDevice
  | CheckpointDevice
  | ClassDesignerDevice
  | CosmosModifierDevice
  | CountdownDevice
  | CounterDevice
  | CraftingRecipeDevice
  | CraftingTableDevice
  | DamageBoostDevice
  | DamagerDevice
  | DialogueDevice
  | DialogueActionDevice
  | DroppedItemDevice
  | EndGameDevice
  | EndOfGameWidgetDevice
  | FlagDevice
  | CaptureFlagZoneDevice
  | GuiDeviceDevice
  | HealthGranterDevice
  | ImageBillboardDevice
  | InventoryItemManagerDevice
  | ItemGranterDevice
  | ItemImageDevice
  | ItemSpawnerDevice
  | KnockoutManagerDevice
  | LaserBeamDevice
  | LaserBeamManagerDevice
  | LifecycleDevice
  | MapOptionsDevice
  | MoodDevice
  | MovementMeterDevice
  | MusicDevice
  | NotificationDevice
  | OutlineDevice
  | PasswordLockDevice
  | PlacedStickerDevice
  | PlayerAppearanceModifierDevice
  | PlayerPositionDetectorDevice
  | CharacterProximityDevice
  | TextExplainerDevice
  | ProceduralTerrainZoneDevice
  | ProceduralTerrainZoneZoneInstructionDevice
  | PropDevice
  | PropertyDevice
  | GimkitLiveQuestionDevice
  | RelayDevice
  | RepeaterDevice
  | RespawnDevice
  | ScorebarDevice
  | SentryDevice
  | ShadowDevice
  | SoundEffectDevice
  | CharacterSpawnPadDevice
  | SpeedDevice
  | StartingInventoryDevice
  | TagZoneDevice
  | TeamSettingsDevice
  | TeamSwitcherDevice
  | TeleporterDevice
  | TerrainLayerAppearanceDevice
  | TextBillboardDevice
  | TriggerDevice
  | VendingMachineDevice
  | VoiceLineDevice
  | WaypointDevice
  | WireRepeaterDevice
  | XpDevice
  | ZoneDevice;
export type DeviceTypeMap = {
  assignmentCheckpoint: AssignmentCheckpointDevice;
  assignmentContext: AssignmentContextDevice;
  backgroundTilesZone: BackgroundTilesZoneDevice;
  ball: BallDevice;
  ballZone: BallZoneDevice;
  barrier: BarrierDevice;
  blockingZone: BlockingZoneDevice;
  button: ButtonDevice;
  cameraPoint: CameraPointDevice;
  cameraSize: CameraSizeDevice;
  character: CharacterDevice;
  checker: CheckerDevice;
  checkpoint: CheckpointDevice;
  classDesigner: ClassDesignerDevice;
  cosmosModifier: CosmosModifierDevice;
  countdown: CountdownDevice;
  counter: CounterDevice;
  craftingRecipe: CraftingRecipeDevice;
  craftingTable: CraftingTableDevice;
  damageBoost: DamageBoostDevice;
  damager: DamagerDevice;
  dialogue: DialogueDevice;
  dialogueAction: DialogueActionDevice;
  droppedItem: DroppedItemDevice;
  endGame: EndGameDevice;
  endOfGameWidget: EndOfGameWidgetDevice;
  flag: FlagDevice;
  captureFlagZone: CaptureFlagZoneDevice;
  guiDevice: GuiDeviceDevice;
  healthGranter: HealthGranterDevice;
  imageBillboard: ImageBillboardDevice;
  inventoryItemManager: InventoryItemManagerDevice;
  itemGranter: ItemGranterDevice;
  itemImage: ItemImageDevice;
  itemSpawner: ItemSpawnerDevice;
  knockoutManager: KnockoutManagerDevice;
  laserBeam: LaserBeamDevice;
  laserBeamManager: LaserBeamManagerDevice;
  lifecycle: LifecycleDevice;
  mapOptions: MapOptionsDevice;
  mood: MoodDevice;
  movementMeter: MovementMeterDevice;
  music: MusicDevice;
  notification: NotificationDevice;
  outline: OutlineDevice;
  passwordLock: PasswordLockDevice;
  placedSticker: PlacedStickerDevice;
  playerAppearanceModifier: PlayerAppearanceModifierDevice;
  playerPositionDetector: PlayerPositionDetectorDevice;
  characterProximity: CharacterProximityDevice;
  textExplainer: TextExplainerDevice;
  proceduralTerrainZone: ProceduralTerrainZoneDevice;
  proceduralTerrainZoneZoneInstruction: ProceduralTerrainZoneZoneInstructionDevice;
  prop: PropDevice;
  property: PropertyDevice;
  gimkitLiveQuestion: GimkitLiveQuestionDevice;
  relay: RelayDevice;
  repeater: RepeaterDevice;
  respawn: RespawnDevice;
  scorebar: ScorebarDevice;
  sentry: SentryDevice;
  shadow: ShadowDevice;
  soundEffect: SoundEffectDevice;
  characterSpawnPad: CharacterSpawnPadDevice;
  speed: SpeedDevice;
  startingInventory: StartingInventoryDevice;
  tagZone: TagZoneDevice;
  teamSettings: TeamSettingsDevice;
  teamSwitcher: TeamSwitcherDevice;
  teleporter: TeleporterDevice;
  terrainLayerAppearance: TerrainLayerAppearanceDevice;
  textBillboard: TextBillboardDevice;
  trigger: TriggerDevice;
  vendingMachine: VendingMachineDevice;
  voiceLine: VoiceLineDevice;
  waypoint: WaypointDevice;
  wireRepeater: WireRepeaterDevice;
  xp: XpDevice;
  zone: ZoneDevice;
};
export const defaultDeviceOptions: Record<string, Device["options"]> = {
  assignmentCheckpoint: {
    action: "set",
    actionValue: undefined,
    applyActionOnChannel: "",
  },
  assignmentContext: { objective: "" },
  backgroundTilesZone: {
    terrainId: undefined,
    layer: "AdditionalBackground1",
    width: 320,
    height: 320,
  },
  ball: {
    appearance: "primary",
    resetCooldown: 3,
    topSpeed: 1500,
    hitSensitivity: 1.5,
    bounciness: 70,
    damping: 10,
    massMultiplier: 1.5,
    radius: 75,
    activeOnStart: true,
    activateChannel: "",
    deactivateChannel: "",
    identifier: "",
  },
  ballZone: {
    resetTheBall: true,
    visibleInGame: true,
    style: "None",
    side: "Left",
    color: "#FFFFFF",
    backgroundAlpha: 0.2,
    activeOnStart: true,
    ballEntersChannel: "",
    activateChannel: "",
    deactivateChannel: "",
    width: 200,
    height: 200,
  },
  barrier: {
    shape: "rectangle",
    activeOnGameStart: true,
    color: "#ffb300",
    scope: "global",
    activateChannel: "",
    deactivateChannel: "",
    alpha: 0.8,
    showBorder: true,
    visibleInGame: true,
    collisionEnabled: true,
    height: 200,
    width: 200,
    angle: 0,
    radius: 100,
  },
  blockingZone: {
    blockBuilding: 1,
    visibleInGame: true,
    color: "#FFFFFF",
    activeOnStart: true,
    activateChannel: "",
    deactivateChannel: "",
    width: 200,
    height: 200,
  },
  button: {
    guiMessage: "Interact",
    channel: "",
    visibleInGame: true,
    interactionDuration: 1,
    activeOnStart: true,
    activateChannel: "",
    deactivateChannel: "",
    scope: "global",
    radius: 100,
    size: 26,
  },
  cameraPoint: { activateChannel: "", deactivateChannel: "" },
  cameraSize: { width: 1000, height: 1000 },
  character: {
    skinId: "character_vortexAgent",
    flipX: false,
    interactionEnabled: true,
    interactionMessage: "Talk",
    interactionChannel: "",
    interactionDuration: 1,
    activeOnStart: true,
    activateChannel: "",
    deactivateChannel: "",
    scope: "global",
    radius: 100,
  },
  checker: {
    checkWhenReceivedOnChannel: "",
    whenValidTransmitOnChannel: "",
    whenInvalidTransmitOnChannel: "",
    check1Type: "item",
    check1ScoreComparison: "equal",
    check1ScoreValue: 1,
    check1PropertyName: "",
    check1PropertyComparison: "equal",
    check1PropertyValue: 1,
    check1ItemId: undefined,
    check1ItemComparison: "equal",
    check1ItemValue: 1,
    check2Type: "item",
    check2ScoreComparison: "equal",
    check2ScoreValue: 1,
    check2PropertyName: "",
    check2PropertyComparison: "equal",
    check2PropertyValue: 1,
    check2ItemId: undefined,
    check2ItemComparison: "equal",
    check2ItemValue: 1,
    check3Type: "item",
    check3ScoreComparison: "equal",
    check3ScoreValue: 1,
    check3PropertyName: "",
    check3PropertyComparison: "equal",
    check3PropertyValue: 1,
    check3ItemId: undefined,
    check3ItemComparison: "equal",
    check3ItemValue: 1,
    check4Type: "item",
    check4ScoreComparison: "equal",
    check4ScoreValue: 1,
    check4PropertyName: "",
    check4PropertyComparison: "equal",
    check4PropertyValue: 1,
    check4ItemId: undefined,
    check4ItemComparison: "equal",
    check4ItemValue: 1,
    check5Type: "item",
    check5ScoreComparison: "equal",
    check5ScoreValue: 1,
    check5PropertyName: "",
    check5PropertyComparison: "equal",
    check5PropertyValue: 1,
    check5ItemId: undefined,
    check5ItemComparison: "equal",
    check5ItemValue: 1,
    checkCount: 1,
    operation: "and",
  },
  checkpoint: {
    enabled: true,
    visibleInGame: true,
    playAudio: true,
    maxActivations: 0,
    setAsActiveChannel: "",
    onActiveChannel: "",
    width: 125,
  },
  classDesigner: { activateChannel: "", allowedToUseGadget: 1, immunity: 1 },
  cosmosModifier: {
    skinId: "",
    trailId: "",
    applyChannel: "",
    resetChannel: "",
  },
  countdown: {
    minutes: 10,
    seconds: 0,
    startWhenReceivingFrom: "",
    onEndTransmitOn: "",
  },
  counter: {
    startingValue: 0,
    incrementWhenReceivingOn: "",
    decrementWhenReceivingOn: "",
    visibleInGame: true,
    scope: "global",
    resetToStartingValueWhenReceivingOn: "",
    updateProperty: false,
    property: "",
    useTarget: false,
    target: 10,
    whenTargetReachedTransmitOn: "",
  },
  craftingRecipe: {
    item: undefined,
    itemAmount: 1,
    numberOfIngredients: 2,
    ingredient1Item: undefined,
    ingredient1Amount: 3,
    ingredient2Item: undefined,
    ingredient2Amount: 3,
    ingredient3Item: undefined,
    ingredient3Amount: 3,
    ingredient4Item: undefined,
    ingredient4Amount: 3,
    ingredient5Item: undefined,
    ingredient5Amount: 3,
    timeToCraftMs: 0,
    itemDisposes: false,
    disposeItemAfterMs: 5000,
    group: "",
    activeOnGameStart: true,
    whenCraftingStartsChannel: "",
    whenCraftedChannel: "",
    activeScope: "global",
    activateChannel: "",
    deactivateChannel: "",
  },
  craftingTable: {
    style: "craft",
    craftingScope: "global",
    group: "",
    useCrafterCollectionAdvantage: true,
    channelItemBeginsCrafting: "",
    channelItemFinishesCrafting: "",
    channelItemCollected: "",
    channelItemDisposed: "",
  },
  damageBoost: {
    multiplier: 2,
    durationMS: 30000,
    activateChannel: "",
    deactivateChannel: "",
  },
  damager: { amount: 15, damageOnChannel: "", knockoutActivityFeedMessage: "" },
  dialogue: {
    message: "",
    group: "",
    action1Text: "",
    action1Channel: "",
    action2Text: "",
    action2Channel: "",
    action3Text: "",
    action3Channel: "",
    action4Text: "",
    action4Channel: "",
    font: "Rubik",
    character: "",
    typewriter: true,
    darkenBackground: true,
    openChannel: "",
    closeChannel: "",
    whenClosedChannel: "",
  },
  dialogueAction: {
    text: "",
    group: "",
    selectChannel: "",
    scope: "global",
    activeOnGameStart: true,
    deactivateAfterUse: false,
    activateChannel: "",
    deactivateChannel: "",
  },
  droppedItem: {
    itemId: undefined,
    amount: 0,
    placedByCharacterId: "",
    useCurrentClipCount: false,
    currentClip: 0,
    useCurrentDurability: false,
    currentDurability: 0,
    decay: 0,
  },
  endGame: { activateWhenReceivingFrom: "" },
  endOfGameWidget: {
    widgetType: "Statistic",
    widgetPlacement: "Primary",
    statisticProperty: "",
    gameTimeLabel: "",
    statisticLabel: "",
    imageStyle: "Contain",
    imageUrl: "",
    imageHeight: 100,
    imageBackgroundColor: "#ffffff",
    showTo: "all",
    showForModeType: "all",
    activeOnGameStart: true,
    scope: "player",
    activateChannel: "",
    deactivateChannel: "",
  },
  flag: {
    flagColor: "black",
    owningTeamId: "1",
    useSafeZone: true,
    automaticBackToBaseAfterSeconds: 15,
    otherTeamPickupAlerts: true,
    onCapturedBroadcastOnChannel: "",
    captureWhenReceiveFromChannel: "",
    onPickupBroadcastOnChannel: "",
    onPickupFromBaseBroadcastOnChannel: "",
    onDropBroadcastOnChannel: "",
    dropWhenReceiveFromChannel: "",
    onBackToBaseBroadcastOnChannel: "",
    onBackToBaseManuallyBroadcastOnChannel: "",
    backToBaseWhenReceiveFromChannel: "",
    radius: 200,
  },
  captureFlagZone: {
    flagColor: "black",
    activeOnStart: true,
    visibleInGame: false,
    color: "#FFFFFF",
    whenCapturedTransmitOnChannel: "",
    activateChannel: "",
    deactivateChannel: "",
    width: 400,
    height: 300,
    rotation: 0,
  },
  guiDevice: {
    type: "Text",
    position: "Top Left",
    text: "",
    trackedItemId: undefined,
    showTrackedItemMaximumAmount: false,
    whenButtonClickedTransmitOnChannel: "",
    showOnGameStart: true,
    color: "#ffffff",
    contentScope: "global",
    visibilityScope: "global",
    showWhenReceivingFromChannel: "",
    hideWhenReceivingFromChannel: "",
  },
  healthGranter: { amount: 25, grantType: "health", grantChannel: "" },
  imageBillboard: {
    imageUrl:
      "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=600",
    frameColor: "#212121",
    scope: "global",
    alpha: 1,
    visibleOnGameStart: "Yes",
    showWhenReceivingFrom: "",
    hideWhenReceivingFrom: "",
    visibleDuringPhase: "all",
    width: 200,
    height: 200,
    rotation: 0,
  },
  inventoryItemManager: {
    itemId: undefined,
    useAsDefault: true,
    activateWhenReceivingFrom: "",
    useMaxAmount: false,
    maxAmount: 10,
    overrideRespawnBehavior: false,
    respawnBehavior: "Keep",
    showAlert: true,
    customItemName: "",
    customItemDescription: "",
    clearItemFromInventoryOnChannel: "",
    updateProperty: false,
    property: "",
  },
  itemGranter: {
    itemId: undefined,
    itemChange: 1,
    grantWhenReceivingFromChannel: "",
    fullStrategy: "overflow",
    initialWeaponAmmo: undefined,
  },
  itemImage: {
    itemId: undefined,
    outline: false,
    outlineColor: "#ffffff",
    outlineSize: "automatic",
    customOutlineSize: 3,
    visibleOnGameStart: true,
    scope: "global",
    showChannel: "",
    hideChannel: "",
    size: 64,
    angle: 0,
  },
  itemSpawner: {
    itemId: undefined,
    itemAmount: 1,
    msTimeBetweenSpawns: 1000,
    scope: "global",
  },
  knockoutManager: {
    target: "player",
    onKnockoutChannel: "",
    grantItem: false,
    itemId: undefined,
    itemAmount: 1,
    grantStrategy: "grant",
    dropChance: false,
    dropPercentage: 50,
    activeOnGameStart: true,
    scope: "global",
    activateChannel: "",
    deactivateChannel: "",
  },
  laserBeam: {
    damageToDeal: 10,
    appearance: "Standard",
    laserColor: "#ff0000",
    activeOnGameStart: true,
    laserGroup: "",
    scope: "global",
    transmitOnWhenHitPlayer: "",
    activateOnChannel: "",
    deactivateOnChannel: "",
    angle: 0,
    distance: 350,
    showPath: true,
    showOrigin: true,
    showEndPoint: true,
  },
  laserBeamManager: {
    laserGroup: "",
    autoSwitch: true,
    activatedDuration: 2,
    deactivatedDuration: 3,
    activateOnChannel: "",
    deactivateOnChannel: "",
  },
  lifecycle: { event: "Game Starts", transmitOnChannel: "" },
  mapOptions: {
    backgroundTerrain: "Grass",
    platformerBackground: "sky",
    bottomTerrain: "platformer_grass",
    gameClockMode: "Off",
    countdownTimeMinutes: 10,
    allowedGameClockModeType: "liveGame",
    musicUrl: "",
    presetMusicId: "the_shakedown",
    musicVolume: 100,
    minPlayers: 1,
    teams: "Free For All",
    teamSize: 4,
    teamsNumber: 4,
    splitModeForSpecificTeamAmount: "Split Evenly",
    latePlayersJoinAsSpectators: false,
    allyIndicator: "Disabled",
    enemyIndicator: "Disabled",
    allowGameOwnerToSpectate: true,
    healthMode: "healthAndShield",
    maxHealth: 100,
    maxShield: 100,
    startingHealth: 100,
    startingShield: 100,
    startingFragility: 0,
    showHealthAndShield: true,
    spawnImmunity: 10,
    playerVsPlayerDamageEnabled: true,
    interactiveItemsSlots: 3,
    infiniteAmmo: true,
    instantReload: false,
    allowWeaponDrop: true,
    allowItemDrop: true,
    allowResourceDrop: true,
    weaponRespawnBehavior: "Keep",
    itemRespawnBehavior: "Keep",
    resourceRespawnBehavior: "Keep",
    infiniteDurability: true,
    droppedItemScope: "global",
    useScoreboard: true,
    scoreType: "Knockout",
    scoreResource: "cash",
    propertyResource: "",
    scoreName: "Score",
    scoreGroup: "team",
    sortMode: "Highest to lowest",
    showScoreboardOnGameEnd: true,
    showPlayersPlacement: true,
    knockoutActivityFeedDisabled: false,
    dynamicBuildingAllowFloatingBuilds: true,
  },
  mood: {
    useVignette: false,
    vignetteStrength: 50,
    activeOnGameStart: true,
    activateChannel: "",
    deactivateChannel: "",
  },
  movementMeter: {
    itemToTrack: undefined,
    drainAmount: 1,
    drainIntervalMs: 500,
    outOfItemChannel: "",
    speedWhenOutOfItem: 0,
    useAsDefault: true,
    warningAmount: 5,
    warningChannel: "",
    activateChannel: "",
    deactivateChannel: "",
  },
  music: {
    audioUrl:
      "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3",
    volume: 50,
    playWhenReceivingFrom: "",
    stopWhenReceivingFrom: "",
  },
  notification: {
    title: "",
    description: "",
    notifyChannel: "",
    notificationType: "none",
    notificationPlacement: "topRight",
    notificationDurationStrategy: "auto",
    customDurationSeconds: 10,
    sendTo: "characterTriggering",
  },
  outline: {
    shape: "rectangle",
    lineLength: 200,
    circleRadius: 200,
    circlePercentage: 100,
    circleFill: false,
    thickness: 5,
    angle: 0,
    color: "#ffffff",
    alpha: 0.8,
    style: "solid",
    dashLength: 35,
    dashSpacing: 15,
    visibleOnGameStart: true,
    showChannel: "",
    hideChannel: "",
    scope: "global",
  },
  passwordLock: {
    password: "",
    onSuccessChannel: "",
    openChannel: "",
    useMaxAttempts: false,
    maxAttempts: 3,
    maxAttemptsScope: "global",
    outOfAttemptsChannel: "",
  },
  placedSticker: {
    stickerId: "",
    depth: 1,
    scale: 0.15,
    placedByCharacterId: "",
    placedAtTimeStamp: 0,
  },
  playerAppearanceModifier: {
    modifyTransparency: false,
    transparencyAmount: 1,
    selfTransparency: "match",
    selfTransparencyAmount: 1,
    modifyTint: false,
    tint: "#ffffff",
    activateChannel: "",
    deactivateChannel: "",
  },
  playerPositionDetector: {
    whenPositionChangeDetectedTransmitOn: "",
    updateProperties: false,
    xProperty: "",
    yProperty: "",
  },
  characterProximity: {
    detectionArea: "everywhere",
    allowedMatch: "everybody",
    channelFound: "",
    channelLost: "",
    broadcastAs: "everybody",
    activeOnGameStart: true,
    activateWhenReceivingFrom: "",
    deactivateWhenReceivingFrom: "",
    detectionDistance: 1.5,
    width: 300,
    height: 300,
    delay: 0,
  },
  textExplainer: {
    header: "",
    content: "",
    openWhenReceivingFrom: "",
    iconImage: "",
    style: "modal",
    callToActionLabel: "",
    callToActionChannel: "",
    secondaryCallToActionLabel: "",
    secondaryCallToActionChannel: "",
    scope: "global",
    backgroundColor: "#FFFFFF",
    fontFamily: "Rubik",
    closableByUser: true,
    closeWhenReceivingFrom: "",
    whenClosedTransmitOn: "",
  },
  proceduralTerrainZone: {
    width: 320,
    height: 320,
    variability: 5,
    seed: "",
    collision: true,
    depth: 1,
  },
  proceduralTerrainZoneZoneInstruction: {
    terrain: undefined,
    weight: 100,
    constraint1: "none",
    constraint1Column: 1,
    constraint1Row: 1,
    constraint1Column1: 1,
    constraint1Column2: 1,
    constraint1Row1: 1,
    constraint1Row2: 1,
    constraint2: "none",
    constraint2Column: 1,
    constraint2Row: 1,
    constraint2Column1: 1,
    constraint2Column2: 1,
    constraint2Row1: 1,
    constraint2Row2: 1,
  },
  prop: {
    propId: "",
    shadowsEnabled: true,
    shadowsPlacement: "Floor",
    UseColliders: true,
    Scale: 1,
    Angle: 0,
    Tint: "#FFFFFF",
    FlipX: false,
    Alpha: 1,
    visibleOnGameStart: true,
    visibilityScope: "global",
    showWhenReceivingFrom: "",
    hideWhenReceivingFrom: "",
    canBeDamaged: false,
    health: 100,
    onDestroyedChannel: "",
    useAdaptiveHealth: false,
    adaptiveHealthPerPlayer: 25,
  },
  property: {
    propertyName: "",
    valueType: "string",
    defaultValueText: "",
    defaultValueNumber: 0,
    defaultValueBoolean: true,
    propertyType: "global",
    whenValueChangesBroadcastOnChannel: "",
    broadcastValueChangesOnGameStart: false,
  },
  gimkitLiveQuestion: {
    kitId: "",
    whenAnsweredCorrectlyTransmitOn: "",
    whenAnsweredIncorrectlyTransmitOn: "",
    openWhenReceivingOn: "",
    closable: true,
    textShownWhenAnsweringCorrectly: "",
    textShownWhenAnsweringIncorrectly: "",
    textShownWhenAnsweringScope: "global",
    closeWhenReceivingOn: "",
    enableWhenReceivingOn: "",
    disableWhenReceivingOn: "",
    whenOpenedChannel: "",
    whenClosedChannel: "",
    sound: "default",
    correctSound: "default",
    incorrectSound: "default",
    actionSound: "default",
    useCustomAction: false,
    customActionText: "",
    channelToTriggerCustomAction: "",
    size: 48,
  },
  relay: {
    relayAs: "All Players",
    team: "1",
    channelToTrigger: "",
    triggerWhenReceivingOnChannel: "",
  },
  repeater: {
    startChannel: "",
    actionChannel: "",
    repeatInterval: 5,
    stopRepeatingStrategy: "time",
    timePeriod: 10,
    numberOfRepetitions: 5,
    stopChannel: "",
    maxConcurrentTasksPerPlayer: 1,
    triggerTaskOnStart: true,
  },
  respawn: { respawnOnChannel: "" },
  scorebar: {
    numberOfTeams: 1,
    team1: "1",
    colorTeam1: "#e93d37",
    team2: "2",
    colorTeam2: "#4d56f3",
    team3: "3",
    colorTeam3: "#3ce634",
    team4: "4",
    colorTeam4: "#9d34e6",
  },
  sentry: {
    weapon: "zapper_common",
    aimAccuracy: 0.5,
    fireRate: 0.5,
    baseHealth: 100,
    baseShield: 0,
    useAdaptiveHealth: false,
    adaptiveHealth: 5,
    adaptiveShield: 5,
    skinId: "character_sentryRobot",
    team: "__SENTRY_TEAM",
    doesRespawn: true,
    respawnDurationSeconds: 10,
    characterName: "",
    rangeRadius: 1000,
    dropItem: false,
    itemId: undefined,
    itemAmount: 1,
    onKnockoutChannel: "",
    activeOnGameStart: true,
    activateChannel: "",
    deactivateChannel: "",
  },
  shadow: { width: 300, height: 130 },
  soundEffect: {
    audioUrl:
      "https://www.soundjay.com/mechanical/sounds/empty-bullet-shell-fall-02.mp3",
    volume: 50,
    playWhenReceivingFrom: "",
    characterType: "all",
  },
  characterSpawnPad: {
    visibleInGame: false,
    phase: "All",
    teamId: "__ANY_TEAM__",
    characterType: "all",
  },
  speed: { speed: 1, activateWhenReceivingFrom: "" },
  startingInventory: {
    itemId: undefined,
    itemAmount: 1,
    equipOnGrant: false,
    grantDuringPhase: "game",
    grantForSavedCharacters: false,
    enabled: true,
  },
  tagZone: {
    taggingTeam: "1",
    whenTaggedTransmitOn: "",
    whenTagsTransmitOn: "",
    respawnWhenTagged: true,
    detectionArea: "everywhere",
    detectionDistance: 1.5,
    activeOnGameStart: true,
    activateWhenReceivingFrom: "",
    deactivateWhenReceivingFrom: "",
    width: 500,
    height: 500,
  },
  teamSettings: {
    team: "1",
    teamName: "",
    whenPlayerJoinsTransmitOn: "",
    maxPlayers: 4,
    placementPriorityOnGameStart: 30,
    placementPriorityDuringGame: 30,
    allowCustomHostPlacement: false,
  },
  teamSwitcher: {
    switchToStrategy: "randomTeam",
    specificTeam: "__SPECTATORS_TEAM",
    switchChannel: "",
  },
  teleporter: {
    group: "",
    targetGroup: "",
    whenTeleportedHereChannel: "",
    teleportToOnChannel: "",
    teleportToTargetChannel: "",
    visibleInGame: true,
  },
  terrainLayerAppearance: {
    layer: "AdditionalBackground1",
    modifyTint: false,
    tint: "#ffffff",
  },
  textBillboard: {
    text: "",
    fontSize: 22,
    scope: "global",
    googleFont: "Rubik",
    color: "#000000",
    alpha: 1,
    strokeThickness: 0,
    strokeColor: "#FFFFFF",
    rotation: 0,
    visibleOnGameStart: "Yes",
    showWhenReceivingFrom: "",
    hideWhenReceivingFrom: "",
  },
  trigger: {
    channelToTrigger: "",
    triggerWhenReceivingOnChannel: "",
    triggerDelay: undefined,
    visibleInGame: true,
    team: "__ANY_TEAM__",
    maxTriggers: undefined,
    scope: "global",
    allowedModeType: "all",
    activeOnGameStart: true,
    activateChannel: "",
    deactivateChannel: "",
    activeScope: "global",
    triggeredByPlayerCollision: true,
  },
  vendingMachine: {
    grantAction: "Grant Item",
    requiredItemId: undefined,
    amountOfRequiredItem: 1,
    grantedItemId: undefined,
    amountOfGrantedItem: 1,
    purchaseChannel: "",
    visibleInGame: true,
    grantedItemImageUrl: "",
    grantedItemName: "",
    grantedItemDescription: "",
    deactivateOnPurchase: false,
    useAdaptiveCost: false,
    adaptiveCostIncreasePerPlayer: 0,
    allowFunding: false,
    fundingScope: "global",
    useLimitedStock: false,
    maxStock: 10,
    maxStockScope: "global",
    attachCostToNameWhenHidden: true,
    activeOnStart: true,
    activeScope: "player",
    activateChannel: "",
    deactivateChannel: "",
    allowedPurchaseTeam: "__ANY_TEAM__",
    attemptToPurchaseChannel: "",
    onAttemptedPurchaseFailedChannel: "",
    interactionDuration: 1,
    matchItemRarity: false,
    backgroundColor1: "#d44224",
    backgroundColor2: "#f7d253",
    raysColor: "#f7d253",
    numberOfRays: 16,
    raysWidthFactor: 1.25,
    raysAlpha: 0.5,
    raysAdditive: false,
    soundEnabled: true,
    showShadow: true,
    width: 250,
    height: 250,
    radius: 100,
  },
  voiceLine: {
    playBehavior: "interrupt",
    volume: 1,
    playChance: 100,
    audioUrl1: "",
    audioUrl2: "",
    audioUrl3: "",
    audioUrl4: "",
    audioUrl5: "",
    audioUrl6: "",
    audioUrl7: "",
    audioUrl8: "",
    activeOnGameStart: true,
    playWhenReceivingOnChannel: "",
  },
  waypoint: {
    target: "deviceLocation",
    flagColor: "black",
    ballId: "",
    name: "",
    useDeactivateWithinRange: false,
    deactivateWithinRange: 3,
    startFollowingPlayer: "",
    stopFollowingPlayer: "",
    hideWhenFlagIsInBase: true,
    activeOnGameStart: true,
    color: "#FFFFFF",
    activateChannel: "",
    deactivateChannel: "",
    scope: "global",
  },
  wireRepeater: { delaySeconds: 0, team: "__ANY_TEAM__" },
  xp: {
    amount: 10,
    reason: "",
    grantOnChannel: "",
    useIncrementalGrant: false,
    incrementalGrantCharacterRequirement: 10,
    useMinimumCharacterCount: false,
    minimumCharacterCount: 6,
  },
  zone: {
    playerEntersChannel: "",
    playerLeavesChannel: "",
    allowWeaponFire: true,
    shape: "rectangle",
    visibleInGame: false,
    color: "#FFFFFF",
    activeOnStart: true,
    activateChannel: "",
    deactivateChannel: "",
    allowWeaponDrop: "Do Not Override",
    allowItemDrop: "Do Not Override",
    allowResourceDrop: "Do Not Override",
    droppedItemDecayEnabled: false,
    droppedItemDecay: 1,
    width: 200,
    height: 200,
    radius: 100,
    rotation: 0,
  },
};
