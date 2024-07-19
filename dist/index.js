// src/lib/device/generated.ts
var defaultDeviceOptions = {
  assignmentCheckpoint: {
    action: "set",
    actionValue: void 0,
    applyActionOnChannel: ""
  },
  assignmentContext: { objective: "" },
  backgroundTilesZone: {
    terrainId: void 0,
    layer: "AdditionalBackground1",
    width: 320,
    height: 320
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
    identifier: ""
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
    height: 200
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
    radius: 100
  },
  blockingZone: {
    blockBuilding: 1,
    visibleInGame: true,
    color: "#FFFFFF",
    activeOnStart: true,
    activateChannel: "",
    deactivateChannel: "",
    width: 200,
    height: 200
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
    size: 26
  },
  cameraPoint: { activateChannel: "", deactivateChannel: "" },
  cameraSize: { width: 1e3, height: 1e3 },
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
    radius: 100
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
    check1ItemId: void 0,
    check1ItemComparison: "equal",
    check1ItemValue: 1,
    check2Type: "item",
    check2ScoreComparison: "equal",
    check2ScoreValue: 1,
    check2PropertyName: "",
    check2PropertyComparison: "equal",
    check2PropertyValue: 1,
    check2ItemId: void 0,
    check2ItemComparison: "equal",
    check2ItemValue: 1,
    check3Type: "item",
    check3ScoreComparison: "equal",
    check3ScoreValue: 1,
    check3PropertyName: "",
    check3PropertyComparison: "equal",
    check3PropertyValue: 1,
    check3ItemId: void 0,
    check3ItemComparison: "equal",
    check3ItemValue: 1,
    check4Type: "item",
    check4ScoreComparison: "equal",
    check4ScoreValue: 1,
    check4PropertyName: "",
    check4PropertyComparison: "equal",
    check4PropertyValue: 1,
    check4ItemId: void 0,
    check4ItemComparison: "equal",
    check4ItemValue: 1,
    check5Type: "item",
    check5ScoreComparison: "equal",
    check5ScoreValue: 1,
    check5PropertyName: "",
    check5PropertyComparison: "equal",
    check5PropertyValue: 1,
    check5ItemId: void 0,
    check5ItemComparison: "equal",
    check5ItemValue: 1,
    checkCount: 1,
    operation: "and"
  },
  checkpoint: {
    enabled: true,
    visibleInGame: true,
    playAudio: true,
    maxActivations: 0,
    setAsActiveChannel: "",
    onActiveChannel: "",
    width: 125
  },
  classDesigner: { activateChannel: "", allowedToUseGadget: 1, immunity: 1 },
  cosmosModifier: {
    skinId: "",
    trailId: "",
    applyChannel: "",
    resetChannel: ""
  },
  countdown: {
    minutes: 10,
    seconds: 0,
    startWhenReceivingFrom: "",
    onEndTransmitOn: ""
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
    whenTargetReachedTransmitOn: ""
  },
  craftingRecipe: {
    item: void 0,
    itemAmount: 1,
    numberOfIngredients: 2,
    ingredient1Item: void 0,
    ingredient1Amount: 3,
    ingredient2Item: void 0,
    ingredient2Amount: 3,
    ingredient3Item: void 0,
    ingredient3Amount: 3,
    ingredient4Item: void 0,
    ingredient4Amount: 3,
    ingredient5Item: void 0,
    ingredient5Amount: 3,
    timeToCraftMs: 0,
    itemDisposes: false,
    disposeItemAfterMs: 5e3,
    group: "",
    activeOnGameStart: true,
    whenCraftingStartsChannel: "",
    whenCraftedChannel: "",
    activeScope: "global",
    activateChannel: "",
    deactivateChannel: ""
  },
  craftingTable: {
    style: "craft",
    craftingScope: "global",
    group: "",
    useCrafterCollectionAdvantage: true,
    channelItemBeginsCrafting: "",
    channelItemFinishesCrafting: "",
    channelItemCollected: "",
    channelItemDisposed: ""
  },
  damageBoost: {
    multiplier: 2,
    durationMS: 3e4,
    activateChannel: "",
    deactivateChannel: ""
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
    whenClosedChannel: ""
  },
  dialogueAction: {
    text: "",
    group: "",
    selectChannel: "",
    scope: "global",
    activeOnGameStart: true,
    deactivateAfterUse: false,
    activateChannel: "",
    deactivateChannel: ""
  },
  droppedItem: {
    itemId: void 0,
    amount: 0,
    placedByCharacterId: "",
    useCurrentClipCount: false,
    currentClip: 0,
    useCurrentDurability: false,
    currentDurability: 0,
    decay: 0
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
    deactivateChannel: ""
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
    radius: 200
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
    rotation: 0
  },
  guiDevice: {
    type: "Text",
    position: "Top Left",
    text: "",
    trackedItemId: void 0,
    showTrackedItemMaximumAmount: false,
    whenButtonClickedTransmitOnChannel: "",
    showOnGameStart: true,
    color: "#ffffff",
    contentScope: "global",
    visibilityScope: "global",
    showWhenReceivingFromChannel: "",
    hideWhenReceivingFromChannel: ""
  },
  healthGranter: { amount: 25, grantType: "health", grantChannel: "" },
  imageBillboard: {
    imageUrl: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=600",
    frameColor: "#212121",
    scope: "global",
    alpha: 1,
    visibleOnGameStart: "Yes",
    showWhenReceivingFrom: "",
    hideWhenReceivingFrom: "",
    visibleDuringPhase: "all",
    width: 200,
    height: 200,
    rotation: 0
  },
  inventoryItemManager: {
    itemId: void 0,
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
    property: ""
  },
  itemGranter: {
    itemId: void 0,
    itemChange: 1,
    grantWhenReceivingFromChannel: "",
    fullStrategy: "overflow",
    initialWeaponAmmo: void 0
  },
  itemImage: {
    itemId: void 0,
    outline: false,
    outlineColor: "#ffffff",
    outlineSize: "automatic",
    customOutlineSize: 3,
    visibleOnGameStart: true,
    scope: "global",
    showChannel: "",
    hideChannel: "",
    size: 64,
    angle: 0
  },
  itemSpawner: {
    itemId: void 0,
    itemAmount: 1,
    msTimeBetweenSpawns: 1e3,
    scope: "global"
  },
  knockoutManager: {
    target: "player",
    onKnockoutChannel: "",
    grantItem: false,
    itemId: void 0,
    itemAmount: 1,
    grantStrategy: "grant",
    dropChance: false,
    dropPercentage: 50,
    activeOnGameStart: true,
    scope: "global",
    activateChannel: "",
    deactivateChannel: ""
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
    showEndPoint: true
  },
  laserBeamManager: {
    laserGroup: "",
    autoSwitch: true,
    activatedDuration: 2,
    deactivatedDuration: 3,
    activateOnChannel: "",
    deactivateOnChannel: ""
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
    dynamicBuildingAllowFloatingBuilds: true
  },
  mood: {
    useVignette: false,
    vignetteStrength: 50,
    activeOnGameStart: true,
    activateChannel: "",
    deactivateChannel: ""
  },
  movementMeter: {
    itemToTrack: void 0,
    drainAmount: 1,
    drainIntervalMs: 500,
    outOfItemChannel: "",
    speedWhenOutOfItem: 0,
    useAsDefault: true,
    warningAmount: 5,
    warningChannel: "",
    activateChannel: "",
    deactivateChannel: ""
  },
  music: {
    audioUrl: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3",
    volume: 50,
    playWhenReceivingFrom: "",
    stopWhenReceivingFrom: ""
  },
  notification: {
    title: "",
    description: "",
    notifyChannel: "",
    notificationType: "none",
    notificationPlacement: "topRight",
    notificationDurationStrategy: "auto",
    customDurationSeconds: 10,
    sendTo: "characterTriggering"
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
    scope: "global"
  },
  passwordLock: {
    password: "",
    onSuccessChannel: "",
    openChannel: "",
    useMaxAttempts: false,
    maxAttempts: 3,
    maxAttemptsScope: "global",
    outOfAttemptsChannel: ""
  },
  placedSticker: {
    stickerId: "",
    depth: 1,
    scale: 0.15,
    placedByCharacterId: "",
    placedAtTimeStamp: 0
  },
  playerAppearanceModifier: {
    modifyTransparency: false,
    transparencyAmount: 1,
    selfTransparency: "match",
    selfTransparencyAmount: 1,
    modifyTint: false,
    tint: "#ffffff",
    activateChannel: "",
    deactivateChannel: ""
  },
  playerPositionDetector: {
    whenPositionChangeDetectedTransmitOn: "",
    updateProperties: false,
    xProperty: "",
    yProperty: ""
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
    delay: 0
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
    whenClosedTransmitOn: ""
  },
  proceduralTerrainZone: {
    width: 320,
    height: 320,
    variability: 5,
    seed: "",
    collision: true,
    depth: 1
  },
  proceduralTerrainZoneZoneInstruction: {
    terrain: void 0,
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
    constraint2Row2: 1
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
    adaptiveHealthPerPlayer: 25
  },
  property: {
    propertyName: "",
    valueType: "string",
    defaultValueText: "",
    defaultValueNumber: 0,
    defaultValueBoolean: true,
    propertyType: "global",
    whenValueChangesBroadcastOnChannel: "",
    broadcastValueChangesOnGameStart: false
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
    size: 48
  },
  relay: {
    relayAs: "All Players",
    team: "1",
    channelToTrigger: "",
    triggerWhenReceivingOnChannel: ""
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
    triggerTaskOnStart: true
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
    colorTeam4: "#9d34e6"
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
    rangeRadius: 1e3,
    dropItem: false,
    itemId: void 0,
    itemAmount: 1,
    onKnockoutChannel: "",
    activeOnGameStart: true,
    activateChannel: "",
    deactivateChannel: ""
  },
  shadow: { width: 300, height: 130 },
  soundEffect: {
    audioUrl: "https://www.soundjay.com/mechanical/sounds/empty-bullet-shell-fall-02.mp3",
    volume: 50,
    playWhenReceivingFrom: "",
    characterType: "all"
  },
  characterSpawnPad: {
    visibleInGame: false,
    phase: "All",
    teamId: "__ANY_TEAM__",
    characterType: "all"
  },
  speed: { speed: 1, activateWhenReceivingFrom: "" },
  startingInventory: {
    itemId: void 0,
    itemAmount: 1,
    equipOnGrant: false,
    grantDuringPhase: "game",
    grantForSavedCharacters: false,
    enabled: true
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
    height: 500
  },
  teamSettings: {
    team: "1",
    teamName: "",
    whenPlayerJoinsTransmitOn: "",
    maxPlayers: 4,
    placementPriorityOnGameStart: 30,
    placementPriorityDuringGame: 30,
    allowCustomHostPlacement: false
  },
  teamSwitcher: {
    switchToStrategy: "randomTeam",
    specificTeam: "__SPECTATORS_TEAM",
    switchChannel: ""
  },
  teleporter: {
    group: "",
    targetGroup: "",
    whenTeleportedHereChannel: "",
    teleportToOnChannel: "",
    teleportToTargetChannel: "",
    visibleInGame: true
  },
  terrainLayerAppearance: {
    layer: "AdditionalBackground1",
    modifyTint: false,
    tint: "#ffffff"
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
    hideWhenReceivingFrom: ""
  },
  trigger: {
    channelToTrigger: "",
    triggerWhenReceivingOnChannel: "",
    triggerDelay: void 0,
    visibleInGame: true,
    team: "__ANY_TEAM__",
    maxTriggers: void 0,
    scope: "global",
    allowedModeType: "all",
    activeOnGameStart: true,
    activateChannel: "",
    deactivateChannel: "",
    activeScope: "global",
    triggeredByPlayerCollision: true
  },
  vendingMachine: {
    grantAction: "Grant Item",
    requiredItemId: void 0,
    amountOfRequiredItem: 1,
    grantedItemId: void 0,
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
    radius: 100
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
    playWhenReceivingOnChannel: ""
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
    scope: "global"
  },
  wireRepeater: { delaySeconds: 0, team: "__ANY_TEAM__" },
  xp: {
    amount: 10,
    reason: "",
    grantOnChannel: "",
    useIncrementalGrant: false,
    incrementalGrantCharacterRequirement: 10,
    useMinimumCharacterCount: false,
    minimumCharacterCount: 6
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
    rotation: 0
  }
};
var deviceOptions = [
  {
    id: "assignmentCheckpoint",
    name: "Assignment Checkpoint",
    description: "Update the percentage completion of an assignment!",
    optionSchema: {
      options: [
        {
          key: "action",
          option: {
            label: "Action",
            type: "select",
            validators: [null],
            defaultValue: "set",
            props: {
              options: [
                { name: "Set Percentage", value: "set" },
                { name: "Increment Percentage", value: "increment" },
                { name: "Decrement Percentage", value: "decrement" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "actionValue",
          option: {
            label: "Value",
            type: "numberInput",
            validators: [null],
            props: { min: 0, max: 100, step: 1, allowEmpty: true }
          }
        },
        {
          key: "applyActionOnChannel",
          option: {
            label: "Apply action when receiving on channel...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: true,
      triggers: [{ type: "wire", name: "On wire pulse..." }],
      customBlocks: [
        "set_percentage_complete",
        "increment_percentage_complete"
      ]
    },
    wireConfig: {
      in: {
        connections: [
          { id: "applyAction", name: "Apply Configured Action" },
          { id: "codeGrid", name: "Run wire pulse block" }
        ]
      }
    },
    minimumRoleLevel: 90
  },
  {
    id: "assignmentContext",
    name: "Assignment Context",
    description: "Set the objective of an assignment!",
    optionSchema: {
      options: [
        {
          key: "objective",
          option: {
            label: "Objective",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Reach the finish line..." }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [
        {
          type: "WHEN_PLAYER_LOADS_IN",
          name: "When player loads in...",
          blockedGlobalBlocks: [
            "message_broadcaster",
            "set_property",
            "current_character_name",
            "add_activity_feed_item_for_everyone",
            "add_activity_feed_item_for_triggering_player",
            "add_activity_feed_item_for_game_host",
            "current_character_team_number",
            "triggering_player_score",
            "get_team_score",
            "is_a_live_game",
            "is_an_assignment",
            "seconds_into_game"
          ]
        }
      ],
      customBlocks: ["set_assignment_objective"]
    },
    minimumRoleLevel: 90
  },
  {
    id: "backgroundTilesZone",
    name: "Background Tiles Zone",
    optionSchema: {
      options: [
        {
          key: "terrainId",
          option: {
            label: "Terrain Id",
            type: "terrainId",
            props: { allowEmpty: false },
            validators: [null]
          }
        },
        {
          key: "layer",
          option: {
            label: "Layer",
            type: "select",
            validators: [null],
            defaultValue: "AdditionalBackground1",
            props: {
              options: [
                { name: "Background 1", value: "AdditionalBackground1" },
                { name: "Background 2", value: "AdditionalBackground2" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 320,
            validators: [null],
            props: { step: 1, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "height",
          option: {
            label: "Height",
            type: "numberInput",
            defaultValue: 320,
            validators: [null],
            props: { step: 1, allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    minimumRoleLevel: 90,
    initialMemoryCost: 0,
    subsequentMemoryCost: 0
  },
  {
    id: "ball",
    name: "Ball",
    description: "A physics ball that can be moved by firing at it with a gadget",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "physics", name: "Physics" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "appearance",
          option: {
            label: "Ball Appearance",
            description: "Select the look of the ball",
            type: "select",
            validators: [null],
            defaultValue: "primary",
            props: {
              options: [
                { value: "primary", name: "Blastball" },
                { value: "inverted", name: "Inverted Blastball" },
                { value: "blue", name: "Blue" },
                { value: "green", name: "Green" },
                { value: "purple", name: "Purple" },
                { value: "red", name: "Red" },
                { value: "solid", name: "Solid" },
                { value: "teal", name: "Teal" },
                { value: "yellow", name: "Yellow" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "resetCooldown",
          option: {
            label: "Respawn Duration (Seconds)",
            description: "When the ball respawns, how long (in seconds) does it take?",
            type: "numberInput",
            defaultValue: 3,
            validators: [null],
            props: { min: 1, max: 5, step: 1, allowEmpty: false }
          }
        },
        {
          key: "topSpeed",
          option: {
            label: "Top Speed",
            description: "Set how fast the ball can travel",
            type: "select",
            validators: [null],
            defaultValue: 1500,
            props: {
              options: [
                { name: "Very Slow", value: 500 },
                { name: "Slow", value: 1e3 },
                { name: "Normal", value: 1500 },
                { name: "Fast", value: 2e3 },
                { name: "Very Fast", value: 2500 }
              ],
              allowEmpty: false
            }
          },
          categories: ["physics"]
        },
        {
          key: "hitSensitivity",
          option: {
            label: "Hit Impact",
            description: "How much do projectiles impact the velocity of the ball?",
            type: "select",
            validators: [null],
            defaultValue: 1.5,
            props: {
              options: [
                { name: "Very Low", value: 0.5 },
                { name: "Low", value: 1 },
                { name: "Normal", value: 1.5 },
                { name: "High", value: 2 },
                { name: "Very High", value: 2.5 }
              ],
              allowEmpty: false
            }
          },
          categories: ["physics"]
        },
        {
          key: "bounciness",
          option: {
            label: "Bounce",
            description: "Set the bounciness of the ball (0 is no bounce, 100 is maximum bounce)",
            type: "numberInput",
            defaultValue: 70,
            validators: [null],
            props: { min: 0, max: 100, step: 1, allowEmpty: false }
          },
          categories: ["physics"]
        },
        {
          key: "damping",
          option: {
            label: "Friction",
            description: "Set how quickly the ball slows down. (0 is no friction, 100 is maximum friction)",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 0, max: 100, step: 1, allowEmpty: false }
          },
          categories: ["physics"]
        },
        {
          key: "massMultiplier",
          option: {
            label: "Mass",
            description: "Increasing the mass will make the ball harder to move. The size of the ball is also factored into the mass.",
            type: "select",
            validators: [null],
            defaultValue: 1.5,
            props: {
              options: [
                { name: "Very Light", value: 0.5 },
                { name: "Light", value: 1 },
                { name: "Normal", value: 1.5 },
                { name: "Heavy", value: 2 },
                { name: "Very Heavy", value: 2.5 }
              ],
              allowEmpty: false
            }
          },
          categories: ["physics"]
        },
        {
          key: "radius",
          option: {
            label: "Radius",
            type: "numberInput",
            defaultValue: 75,
            validators: [null],
            props: { min: 45, max: 200, step: 1, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "activeOnStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Is the ball spawned in when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the ball when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the ball when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "identifier",
          option: {
            label: "Identifier",
            description: "Set a unique identifier for this ball, so it can be tracked by the Waypoint Device",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Enter ID...", category: "ball-id" }
          }
        }
      ]
    },
    defaultState: { x: 0, y: 0, resetCount: 0, active: false },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: { connections: [] },
      in: {
        connections: [
          { id: "activate", name: "Activate ball" },
          { id: "deactivate", name: "Deactivate ball" }
        ]
      }
    },
    maxOnMap: 12,
    initialMemoryCost: 1e3,
    subsequentMemoryCost: 1e3,
    supportedMapStyles: ["topDown"]
  },
  {
    id: "ballZone",
    name: "Ball Capture Zone",
    description: "Detect when a ball enters an area",
    optionSchema: {
      categories: {
        categories: [
          { id: "Featured", name: "Featured" },
          { id: "Appearance", name: "Appearance" },
          { name: "Channels", id: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "resetTheBall",
          option: {
            label: "Respawn Ball",
            type: "select",
            description: "Should the ball respawn upon entering the zone?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured"]
        },
        {
          key: "visibleInGame",
          option: {
            label: "Visible In-Game",
            type: "select",
            description: "Is the zone visible to players during the game?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Appearance"]
        },
        {
          key: "style",
          option: {
            label: "Zone Style",
            description: "The style of the zone",
            type: "select",
            validators: [null],
            defaultValue: "None",
            props: {
              options: [
                { value: "None", name: "None" },
                { value: "Blastball", name: "Blastball Goal" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured", "Appearance"]
        },
        {
          key: "side",
          option: {
            label: "Goal Side",
            description: "Which side the goal faces",
            type: "select",
            validators: [null],
            defaultValue: "Left",
            props: {
              options: [
                { value: "Left", name: "Right" },
                { value: "Right", name: "Left" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "style", compare: "NOT_EQUAL", value: "Blastball" }]
            ]
          },
          categories: ["Featured", "Appearance"]
        },
        {
          key: "color",
          option: {
            label: "Background Color",
            type: "color",
            defaultValue: "#FFFFFF",
            validators: [null]
          },
          categories: ["Appearance"]
        },
        {
          key: "backgroundAlpha",
          option: {
            label: "Background Alpha",
            description: "Set the transparency of the barrier. 0 is completely transparent, 1 is completely visible.",
            type: "numberInput",
            defaultValue: 0.2,
            validators: [null],
            props: { min: 0, max: 1, step: 0.01, allowEmpty: false }
          },
          categories: ["Appearance"]
        },
        {
          key: "activeOnStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Is the zone active when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "ballEntersChannel",
          option: {
            label: "When ball enters the zone, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When ball enters the zone, the device sends a signal on the selected channel"
          },
          categories: ["Featured", "Channels"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate zone when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the zone when the device receives a signal from the selected channel"
          },
          categories: ["Channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate zone when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the zone when the device receives a signal from the selected channel"
          },
          categories: ["Channels"]
        },
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 250, max: 2500, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "height",
          option: {
            label: "Height",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 250, max: 2500, allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: { active: false },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: { connections: [{ id: "ballEnters", name: "Ball enters zone" }] },
      in: {
        connections: [
          { id: "activate", name: "Activate zone" },
          { id: "deactivate", name: "Deactivate zone" }
        ]
      }
    },
    maxOnMap: 16,
    initialMemoryCost: 300,
    subsequentMemoryCost: 200,
    supportedMapStyles: ["topDown"]
  },
  {
    id: "barrier",
    name: "Barrier",
    description: "Block off areas with precision",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "appearance", name: "Appearance" },
          { id: "availability", name: "Availability" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "shape",
          option: {
            label: "Barrier Shape",
            description: "Set the shape of the barrier",
            type: "select",
            validators: [null],
            defaultValue: "rectangle",
            props: {
              options: [
                { value: "rectangle", name: "Rectangle" },
                { value: "circle", name: "Circle" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured", "appearance"]
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Is the barrier active when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured", "availability"]
        },
        {
          key: "color",
          option: {
            label: "Barrier Color",
            description: "Set the color of the barrier",
            type: "color",
            defaultValue: "#ffb300",
            validators: [null]
          },
          categories: ["featured", "appearance"]
        },
        {
          key: "scope",
          option: {
            label: "Active Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the barrier is activated/deactivated, who does that apply to?"
          },
          categories: ["availability"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the barrier when the device receives a signal from the selected channel"
          },
          categories: ["availability"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the barrier when the device receives a signal from the selected channel"
          },
          categories: ["availability"]
        },
        {
          key: "alpha",
          option: {
            label: "Alpha",
            description: "Set the transparency of the barrier. 0 is completely transparent, 1 is completely visible.",
            type: "numberInput",
            defaultValue: 0.8,
            validators: [null],
            props: { min: 0.01, max: 1, step: 0.01, allowEmpty: false }
          },
          categories: ["appearance"]
        },
        {
          key: "showBorder",
          option: {
            label: "Show Border",
            type: "select",
            description: "Show a border around the barrier",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["appearance"]
        },
        {
          key: "visibleInGame",
          option: {
            label: "Visible In-Game",
            type: "select",
            description: "If off, the barrier will be invisible",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["appearance"]
        },
        {
          key: "collisionEnabled",
          option: {
            label: "Collision Enabled",
            type: "select",
            description: "Does the barrier block players and projectiles?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "height",
          option: {
            label: "Height",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 30, max: 25e3, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 30, max: 25e3, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "angle",
          option: {
            label: "Angle",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: -360, max: 360, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "radius",
          option: {
            label: "Radius",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 15, max: 12500, allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: { active: true },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate barrier" },
          { id: "deactivate", name: "Deactivate barrier" }
        ]
      }
    },
    maxOnMap: 500,
    initialMemoryCost: 20,
    subsequentMemoryCost: 20
  },
  {
    id: "blockingZone",
    name: "Blocking Zone",
    description: "Area that blocks different actions",
    optionSchema: {
      categories: {
        categories: [
          { id: "Featured", name: "Featured" },
          { id: "Appearance", name: "Appearance" },
          { name: "Channels", id: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "blockBuilding",
          option: {
            label: "Block Building",
            description: "Is the zone blocking the terrain building?",
            type: "select",
            validators: [null],
            defaultValue: 1,
            props: {
              options: [
                { value: 1, name: "Do Not Override" },
                { value: 2, name: "Yes" },
                { value: 3, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured"]
        },
        {
          key: "visibleInGame",
          option: {
            label: "Visible In-Game",
            type: "select",
            description: "Is the zone visible to players during the game?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Appearance"]
        },
        {
          key: "color",
          option: {
            label: "Background Color",
            type: "color",
            defaultValue: "#FFFFFF",
            validators: [null]
          },
          categories: ["Appearance"]
        },
        {
          key: "activeOnStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Is the zone active when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate zone when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the zone when the device receives a signal from the selected channel"
          },
          categories: ["Channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate zone when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the zone when the device receives a signal from the selected channel"
          },
          categories: ["Channels"]
        },
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 250, max: 2500, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "height",
          option: {
            label: "Height",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 250, max: 2500, allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: { active: false },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate zone" },
          { id: "deactivate", name: "Deactivate zone" }
        ]
      }
    },
    minimumRoleLevel: 90,
    maxOnMap: 3,
    initialMemoryCost: 300,
    subsequentMemoryCost: 200
  },
  {
    id: "button",
    name: "Button",
    description: "Run actions when interacted with",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "availability", name: "Availability" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "guiMessage",
          option: {
            label: "Button Message",
            description: "The message shown to player when they become within interaction distance of the button",
            type: "textInput",
            defaultValue: "Interact",
            validators: [null],
            props: { placeholder: "Enter message here...", maxLength: 128 }
          },
          categories: ["featured"]
        },
        {
          key: "channel",
          option: {
            label: "When button pressed, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the button is pressed, the device sends a signal on the selected channel"
          },
          categories: ["featured", "channels"]
        },
        {
          key: "visibleInGame",
          option: {
            label: "Visible In-Game",
            type: "select",
            description: "Is the button visible to players in-game?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "interactionDuration",
          option: {
            label: "Interaction Duration",
            description: "How long does the player have to interact to press the button?",
            type: "select",
            validators: [null],
            defaultValue: 1,
            props: {
              options: [
                { name: "Instant", value: 0 },
                { name: "1 Second", value: 1 },
                { name: "3 Seconds", value: 3 },
                { name: "5 Seconds", value: 5 }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "activeOnStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Can the button be pressed when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["availability"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate button when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the button when the device receives a signal from the selected channel"
          },
          categories: ["availability", "channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate button when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the button when the device receives a signal from the selected channel"
          },
          categories: ["availability", "channels"]
        },
        {
          key: "scope",
          option: {
            label: "Active Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the button is activated/deactivated, who does it apply to?"
          },
          categories: ["availability"]
        },
        {
          key: "radius",
          option: {
            label: "Interaction Radius",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 75, max: 300, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "size",
          option: {
            label: "Size",
            type: "numberInput",
            defaultValue: 26,
            validators: [null],
            props: { min: 20, max: 100, allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: { active: true },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: { connections: [{ id: "pressed", name: "Button pressed" }] },
      in: {
        connections: [
          { id: "activate", name: "Activate button" },
          { id: "deactivate", name: "Deactivate button" }
        ]
      }
    },
    maxOnMap: 300,
    initialMemoryCost: 50,
    subsequentMemoryCost: 50
  },
  {
    id: "cameraPoint",
    name: "Camera Point",
    description: "Move the camera to a specific location",
    optionSchema: {
      options: [
        {
          key: "activateChannel",
          option: {
            label: "Activate point when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the camera point when the device receives a signal from the selected channel"
          }
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate point when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the camera point when the device receives a signal from the selected channel"
          }
        }
      ]
    },
    defaultState: { active: false },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate camera point" },
          { id: "deactivate", name: "Deactivate camera point" }
        ]
      }
    },
    initialMemoryCost: 100,
    subsequentMemoryCost: 100
  },
  {
    id: "cameraSize",
    name: "Camera View",
    description: "Set the bounds that players are allowed to see within",
    optionSchema: {
      options: [
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 1e3,
            validators: [null],
            props: { min: 500, max: 5e4 },
            hidden: true
          }
        },
        {
          key: "height",
          option: {
            label: "Height",
            type: "numberInput",
            defaultValue: 1e3,
            validators: [null],
            props: { min: 500, max: 5e4 },
            hidden: true
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    maxOnMap: 128,
    initialMemoryCost: 150,
    subsequentMemoryCost: 150
  },
  {
    id: "character",
    name: "Character",
    description: "Trigger channel when interact with character",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "interaction", name: "Interaction" },
          { id: "appearance", name: "Appearance" },
          { id: "availability", name: "Availability" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "skinId",
          option: {
            label: "Skin",
            description: "The skin of the character",
            type: "textInput",
            defaultValue: "character_vortexAgent",
            validators: [null],
            props: { placeholder: "Text here..." }
          },
          categories: ["featured", "appearance"]
        },
        {
          key: "flipX",
          option: {
            label: "Direction",
            description: "Which way is the character facing?",
            type: "select",
            validators: [null],
            defaultValue: false,
            props: {
              options: [
                { name: "Right", value: false },
                { name: "Left", value: true }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured", "appearance"]
        },
        {
          key: "interactionEnabled",
          option: {
            label: "Interaction Enabled",
            type: "select",
            description: "Can the player interact with the character?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured", "interaction"]
        },
        {
          key: "interactionMessage",
          option: {
            label: "Character Message",
            description: "The message shown to player when they become within interaction distance of the character",
            type: "textInput",
            defaultValue: "Talk",
            validators: [null],
            props: { placeholder: "Enter message here...", maxLength: 128 },
            hideIf: [
              [
                {
                  key: "interactionEnabled",
                  compare: "NOT_EQUAL",
                  value: true
                }
              ]
            ]
          },
          categories: ["featured", "interaction"]
        },
        {
          key: "interactionChannel",
          option: {
            label: "When interact with character, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When interact with character, the device sends a signal on the selected channel",
            hideIf: [
              [
                {
                  key: "interactionEnabled",
                  compare: "NOT_EQUAL",
                  value: true
                }
              ]
            ]
          },
          categories: ["featured", "channels", "interaction"]
        },
        {
          key: "interactionDuration",
          option: {
            label: "Interaction Duration",
            description: "How long does it takes to trigger the interaction?",
            type: "select",
            validators: [null],
            defaultValue: 1,
            props: {
              options: [
                { name: "Instant", value: 0 },
                { name: "1 Second", value: 1 },
                { name: "3 Seconds", value: 3 },
                { name: "5 Seconds", value: 5 }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "interactionEnabled",
                  compare: "NOT_EQUAL",
                  value: true
                }
              ]
            ]
          },
          categories: ["featured", "interaction"]
        },
        {
          key: "activeOnStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Can the player interact with character when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["availability"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate character when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the character when the device receives a signal from the selected channel"
          },
          categories: ["availability", "channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate character when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the character when the device receives a signal from the selected channel"
          },
          categories: ["availability", "channels"]
        },
        {
          key: "scope",
          option: {
            label: "Active Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the character is activated/deactivated, who does it apply to?"
          },
          categories: ["availability"]
        },
        {
          key: "radius",
          option: {
            label: "Interaction Radius",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 75, max: 300, allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: { active: true },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [{ id: "interacted", name: "Interacted with character" }]
      },
      in: {
        connections: [
          { id: "activate", name: "Activate character" },
          { id: "deactivate", name: "Deactivate character" }
        ]
      }
    },
    minimumRoleLevel: 90,
    maxOnMap: 300,
    initialMemoryCost: 50,
    subsequentMemoryCost: 50
  },
  {
    id: "checker",
    name: "Checker",
    description: "Trigger actions depending on certain conditions",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "check1", name: "Check #1" },
          {
            id: "check2",
            name: "Check #2",
            hideIf: [[{ key: "checkCount", compare: "LESS_THAN", value: 2 }]]
          },
          {
            id: "check3",
            name: "Check #3",
            hideIf: [[{ key: "checkCount", compare: "LESS_THAN", value: 3 }]]
          },
          {
            id: "check4",
            name: "Check #4",
            hideIf: [[{ key: "checkCount", compare: "LESS_THAN", value: 4 }]]
          },
          {
            id: "check5",
            name: "Check #5",
            hideIf: [[{ key: "checkCount", compare: "LESS_THAN", value: 5 }]]
          }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "checkWhenReceivedOnChannel",
          option: {
            label: "Check when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Run the check when the device receives a signal from the selected channel"
          },
          categories: ["featured"]
        },
        {
          key: "whenValidTransmitOnChannel",
          option: {
            label: "When the check passes, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the check passes, the device sends a signal on the selected channel"
          },
          categories: ["featured"]
        },
        {
          key: "whenInvalidTransmitOnChannel",
          option: {
            label: "When the check fails, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the check fails, the device sends a signal on the selected channel"
          },
          categories: ["featured"]
        },
        {
          key: "check1Type",
          option: {
            label: "Check Type",
            description: "Select what you want to check for.",
            type: "select",
            validators: [null],
            defaultValue: "item",
            props: {
              options: [
                { value: "none", name: "None" },
                { value: "item", name: "Item Amount" },
                { value: "property", name: "Value Of Property" },
                { value: "score", name: "Score Amount" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "checkCount", compare: "LESS_THAN", value: 1 }]]
          },
          categories: ["check1"]
        },
        {
          key: "check1ScoreComparison",
          option: {
            label: "Comparison",
            description: "How to compare the value of the score.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check1Type", compare: "NOT_EQUAL", value: "score" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 1 }]
            ]
          },
          categories: ["check1"]
        },
        {
          key: "check1ScoreValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check1Type", compare: "NOT_EQUAL", value: "score" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 1 }]
            ]
          },
          categories: ["check1"]
        },
        {
          key: "check1PropertyName",
          option: {
            label: "Property",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Property...",
              category: "property",
              maxLength: 64
            },
            description: "The name of the property to check for. The corresponding property must be a number to work properly.",
            hideIf: [
              [{ key: "check1Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 1 }]
            ]
          },
          categories: ["check1"]
        },
        {
          key: "check1PropertyComparison",
          option: {
            label: "Comparison",
            description: "How to compare the value of the property.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check1Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 1 }]
            ]
          },
          categories: ["check1"]
        },
        {
          key: "check1PropertyValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check1Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 1 }]
            ]
          },
          categories: ["check1"]
        },
        {
          key: "check1ItemId",
          option: {
            label: "Item",
            description: "The item whose amount to check for.",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "check1Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 1 }]
            ]
          },
          categories: ["check1"]
        },
        {
          key: "check1ItemComparison",
          option: {
            label: "Comparison",
            description: "How to compare the item amount.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check1Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 1 }]
            ]
          },
          categories: ["check1"]
        },
        {
          key: "check1ItemValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check1Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 1 }]
            ]
          },
          categories: ["check1"]
        },
        {
          key: "check2Type",
          option: {
            label: "Check Type",
            description: "Select what you want to check for.",
            type: "select",
            validators: [null],
            defaultValue: "item",
            props: {
              options: [
                { value: "none", name: "None" },
                { value: "item", name: "Item Amount" },
                { value: "property", name: "Value Of Property" },
                { value: "score", name: "Score Amount" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "checkCount", compare: "LESS_THAN", value: 2 }]]
          },
          categories: ["check2"]
        },
        {
          key: "check2ScoreComparison",
          option: {
            label: "Comparison",
            description: "How to compare the value of the score.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check2Type", compare: "NOT_EQUAL", value: "score" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 2 }]
            ]
          },
          categories: ["check2"]
        },
        {
          key: "check2ScoreValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check2Type", compare: "NOT_EQUAL", value: "score" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 2 }]
            ]
          },
          categories: ["check2"]
        },
        {
          key: "check2PropertyName",
          option: {
            label: "Property",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Property...",
              category: "property",
              maxLength: 64
            },
            description: "The name of the property to check for. The corresponding property must be a number to work properly.",
            hideIf: [
              [{ key: "check2Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 2 }]
            ]
          },
          categories: ["check2"]
        },
        {
          key: "check2PropertyComparison",
          option: {
            label: "Comparison",
            description: "How to compare the value of the property.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check2Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 2 }]
            ]
          },
          categories: ["check2"]
        },
        {
          key: "check2PropertyValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check2Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 2 }]
            ]
          },
          categories: ["check2"]
        },
        {
          key: "check2ItemId",
          option: {
            label: "Item",
            description: "The item whose amount to check for.",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "check2Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 2 }]
            ]
          },
          categories: ["check2"]
        },
        {
          key: "check2ItemComparison",
          option: {
            label: "Comparison",
            description: "How to compare the item amount.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check2Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 2 }]
            ]
          },
          categories: ["check2"]
        },
        {
          key: "check2ItemValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check2Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 2 }]
            ]
          },
          categories: ["check2"]
        },
        {
          key: "check3Type",
          option: {
            label: "Check Type",
            description: "Select what you want to check for.",
            type: "select",
            validators: [null],
            defaultValue: "item",
            props: {
              options: [
                { value: "none", name: "None" },
                { value: "item", name: "Item Amount" },
                { value: "property", name: "Value Of Property" },
                { value: "score", name: "Score Amount" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "checkCount", compare: "LESS_THAN", value: 3 }]]
          },
          categories: ["check3"]
        },
        {
          key: "check3ScoreComparison",
          option: {
            label: "Comparison",
            description: "How to compare the value of the score.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check3Type", compare: "NOT_EQUAL", value: "score" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 3 }]
            ]
          },
          categories: ["check3"]
        },
        {
          key: "check3ScoreValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check3Type", compare: "NOT_EQUAL", value: "score" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 3 }]
            ]
          },
          categories: ["check3"]
        },
        {
          key: "check3PropertyName",
          option: {
            label: "Property",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Property...",
              category: "property",
              maxLength: 64
            },
            description: "The name of the property to check for. The corresponding property must be a number to work properly.",
            hideIf: [
              [{ key: "check3Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 3 }]
            ]
          },
          categories: ["check3"]
        },
        {
          key: "check3PropertyComparison",
          option: {
            label: "Comparison",
            description: "How to compare the value of the property.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check3Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 3 }]
            ]
          },
          categories: ["check3"]
        },
        {
          key: "check3PropertyValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check3Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 3 }]
            ]
          },
          categories: ["check3"]
        },
        {
          key: "check3ItemId",
          option: {
            label: "Item",
            description: "The item whose amount to check for.",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "check3Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 3 }]
            ]
          },
          categories: ["check3"]
        },
        {
          key: "check3ItemComparison",
          option: {
            label: "Comparison",
            description: "How to compare the item amount.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check3Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 3 }]
            ]
          },
          categories: ["check3"]
        },
        {
          key: "check3ItemValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check3Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 3 }]
            ]
          },
          categories: ["check3"]
        },
        {
          key: "check4Type",
          option: {
            label: "Check Type",
            description: "Select what you want to check for.",
            type: "select",
            validators: [null],
            defaultValue: "item",
            props: {
              options: [
                { value: "none", name: "None" },
                { value: "item", name: "Item Amount" },
                { value: "property", name: "Value Of Property" },
                { value: "score", name: "Score Amount" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "checkCount", compare: "LESS_THAN", value: 4 }]]
          },
          categories: ["check4"]
        },
        {
          key: "check4ScoreComparison",
          option: {
            label: "Comparison",
            description: "How to compare the value of the score.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check4Type", compare: "NOT_EQUAL", value: "score" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 4 }]
            ]
          },
          categories: ["check4"]
        },
        {
          key: "check4ScoreValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check4Type", compare: "NOT_EQUAL", value: "score" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 4 }]
            ]
          },
          categories: ["check4"]
        },
        {
          key: "check4PropertyName",
          option: {
            label: "Property",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Property...",
              category: "property",
              maxLength: 64
            },
            description: "The name of the property to check for. The corresponding property must be a number to work properly.",
            hideIf: [
              [{ key: "check4Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 4 }]
            ]
          },
          categories: ["check4"]
        },
        {
          key: "check4PropertyComparison",
          option: {
            label: "Comparison",
            description: "How to compare the value of the property.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check4Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 4 }]
            ]
          },
          categories: ["check4"]
        },
        {
          key: "check4PropertyValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check4Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 4 }]
            ]
          },
          categories: ["check4"]
        },
        {
          key: "check4ItemId",
          option: {
            label: "Item",
            description: "The item whose amount to check for.",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "check4Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 4 }]
            ]
          },
          categories: ["check4"]
        },
        {
          key: "check4ItemComparison",
          option: {
            label: "Comparison",
            description: "How to compare the item amount.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check4Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 4 }]
            ]
          },
          categories: ["check4"]
        },
        {
          key: "check4ItemValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check4Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 4 }]
            ]
          },
          categories: ["check4"]
        },
        {
          key: "check5Type",
          option: {
            label: "Check Type",
            description: "Select what you want to check for.",
            type: "select",
            validators: [null],
            defaultValue: "item",
            props: {
              options: [
                { value: "none", name: "None" },
                { value: "item", name: "Item Amount" },
                { value: "property", name: "Value Of Property" },
                { value: "score", name: "Score Amount" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "checkCount", compare: "LESS_THAN", value: 5 }]]
          },
          categories: ["check5"]
        },
        {
          key: "check5ScoreComparison",
          option: {
            label: "Comparison",
            description: "How to compare the value of the score.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check5Type", compare: "NOT_EQUAL", value: "score" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 5 }]
            ]
          },
          categories: ["check5"]
        },
        {
          key: "check5ScoreValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check5Type", compare: "NOT_EQUAL", value: "score" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 5 }]
            ]
          },
          categories: ["check5"]
        },
        {
          key: "check5PropertyName",
          option: {
            label: "Property",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Property...",
              category: "property",
              maxLength: 64
            },
            description: "The name of the property to check for. The corresponding property must be a number to work properly.",
            hideIf: [
              [{ key: "check5Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 5 }]
            ]
          },
          categories: ["check5"]
        },
        {
          key: "check5PropertyComparison",
          option: {
            label: "Comparison",
            description: "How to compare the value of the property.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check5Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 5 }]
            ]
          },
          categories: ["check5"]
        },
        {
          key: "check5PropertyValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check5Type", compare: "NOT_EQUAL", value: "property" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 5 }]
            ]
          },
          categories: ["check5"]
        },
        {
          key: "check5ItemId",
          option: {
            label: "Item",
            description: "The item whose amount to check for.",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "check5Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 5 }]
            ]
          },
          categories: ["check5"]
        },
        {
          key: "check5ItemComparison",
          option: {
            label: "Comparison",
            description: "How to compare the item amount.",
            type: "select",
            validators: [null],
            defaultValue: "equal",
            props: {
              options: [
                { value: "less", name: "Less Than" },
                { value: "equal", name: "Equal To" },
                { value: "greater", name: "Greater Than" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check5Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 5 }]
            ]
          },
          categories: ["check5"]
        },
        {
          key: "check5ItemValue",
          option: {
            label: "Value",
            description: "The value used for comparison.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: 0,
              max: 1e18,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "check5Type", compare: "NOT_EQUAL", value: "item" }],
              [{ key: "checkCount", compare: "LESS_THAN", value: 5 }]
            ]
          },
          categories: ["check5"]
        },
        {
          key: "checkCount",
          option: {
            label: "Number Of Checks",
            description: "Run up-to 5 unique checks.",
            type: "select",
            validators: [null],
            defaultValue: 1,
            props: {
              options: [
                { name: "1", value: 1 },
                { name: "2", value: 2 },
                { name: "3", value: 3 },
                { name: "4", value: 4 },
                { name: "5", value: 5 }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "operation",
          option: {
            label: "Pass Condition",
            description: "In order for the device to transmit a pass, do all checks need to pass or just one of them?",
            type: "select",
            validators: [null],
            defaultValue: "and",
            props: {
              options: [
                { name: "All Checks Must Pass", value: "and" },
                { name: "Any Check Can Pass", value: "or" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "checkCount", compare: "LESS_THAN", value: 2 }]]
          },
          categories: ["featured"]
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [
          { id: "valid", name: "Check passes" },
          { id: "invalid", name: "Check fails" }
        ]
      },
      in: { connections: [{ id: "check", name: "Run check" }] }
    },
    initialMemoryCost: 35,
    subsequentMemoryCost: 35
  },
  {
    id: "checkpoint",
    name: "Checkpoint",
    description: "A respawn point for players",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "enabled",
          option: {
            label: "Enabled",
            type: "select",
            description: "Is the checkpoint enabled?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          minimumRoleLevel: 90
        },
        {
          key: "visibleInGame",
          option: {
            label: "Visible In-Game",
            type: "select",
            description: "Is the checkpoint visible to players in-game?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "playAudio",
          option: {
            label: "Play Audio",
            type: "select",
            description: "Play audio when the checkpoint is activated",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "visibleInGame", compare: "EQUAL", value: false }]
            ]
          }
        },
        {
          key: "maxActivations",
          option: {
            label: "Activation Limit",
            description: "How many times can a player activate this checkpoint?",
            type: "select",
            validators: [null],
            defaultValue: 0,
            props: {
              options: [
                { value: 0, name: "Infinite" },
                { value: 1, name: "Once" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "setAsActiveChannel",
          option: {
            label: "Set as active checkpoint when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Set as active checkpoint when the device receives a signal from the selected channel"
          },
          categories: ["featured", "channels"]
        },
        {
          key: "onActiveChannel",
          option: {
            label: "When checkpoint activated, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the this checkpoint is activated for a player, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 125,
            validators: [null],
            props: { min: 65, max: 300, allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: { active: false },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "setAsCheckpoint", name: "Set as active checkpoint" }
        ]
      },
      out: { connections: [{ id: "activated", name: "Checkpoint activated" }] }
    },
    maxOnMap: 256,
    initialMemoryCost: 40,
    subsequentMemoryCost: 40
  },
  {
    id: "classDesigner",
    name: "Class Designer",
    description: "Assign character to a class of characters.",
    optionSchema: {
      options: [
        {
          key: "activateChannel",
          option: {
            label: "Activate class when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate class for triggering character when the device receives a signal from the selected channel"
          }
        },
        {
          key: "allowedToUseGadget",
          option: {
            label: "Allowed To Use Gadget",
            description: "Is the character allowed to use gadget?",
            type: "select",
            validators: [null],
            defaultValue: 1,
            props: {
              options: [
                { value: 1, name: "Do Not Override" },
                { value: 2, name: "Yes" },
                { value: 3, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "immunity",
          option: {
            label: "Invincibility",
            description: "Is the character invincible?",
            type: "select",
            validators: [null],
            defaultValue: 1,
            props: {
              options: [
                { value: 1, name: "Do Not Override" },
                { value: 2, name: "Yes" },
                { value: 3, name: "No" }
              ],
              allowEmpty: false
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: { connections: [{ id: "activate", name: "Activate class" }] }
    },
    minimumRoleLevel: 90,
    maxOnMap: 512,
    initialMemoryCost: 25,
    subsequentMemoryCost: 25
  },
  {
    id: "cosmosModifier",
    name: "Cosmos Modifier",
    description: "Modify a player's Gim! For use by Team Gimkit only.",
    optionSchema: {
      options: [
        {
          key: "skinId",
          option: {
            label: "Skin ID",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "trailId",
          option: {
            label: "Trail ID",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "applyChannel",
          option: {
            label: "Apply when receiving on channel...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "resetChannel",
          option: {
            label: "Reset when receiving on channel...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "apply", name: "Apply modifier" },
          { id: "reset", name: "Reset player To selected appearance" }
        ]
      }
    },
    minimumRoleLevel: 90
  },
  {
    id: "countdown",
    name: "Countdown",
    description: "A ticking countdown for an important event",
    optionSchema: {
      options: [
        {
          key: "minutes",
          option: {
            label: "Minutes",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 0, max: 60, step: 1 }
          }
        },
        {
          key: "seconds",
          option: {
            label: "Seconds",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: 0, max: 59, step: 1 }
          }
        },
        {
          key: "startWhenReceivingFrom",
          option: {
            label: "Start When Receiving From...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "onEndTransmitOn",
          option: {
            label: "When Ends, Transmit On...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [{ type: "OnTick", name: "On Tick..." }],
      customBlocks: ["get_minutes", "get_seconds", "get_time_left_formatted"]
    },
    wireConfig: {
      out: { connections: [{ id: "ends", name: "Countdown ends" }] },
      in: { connections: [{ id: "start", name: "Start countdown" }] }
    },
    minimumRoleLevel: 90
  },
  {
    id: "counter",
    name: "Counter",
    description: "Keep track of how many times something has been done",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "property", name: "Property" },
          { id: "target", name: "Target" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "startingValue",
          option: {
            label: "Starting Value",
            description: "The value the counter starts at",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: {
              min: -999999999,
              max: 999999999,
              step: 1,
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "incrementWhenReceivingOn",
          option: {
            label: "Increment counter when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Increment the counter by 1 when the device receives a signal from the selected channel"
          },
          categories: ["featured", "channels"]
        },
        {
          key: "decrementWhenReceivingOn",
          option: {
            label: "Decrement counter when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Decrement the counter by 1 when the device receives a signal from the selected channel"
          },
          categories: ["featured", "channels"]
        },
        {
          key: "visibleInGame",
          option: {
            label: "Visible In-Game",
            type: "select",
            description: "Should the counter be visible in-game?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "scope",
          option: {
            label: "Count Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the count is updated, it applies to who?"
          },
          categories: ["featured"]
        },
        {
          key: "resetToStartingValueWhenReceivingOn",
          option: {
            label: "Reset counter when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Reset the counter to the starting value when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "updateProperty",
          option: {
            label: "Update Property",
            type: "select",
            description: "When the counter value changes, update a property",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["property"]
        },
        {
          key: "property",
          option: {
            label: "Property To Update",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Property...",
              category: "property",
              maxLength: 64
            },
            description: "The name of the property to update. Must be a number property to work correctly.",
            hideIf: [
              [{ key: "updateProperty", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["property"]
        },
        {
          key: "useTarget",
          option: {
            label: "Use Target Value",
            type: "select",
            description: "Have a target number for the counter to reach",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["target"]
        },
        {
          key: "target",
          option: {
            label: "Target Value",
            description: "The target number the counter is working towards",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { allowEmpty: false },
            hideIf: [[{ key: "useTarget", compare: "NOT_EQUAL", value: true }]]
          },
          categories: ["target"]
        },
        {
          key: "whenTargetReachedTransmitOn",
          option: {
            label: "When target reached, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the target value is reached, the device sends a signal on the selected channel",
            hideIf: [[{ key: "useTarget", compare: "NOT_EQUAL", value: true }]]
          },
          categories: ["target", "channels"]
        }
      ]
    },
    defaultState: { counter: 0 },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [{ id: "reachedTarget", name: "Target value reached" }]
      },
      in: {
        connections: [
          { id: "increment", name: "Increment counter" },
          { id: "decrement", name: "Decrement counter" },
          { id: "reset", name: "Reset counter" }
        ]
      }
    },
    maxOnMap: 512,
    initialMemoryCost: 25,
    subsequentMemoryCost: 25
  },
  {
    id: "craftingRecipe",
    name: "Crafting Recipe",
    description: "Configure recipes that can be crafted with a crafting table",
    optionSchema: {
      options: [
        {
          key: "item",
          option: {
            label: "Crafted Item",
            description: "Item crafted by this recipe",
            type: "itemId",
            validators: [null],
            props: {}
          },
          categories: ["featured"]
        },
        {
          key: "itemAmount",
          option: {
            label: "Amount To Craft",
            description: "Amount of item crafted by this recipe",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 999999999999999, step: 1, allowEmpty: false }
          },
          categories: ["featured"]
        },
        {
          key: "numberOfIngredients",
          option: {
            label: "Ingredient Count",
            description: "Number of ingredients required to craft this item",
            type: "select",
            validators: [null],
            defaultValue: 2,
            props: {
              options: [
                { name: "1", value: 1 },
                { name: "2", value: 2 },
                { name: "3", value: 3 },
                { name: "4", value: 4 },
                { name: "5", value: 5 }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "ingredient1Item",
          option: {
            label: "Ingredient #1",
            description: "Select an item required to craft this recipe",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "numberOfIngredients", compare: "LESS_THAN", value: 1 }]
            ]
          },
          categories: ["featured", "ingredients"]
        },
        {
          key: "ingredient1Amount",
          option: {
            label: "Ingredient #1 Amount",
            description: "How much of this item is required to craft this recipe?",
            type: "numberInput",
            defaultValue: 3,
            validators: [null],
            props: { min: 1, max: 999999999999999, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "numberOfIngredients", compare: "LESS_THAN", value: 1 }]
            ]
          },
          categories: ["featured", "ingredients"]
        },
        {
          key: "ingredient2Item",
          option: {
            label: "Ingredient #2",
            description: "Select an item required to craft this recipe",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "numberOfIngredients", compare: "LESS_THAN", value: 2 }]
            ]
          },
          categories: ["featured", "ingredients"]
        },
        {
          key: "ingredient2Amount",
          option: {
            label: "Ingredient #2 Amount",
            description: "How much of this item is required to craft this recipe?",
            type: "numberInput",
            defaultValue: 3,
            validators: [null],
            props: { min: 1, max: 999999999999999, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "numberOfIngredients", compare: "LESS_THAN", value: 2 }]
            ]
          },
          categories: ["featured", "ingredients"]
        },
        {
          key: "ingredient3Item",
          option: {
            label: "Ingredient #3",
            description: "Select an item required to craft this recipe",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "numberOfIngredients", compare: "LESS_THAN", value: 3 }]
            ]
          },
          categories: ["featured", "ingredients"]
        },
        {
          key: "ingredient3Amount",
          option: {
            label: "Ingredient #3 Amount",
            description: "How much of this item is required to craft this recipe?",
            type: "numberInput",
            defaultValue: 3,
            validators: [null],
            props: { min: 1, max: 999999999999999, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "numberOfIngredients", compare: "LESS_THAN", value: 3 }]
            ]
          },
          categories: ["featured", "ingredients"]
        },
        {
          key: "ingredient4Item",
          option: {
            label: "Ingredient #4",
            description: "Select an item required to craft this recipe",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "numberOfIngredients", compare: "LESS_THAN", value: 4 }]
            ]
          },
          categories: ["featured", "ingredients"]
        },
        {
          key: "ingredient4Amount",
          option: {
            label: "Ingredient #4 Amount",
            description: "How much of this item is required to craft this recipe?",
            type: "numberInput",
            defaultValue: 3,
            validators: [null],
            props: { min: 1, max: 999999999999999, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "numberOfIngredients", compare: "LESS_THAN", value: 4 }]
            ]
          },
          categories: ["featured", "ingredients"]
        },
        {
          key: "ingredient5Item",
          option: {
            label: "Ingredient #5",
            description: "Select an item required to craft this recipe",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "numberOfIngredients", compare: "LESS_THAN", value: 5 }]
            ]
          },
          categories: ["featured", "ingredients"]
        },
        {
          key: "ingredient5Amount",
          option: {
            label: "Ingredient #5 Amount",
            description: "How much of this item is required to craft this recipe?",
            type: "numberInput",
            defaultValue: 3,
            validators: [null],
            props: { min: 1, max: 999999999999999, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "numberOfIngredients", compare: "LESS_THAN", value: 5 }]
            ]
          },
          categories: ["featured", "ingredients"]
        },
        {
          key: "timeToCraftMs",
          option: {
            label: "Time To Craft",
            description: "How long does it take to craft this item?",
            type: "select",
            validators: [null],
            defaultValue: 0,
            props: {
              options: [
                { name: "Instant", value: 0 },
                { name: "1 Second", value: 1e3 },
                { name: "3 Seconds", value: 3e3 },
                { name: "5 Seconds", value: 5e3 },
                { name: "10 Seconds", value: 1e4 },
                { name: "20 Seconds", value: 2e4 },
                { name: "30 Seconds", value: 3e4 },
                { name: "1 Minute", value: 6e4 },
                { name: "2 Minutes", value: 12e4 },
                { name: "3 Minutes", value: 18e4 },
                { name: "4 Minutes", value: 24e4 },
                { name: "5 Minutes", value: 3e5 },
                { name: "10 Minutes", value: 6e5 },
                { name: "15 Minutes", value: 9e5 },
                { name: "20 Minutes", value: 12e5 }
              ],
              allowEmpty: false
            }
          },
          categories: ["details"]
        },
        {
          key: "itemDisposes",
          option: {
            label: "Item Expiration",
            type: "select",
            description: "Should the item expire after a certain amount of time?",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["details"]
        },
        {
          key: "disposeItemAfterMs",
          option: {
            label: "Item Expiration Time",
            description: "How long until the item expires?",
            type: "select",
            validators: [null],
            defaultValue: 5e3,
            props: {
              options: [
                { name: "5 Seconds", value: 5e3 },
                { name: "10 Seconds", value: 1e4 },
                { name: "20 Seconds", value: 2e4 },
                { name: "30 Seconds", value: 3e4 },
                { name: "1 Minute", value: 6e4 },
                { name: "2 Minutes", value: 12e4 },
                { name: "3 Minutes", value: 18e4 },
                { name: "4 Minutes", value: 24e4 },
                { name: "5 Minutes", value: 3e5 },
                { name: "10 Minutes", value: 6e5 },
                { name: "15 Minutes", value: 9e5 },
                { name: "20 Minutes", value: 12e5 }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "itemDisposes", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["details"]
        },
        {
          key: "group",
          option: {
            label: "Group",
            description: "If set, this recipe will only be available at tables with a matching group",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", category: "craftingGroup" }
          },
          categories: ["details"]
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Is this recipe available to craft when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "whenCraftingStartsChannel",
          option: {
            label: "When item begins crafting, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When item begins crafting, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "whenCraftedChannel",
          option: {
            label: "When item is crafted, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When item is crafted, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "activeScope",
          option: {
            label: "Active Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When activated/deactivated, who does it apply to?"
          }
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate recipe when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate recipe when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate recipe when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate recipe when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        }
      ],
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "details", name: "Details" },
          { id: "ingredients", name: "Ingredients" }
        ],
        showAllOptionsAt: "end"
      }
    },
    defaultState: { active: true },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [
          { id: "recipeStartsCrafting", name: "Recipe begins crafting" },
          { id: "recipeCrafted", name: "Recipe crafted" }
        ]
      },
      in: {
        connections: [
          { id: "activate", name: "Activate recipe" },
          { id: "deactivate", name: "Deactivate recipe" }
        ]
      }
    },
    maximumRoleLevel: 200,
    initialMemoryCost: 15,
    subsequentMemoryCost: 15
  },
  {
    id: "craftingTable",
    name: "Crafting Table",
    description: "Add crafting or farming mechanics into your map!",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "style",
          option: {
            label: "Style",
            description: "Set the look and appearance of this crafting table",
            type: "select",
            validators: [null],
            defaultValue: "craft",
            props: {
              options: [
                { name: "Crafting Table", value: "craft" },
                {
                  name: "Farming Plot",
                  value: "plant",
                  supportedMapStyles: ["topDown"]
                }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"],
          supportedMapStyles: ["topDown"]
        },
        {
          key: "craftingScope",
          option: {
            label: "Crafting Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "The status of the crafting table (crafting, ready to collect, etc) is scoped to who?"
          },
          categories: ["featured"]
        },
        {
          key: "group",
          option: {
            label: "Crafting Group",
            description: "If set, the crafting table will only be able to craft recipes with a matching group",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", category: "craftingGroup" }
          },
          categories: ["featured"]
        },
        {
          key: "useCrafterCollectionAdvantage",
          option: {
            label: "Allow Crafter To Collect First",
            type: "select",
            description: "When an item is crafted, does the crafter get the first chance to collect it?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "channelItemBeginsCrafting",
          option: {
            label: "When item begins crafting, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When an item begins crafting, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "channelItemFinishesCrafting",
          option: {
            label: "When item finishes crafting, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When an item finishes crafting, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "channelItemCollected",
          option: {
            label: "When item is collected, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When an item is collected, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "channelItemDisposed",
          option: {
            label: "When item expires, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When an item expires, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        }
      ]
    },
    defaultState: { status: "idle" },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [
          { id: "itemBeginsCrafting", name: "Item begins crafting" },
          { id: "itemFinishesCrafting", name: "Item crafted" },
          { id: "itemCollected", name: "Item collected" },
          { id: "itemDisposed", name: "Item expires" }
        ]
      }
    },
    maxOnMap: 100,
    initialMemoryCost: 250,
    subsequentMemoryCost: 250
  },
  {
    id: "damageBoost",
    name: "Damage Boost",
    description: "Increase the amount of damage a player deals",
    optionSchema: {
      options: [
        {
          key: "multiplier",
          option: {
            label: "Boost Amount",
            description: "When a deals damage, multiply the amount by this value",
            type: "select",
            validators: [null],
            defaultValue: 2,
            props: {
              options: [
                { name: "0.25x", value: 0.25 },
                { name: "0.5x", value: 0.5 },
                { name: "0.75x", value: 0.75 },
                { name: "1x", value: 1 },
                { name: "1.25x", value: 1.25 },
                { name: "1.5x", value: 1.5 },
                { name: "1.75x", value: 1.75 },
                { name: "2x", value: 2 },
                { name: "2.5x", value: 2.5 },
                { name: "3x", value: 3 },
                { name: "4x", value: 4 },
                { name: "5x", value: 5 },
                { name: "6x", value: 6 },
                { name: "7x", value: 7 },
                { name: "8x", value: 8 },
                { name: "9x", value: 9 },
                { name: "10x", value: 10 }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "durationMS",
          option: {
            label: "Boost Duration",
            description: "How long the boost lasts for",
            type: "select",
            validators: [null],
            defaultValue: 3e4,
            props: {
              options: [
                { name: "Forever", value: -1 },
                { name: "5 Seconds", value: 5e3 },
                { name: "10 Seconds", value: 1e4 },
                { name: "20 Seconds", value: 2e4 },
                { name: "30 Seconds", value: 3e4 },
                { name: "1 Minute", value: 6e4 },
                { name: "2 Minutes", value: 12e4 },
                { name: "3 Minutes", value: 18e4 },
                { name: "5 Minutes", value: 3e5 }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate boost when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the damage boost when the device receives a signal from the selected channel"
          }
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate boost when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the damage boost when the device receives a signal from the selected channel"
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate damage boost" },
          { id: "deactivate", name: "Deactivate damage boost" }
        ]
      }
    },
    maxOnMap: 32,
    initialMemoryCost: 30,
    subsequentMemoryCost: 30
  },
  {
    id: "damager",
    name: "Damager",
    description: "Deal a specific amount of a damage to a player",
    optionSchema: {
      options: [
        {
          key: "amount",
          option: {
            label: "Damage Amount",
            description: "The amount of damage to deal to the player",
            type: "numberInput",
            defaultValue: 15,
            validators: [null],
            props: { min: 1, max: 1e4, step: 1, allowEmpty: false }
          }
        },
        {
          key: "damageOnChannel",
          option: {
            label: "Damage player when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Damage the triggering player when the device receives a signal from the selected channel"
          }
        },
        {
          key: "knockoutActivityFeedMessage",
          option: {
            label: "Knockout Activity Feed Message",
            description: "When the damage applied knocks out a player, this message will be displayed in the activity feed. Use {name} to insert the player's name.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: true,
      triggers: [{ type: "wire", name: "On wire pulse..." }],
      customBlocks: ["damage_custom"]
    },
    wireConfig: {
      in: {
        connections: [
          { id: "damage", name: "Damage player" },
          { id: "codeGrid", name: "Run wire pulse block" }
        ]
      }
    },
    maxOnMap: 128,
    initialMemoryCost: 30,
    subsequentMemoryCost: 30
  },
  {
    id: "dialogue",
    name: "Dialogue",
    description: "A dialogue box that can be interacted with to create rich conversations",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "actions", name: "Actions" },
          { id: "appearance", name: "Appearance" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "message",
          option: {
            label: "Message",
            description: "Text content to display in the dialogue box",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 512 }
          },
          categories: ["featured"]
        },
        {
          key: "group",
          option: {
            label: "Dialogue Group",
            description: "Set a group to show actions from matching Dialogue Action Devices",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", category: "dialogue" }
          },
          categories: ["featured"]
        },
        {
          key: "action1Text",
          option: {
            label: "Action #1",
            description: "Text to display on action button #1",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 64 }
          },
          categories: ["featured", "actions"]
        },
        {
          key: "action1Channel",
          option: {
            label: "Action #1 Channel",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the first action button is clicked, the device sends a signal on the selected channel"
          },
          categories: ["featured", "actions"]
        },
        {
          key: "action2Text",
          option: {
            label: "Action #2",
            description: "Text to display on action button #2",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 64 }
          },
          categories: ["actions"]
        },
        {
          key: "action2Channel",
          option: {
            label: "Action #2 Channel",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the second action button is clicked, the device sends a signal on the selected channel"
          },
          categories: ["actions"]
        },
        {
          key: "action3Text",
          option: {
            label: "Action #3",
            description: "Text to display on action button #3",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 64 }
          },
          categories: ["actions"]
        },
        {
          key: "action3Channel",
          option: {
            label: "Action #3 Channel",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the third action button is clicked, the device sends a signal on the selected channel"
          },
          categories: ["actions"]
        },
        {
          key: "action4Text",
          option: {
            label: "Action #4",
            description: "Text to display on action button #4",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 64 }
          },
          categories: ["actions"]
        },
        {
          key: "action4Channel",
          option: {
            label: "Action #4 Channel",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the fourth action button is clicked, the device sends a signal on the selected channel"
          },
          categories: ["actions"]
        },
        {
          key: "font",
          option: {
            label: "Font",
            description: "Select the font for the text",
            type: "select",
            validators: [null],
            defaultValue: "Rubik",
            props: {
              options: [
                { value: "Rubik", name: "Rubik" },
                { value: "Roboto", name: "Roboto" },
                { value: "Staatliches", name: "Staatliches" },
                { value: "Galindo", name: "Galindo" },
                { value: "Kalam", name: "Kalam" },
                { value: "Bangers", name: "Bangers" },
                { value: "Fugaz One", name: "Fugaz One" },
                { value: "Outfit", name: "Outfit" },
                { value: "PT Mono", name: "PT Mono" },
                { value: "Space Grotesk", name: "Space Grotesk" },
                { value: "Lobster", name: "Lobster" },
                { value: "Zeyada", name: "Zeyada" },
                { value: "Titan One", name: "Titan One" },
                { value: "Rye", name: "Rye" },
                { value: "Caprasimo", name: "Caprasimo" }
              ],
              allowEmpty: false
            }
          },
          categories: ["appearance"]
        },
        {
          key: "character",
          option: {
            label: "Gim",
            description: "Set a Gim speaking the dialogue",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          },
          categories: ["appearance"],
          minimumRoleLevel: 90
        },
        {
          key: "typewriter",
          option: {
            label: "Typewriter Effect",
            type: "select",
            description: "Write out the message with a typewriter effect",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["appearance"]
        },
        {
          key: "darkenBackground",
          option: {
            label: "Darken Background",
            type: "select",
            description: "Darken the background behind the dialogue box",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["appearance"]
        },
        {
          key: "openChannel",
          option: {
            label: "Open when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Open when the device receives a signal from the selected channel"
          },
          categories: ["featured", "channels"]
        },
        {
          key: "closeChannel",
          option: {
            label: "Close when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Close when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "whenClosedChannel",
          option: {
            label: "When when closed, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When when the dialogue is closed, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "open", name: "Open dialogue" },
          { id: "close", name: "Close dialogue" }
        ]
      },
      out: {
        connections: [
          { id: "callToAction1", name: "First call to action clicked" },
          { id: "callToAction2", name: "Second call to action clicked" },
          { id: "callToAction3", name: "Third call to action clicked" },
          { id: "callToAction4", name: "Fourth call to action clicked" },
          { id: "closed", name: "Dialogue closed" }
        ]
      }
    },
    minimumRoleLevel: 90,
    maxOnMap: 200,
    initialMemoryCost: 50,
    subsequentMemoryCost: 50
  },
  {
    id: "dialogueAction",
    name: "Dialogue Action",
    description: "An action button that can be clicked on in the Dialogue Device",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "activeAndScope", name: "Active and Scope" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "text",
          option: {
            label: "Action Text",
            description: "Text displayed on the action button",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 64 }
          },
          categories: ["featured"]
        },
        {
          key: "group",
          option: {
            label: "Dialogue Group",
            description: "This action will be displayed on all Dialogue devices with the same group name",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", category: "dialogue" }
          },
          categories: ["featured"]
        },
        {
          key: "selectChannel",
          option: {
            label: "When action clicked, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the action is clicked, the device sends a signal on the selected channel"
          },
          categories: ["featured"]
        },
        {
          key: "scope",
          option: {
            label: "Active Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the action is activated/deactivated, who does it apply to?"
          },
          categories: ["activeAndScope"]
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active on Game Start",
            type: "select",
            description: "Is this action active when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["activeAndScope"]
        },
        {
          key: "deactivateAfterUse",
          option: {
            label: "Deactivate After Use",
            type: "select",
            description: "Deactivate the action after it is clicked",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["activeAndScope"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the action when the device receives a signal from the selected channel"
          },
          categories: ["activeAndScope"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the action when the device receives a signal from the selected channel"
          },
          categories: ["activeAndScope"]
        }
      ]
    },
    defaultState: { active: false },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate action" },
          { id: "deactivate", name: "Deactivate action" }
        ]
      },
      out: { connections: [{ id: "selected", name: "Action clicked" }] }
    },
    minimumRoleLevel: 90,
    maxOnMap: 512,
    initialMemoryCost: 25,
    subsequentMemoryCost: 25
  },
  {
    id: "droppedItem",
    name: "Dropped Item",
    optionSchema: {
      options: [
        {
          key: "itemId",
          option: {
            label: "Item",
            type: "itemId",
            validators: [null],
            props: {}
          }
        },
        {
          key: "amount",
          option: {
            label: "Amount",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { allowEmpty: false }
          }
        },
        {
          key: "placedByCharacterId",
          option: {
            label: "Placed By Character ID",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "useCurrentClipCount",
          option: {
            label: "Use Current Clip Count",
            type: "select",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "currentClip",
          option: {
            label: "Amount",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { allowEmpty: false }
          }
        },
        {
          key: "useCurrentDurability",
          option: {
            label: "Use Current Durability",
            type: "select",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "currentDurability",
          option: {
            label: "Amount",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { allowEmpty: false }
          }
        },
        {
          key: "decay",
          option: {
            label: "Amount",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { allowEmpty: false }
          }
        }
      ]
    },
    defaultState: {
      visible: false,
      amount: 0,
      canBeCollected: false,
      alreadyCollected: false,
      fallY: 0
    },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    }
  },
  {
    id: "endGame",
    name: "End Game",
    description: "Nothing lasts forever. End the game with this device",
    optionSchema: {
      options: [
        {
          key: "activateWhenReceivingFrom",
          option: {
            label: "End the game when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "End the game when the device receives a signal from the selected channel"
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: { connections: [{ id: "endGame", name: "End the game" }] }
    },
    maxOnMap: 16
  },
  {
    id: "endOfGameWidget",
    name: "End of Game Widget",
    description: "Create widgets to show information at the end of the game",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "channelsAndActive", name: "Channels & Active" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "widgetType",
          option: {
            label: "Widget Type",
            description: "What type of the widget should be display?",
            type: "select",
            validators: [null],
            defaultValue: "Statistic",
            props: {
              options: [
                { value: "Statistic", name: "Statistic" },
                { value: "Image", name: "Image", minimumRoleLevel: 90 },
                { value: "Game Time", name: "Game Time" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "widgetPlacement",
          option: {
            label: "Widget Placement",
            description: "Featured widgets sit above all content. Primary widgets sit above the leaderboard. Secondary widgets sit beneath the leaderboard.",
            type: "select",
            validators: [null],
            defaultValue: "Primary",
            props: {
              options: [
                { value: "Featured", name: "Featured" },
                { value: "Primary", name: "Primary" },
                { value: "Secondary", name: "Secondary" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "statisticProperty",
          option: {
            label: "Property",
            description: "Name of the property used for the statistic. Should match up with a Property Device.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", category: "property" },
            hideIf: [
              [{ key: "widgetType", compare: "NOT_EQUAL", value: "Statistic" }]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "gameTimeLabel",
          option: {
            label: "Label",
            description: "Text to display alongside the game time",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." },
            hideIf: [
              [{ key: "widgetType", compare: "NOT_EQUAL", value: "Game Time" }]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "statisticLabel",
          option: {
            label: "Label",
            description: "Text to display alongside the statistic",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." },
            hideIf: [
              [{ key: "widgetType", compare: "NOT_EQUAL", value: "Statistic" }]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "imageStyle",
          option: {
            label: "Image Style",
            description: "How to display the image?",
            type: "select",
            validators: [null],
            defaultValue: "Contain",
            props: {
              options: [
                { value: "Contain", name: "Contain" },
                { value: "Cover", name: "Cover" },
                { value: "fullWidth", name: "Full Width" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "widgetType", compare: "NOT_EQUAL", value: "Image" }]
            ]
          },
          minimumRoleLevel: 90
        },
        {
          key: "imageUrl",
          option: {
            label: "Image URL",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." },
            hideIf: [
              [{ key: "widgetType", compare: "NOT_EQUAL", value: "Image" }]
            ]
          },
          minimumRoleLevel: 90
        },
        {
          key: "imageHeight",
          option: {
            label: "Image Height",
            description: "How to display the image?",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 50, max: 300, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "widgetType", compare: "NOT_EQUAL", value: "Image" }],
              [{ key: "imageStyle", compare: "EQUAL", value: "fullWidth" }]
            ]
          },
          minimumRoleLevel: 90
        },
        {
          key: "imageBackgroundColor",
          option: {
            label: "Image Color",
            type: "color",
            defaultValue: "#ffffff",
            validators: [null],
            hideIf: [
              [{ key: "widgetType", compare: "NOT_EQUAL", value: "Image" }],
              [{ key: "imageStyle", compare: "EQUAL", value: "fullWidth" }]
            ]
          },
          minimumRoleLevel: 90
        },
        {
          key: "showTo",
          option: {
            label: "Show To",
            description: "Who should see the widget at the end of the game?",
            type: "select",
            validators: [null],
            defaultValue: "all",
            props: {
              options: [
                { value: "all", name: "Everybody" },
                { value: "nonGameOwners", name: "Players" },
                { value: "gameOwners", name: "Game Host Only" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "showForModeType",
          option: {
            label: "Allowed Mode Type",
            description: "Will only show when the mode type matches",
            type: "select",
            validators: [null],
            defaultValue: "all",
            props: {
              options: [
                { name: "All", value: "all" },
                { name: "Live Game", value: "liveGame" },
                { name: "Assignment", value: "assignment" }
              ],
              allowEmpty: false
            }
          },
          minimumRoleLevel: 90
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Is this widget ready to be shown at the end of the game by default?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["channelsAndActive"]
        },
        {
          key: "scope",
          option: {
            label: "Active Scope",
            type: "select",
            defaultValue: "player",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When activated/deactivated, who does it apply to?"
          },
          categories: ["channelsAndActive"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the widget when the device receives a signal from the selected channel"
          },
          categories: ["channelsAndActive"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the widget when the device receives a signal from the selected channel"
          },
          categories: ["channelsAndActive"]
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate widget" },
          { id: "deactivate", name: "Deactivate widget" }
        ]
      }
    },
    maxOnMap: 24
  },
  {
    id: "flag",
    name: "Flag",
    description: "A flag that can be carried around and used for Capture The Flag games",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "customization", name: "Customization" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "flagColor",
          option: {
            label: "Flag Color",
            description: "The color of the flag that is spawned",
            type: "select",
            validators: [null],
            defaultValue: "black",
            props: {
              options: [
                { name: "Black", value: "black" },
                { name: "Blue", value: "blue" },
                { name: "Green", value: "green" },
                { name: "Orange", value: "orange" },
                { name: "Purple", value: "purple" },
                { name: "Red", value: "red" },
                { name: "White", value: "white" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "owningTeamId",
          option: {
            label: "Protecting Team",
            description: "The team that this flag belongs to. Players on this team won't be able to pick up the flag.",
            type: "select",
            validators: [null],
            defaultValue: "1",
            props: {
              options: [
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "useSafeZone",
          option: {
            label: "Use Safe Zone",
            type: "select",
            description: "If enabled, an area will exist around the flag that will prevent the protecting team from entering it",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "automaticBackToBaseAfterSeconds",
          option: {
            label: "Automatic Return To Base",
            description: "How long (in seconds) the flag will return to the base after it is dropped",
            type: "numberInput",
            defaultValue: 15,
            validators: [null],
            props: { min: 1, max: 999, step: 1, allowEmpty: false }
          },
          categories: ["customization"]
        },
        {
          key: "otherTeamPickupAlerts",
          option: {
            label: "Pickup Alert",
            type: "select",
            description: "Send an alert to the protecting team when the flag is picked up",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["customization"]
        },
        {
          key: "onCapturedBroadcastOnChannel",
          option: {
            label: "When flag captured, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the flag is captured, the device sends a signal on the selected channel"
          },
          categories: ["featured", "channels"]
        },
        {
          key: "captureWhenReceiveFromChannel",
          option: {
            label: "Capture the flag when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Capture the flag and return it to the base when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "onPickupBroadcastOnChannel",
          option: {
            label: "When flag picked up, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the flag is picked up, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "onPickupFromBaseBroadcastOnChannel",
          option: {
            label: "When flag picked up from the base, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the flag is picked up from the base, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "onDropBroadcastOnChannel",
          option: {
            label: "When flag dropped, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the flag is dropped, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "dropWhenReceiveFromChannel",
          option: {
            label: "Drop the flag when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Force the flag to drop when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "onBackToBaseBroadcastOnChannel",
          option: {
            label: "When flag returned to base, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the flag is returned to base, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "onBackToBaseManuallyBroadcastOnChannel",
          option: {
            label: "When flag returned to the base manually, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the flag is returned to the base manually, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "backToBaseWhenReceiveFromChannel",
          option: {
            label: "Return flag to base when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Force the flag to return to base when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "radius",
          option: {
            label: "Hidden Zone Radius",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 150, max: 1e3, step: 1, allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: { currentState: "idle", x: 0, y: 0 },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [
          { id: "captured", name: "Flag captured" },
          { id: "dropped", name: "Flag dropped" },
          { id: "pickedUp", name: "Flag picked up" },
          { id: "returnedToBase", name: "Flag returned to base" },
          {
            id: "returnedToBaseManually",
            name: "Flag manually returned to base"
          },
          { id: "pickedUpFromBase", name: "Flag picked up from base" }
        ]
      },
      in: {
        connections: [
          { id: "capture", name: "Capture flag" },
          { id: "drop", name: "Drop flag" },
          { id: "backToBase", name: "Return flag to base" }
        ]
      }
    },
    maxOnMap: 6,
    initialMemoryCost: 450,
    subsequentMemoryCost: 450,
    supportedMapStyles: ["topDown"]
  },
  {
    id: "captureFlagZone",
    name: "Flag Capture Zone",
    description: "Automatically capture a flag when a player enters the zone with one",
    optionSchema: {
      categories: {
        categories: [
          { id: "Featured", name: "Featured" },
          { name: "Channels", id: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "flagColor",
          option: {
            label: "Flag Color",
            description: "The color of the flag the zone listens for. When a player enters the zone with a flag of this color, the flag is captured.",
            type: "select",
            validators: [null],
            defaultValue: "black",
            props: {
              options: [
                { name: "Black", value: "black" },
                { name: "Blue", value: "blue" },
                { name: "Green", value: "green" },
                { name: "Orange", value: "orange" },
                { name: "Purple", value: "purple" },
                { name: "Red", value: "red" },
                { name: "White", value: "white" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured"]
        },
        {
          key: "activeOnStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "If enabled, the zone will be active when the game starts",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured"]
        },
        {
          key: "visibleInGame",
          option: {
            label: "Visible In Game",
            type: "select",
            description: "Is the zone visible to players during the game?",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured"]
        },
        {
          key: "color",
          option: {
            label: "Background Color",
            type: "color",
            defaultValue: "#FFFFFF",
            validators: [null]
          }
        },
        {
          key: "whenCapturedTransmitOnChannel",
          option: {
            label: "When flag is captured in the zone, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the flag is captured in the zone, the device sends a signal on the selected channel"
          },
          categories: ["Featured", "Channels"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate zone when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the zone when the device receives a signal from the selected channel"
          },
          categories: ["Channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate zone when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the zone when the device receives a signal from the selected channel"
          },
          categories: ["Channels"]
        },
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 400,
            validators: [null],
            props: { min: 100, max: 7e3, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "height",
          option: {
            label: "Height",
            type: "numberInput",
            defaultValue: 300,
            validators: [null],
            props: { min: 100, max: 7e3, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "rotation",
          option: {
            label: "Angle",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: { connections: [{ id: "captured", name: "Flag captured" }] },
      in: {
        connections: [
          { id: "activate", name: "Activate zone" },
          { id: "deactivate", name: "Deactivate zone" }
        ]
      }
    },
    maxOnMap: 64,
    initialMemoryCost: 300,
    subsequentMemoryCost: 200,
    supportedMapStyles: ["topDown"]
  },
  {
    id: "guiDevice",
    name: "Game Overlay",
    description: "Display text or a button on-screen for players during the game",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "channels", name: "Channels" },
          { id: "scope", name: "Scope" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "type",
          option: {
            label: "Overlay Type",
            description: "Type of overlay to show",
            type: "select",
            validators: [null],
            defaultValue: "Text",
            props: {
              options: [
                { name: "Text", value: "Text" },
                { name: "Button", value: "Button" },
                { name: "Tracked Item", value: "Tracked Item" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "position",
          option: {
            label: "Overlay Position",
            description: "Which corner of the screen the overlay will appear in",
            type: "select",
            validators: [null],
            defaultValue: "Top Left",
            props: {
              options: [
                { name: "Top Left", value: "Top Left" },
                { name: "Top Right", value: "Top Right" },
                { name: "Bottom Left", value: "Bottom Left" },
                { name: "Bottom Right", value: "Bottom Right" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "text",
          option: {
            label: "Overlay Text",
            description: "The default text shown on the overlay",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 64 },
            hideIf: [
              [{ key: "type", compare: "EQUAL", value: "Tracked Item" }]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "trackedItemId",
          option: {
            label: "Tracked Item",
            description: "The item & amount to show on the overlay",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "type", compare: "NOT_EQUAL", value: "Tracked Item" }]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "showTrackedItemMaximumAmount",
          option: {
            label: "Show Tracked Item Maximum Amount",
            type: "select",
            description: "If enabled, the maximum amount of the tracked item will be shown (e.g: 70/100)",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "type", compare: "NOT_EQUAL", value: "Tracked Item" }]
            ]
          }
        },
        {
          key: "whenButtonClickedTransmitOnChannel",
          option: {
            label: "When button clicked, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player clicks the overlay button, the device sends a signal on the selected channel",
            hideIf: [[{ key: "type", compare: "NOT_EQUAL", value: "Button" }]]
          },
          categories: ["featured", "channels"]
        },
        {
          key: "showOnGameStart",
          option: {
            label: "Visible On Game Start",
            type: "select",
            description: "Is the overlay visible when the game begins?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "color",
          option: {
            label: "Overlay Color",
            description: "Background color of the overlay",
            type: "color",
            defaultValue: "#ffffff",
            validators: [null],
            hideIf: [[{ key: "type", compare: "EQUAL", value: "Button" }]]
          }
        },
        {
          key: "contentScope",
          option: {
            label: "Content Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the overlay content is updated, who is it applied to?",
            hideIf: [
              [{ key: "type", compare: "EQUAL", value: "Tracked Item" }]
            ]
          },
          categories: ["scope"]
        },
        {
          key: "visibilityScope",
          option: {
            label: "Visibility Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the overlay is shown/hidden, who does it apply to?"
          },
          categories: ["scope"]
        },
        {
          key: "showWhenReceivingFromChannel",
          option: {
            label: "Show overlay when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Show the overlay when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "hideWhenReceivingFromChannel",
          option: {
            label: "Hide overlay when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Hide the overlay when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        }
      ]
    },
    defaultState: { activationTime: null, text: "" },
    codeGridSchema: {
      allowChannelGrids: true,
      triggers: [],
      customBlocks: ["set_gui_text"]
    },
    wireConfig: {
      out: { connections: [{ id: "buttonPressed", name: "Button pressed" }] },
      in: {
        connections: [
          { id: "show", name: "Show overlay" },
          { id: "hide", name: "Hide overlay" }
        ]
      }
    },
    maxOnMap: 32,
    initialMemoryCost: 175,
    subsequentMemoryCost: 175
  },
  {
    id: "healthGranter",
    name: "Health Granter",
    description: "Grant a player health & shield",
    optionSchema: {
      options: [
        {
          key: "amount",
          option: {
            label: "Amount",
            description: "Amount of health or shield to grant",
            type: "numberInput",
            defaultValue: 25,
            validators: [null],
            props: { min: 1, max: 200, step: 1, allowEmpty: false }
          }
        },
        {
          key: "grantType",
          option: {
            label: "Grant Type",
            description: "Grant just health, just shield, or health first, then shield (if leftovers)",
            type: "select",
            validators: [null],
            defaultValue: "health",
            props: {
              options: [
                { value: "health", name: "Health" },
                { value: "shield", name: "Shield" },
                { value: "healthFirst", name: "Health, Then Shield" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "grantChannel",
          option: {
            label: "Grant health when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Grant health to the triggering player when the device receives a signal from the selected channel"
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: { connections: [{ id: "grant", name: "Grant player health" }] }
    },
    maxOnMap: 100,
    initialMemoryCost: 20,
    subsequentMemoryCost: 20
  },
  {
    id: "imageBillboard",
    name: "Image",
    description: "Place down images from the web",
    optionSchema: {
      options: [
        {
          key: "imageUrl",
          option: {
            label: "Image URL",
            type: "textInput",
            defaultValue: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=600",
            validators: [null],
            props: { placeholder: "Enter image url here..." }
          }
        },
        {
          key: "frameColor",
          option: {
            label: "Frame Color",
            type: "select",
            validators: [],
            defaultValue: "#212121",
            props: {
              options: [
                { name: "Dark Gray", value: "#212121" },
                { name: "White", value: "#fafafa" },
                { name: "Blue Gray", value: "#455a64" },
                { name: "Purple", value: "#8A24E0" },
                { name: "Green", value: "#1b5e20" },
                { name: "Blue", value: "#01579b" },
                { name: "Red", value: "#c62828" },
                { name: "Transparent", value: "Transparent" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "scope",
          option: {
            label: "Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "alpha",
          option: {
            label: "Alpha",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 0.1, max: 1, step: 0.01, allowEmpty: false }
          }
        },
        {
          key: "visibleOnGameStart",
          option: {
            label: "Visible On Game Start",
            type: "select",
            validators: [null],
            defaultValue: "Yes",
            props: {
              options: [
                { name: "Yes", value: "Yes" },
                { name: "No", value: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "showWhenReceivingFrom",
          option: {
            label: "Show When Receiving From...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "hideWhenReceivingFrom",
          option: {
            label: "Hide When Receiving From...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "visibleDuringPhase",
          option: {
            label: "Visible During Phase",
            type: "select",
            validators: [null],
            defaultValue: "all",
            props: {
              options: [
                { name: "All", value: "all" },
                { name: "Game", value: "game" },
                { name: "Pre-Game", value: "preGame" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 50, max: 800 },
            hidden: true
          }
        },
        {
          key: "height",
          option: {
            label: "Height",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 50, max: 800 },
            hidden: true
          }
        },
        {
          key: "rotation",
          option: {
            label: "Rotation",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: -360, max: 360 },
            hidden: true
          }
        }
      ]
    },
    defaultState: { imageUrl: "", frameColor: "", visible: true },
    codeGridSchema: {
      allowChannelGrids: true,
      triggers: [{ type: "wire", name: "On wire pulse..." }],
      customBlocks: ["set_image", "set_frame_color"]
    },
    wireConfig: {
      in: {
        connections: [
          { id: "show", name: "Show image" },
          { id: "hide", name: "Hide image" },
          { id: "codeGrid", name: "Run wire pulse block" }
        ]
      }
    },
    minimumRoleLevel: 90
  },
  {
    id: "inventoryItemManager",
    name: "Inventory Item Manager",
    description: "Keep track of how much of a certain item a player has",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "behavior", name: "Behavior" },
          { id: "property", name: "Properties" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "itemId",
          option: {
            label: "Item",
            description: "The item this device manages",
            type: "itemId",
            validators: [null],
            props: {}
          },
          categories: ["featured"]
        },
        {
          key: "useAsDefault",
          option: {
            label: "Use By Default",
            type: "select",
            description: "Is this manager active for players by default?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "activateWhenReceivingFrom",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate this manager for the triggering player when the device receives a signal from the selected channel"
          },
          categories: ["featured", "channels"]
        },
        {
          key: "useMaxAmount",
          option: {
            label: "Set Maximum Amount",
            type: "select",
            description: "Set a specific maximum amount a player is allowed to hold of this item",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["behavior"]
        },
        {
          key: "maxAmount",
          option: {
            label: "Maximum Amount",
            description: "The maximum amount a player is allowed to hold of this item",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 0, max: 999999999999999, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "useMaxAmount", value: true, compare: "NOT_EQUAL" }]
            ]
          },
          categories: ["behavior"]
        },
        {
          key: "overrideRespawnBehavior",
          option: {
            label: "Override Respawn Behavior",
            type: "select",
            description: "Override the default respawn behavior of the item",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["behavior"]
        },
        {
          key: "respawnBehavior",
          option: {
            label: "Respawn Behavior",
            description: "Decide if the item should be deleted or kept when a player respawns",
            type: "select",
            validators: [null],
            defaultValue: "Keep",
            props: {
              options: [
                { name: "Keep", value: "Keep" },
                { name: "Delete", value: "Delete" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "overrideRespawnBehavior",
                  compare: "NOT_EQUAL",
                  value: true
                }
              ]
            ]
          },
          categories: ["behavior"]
        },
        {
          key: "showAlert",
          option: {
            label: "Show Item Alerts",
            type: "select",
            description: "When a user collects this item, is an alert shown?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "customItemName",
          option: {
            label: "Custom Item Name",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          },
          minimumRoleLevel: 90
        },
        {
          key: "customItemDescription",
          option: {
            label: "Custom Item Description",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          },
          minimumRoleLevel: 90
        },
        {
          key: "clearItemFromInventoryOnChannel",
          option: {
            label: "Clear item from inventory when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Remove all of this item from a player's inventory when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "updateProperty",
          option: {
            label: "Update Property",
            type: "select",
            description: "When the item amount changes, update a property",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["property"]
        },
        {
          key: "property",
          option: {
            label: "Property To Update",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Property...",
              category: "property",
              maxLength: 64
            },
            description: "The name of the property to update. Must be a number property to work correctly.",
            hideIf: [
              [{ key: "updateProperty", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["property"]
        }
      ]
    },
    defaultState: { active: false },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [
        {
          type: "WHEN_AMOUNT_OF_ITEM_CHANGES",
          name: "When amount of item changes..."
        }
      ],
      customBlocks: ["get_amount"]
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate manager" },
          { id: "clearFromInventory", name: "Clear item from inventory" }
        ]
      }
    },
    maxOnMap: 75,
    initialMemoryCost: 215,
    subsequentMemoryCost: 215
  },
  {
    id: "itemGranter",
    name: "Item Granter",
    description: "Grant/remove items from a player's inventory",
    optionSchema: {
      categories: {
        categories: [{ id: "featured", name: "Featured" }],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "itemId",
          option: {
            label: "Item To Grant",
            description: "Select the item granted to the player",
            type: "itemId",
            validators: [null],
            props: {}
          },
          categories: ["featured"]
        },
        {
          key: "itemChange",
          option: {
            label: "Amount To Grant",
            description: "How much of the selected item should be granted/taken away?",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: {
              min: -999999999999999,
              max: 999999999999999,
              step: 1,
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "grantWhenReceivingFromChannel",
          option: {
            label: "Grant item when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Grant the item to the triggering player when the device receives a signal from the selected channel"
          },
          categories: ["featured"]
        },
        {
          key: "fullStrategy",
          option: {
            label: "Grant Strategy",
            description: "When the inventory is full, how should the item be granted?",
            type: "select",
            validators: [null],
            defaultValue: "overflow",
            props: {
              options: [
                { name: "Overflow", value: "overflow" },
                { name: "Grant Safe Amount", value: "safeAmount" },
                { name: "Don't Grant", value: "noGrant" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "initialWeaponAmmo",
          option: {
            label: "Initial Gadget Projectiles",
            description: "If granting a gadget, set a custom amount of projectiles loaded into the gadget by default. If left empty, the gadget's default amount will be used.",
            type: "numberInput",
            validators: [null],
            props: { min: 0, max: 999, step: 1, allowEmpty: true }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: true,
      triggers: [
        {
          type: "WHEN_GRANTED",
          name: "When item granted to player...",
          blockedCustomBlocks: ["grant", "grant_custom"]
        },
        { type: "wire", name: "On wire pulse..." }
      ],
      customBlocks: ["grant", "grant_custom"]
    },
    wireConfig: {
      in: {
        connections: [
          { id: "grant", name: "Grant item" },
          { id: "codeGrid", name: "Run wire pulse block" }
        ]
      }
    },
    maxOnMap: 300,
    initialMemoryCost: 35,
    subsequentMemoryCost: 35
  },
  {
    id: "itemImage",
    name: "Item Image",
    description: "Display an image of an item on the map",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "availability", name: "Availability" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "itemId",
          option: {
            label: "Item",
            description: "Select an item to display an image of",
            type: "itemId",
            validators: [null],
            props: {}
          },
          categories: ["featured"]
        },
        {
          key: "outline",
          option: {
            label: "Outline",
            type: "select",
            description: "Show an outline around the item",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "outlineColor",
          option: {
            label: "Outline Color",
            description: "Set the color of item's outline",
            type: "color",
            defaultValue: "#ffffff",
            validators: [null],
            hideIf: [[{ key: "outline", compare: "NOT_EQUAL", value: true }]]
          },
          categories: ["featured"]
        },
        {
          key: "outlineSize",
          option: {
            label: "Outline Size",
            description: "Select what strategy to use for the size of the outline",
            type: "select",
            validators: [null],
            defaultValue: "automatic",
            props: {
              options: [
                { value: "automatic", name: "Automatic" },
                { value: "custom", name: "Custom" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "outline", compare: "NOT_EQUAL", value: true }]]
          },
          categories: ["featured"]
        },
        {
          key: "customOutlineSize",
          option: {
            label: "Custom Outline Size",
            description: "Set the size of the item outline",
            type: "numberInput",
            defaultValue: 3,
            validators: [null],
            props: { min: 1, max: 50, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "outline", compare: "NOT_EQUAL", value: true }],
              [{ key: "outlineSize", compare: "NOT_EQUAL", value: "custom" }]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "visibleOnGameStart",
          option: {
            label: "Visible On Game Start",
            type: "select",
            description: "Is the item image visible when the game begins?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["availability"]
        },
        {
          key: "scope",
          option: {
            label: "Visibility Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the item image is shown/hidden, who does it apply to?"
          },
          categories: ["availability"]
        },
        {
          key: "showChannel",
          option: {
            label: "Show when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Show the item image when the device receives a signal from the selected channel"
          },
          categories: ["availability"]
        },
        {
          key: "hideChannel",
          option: {
            label: "Hide when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Hide the item image when the device receives a signal from the selected channel"
          },
          categories: ["availability"]
        },
        {
          key: "size",
          option: {
            label: "Size",
            type: "numberInput",
            defaultValue: 64,
            validators: [null],
            props: { min: 32, max: 512, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "angle",
          option: {
            label: "Angle",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: { visible: true },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "show", name: "Show item image" },
          { id: "hide", name: "Hide item image" }
        ]
      }
    },
    maxOnMap: 1024,
    initialMemoryCost: 15,
    subsequentMemoryCost: 15
  },
  {
    id: "itemSpawner",
    name: "Item Spawner",
    description: "Spawn items for players to collect",
    optionSchema: {
      categories: {
        categories: [{ id: "featured", name: "Featured" }],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "itemId",
          option: {
            label: "Item",
            description: "The item to spawn for players to collect",
            type: "itemId",
            validators: [null],
            props: {}
          },
          categories: ["featured"]
        },
        {
          key: "itemAmount",
          option: {
            label: "Amount Of Item",
            description: "The amount of the selected item player receive when they collect it",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 999999999999999, step: 1, allowEmpty: false }
          },
          categories: ["featured"]
        },
        {
          key: "msTimeBetweenSpawns",
          option: {
            label: "Time Between Spawns",
            description: "When the item is collected, how long should it take before the item respawns?",
            type: "select",
            validators: [null],
            defaultValue: 1e3,
            props: {
              options: [
                { name: "Instant", value: 0 },
                { name: "1 Second", value: 1e3 },
                { name: "3 Seconds", value: 3e3 },
                { name: "5 Seconds", value: 5e3 },
                { name: "10 Seconds", value: 1e4 },
                { name: "30 Seconds", value: 3e4 },
                { name: "1 Minute", value: 6e4 },
                { name: "2 Minutes", value: 12e4 },
                { name: "3 Minutes", value: 18e4 },
                { name: "5 Minutes", value: 3e5 },
                { name: "10 Minutes", value: 6e5 }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "scope",
          option: {
            label: "Respawn Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "The time between spawns is applied to who?"
          }
        }
      ]
    },
    defaultState: { itemAvailableTimestamp: 0 },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    maxOnMap: 100,
    initialMemoryCost: 20,
    subsequentMemoryCost: 8
  },
  {
    id: "knockoutManager",
    name: "Knockout Manager",
    description: "Drop items and run actions when knockouts occur",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "itemDrop", name: "Items" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "target",
          option: {
            label: "Knockout Target",
            description: "What entity to listen for knockouts",
            type: "select",
            validators: [null],
            defaultValue: "player",
            props: {
              options: [
                { name: "Player", value: "player" },
                { name: "Sentry", value: "sentry" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "onKnockoutChannel",
          option: {
            label: "When target knocked out, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the specified target is knocked out, the device sends a signal on the selected channel"
          },
          categories: ["featured", "channels"]
        },
        {
          key: "grantItem",
          option: {
            label: "Grant Item",
            type: "select",
            description: "Grant an item to the player when they are knocked out",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["itemDrop"]
        },
        {
          key: "itemId",
          option: {
            label: "Item To Grant",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [[{ key: "grantItem", compare: "NOT_EQUAL", value: true }]]
          },
          categories: ["itemDrop"]
        },
        {
          key: "itemAmount",
          option: {
            label: "Item Amount",
            description: "The amount of the item to grant",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 999999999999999, step: 1, allowEmpty: false },
            hideIf: [[{ key: "grantItem", compare: "NOT_EQUAL", value: true }]]
          },
          categories: ["itemDrop"]
        },
        {
          key: "grantStrategy",
          option: {
            label: "Grant Strategy",
            description: "How to grant the dropped item",
            type: "select",
            validators: [null],
            defaultValue: "grant",
            props: {
              options: [
                { name: "Grant Into Inventory", value: "grant" },
                { name: "Drop On Player", value: "onPlayer" },
                {
                  name: "Drop On Knocked Out Player",
                  value: "onKnockedOutLocation"
                }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "grantItem", compare: "NOT_EQUAL", value: true }]]
          },
          categories: ["itemDrop"]
        },
        {
          key: "dropChance",
          option: {
            label: "Use Drop Chance",
            type: "select",
            description: "Randomly determine if the item should be dropped",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "grantItem", compare: "NOT_EQUAL", value: true }]]
          },
          categories: ["itemDrop"]
        },
        {
          key: "dropPercentage",
          option: {
            label: "Drop Chance",
            description: "The percentage chance of dropping the item",
            type: "numberInput",
            defaultValue: 50,
            validators: [null],
            props: { min: 1, max: 99, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "grantItem", compare: "NOT_EQUAL", value: true }],
              [{ key: "dropChance", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["itemDrop"]
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Is this knockout manager active when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "scope",
          option: {
            label: "Active Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When activated/deactivated, who does it apply to?"
          }
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [{ type: "onKnockout", name: "On knockout..." }],
      customBlocks: [
        "knockout_manager_other_character_message_broadcaster",
        "knockout_manager_other_character_get_property",
        "knockout_manager_other_character_name",
        "knockout_manager_other_character_set_property",
        "knockout_manager_other_character_team_number"
      ]
    },
    wireConfig: {
      out: { connections: [{ id: "knockout", name: "Target knocked out" }] },
      in: {
        connections: [
          { id: "activate", name: "Activate manager" },
          { id: "deactivate", name: "Deactivate manager" }
        ]
      }
    },
    maxOnMap: 10
  },
  {
    id: "laserBeam",
    name: "Laser Beam",
    description: "A laser that deals damage to players that touch it",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "damageToDeal",
          option: {
            label: "Damage Dealt",
            description: "Amount of damage dealt to players when hit by the laser beam",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 0, max: 5e5, step: 1, allowEmpty: false }
          },
          categories: ["featured"]
        },
        {
          key: "appearance",
          option: {
            label: "Style",
            description: "Change the style of the laser beam emitters",
            type: "select",
            validators: [null],
            defaultValue: "Standard",
            props: {
              options: [
                { name: "Standard", value: "Standard" },
                { name: "Plant", value: "Plant" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "laserColor",
          option: {
            label: "Laser Color",
            type: "color",
            defaultValue: "#ff0000",
            validators: [null]
          },
          categories: ["featured"]
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Is the laser on when the game begins?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "laserGroup",
          option: {
            label: "Laser Group",
            description: "Set the name of a group this laser belongs to",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Group name...", category: "laserGroup" }
          },
          categories: ["featured"]
        },
        {
          key: "scope",
          option: {
            label: "Laser Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the laser is activated/deactivated, who does it apply to?"
          }
        },
        {
          key: "transmitOnWhenHitPlayer",
          option: {
            label: "When player hit, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player is hit, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "activateOnChannel",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the laser when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "deactivateOnChannel",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the laser when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "angle",
          option: {
            label: "Angle",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "distance",
          option: {
            label: "Distance",
            type: "numberInput",
            defaultValue: 350,
            validators: [null],
            props: { min: 75, max: 3500, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "showPath",
          option: {
            label: "Show Path",
            type: "select",
            description: "When the laser is inactive, show a dotted path showing the start & end points",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "showOrigin",
          option: {
            label: "Show Start Point",
            type: "select",
            description: "Show the starting point of the laser beam",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "showEndPoint",
          option: {
            label: "Show End Point",
            type: "select",
            description: "Show the ending point of the laser beam",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        }
      ]
    },
    defaultState: { active: true },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: { connections: [{ id: "hitPlayer", name: "Player hit by laser" }] },
      in: {
        connections: [
          { id: "activate", name: "Activate laser" },
          { id: "deactivate", name: "Deactivate laser" }
        ]
      }
    },
    maxOnMap: 100,
    initialMemoryCost: 250,
    subsequentMemoryCost: 75
  },
  {
    id: "laserBeamManager",
    name: "Laser Beam Manager",
    description: "Activate/deactivate multiple lasers at the same time",
    optionSchema: {
      options: [
        {
          key: "laserGroup",
          option: {
            label: "Laser Group",
            description: "The group of lasers the manager will update. Leave empty to update all lasers without a group.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Group name...", category: "laserGroup" }
          }
        },
        {
          key: "autoSwitch",
          option: {
            label: "Auto-Switch",
            type: "select",
            description: "Automatically active & deactivate lasers at a set interval",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "activatedDuration",
          option: {
            label: "Activated Duration",
            description: "How long (in seconds) the lasers will be activated",
            type: "numberInput",
            defaultValue: 2,
            validators: [null],
            props: { min: 1, max: 60, step: 0.1, allowEmpty: false },
            hideIf: [[{ key: "autoSwitch", value: false, compare: "EQUAL" }]]
          }
        },
        {
          key: "deactivatedDuration",
          option: {
            label: "Deactivated Duration",
            description: "How long (in seconds) the lasers will be deactivated",
            type: "numberInput",
            defaultValue: 3,
            validators: [null],
            props: { min: 1, max: 60, step: 0.1, allowEmpty: false },
            hideIf: [[{ key: "autoSwitch", value: false, compare: "EQUAL" }]]
          }
        },
        {
          key: "activateOnChannel",
          option: {
            label: "Activate lasers when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the managed lasers when the device receives a signal from the selected channel"
          }
        },
        {
          key: "deactivateOnChannel",
          option: {
            label: "Deactivate lasers when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the managed lasers when the device receives a signal from the selected channel"
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate managed lasers" },
          { id: "deactivate", name: "Deactivate managed lasers" }
        ]
      }
    },
    maxOnMap: 16,
    initialMemoryCost: 32,
    subsequentMemoryCost: 32
  },
  {
    id: "lifecycle",
    name: "Lifecycle",
    description: "Run actions when lifecycle events occur in-game",
    optionSchema: {
      options: [
        {
          key: "event",
          option: {
            label: "Event",
            description: "Event the device listens for",
            type: "select",
            validators: [null],
            defaultValue: "Game Starts",
            props: {
              options: [
                { name: "Game Start", value: "Game Starts" },
                {
                  name: "Player Starts Moving",
                  value: "characterStartsMoving",
                  minimumRoleLevel: 90
                },
                {
                  name: "Player Stops Moving",
                  value: "characterStopsMoving",
                  minimumRoleLevel: 90
                },
                { name: "Player Joins Late", value: "characterJoinsLate" },
                { name: "Player Knocks Out", value: "characterKnocksOut" },
                { name: "Player Knocked Out", value: "characterKnockedOut" },
                { name: "Player Fires Gadget", value: "characterFiresGadget" },
                {
                  name: "Player Destroys Terrain",
                  value: "characterDestroysTerrain",
                  minimumRoleLevel: 90
                },
                {
                  name: "Player Places Terrain",
                  value: "characterPlacesTerrain",
                  minimumRoleLevel: 90
                }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "transmitOnChannel",
          option: {
            label: "When event occurs, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When when the event occurs, the device sends a signal on the selected channel"
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: { connections: [{ id: "eventOccurs", name: "Event occurs" }] }
    },
    maxOnMap: 16,
    initialMemoryCost: 50,
    subsequentMemoryCost: 50
  },
  {
    id: "mapOptions",
    name: "Map Options",
    description: "Modify core game options",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "teams", name: "Teams" },
          { id: "healthAndShield", name: "Health & Shield" },
          { id: "score", name: "Score" },
          { id: "items", name: "Items" },
          { id: "ui", name: "UI" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "backgroundTerrain",
          option: {
            label: "Background Terrain",
            description: "Set the background of the map",
            type: "terrainId",
            defaultValue: "Grass",
            props: { allowEmpty: false },
            validators: [null]
          },
          categories: ["featured"],
          supportedMapStyles: ["topDown"]
        },
        {
          key: "platformerBackground",
          option: {
            label: "Background",
            description: "Set the background of the map",
            type: "select",
            validators: [null],
            defaultValue: "sky",
            props: {
              options: [
                { name: "Sky", value: "sky" },
                { name: "Pixel Galaxy", value: "pixelStar" }
              ],
              allowEmpty: false
            }
          },
          minimumRoleLevel: 90,
          categories: ["featured"]
        },
        {
          key: "bottomTerrain",
          option: {
            label: "Floor Terrain",
            description: "Set the floor of the map",
            type: "terrainId",
            defaultValue: "platformer_grass",
            props: { allowEmpty: false },
            validators: [null]
          },
          categories: ["featured"],
          supportedMapStyles: ["platformer"]
        },
        {
          key: "gameClockMode",
          option: {
            label: "Game Clock",
            description: "Set the game clock mode",
            type: "select",
            validators: [null],
            defaultValue: "Off",
            props: {
              options: [
                { name: "Off", value: "Off" },
                { name: "Count Down", value: "Count Down" },
                { name: "Count Up", value: "Count Up" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "countdownTimeMinutes",
          option: {
            label: "Countdown Duration",
            description: "How long (in minutes) the game will last. The game automatically ends when the countdown completes.",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 1, max: 60, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "gameClockMode",
                  compare: "NOT_EQUAL",
                  value: "Count Down"
                }
              ]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "allowedGameClockModeType",
          option: {
            label: "Use Game Clock For Mode Type",
            description: "Will only use the game clock when the mode type matches",
            type: "select",
            validators: [null],
            defaultValue: "liveGame",
            props: {
              options: [
                { name: "All", value: "all" },
                { name: "Live Game", value: "liveGame" },
                { name: "Assignment", value: "assignment" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "gameClockMode", compare: "EQUAL", value: "Off" }]
            ]
          },
          categories: ["featured"],
          minimumRoleLevel: 90
        },
        {
          key: "musicUrl",
          option: {
            label: "Game Music URL",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Music URL here..." }
          },
          categories: ["featured"],
          minimumRoleLevel: 90
        },
        {
          key: "presetMusicId",
          option: {
            label: "Music Track",
            description: "Select the music track played when the game begins",
            type: "select",
            validators: [null],
            defaultValue: "the_shakedown",
            props: {
              options: [
                { name: "None", value: "NONE" },
                { name: "Creative Funk", value: "the_shakedown" },
                { name: "Spy", value: "anchor_crawl" },
                { name: "Jazz Club", value: "stay_up_high" },
                { name: "Peaceful Guitar", value: "whisperer" },
                { name: "Epic Battle", value: "heroes_are_back" },
                { name: "Hip Hop - Neon", value: "all_out" },
                { name: "Hip Hop - Movement", value: "four_am" },
                { name: "Rock Band", value: "inferno" },
                { name: "Spooky", value: "demogorgon" },
                { name: "Wild West", value: "surfin_versailles" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "musicVolume",
          option: {
            label: "Music Volume",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [[{ key: "musicUrl", compare: "EQUAL" }]]
          },
          categories: ["featured"],
          minimumRoleLevel: 90
        },
        {
          key: "minPlayers",
          option: {
            label: "Allow Solo Play",
            description: "Can the game host start the game with only themselves?",
            type: "select",
            validators: [null],
            defaultValue: 1,
            props: {
              options: [
                { name: "Yes", value: 1 },
                { name: "No", value: 2 }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "teams",
          option: {
            label: "Teams",
            description: "Set the team mode",
            type: "select",
            validators: [null],
            defaultValue: "Free For All",
            props: {
              options: [
                { name: "Free For All", value: "Free For All" },
                { name: "Cooperative", value: "Cooperative" },
                { name: "Split Into Size", value: "Split Into Size" },
                { name: "Specific Team Amount", value: "Specific Team Amount" }
              ],
              allowEmpty: false
            }
          },
          categories: ["teams"]
        },
        {
          key: "teamSize",
          option: {
            label: "Team Size",
            description: "Set the number of players per team",
            type: "select",
            validators: [null],
            defaultValue: 4,
            props: {
              options: [
                { name: "2", value: 2 },
                { name: "3", value: 3 },
                { name: "4", value: 4 },
                { name: "5", value: 5 },
                { name: "6", value: 6 },
                { name: "7", value: 7 },
                { name: "8", value: 8 },
                { name: "9", value: 9 },
                { name: "10", value: 10 },
                { name: "11", value: 11 },
                { name: "12", value: 12 },
                { name: "13", value: 13 },
                { name: "14", value: 14 },
                { name: "15", value: 15 },
                { name: "16", value: 16 },
                { name: "17", value: 17 },
                { name: "18", value: 18 },
                { name: "19", value: 19 },
                { name: "20", value: 20 },
                { name: "21", value: 21 },
                { name: "22", value: 22 },
                { name: "23", value: 23 },
                { name: "24", value: 24 },
                { name: "25", value: 25 },
                { name: "26", value: 26 },
                { name: "27", value: 27 },
                { name: "28", value: 28 },
                { name: "29", value: 29 },
                { name: "30", value: 30 }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "teams",
                  compare: "NOT_EQUAL",
                  value: "Split Into Size"
                }
              ]
            ]
          },
          categories: ["teams"]
        },
        {
          key: "teamsNumber",
          option: {
            label: "Number Of Teams",
            description: "Set the number of teams players are split into",
            type: "select",
            validators: [null],
            defaultValue: 4,
            props: {
              options: [
                { name: "2", value: 2 },
                { name: "3", value: 3 },
                { name: "4", value: 4 },
                { name: "5", value: 5 },
                { name: "6", value: 6 },
                { name: "7", value: 7 },
                { name: "8", value: 8 },
                { name: "9", value: 9 },
                { name: "10", value: 10 },
                { name: "11", value: 11 },
                { name: "12", value: 12 },
                { name: "13", value: 13 },
                { name: "14", value: 14 },
                { name: "15", value: 15 },
                { name: "16", value: 16 },
                { name: "17", value: 17 },
                { name: "18", value: 18 },
                { name: "19", value: 19 },
                { name: "20", value: 20 },
                { name: "21", value: 21 },
                { name: "22", value: 22 },
                { name: "23", value: 23 },
                { name: "24", value: 24 },
                { name: "25", value: 25 },
                { name: "26", value: 26 },
                { name: "27", value: 27 },
                { name: "28", value: 28 },
                { name: "29", value: 29 },
                { name: "30", value: 30 }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "teams",
                  compare: "NOT_EQUAL",
                  value: "Specific Team Amount"
                }
              ]
            ]
          },
          categories: ["teams"]
        },
        {
          key: "splitModeForSpecificTeamAmount",
          option: {
            label: "Team Placement",
            description: "How are players split into teams?",
            type: "select",
            validators: [null],
            defaultValue: "Split Evenly",
            props: {
              options: [
                { name: "Split Evenly", value: "Split Evenly" },
                { name: "Randomly (Possible Uneven Teams)", value: "Random" },
                { name: "Custom", value: "Custom", minimumRoleLevel: 90 }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "teams",
                  compare: "NOT_EQUAL",
                  value: "Specific Team Amount"
                }
              ]
            ]
          },
          categories: ["teams"]
        },
        {
          key: "latePlayersJoinAsSpectators",
          option: {
            label: "Late Players Join Spectators",
            type: "select",
            description: "For players that join after the game has started, should they join as spectators?",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["teams"]
        },
        {
          key: "allyIndicator",
          option: {
            label: "Ally Indicators",
            description: "Are ally indicators enabled? The ally indicator show friendly players with green text, and puts an arrow over their Gims.",
            type: "select",
            validators: [null],
            defaultValue: "Disabled",
            props: {
              options: [
                { value: "Disabled", name: "Disabled" },
                { value: "Enabled", name: "Enabled" }
              ],
              allowEmpty: false
            }
          },
          categories: ["teams"]
        },
        {
          key: "enemyIndicator",
          option: {
            label: "Enemy Indicators",
            description: "Are enemy indicators enabled? The enemy indicator shows enemy players with red text.",
            type: "select",
            validators: [null],
            defaultValue: "Disabled",
            props: {
              options: [
                { value: "Disabled", name: "Disabled" },
                { value: "Enabled", name: "Enabled" }
              ],
              allowEmpty: false
            }
          },
          categories: ["teams"]
        },
        {
          key: "allowGameOwnerToSpectate",
          option: {
            label: "Allow Game Host to Spectate",
            type: "select",
            description: "Is the game host allowed to spectate or are they forced to join?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["teams"]
        },
        {
          key: "healthMode",
          option: {
            label: "Health Mode",
            description: "Set the health mode for the game",
            type: "select",
            validators: [null],
            defaultValue: "healthAndShield",
            props: {
              options: [
                { name: "Health & Shield", value: "healthAndShield" },
                { name: "Fragility", value: "fragility" }
              ],
              allowEmpty: false
            }
          },
          minimumRoleLevel: 90,
          categories: ["healthAndShield"]
        },
        {
          key: "maxHealth",
          option: {
            label: "Max Health",
            description: "Maximum amount of health a player can have",
            type: "select",
            validators: [null],
            defaultValue: 100,
            props: {
              options: [
                { name: "1", value: 1 },
                { name: "10", value: 10 },
                { name: "15", value: 15 },
                { name: "20", value: 20 },
                { name: "25", value: 25 },
                { name: "30", value: 30 },
                { name: "40", value: 40 },
                { name: "50", value: 50 },
                { name: "60", value: 60 },
                { name: "75", value: 75 },
                { name: "100", value: 100 },
                { name: "125", value: 125 },
                { name: "150", value: 150 },
                { name: "200", value: 200 },
                { name: "250", value: 250 },
                { name: "300", value: 300 },
                { name: "350", value: 350 },
                { name: "400", value: 400 },
                { name: "450", value: 450 },
                { name: "500", value: 500 },
                { name: "750", value: 750 },
                { name: "1000", value: 1e3 },
                { name: "2000", value: 2e3 },
                { name: "5000", value: 5e3 }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "healthMode",
                  compare: "NOT_EQUAL",
                  value: "healthAndShield"
                }
              ]
            ]
          },
          categories: ["healthAndShield"]
        },
        {
          key: "maxShield",
          option: {
            label: "Max Shield",
            description: "Maximum amount of shield a player can have",
            type: "select",
            validators: [null],
            defaultValue: 100,
            props: {
              options: [
                { name: "1", value: 1 },
                { name: "10", value: 10 },
                { name: "15", value: 15 },
                { name: "20", value: 20 },
                { name: "25", value: 25 },
                { name: "30", value: 30 },
                { name: "40", value: 40 },
                { name: "50", value: 50 },
                { name: "60", value: 60 },
                { name: "75", value: 75 },
                { name: "100", value: 100 },
                { name: "125", value: 125 },
                { name: "150", value: 150 },
                { name: "200", value: 200 },
                { name: "250", value: 250 },
                { name: "300", value: 300 },
                { name: "350", value: 350 },
                { name: "400", value: 400 },
                { name: "450", value: 450 },
                { name: "500", value: 500 },
                { name: "750", value: 750 },
                { name: "1000", value: 1e3 },
                { name: "2000", value: 2e3 },
                { name: "5000", value: 5e3 }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "healthMode",
                  compare: "NOT_EQUAL",
                  value: "healthAndShield"
                }
              ]
            ]
          },
          categories: ["healthAndShield"]
        },
        {
          key: "startingHealth",
          option: {
            label: "Starting Health",
            description: "What percentage of max health a player has at the start of the game",
            type: "select",
            validators: [null],
            defaultValue: 100,
            props: {
              options: [
                { name: "1%", value: 1 },
                { name: "25%", value: 25 },
                { name: "50%", value: 50 },
                { name: "75%", value: 75 },
                { name: "100%", value: 100 }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "healthMode",
                  compare: "NOT_EQUAL",
                  value: "healthAndShield"
                }
              ]
            ]
          },
          categories: ["healthAndShield"]
        },
        {
          key: "startingShield",
          option: {
            label: "Starting Shield",
            description: "What percentage of max shield a player has at the start of the game",
            type: "select",
            validators: [null],
            defaultValue: 100,
            props: {
              options: [
                { name: "0%", value: 0 },
                { name: "25%", value: 25 },
                { name: "50%", value: 50 },
                { name: "75%", value: 75 },
                { name: "100%", value: 100 }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "healthMode",
                  compare: "NOT_EQUAL",
                  value: "healthAndShield"
                }
              ]
            ]
          },
          categories: ["healthAndShield"]
        },
        {
          key: "startingFragility",
          option: {
            label: "Starting Fragility",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: 0, max: 999, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "healthMode", compare: "NOT_EQUAL", value: "fragility" }]
            ]
          },
          minimumRoleLevel: 90,
          categories: ["healthAndShield"]
        },
        {
          key: "showHealthAndShield",
          option: {
            label: "Show Health and Shield",
            type: "select",
            description: "Show the health & shield bar",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "healthMode", compare: "EQUAL", value: "fragility" }]
            ]
          },
          categories: ["healthAndShield"]
        },
        {
          key: "spawnImmunity",
          option: {
            label: "Spawn Immunity",
            description: "How long (in seconds) players are immune after respawning",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 0, max: 120, step: 1, allowEmpty: false }
          },
          categories: ["healthAndShield"]
        },
        {
          key: "playerVsPlayerDamageEnabled",
          option: {
            label: "PvP Damage Enabled",
            type: "select",
            description: "Are players allowed to damage each other?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["healthAndShield"]
        },
        {
          key: "interactiveItemsSlots",
          option: {
            label: "Item Slots",
            description: "How many slots players have for gadgets & usable items",
            type: "select",
            validators: [null],
            defaultValue: 3,
            props: {
              options: [
                { name: "None", value: 0 },
                { name: "1", value: 1 },
                { name: "2", value: 2 },
                { name: "3", value: 3 },
                { name: "4", value: 4 },
                { name: "5", value: 5 }
              ],
              allowEmpty: false
            }
          },
          categories: ["items"]
        },
        {
          key: "infiniteAmmo",
          option: {
            label: "Infinite Refills",
            type: "select",
            description: "Can players refill gadgets without having the required resource?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["items"]
        },
        {
          key: "instantReload",
          option: {
            label: "Refill Duration",
            description: "When players need to refill their gadgets, how long does it take?",
            type: "select",
            validators: [null],
            defaultValue: false,
            props: {
              options: [
                { name: "Instant", value: true },
                { name: "Default", value: false }
              ],
              allowEmpty: false
            }
          },
          categories: ["items"]
        },
        {
          key: "allowWeaponDrop",
          option: {
            label: "Allow Gadget Drop",
            type: "select",
            description: "Are players allowed to drop gadgets from their inventory?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["items"]
        },
        {
          key: "allowItemDrop",
          option: {
            label: "Allow Usable Drop",
            type: "select",
            description: "Are players allowed to drop usable items from their inventory?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["items"]
        },
        {
          key: "allowResourceDrop",
          option: {
            label: "Allow Resource Drop",
            type: "select",
            description: "Are players allowed to drop resources from their inventory?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["items"]
        },
        {
          key: "weaponRespawnBehavior",
          option: {
            label: "Gadget Respawn Behavior",
            description: "Set what happens to a player's gadget when they respawn",
            type: "select",
            validators: [null],
            defaultValue: "Keep",
            props: {
              options: [
                { name: "Keep", value: "Keep" },
                { name: "Delete", value: "Delete" }
              ],
              allowEmpty: false
            }
          },
          categories: ["items"]
        },
        {
          key: "itemRespawnBehavior",
          option: {
            label: "Item Respawn Behavior",
            description: "Set what happens to a player's usable items when they respawn",
            type: "select",
            validators: [null],
            defaultValue: "Keep",
            props: {
              options: [
                { name: "Keep", value: "Keep" },
                { name: "Delete", value: "Delete" }
              ],
              allowEmpty: false
            }
          },
          categories: ["items"]
        },
        {
          key: "resourceRespawnBehavior",
          option: {
            label: "Resource Respawn Behavior",
            description: "Set what happens to a player's resources when they respawn",
            type: "select",
            validators: [null],
            defaultValue: "Keep",
            props: {
              options: [
                { name: "Keep", value: "Keep" },
                { name: "Delete", value: "Delete" }
              ],
              allowEmpty: false
            }
          },
          categories: ["items"]
        },
        {
          key: "infiniteDurability",
          option: {
            label: "Infinite Durability",
            type: "select",
            description: "Are gadgets that use durability, such as pickaxes, indestructible?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["items"]
        },
        {
          key: "droppedItemScope",
          option: {
            label: "Dropped Item Visibility",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When a player drops an item, who is it visible to?",
            hideIf: [
              [{ key: "allowItemDrop", compare: "EQUAL", value: false }]
            ]
          },
          categories: ["items"]
        },
        {
          key: "useScoreboard",
          option: {
            label: "Use Leaderboard",
            type: "select",
            description: "Is the leaderboard enabled & visible in-game?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["score"]
        },
        {
          key: "scoreType",
          option: {
            label: "Score Type",
            description: "Set what the leaderboard tracks",
            type: "select",
            validators: [null],
            defaultValue: "Knockout",
            props: {
              options: [
                { name: "Knockouts", value: "Knockout" },
                { name: "Amount Of Specific Item", value: "Resource" },
                { name: "Property", value: "Property" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "useScoreboard", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["score"]
        },
        {
          key: "scoreResource",
          option: {
            label: "Score Item",
            description: "The tracked item which determines a player's ranking on the leaderboard",
            type: "itemId",
            defaultValue: "cash",
            validators: [null],
            props: {},
            hideIf: [
              [{ key: "scoreType", compare: "NOT_EQUAL", value: "Resource" }],
              [{ key: "useScoreboard", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["score"]
        },
        {
          key: "propertyResource",
          option: {
            label: "Score Property",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Property...",
              category: "property",
              maxLength: 64
            },
            description: "The tracked property which determines a player's ranking on the leaderboard",
            hideIf: [
              [{ key: "scoreType", compare: "NOT_EQUAL", value: "Property" }],
              [{ key: "useScoreboard", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["score"]
        },
        {
          key: "scoreName",
          option: {
            label: "Score Name",
            type: "textInput",
            defaultValue: "Score",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 24 },
            hideIf: [
              [{ key: "useScoreboard", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["score"]
        },
        {
          key: "scoreGroup",
          option: {
            label: "Score Group",
            description: "How is the leaderboard sorted, by player or by team?",
            type: "select",
            validators: [null],
            defaultValue: "team",
            props: {
              options: [
                { name: "Player", value: "player" },
                { name: "Team", value: "team" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "useScoreboard", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["score"]
        },
        {
          key: "sortMode",
          option: {
            label: "Leaderboard Sort Mode",
            description: "Are players sorted from lowest to highest, or highest to lowest?",
            type: "select",
            validators: [null],
            defaultValue: "Highest to lowest",
            props: {
              options: [
                { name: "High to low", value: "Highest to lowest" },
                { name: "Low to high", value: "Lowest to Highest" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "useScoreboard", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["score"]
        },
        {
          key: "showScoreboardOnGameEnd",
          option: {
            label: "Show Leaderboard On Game End",
            type: "select",
            description: "Show the leaderboard when the game ends",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "useScoreboard", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["score"]
        },
        {
          key: "showPlayersPlacement",
          option: {
            label: "Show Placement",
            type: "select",
            description: "Show a player's placement ranking at the end of a game",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "useScoreboard", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["score"]
        },
        {
          key: "knockoutActivityFeedDisabled",
          option: {
            label: "Disable Knockouts From Activity Feed",
            type: "select",
            description: "Prevent knockout messages from appearing in the activity feed",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["ui"]
        },
        {
          key: "dynamicBuildingAllowFloatingBuilds",
          option: {
            label: "Allow Floating Dynamic Builds",
            type: "select",
            description: "When players build structures, and then their connection to a solid base is removed, should the builds float?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          supportedMapStyles: ["platformer"]
        }
      ]
    },
    defaultState: {
      countdownActive: false,
      countdownEndTimestamp: 0,
      countupActive: false,
      countupStartTimestamp: 0,
      gameMusicState: "stopped",
      allowedToAddTimeToEndCountdown: false
    },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    maxOnMap: 1,
    initialMemoryCost: 0,
    subsequentMemoryCost: 0
  },
  {
    id: "mood",
    name: "Mood",
    description: "Apply effects & filters to the player's camera",
    optionSchema: {
      options: [
        {
          key: "useVignette",
          option: {
            label: "Use Vignette",
            type: "select",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "vignetteStrength",
          option: {
            label: "Vignette Strength",
            type: "numberInput",
            defaultValue: 50,
            validators: [null],
            props: { min: 0, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "useVignette", compare: "NOT_EQUAL", value: true }]
            ]
          }
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "useVignette", compare: "NOT_EQUAL", value: true }]
            ]
          }
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate On Channel",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate On Channel",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        }
      ]
    },
    defaultState: { active: true },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate mood" },
          { id: "deactivate", name: "Deactivate mood" }
        ]
      }
    },
    minimumRoleLevel: 90
  },
  {
    id: "movementMeter",
    name: "Movement Meter",
    description: "Require a player to have an item to move around",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "waring", name: "Warning" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "itemToTrack",
          option: {
            label: "Tracked Item",
            description: "The item tied to a player's movement speed",
            type: "itemId",
            validators: [null],
            props: {}
          },
          categories: ["featured"]
        },
        {
          key: "drainAmount",
          option: {
            label: "Item Drain Per Tick",
            description: "The amount of the tracked item to remove from the player's inventory",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 1e9, step: 1, allowEmpty: false }
          },
          categories: ["featured"]
        },
        {
          key: "drainIntervalMs",
          option: {
            label: "Drain Interval",
            description: "How often to drain the tracked item from the player's inventory",
            type: "select",
            validators: [null],
            defaultValue: 500,
            props: {
              options: [
                { value: 250, name: "Every 0.25 Seconds" },
                { value: 500, name: "Every 0.5 Seconds" },
                { value: 1e3, name: "Every 1 Second" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "outOfItemChannel",
          option: {
            label: "When player runs out of tracked resource, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the player runs out of the tracked resource, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "speedWhenOutOfItem",
          option: {
            label: "Player Speed When Out Of Tracked Item",
            description: "When the player runs out of the tracked item, what should their speed be set to? 1 is default speed, 0.5 is half speed, 2 is double speed, etc.",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: 0, max: 4, step: 0.01, allowEmpty: false }
          }
        },
        {
          key: "useAsDefault",
          option: {
            label: "Use As Default",
            type: "select",
            description: "Use this Movement Meter for all players by default",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "warningAmount",
          option: {
            label: "Warning Amount",
            description: "Transmit when the player has reaches than this amount or less of the tracked item",
            type: "numberInput",
            defaultValue: 5,
            validators: [null],
            props: { min: 1, max: 1e9, step: 1, allowEmpty: false }
          },
          categories: ["waring"]
        },
        {
          key: "warningChannel",
          option: {
            label: "When warning amount reached, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the amount of the tracked item reaches the warning amount, the device sends a signal on the selected channel"
          },
          categories: ["waring", "channels"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the movement meter when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the movement meter when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate Movement Meter" },
          { id: "deactivate", name: "Deactivate Movement Meter" }
        ]
      },
      out: {
        connections: [
          { id: "outOfResource", name: "Player runs out of movement resource" },
          {
            id: "warningReached",
            name: "Player reaches warning amount of movement resource"
          }
        ]
      }
    },
    maxOnMap: 10,
    initialMemoryCost: 400,
    subsequentMemoryCost: 100
  },
  {
    id: "music",
    name: "Music",
    description: "Play music in the background",
    optionSchema: {
      options: [
        {
          key: "audioUrl",
          option: {
            label: "Audio URL",
            type: "textInput",
            defaultValue: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3",
            validators: [null],
            props: { placeholder: "Enter audio url here..." }
          }
        },
        {
          key: "volume",
          option: {
            label: "Volume",
            type: "numberInput",
            defaultValue: 50,
            validators: [null],
            props: { min: 1, max: 50, step: 1, allowEmpty: false }
          }
        },
        {
          key: "playWhenReceivingFrom",
          option: {
            label: "Play When Receiving From...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "stopWhenReceivingFrom",
          option: {
            label: "Stop When Receiving From...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        }
      ]
    },
    defaultState: { currentState: "stopped" },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "play", name: "Play music" },
          { id: "stop", name: "Stop music" }
        ]
      }
    },
    minimumRoleLevel: 90
  },
  {
    id: "notification",
    name: "Notification",
    description: "Send an important message/alert to players",
    optionSchema: {
      categories: {
        categories: [{ id: "featured", name: "Featured" }],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "title",
          option: {
            label: "Notification Title",
            description: "Text shown on the notification in larger text",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 128 }
          },
          categories: ["featured"]
        },
        {
          key: "description",
          option: {
            label: "Notification Content",
            description: "Text shown on the notification in smaller text",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 512 }
          },
          categories: ["featured"]
        },
        {
          key: "notifyChannel",
          option: {
            label: "Send notification when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Send the notification when the device receives a signal from the selected channel"
          },
          categories: ["featured"]
        },
        {
          key: "notificationType",
          option: {
            label: "Notification Type",
            type: "select",
            validators: [null],
            defaultValue: "none",
            props: {
              options: [
                { name: "None", value: "none" },
                { name: "Info", value: "info" },
                { name: "Success", value: "success" },
                { name: "Warning", value: "warning" },
                { name: "Error", value: "error" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "notificationPlacement",
          option: {
            label: "Notification Placement",
            description: "Which corner of the screen the notification will appear in",
            type: "select",
            validators: [null],
            defaultValue: "topRight",
            props: {
              options: [
                { name: "Top Right", value: "topRight" },
                { name: "Top Left", value: "topLeft" },
                { name: "Bottom Right", value: "bottomRight" },
                { name: "Bottom Left", value: "bottomLeft" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "notificationDurationStrategy",
          option: {
            label: "Notification Duration",
            description: "Set a manual duration or let the notification disappear automatically based off the length of the content",
            type: "select",
            validators: [null],
            defaultValue: "auto",
            props: {
              options: [
                { name: "Auto", value: "auto" },
                { name: "Specific Time Amount", value: "manual" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "customDurationSeconds",
          option: {
            label: "Notification Duration",
            description: "How long (in seconds) the notification sticks around",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 1, max: 30, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "notificationDurationStrategy",
                  compare: "NOT_EQUAL",
                  value: "manual"
                }
              ]
            ]
          }
        },
        {
          key: "sendTo",
          option: {
            label: "Send Notification To",
            type: "select",
            validators: [null],
            defaultValue: "characterTriggering",
            props: {
              options: [
                { name: "Triggering Player", value: "characterTriggering" },
                { name: "All On Triggering Player's Team", value: "allOnTeam" },
                {
                  name: "All On Triggering Player's Team, Except Triggering Player",
                  value: "allOnTeamExceptTriggeringPlayer"
                },
                { name: "Everybody", value: "allCharacters" }
              ],
              allowEmpty: false
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: true,
      triggers: [{ type: "wire", name: "On wire pulse..." }],
      customBlocks: ["send_custom_notification"]
    },
    wireConfig: {
      in: {
        connections: [
          { id: "notify", name: "Send notification" },
          { id: "codeGrid", name: "Run wire pulse block" }
        ]
      }
    },
    initialMemoryCost: 15,
    subsequentMemoryCost: 15
  },
  {
    id: "outline",
    name: "Outline",
    description: "Draws an outline",
    optionSchema: {
      options: [
        {
          key: "shape",
          option: {
            label: "Outline Shape",
            description: "Set the shape of the outline",
            type: "select",
            validators: [null],
            defaultValue: "rectangle",
            props: {
              options: [
                { value: "rectangle", name: "Line" },
                { value: "circle", name: "Circle" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "lineLength",
          option: {
            label: "Line Length",
            description: "How long (in pixels) is the line making the outline?",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 0, max: 1e4, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "shape", compare: "NOT_EQUAL", value: "rectangle" }]
            ]
          }
        },
        {
          key: "circleRadius",
          option: {
            label: "Circle Radius",
            description: "What is the value of the circle radius for cirle making the outline?",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 0, max: 1e4, step: 1, allowEmpty: false },
            hideIf: [[{ key: "shape", compare: "NOT_EQUAL", value: "circle" }]]
          }
        },
        {
          key: "circlePercentage",
          option: {
            label: "Circle Percentage",
            description: "What percentage of the circle we show for the outline?",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 0, max: 100, step: 0.1, allowEmpty: false },
            hideIf: [[{ key: "shape", compare: "NOT_EQUAL", value: "circle" }]]
          }
        },
        {
          key: "circleFill",
          option: {
            label: "Fill Circle",
            type: "select",
            description: "Should the circle be fully filled? The style (dashed or not) does not make a difference then.",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "shape", compare: "NOT_EQUAL", value: "circle" }]]
          }
        },
        {
          key: "thickness",
          option: {
            label: "Outline Thickness",
            description: "How thick is the line making up the outline (in pixels)?",
            type: "numberInput",
            defaultValue: 5,
            validators: [null],
            props: { min: 1, max: 50, step: 1, allowEmpty: false }
          }
        },
        {
          key: "angle",
          option: {
            label: "Outline Angle",
            description: "How is the outline rotated (in degrees)?",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: -360, max: 360, step: 1, allowEmpty: false }
          }
        },
        {
          key: "color",
          option: {
            label: "Outline Color",
            description: "Set the color of the outline",
            type: "color",
            defaultValue: "#ffffff",
            validators: [null]
          }
        },
        {
          key: "alpha",
          option: {
            label: "Alpha",
            description: "Set the transparency of the outline. 0 is completely transparent, 1 is completely visible.",
            type: "numberInput",
            defaultValue: 0.8,
            validators: [null],
            props: { min: 0.01, max: 1, step: 0.01, allowEmpty: false }
          }
        },
        {
          key: "style",
          option: {
            label: "Outline Style",
            description: "Set the style of the outline",
            type: "select",
            validators: [null],
            defaultValue: "solid",
            props: {
              options: [
                { value: "solid", name: "Solid" },
                { value: "dashed", name: "Dashed" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "dashLength",
          option: {
            label: "Dash Lenght",
            description: "How long is the dash for the dashed outline (in pixels)?",
            type: "numberInput",
            defaultValue: 35,
            validators: [null],
            props: { min: 0, max: 100, step: 1, allowEmpty: false },
            hideIf: [[{ key: "style", compare: "NOT_EQUAL", value: "dashed" }]]
          }
        },
        {
          key: "dashSpacing",
          option: {
            label: "Dash Spacing",
            description: "What is the space between dashes for the dashed outline (in pixels)?",
            type: "numberInput",
            defaultValue: 15,
            validators: [null],
            props: { min: 0, max: 100, step: 1, allowEmpty: false },
            hideIf: [[{ key: "style", compare: "NOT_EQUAL", value: "dashed" }]]
          }
        },
        {
          key: "visibleOnGameStart",
          option: {
            label: "Visible On Game Start",
            type: "select",
            description: "Is the outline visible when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "showChannel",
          option: {
            label: "Show when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Show the outline when the device receives a signal from the selected channel"
          }
        },
        {
          key: "hideChannel",
          option: {
            label: "Hide when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Hide the outline when the device receives a signal from the selected channel"
          }
        },
        {
          key: "scope",
          option: {
            label: "Visible Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the outline is shown/hidden, who does that apply to?"
          }
        }
      ]
    },
    defaultState: { visible: true },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "show", name: "Show outline" },
          { id: "hide", name: "Hide outline" }
        ]
      }
    },
    minimumRoleLevel: 90,
    maxOnMap: 500,
    initialMemoryCost: 20,
    subsequentMemoryCost: 20
  },
  {
    id: "passwordLock",
    name: "Password Lock",
    description: "Restrict access with a password players must enter!",
    optionSchema: {
      options: [
        {
          key: "password",
          option: {
            label: "Password",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Enter a password" }
          }
        },
        {
          key: "onSuccessChannel",
          option: {
            label: "When correct password entered, transmit on channel...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "openChannel",
          option: {
            label: "Open interface when receiving on channel...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "useMaxAttempts",
          option: {
            label: "Limit Guess Attempts",
            type: "select",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "maxAttempts",
          option: {
            label: "Max Guess Attempts",
            type: "numberInput",
            defaultValue: 3,
            validators: [null],
            props: { min: 1, max: 999999, allowEmpty: false },
            hideIf: [
              [{ key: "useMaxAttempts", value: false, compare: "EQUAL" }]
            ]
          }
        },
        {
          key: "maxAttemptsScope",
          option: {
            label: "Max Guess Attempts Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "useMaxAttempts", value: false, compare: "EQUAL" }]
            ]
          }
        },
        {
          key: "outOfAttemptsChannel",
          option: {
            label: "When max attempts reached, transmit on channel...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            hideIf: [
              [{ key: "useMaxAttempts", value: false, compare: "EQUAL" }]
            ]
          }
        }
      ]
    },
    defaultState: { attempts: 0 },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [
          { id: "success", name: "Correct password entered" },
          { id: "outOfAttempts", name: "Player out of guess attempts" }
        ]
      },
      in: { connections: [{ id: "open", name: "Open password entry screen" }] }
    },
    minimumRoleLevel: 90
  },
  {
    id: "placedSticker",
    name: "Placed Sticker",
    optionSchema: {
      options: [
        {
          key: "stickerId",
          option: {
            label: "Sticker ID",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "depth",
          option: {
            label: "Depth",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 0, max: 10, step: 1, allowEmpty: false }
          }
        },
        {
          key: "scale",
          option: {
            label: "Scale",
            type: "numberInput",
            defaultValue: 0.15,
            validators: [null],
            props: { min: 0, max: 1, allowEmpty: false }
          }
        },
        {
          key: "placedByCharacterId",
          option: {
            label: "Character ID",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "placedAtTimeStamp",
          option: {
            label: "Time Stamp",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { step: 1, allowEmpty: false }
          }
        }
      ]
    },
    defaultState: { beingRemoved: false },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    initialMemoryCost: 0,
    subsequentMemoryCost: 0
  },
  {
    id: "playerAppearanceModifier",
    name: "Player Appearance Modifier",
    description: "Modify the color and transparency of a player",
    optionSchema: {
      options: [
        {
          key: "modifyTransparency",
          option: {
            label: "Modify Transparency",
            type: "select",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "transparencyAmount",
          option: {
            label: "Transparency Amount",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 0, max: 1, step: 0.01, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "modifyTransparency",
                  compare: "NOT_EQUAL",
                  value: true
                }
              ]
            ]
          }
        },
        {
          key: "selfTransparency",
          option: {
            label: "Self Transparency",
            type: "select",
            validators: [null],
            defaultValue: "match",
            props: {
              options: [
                { name: "Match", value: "match" },
                { name: "Custom", value: "custom" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "modifyTransparency",
                  compare: "NOT_EQUAL",
                  value: true
                }
              ]
            ]
          }
        },
        {
          key: "selfTransparencyAmount",
          option: {
            label: "Transparency Amount",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 0, max: 1, step: 0.01, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "modifyTransparency",
                  compare: "NOT_EQUAL",
                  value: true
                }
              ],
              [
                {
                  key: "selfTransparency",
                  compare: "NOT_EQUAL",
                  value: "custom"
                }
              ]
            ]
          }
        },
        {
          key: "modifyTint",
          option: {
            label: "Modify Tint",
            type: "select",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "tint",
          option: {
            label: "Tint",
            type: "color",
            defaultValue: "#ffffff",
            validators: [null],
            hideIf: [
              [{ key: "modifyTint", compare: "NOT_EQUAL", value: true }]
            ]
          }
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate when receiving on channel...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate when receiving on channel...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        }
      ]
    },
    defaultState: { activeCharacters: [] },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate appearance" },
          { id: "deactivate", name: "Deactivate appearance" }
        ]
      }
    },
    minimumRoleLevel: 90
  },
  {
    id: "playerPositionDetector",
    name: "Player Coordinates",
    description: "Detect when a player's position changes and get their coordinates",
    optionSchema: {
      options: [
        {
          key: "whenPositionChangeDetectedTransmitOn",
          option: {
            label: "When player position changes, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player's position changes, the device sends a signal on the selected channel"
          }
        },
        {
          key: "updateProperties",
          option: {
            label: "Update Properties",
            type: "select",
            description: "When a player's position changes, update a property",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "xProperty",
          option: {
            label: "X Position Property",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Property...",
              category: "property",
              maxLength: 64
            },
            description: "The name of the property to update when the X position changes. Must be a number property to work correctly.",
            hideIf: [
              [{ key: "updateProperties", compare: "NOT_EQUAL", value: true }]
            ]
          }
        },
        {
          key: "yProperty",
          option: {
            label: "Y Position Property",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Property...",
              category: "property",
              maxLength: 64
            },
            description: "The name of the property to update when the Y position changes. Must be a number property to work correctly.",
            hideIf: [
              [{ key: "updateProperties", compare: "NOT_EQUAL", value: true }]
            ]
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [
        {
          type: "On Player Position Change",
          name: "When player position changes..."
        }
      ],
      customBlocks: [
        "player_position_detector_player_x_position",
        "player_position_detector_player_y_position"
      ]
    },
    wireConfig: {
      out: {
        connections: [
          { id: "positionChangeDetected", name: "Position Change Detected" }
        ]
      }
    },
    maxOnMap: 1,
    initialMemoryCost: 3500,
    subsequentMemoryCost: 3500
  },
  {
    id: "characterProximity",
    name: "Player Proximity",
    description: "Detect when two players are within proximity of one another",
    optionSchema: {
      options: [
        {
          key: "detectionArea",
          option: {
            label: "Detection Area",
            type: "select",
            validators: [null],
            defaultValue: "everywhere",
            props: {
              options: [
                { name: "Entire Map", value: "everywhere" },
                { name: "Zone", value: "zone" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "allowedMatch",
          option: {
            label: "Detect For...",
            description: "A match should only be found for which kind of players?",
            type: "select",
            validators: [null],
            defaultValue: "everybody",
            props: {
              options: [
                { name: "All Players", value: "everybody" },
                { name: "Players On Same Team", value: "sameTeam" },
                { name: "Players On Different Teams", value: "differentTeam" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "channelFound",
          option: {
            label: "When found, transmit on channel",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "channelLost",
          option: {
            label: "When lost, transmit on channel",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "broadcastAs",
          option: {
            label: "Broadcast As",
            description: "When a match/loss occurs, the message should be broadcasted as?",
            type: "select",
            validators: [null],
            defaultValue: "everybody",
            props: {
              options: [
                {
                  name: "Everyone (2 Messages Sent Per Match/Loss)",
                  value: "everybody"
                },
                {
                  name: "Single Person (1 Message Sent Per Match/Loss)",
                  value: "firstPerson"
                }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active on Game Start",
            type: "select",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "activateWhenReceivingFrom",
          option: {
            label: "Activate when receiving from channel...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "deactivateWhenReceivingFrom",
          option: {
            label: "Deactivate when receiving from channel...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "detectionDistance",
          option: {
            label: "Detection Distance",
            description: "How far away (in tiles) must two players be for a match to be found",
            type: "numberInput",
            defaultValue: 1.5,
            validators: [null],
            props: { min: 0.1, max: 6, step: 0.1, allowEmpty: false }
          }
        },
        {
          key: "width",
          option: {
            label: "Zone Width",
            type: "numberInput",
            defaultValue: 300,
            validators: [null],
            props: { min: 100, max: 5e3, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "height",
          option: {
            label: "Zone Height",
            type: "numberInput",
            defaultValue: 300,
            validators: [null],
            props: { min: 100, max: 7500, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "delay",
          option: {
            label: "Wait",
            description: "How long (in seconds) two players need to be within proximity for a match to be found",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: 0, max: 5, step: 1, allowEmpty: false }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [
        { type: "onFound", name: "On match found..." },
        { type: "onLost", name: "On match lost..." }
      ],
      customBlocks: [
        "other_character_name",
        "other_character_team_number",
        "other_character_get_property",
        "other_character_set_property",
        "other_character_message_broadcaster"
      ]
    },
    wireConfig: {
      out: {
        connections: [
          { id: "found", name: "Match Found (Players Within Proximity)" },
          {
            id: "lost",
            name: "Match Lost (Players No Longer Within Proximity)"
          }
        ]
      },
      in: {
        connections: [
          { id: "activate", name: "Activate Player Proximity Detection" },
          { id: "deactivate", name: "Deactivate Player Proximity Detection" }
        ]
      }
    },
    minimumRoleLevel: 90
  },
  {
    id: "textExplainer",
    name: "Popup",
    description: "Create modals & banners",
    optionSchema: {
      categories: {
        categories: [
          { id: "Featured", name: "Featured" },
          { id: "Look & Behavior", name: "Look & Behavior" },
          { id: "Call To Action", name: "Call To Action" },
          { id: "Channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "header",
          option: {
            label: "Header Text",
            description: "Content shown in larger text",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 256 }
          },
          categories: ["Featured"]
        },
        {
          key: "content",
          option: {
            label: "Content Text",
            description: "Content shown in smaller text. Use for descriptions & additional info.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 512 }
          },
          categories: ["Featured"]
        },
        {
          key: "openWhenReceivingFrom",
          option: {
            label: "Open popup when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Open the popup when the device receives a signal from the selected channel"
          },
          categories: ["Featured", "Channels"]
        },
        {
          key: "iconImage",
          option: {
            label: "Icon Image",
            description: "Small icon image shown above the header & content. Custom images are not allowed. Refer to the Gimkit Creative documentation for usage of icon images.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 128 }
          }
        },
        {
          key: "style",
          option: {
            label: "Popup Style",
            description: "Modal: a large popup the obstructs the center of the screen. Banner: a smaller popup that slides up from the bottom.",
            type: "select",
            validators: [null],
            defaultValue: "modal",
            props: {
              options: [
                { name: "Modal", value: "modal" },
                { name: "Banner", value: "banner" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured", "Look & Behavior"]
        },
        {
          key: "callToActionLabel",
          option: {
            label: "Call To Action Label",
            description: "Label shown on call to action button. Leave empty for no call to action.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 32 }
          },
          categories: ["Call To Action"]
        },
        {
          key: "callToActionChannel",
          option: {
            label: "Call To Action Channel",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Channel to transmit on when call to action is clicked"
          },
          categories: ["Call To Action", "Channels"]
        },
        {
          key: "secondaryCallToActionLabel",
          option: {
            label: "Secondary Call To Action Label",
            description: "Label shown on secondary call to action button. Leave empty for no secondary call to action.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 32 }
          },
          categories: ["Call To Action"]
        },
        {
          key: "secondaryCallToActionChannel",
          option: {
            label: "Secondary Call To Action Channel",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Channel to transmit on when secondary call to action is clicked"
          },
          categories: ["Call To Action", "Channels"]
        },
        {
          key: "scope",
          option: {
            label: "Content Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the content of the popup is updated, who does it apply to?"
          },
          categories: ["Look & Behavior"]
        },
        {
          key: "backgroundColor",
          option: {
            label: "Background Color",
            description: "Background color of the popup. The text color will automatically adapt to be readable",
            type: "color",
            defaultValue: "#FFFFFF",
            validators: [null]
          },
          categories: ["Look & Behavior"]
        },
        {
          key: "fontFamily",
          option: {
            label: "Font",
            description: "Select a font that fits the style of your popup",
            type: "select",
            validators: [null],
            defaultValue: "Rubik",
            props: {
              options: [
                { name: "Rubik", value: "Rubik" },
                { name: "Roboto", value: "Roboto" },
                { name: "Staatliches", value: "Staatliches" },
                { name: "Galindo", value: "Galindo" },
                { name: "Kalam", value: "Kalam" },
                { name: "Bangers", value: "Bangers" },
                { name: "Fugaz One", value: "Fugaz One" },
                { name: "Outfit", value: "Outfit" },
                { name: "PT Mono", value: "PT Mono" },
                { name: "Space Grotesk", value: "Space Grotesk" },
                { name: "Lobster", value: "Lobster" },
                { name: "Zeyada", value: "Zeyada" },
                { name: "Titan One", value: "Titan One" },
                { name: "Rye", value: "Rye" },
                { name: "Caprasimo", value: "Caprasimo" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Look & Behavior"]
        },
        {
          key: "closableByUser",
          option: {
            label: "Closable By Player",
            type: "select",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            description: "Are players allowed to close the popup once opened?"
          }
        },
        {
          key: "closeWhenReceivingFrom",
          option: {
            label: "Close popup when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Close the popup when the device receives a signal from the selected channel"
          },
          categories: ["Channels"]
        },
        {
          key: "whenClosedTransmitOn",
          option: {
            label: "When popup closed, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When popup closed, the device sends a signal on the selected channel"
          },
          categories: ["Channels"]
        }
      ]
    },
    defaultState: { textColor: "#000000", header: "", content: "" },
    codeGridSchema: {
      allowChannelGrids: true,
      triggers: [{ type: "wire", name: "On wire pulse..." }],
      customBlocks: ["set_header", "set_content"]
    },
    wireConfig: {
      out: {
        connections: [
          { id: "closed", name: "Popup closed" },
          { id: "callToAction", name: "Primary call to action clicked" },
          {
            id: "secondaryCallToAction",
            name: "Secondary call to action clicked"
          }
        ]
      },
      in: {
        connections: [
          { id: "open", name: "Open popup" },
          { id: "close", name: "Close popup" },
          { id: "codeGrid", name: "Run wire pulse block" }
        ]
      }
    },
    maxOnMap: 200,
    initialMemoryCost: 50,
    subsequentMemoryCost: 50
  },
  {
    id: "proceduralTerrainZone",
    name: "Procedural Terrain Zone",
    optionSchema: {
      options: [
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 320,
            validators: [null],
            props: { step: 1, allowEmpty: false }
          }
        },
        {
          key: "height",
          option: {
            label: "Height",
            type: "numberInput",
            defaultValue: 320,
            validators: [null],
            props: { step: 1, allowEmpty: false }
          }
        },
        {
          key: "variability",
          option: {
            label: "Variability Score",
            description: "Lower means more variability in terrain. Higher means less variability.",
            type: "numberInput",
            defaultValue: 5,
            validators: [null],
            props: { min: 0.1, max: 100, step: 0.01, allowEmpty: false }
          }
        },
        {
          key: "seed",
          option: {
            label: "Seed",
            description: "Set a seed to produce the same terrain every time. Leave blank for random.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 16 }
          }
        },
        {
          key: "collision",
          option: {
            label: "Collision",
            type: "select",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "depth",
          option: {
            label: "Depth",
            type: "select",
            validators: [null],
            defaultValue: 1,
            props: {
              options: [
                { name: "1", value: 1 },
                { name: "2", value: 2 },
                { name: "3", value: 3 },
                { name: "4", value: 4 },
                { name: "5", value: 5 }
              ],
              allowEmpty: false
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    minimumRoleLevel: 90,
    initialMemoryCost: 0,
    subsequentMemoryCost: 0
  },
  {
    id: "proceduralTerrainZoneZoneInstruction",
    name: "Procedural Terrain Zone Instruction",
    optionSchema: {
      options: [
        {
          key: "terrain",
          option: {
            label: "Terrain",
            type: "terrainId",
            props: { allowEmpty: true },
            validators: [null]
          }
        },
        {
          key: "weight",
          option: {
            label: "Weight",
            description: "Increase the weight to make this terrain more likely to be placed",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 1, max: 1e6, step: 1, allowEmpty: false }
          }
        },
        {
          key: "constraint1",
          option: {
            label: "Constraint #1",
            description: "A constraint to apply on this terrain",
            type: "select",
            validators: [null],
            defaultValue: "none",
            props: {
              options: [
                { name: "None", value: "none" },
                { name: "Above Row", value: "above" },
                { name: "Below Row", value: "below" },
                { name: "Left Of Column", value: "left" },
                { name: "Right Of Column", value: "right" },
                { name: "Between Columns", value: "betweenHorizontal" },
                { name: "Between Rows", value: "betweenVertical" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "constraint1Column",
          option: {
            label: "Column Number",
            description: "Column #1 is the leftmost column",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                { key: "constraint1", value: "left", compare: "NOT_EQUAL" },
                { key: "constraint1", value: "right", compare: "NOT_EQUAL" }
              ]
            ]
          }
        },
        {
          key: "constraint1Row",
          option: {
            label: "Row Number",
            description: "Row #1 is the topmost row",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                { key: "constraint1", value: "above", compare: "NOT_EQUAL" },
                { key: "constraint1", value: "below", compare: "NOT_EQUAL" }
              ]
            ]
          }
        },
        {
          key: "constraint1Column1",
          option: {
            label: "Start Column",
            description: "Column #1 is the leftmost column",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "constraint1",
                  value: "betweenHorizontal",
                  compare: "NOT_EQUAL"
                }
              ]
            ]
          }
        },
        {
          key: "constraint1Column2",
          option: {
            label: "End Column",
            description: "Column #1 is the leftmost column",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "constraint1",
                  value: "betweenHorizontal",
                  compare: "NOT_EQUAL"
                }
              ]
            ]
          }
        },
        {
          key: "constraint1Row1",
          option: {
            label: "Start Row",
            description: "Row #1 is the topmost row",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "constraint1",
                  value: "betweenVertical",
                  compare: "NOT_EQUAL"
                }
              ]
            ]
          }
        },
        {
          key: "constraint1Row2",
          option: {
            label: "End Row",
            description: "Row #1 is the topmost row",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "constraint1",
                  value: "betweenVertical",
                  compare: "NOT_EQUAL"
                }
              ]
            ]
          }
        },
        {
          key: "constraint2",
          option: {
            label: "Constraint #2",
            description: "A constraint to apply on this terrain",
            type: "select",
            validators: [null],
            defaultValue: "none",
            props: {
              options: [
                { name: "None", value: "none" },
                { name: "Above Row", value: "above" },
                { name: "Below Row", value: "below" },
                { name: "Left Of Column", value: "left" },
                { name: "Right Of Column", value: "right" },
                { name: "Between Columns", value: "betweenHorizontal" },
                { name: "Between Rows", value: "betweenVertical" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "constraint2Column",
          option: {
            label: "Column Number",
            description: "Column #1 is the leftmost column",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                { key: "constraint2", value: "left", compare: "NOT_EQUAL" },
                { key: "constraint2", value: "right", compare: "NOT_EQUAL" }
              ]
            ]
          }
        },
        {
          key: "constraint2Row",
          option: {
            label: "Row Number",
            description: "Row #1 is the topmost row",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                { key: "constraint2", value: "above", compare: "NOT_EQUAL" },
                { key: "constraint2", value: "below", compare: "NOT_EQUAL" }
              ]
            ]
          }
        },
        {
          key: "constraint2Column1",
          option: {
            label: "Start Column",
            description: "Column #1 is the leftmost column",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "constraint2",
                  value: "betweenHorizontal",
                  compare: "NOT_EQUAL"
                }
              ]
            ]
          }
        },
        {
          key: "constraint2Column2",
          option: {
            label: "End Column",
            description: "Column #1 is the leftmost column",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "constraint2",
                  value: "betweenHorizontal",
                  compare: "NOT_EQUAL"
                }
              ]
            ]
          }
        },
        {
          key: "constraint2Row1",
          option: {
            label: "Start Row",
            description: "Row #1 is the topmost row",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "constraint2",
                  value: "betweenVertical",
                  compare: "NOT_EQUAL"
                }
              ]
            ]
          }
        },
        {
          key: "constraint2Row2",
          option: {
            label: "End Row",
            description: "Row #1 is the topmost row",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "constraint2",
                  value: "betweenVertical",
                  compare: "NOT_EQUAL"
                }
              ]
            ]
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    minimumRoleLevel: 90,
    initialMemoryCost: 0,
    subsequentMemoryCost: 0
  },
  {
    id: "prop",
    name: "Prop",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "appearance", name: "Appearance" },
          { id: "availability", name: "Availability" },
          { id: "damage", name: "Damage" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "propId",
          option: {
            label: "Prop ID",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." },
            hidden: true
          }
        },
        {
          key: "shadowsEnabled",
          option: {
            label: "Shadows Enabled",
            type: "select",
            description: "Does this prop cast a shadow?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "Angle", compare: "NOT_EQUAL", value: 0 }]]
          },
          categories: ["featured"],
          supportedMapStyles: ["topDown"]
        },
        {
          key: "shadowsPlacement",
          option: {
            label: "Shadows Placement",
            description: "Are shadows cast to the floor or beneath the prop?",
            type: "select",
            validators: [null],
            defaultValue: "Floor",
            props: {
              options: [
                { name: "Floor", value: "Floor" },
                { name: "Beneath Prop", value: "Beneath Prop" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "shadowsEnabled", compare: "NOT_EQUAL", value: true }],
              [{ key: "Angle", compare: "NOT_EQUAL", value: 0 }]
            ]
          },
          categories: ["featured"],
          supportedMapStyles: ["topDown"]
        },
        {
          key: "UseColliders",
          option: {
            label: "Collision Enabled",
            type: "select",
            description: "Does this prop have collision?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "Scale",
          option: {
            label: "Scale",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: -10, max: 10, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "Angle",
          option: {
            label: "Angle",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: -360, max: 360, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "Tint",
          option: {
            label: "Tint",
            description: "Adjust the color tint of the prop",
            type: "color",
            defaultValue: "#FFFFFF",
            validators: [null]
          },
          categories: ["appearance"]
        },
        {
          key: "FlipX",
          option: {
            label: "Flip",
            type: "select",
            description: "Flip the prop to face the other direction",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["appearance"]
        },
        {
          key: "Alpha",
          option: {
            label: "Alpha",
            description: "Adjust the transparency of the prop. 0 is invisible, 1 is fully visible.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 0.15, step: 0.01, allowEmpty: false }
          },
          categories: ["appearance"]
        },
        {
          key: "visibleOnGameStart",
          option: {
            label: "Visible On Game Start",
            type: "select",
            description: "Is this prop visible when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["availability"]
        },
        {
          key: "visibilityScope",
          option: {
            label: "Visibility Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the prop is shown/hidden, who is it applied to?"
          },
          categories: ["availability"]
        },
        {
          key: "showWhenReceivingFrom",
          option: {
            label: "Show prop when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Show prop when the device receives a signal from the selected channel"
          },
          categories: ["availability"]
        },
        {
          key: "hideWhenReceivingFrom",
          option: {
            label: "Hide prop when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Hide prop when the device receives a signal from the selected channel"
          },
          categories: ["availability"]
        },
        {
          key: "canBeDamaged",
          option: {
            label: "Prop Damage Enabled",
            type: "select",
            description: "If enabled, the prop can be damaged by player gadgets",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "visibilityScope",
                  compare: "NOT_EQUAL",
                  value: "global"
                }
              ]
            ]
          },
          categories: ["damage"]
        },
        {
          key: "health",
          option: {
            label: "Prop Health",
            description: "How much health does the prop have?",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 1, max: 999999999, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "visibilityScope",
                  compare: "NOT_EQUAL",
                  value: "global"
                }
              ],
              [{ key: "canBeDamaged", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["damage"]
        },
        {
          key: "onDestroyedChannel",
          option: {
            label: "When prop destroyed, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the prop is destroyed, the device sends a signal on the selected channel",
            hideIf: [
              [
                {
                  key: "visibilityScope",
                  compare: "NOT_EQUAL",
                  value: "global"
                }
              ],
              [{ key: "canBeDamaged", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["damage"]
        },
        {
          key: "useAdaptiveHealth",
          option: {
            label: "Use Adaptive Health",
            type: "select",
            description: "If enabled, the prop will increase in health with each player in-game.",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "visibilityScope",
                  compare: "NOT_EQUAL",
                  value: "global"
                }
              ],
              [{ key: "canBeDamaged", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["damage"]
        },
        {
          key: "adaptiveHealthPerPlayer",
          option: {
            label: "Adaptive Health Per Player",
            description: "Amount of health to give the prop per additional player.",
            type: "numberInput",
            defaultValue: 25,
            validators: [null],
            props: { min: 1, max: 999999, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "visibilityScope",
                  compare: "NOT_EQUAL",
                  value: "global"
                }
              ],
              [{ key: "canBeDamaged", compare: "NOT_EQUAL", value: true }],
              [{ key: "useAdaptiveHealth", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["damage"]
        }
      ]
    },
    defaultState: { visible: true, healthPercent: 1 },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [
          { id: "madeVisible", name: "Prop made visible" },
          { id: "madeHidden", name: "Prop made hidden" },
          { id: "destroyed", name: "Prop destroyed" }
        ]
      },
      in: {
        connections: [
          { id: "show", name: "Show prop" },
          { id: "hide", name: "Hide prop" }
        ]
      }
    }
  },
  {
    id: "property",
    name: "Property",
    description: "Core device to store data used in blocks",
    optionSchema: {
      options: [
        {
          key: "propertyName",
          option: {
            label: "Property Name",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Property...",
              category: "property",
              maxLength: 64
            },
            description: "Provide a unique name for this property"
          }
        },
        {
          key: "valueType",
          option: {
            label: "Property Type",
            description: "Select a data type for this property",
            type: "select",
            validators: [null],
            defaultValue: "string",
            props: {
              options: [
                { name: "Text", value: "string" },
                { name: "Number", value: "number" },
                { name: "True/False", value: "boolean" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "defaultValueText",
          option: {
            label: "Default Value",
            description: "The default value for this property",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 256 },
            hideIf: [
              [{ key: "valueType", compare: "NOT_EQUAL", value: "string" }]
            ]
          }
        },
        {
          key: "defaultValueNumber",
          option: {
            label: "Default Value",
            description: "The default value for this property",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: {
              min: -99999999999,
              max: 99999999999,
              step: 1,
              allowEmpty: false
            },
            hideIf: [
              [{ key: "valueType", compare: "NOT_EQUAL", value: "number" }]
            ]
          }
        },
        {
          key: "defaultValueBoolean",
          option: {
            label: "Default Value",
            description: "The default value for this property",
            type: "select",
            validators: [null],
            defaultValue: true,
            props: {
              options: [
                { name: "True", value: true },
                { name: "False", value: false }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "valueType", compare: "NOT_EQUAL", value: "boolean" }]
            ]
          }
        },
        {
          key: "propertyType",
          option: {
            label: "Property Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When this property is updated, the value is applied to who?"
          }
        },
        {
          key: "whenValueChangesBroadcastOnChannel",
          option: {
            label: "When property value changes, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the value of the property changes, the device sends a signal on the selected channel"
          }
        },
        {
          key: "broadcastValueChangesOnGameStart",
          option: {
            label: "Broadcast value change on game start",
            type: "select",
            description: "When the game begins, should the property be marked as changed?",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [{ id: "triggered", name: "Property value changed" }]
      }
    },
    maxOnMap: 128
  },
  {
    id: "gimkitLiveQuestion",
    name: "Questioner",
    description: "Bring in a kit for players to answer multiple choice questions",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "channels", name: "Channels" },
          { id: "interface", name: "Interface" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "kitId",
          option: {
            label: "Kit Link",
            description: "Paste in the link of the kit you want players to answer questions from",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "https://www.gimkit.com/view/5be31abedf23350022e7d871",
              maxLength: 128
            }
          },
          categories: ["featured"]
        },
        {
          key: "whenAnsweredCorrectlyTransmitOn",
          option: {
            label: "When question answered correctly, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player answers a question correctly, the device sends a signal on the selected channel"
          },
          categories: ["featured", "channels"]
        },
        {
          key: "whenAnsweredIncorrectlyTransmitOn",
          option: {
            label: "When question answered incorrectly, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player answers a question incorrectly, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "openWhenReceivingOn",
          option: {
            label: "Open answering screen when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Open the question answering screen when the device receives a signal from the selected channel"
          },
          categories: ["featured", "channels"]
        },
        {
          key: "closable",
          option: {
            label: "Closable by player",
            type: "select",
            description: "Once the answering screen is opened, can it be closed by the player?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["interface"]
        },
        {
          key: "textShownWhenAnsweringCorrectly",
          option: {
            label: "Correct Answer Message",
            description: "The message shown to the player when they answer correctly",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Correct!", maxLength: 48 }
          },
          categories: ["interface"]
        },
        {
          key: "textShownWhenAnsweringIncorrectly",
          option: {
            label: "Incorrect Answer Message",
            description: "The message shown to the player when they answer incorrectly",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Incorrect!", maxLength: 48 }
          },
          categories: ["interface"]
        },
        {
          key: "textShownWhenAnsweringScope",
          option: {
            label: "Message Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the correct/incorrect message is updated from within Blocks, who does it apply to?"
          },
          categories: ["interface"]
        },
        {
          key: "closeWhenReceivingOn",
          option: {
            label: "Close answering screen when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Close the question answering screen when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "enableWhenReceivingOn",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "disableWhenReceivingOn",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "whenOpenedChannel",
          option: {
            label: "When answering screen opened, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the question answering screen is opened, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "whenClosedChannel",
          option: {
            label: "When answering screen closed, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the question answering screen is closed, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "sound",
          option: {
            label: "Sound",
            description: "Sounds played when a player answers a question correctly or incorrectly",
            type: "select",
            validators: [null],
            defaultValue: "default",
            props: {
              options: [
                { value: "none", name: "None" },
                { value: "default", name: "Default" },
                { value: "gimkitLive", name: "Gimkit (Classic)" },
                { name: "Advanced", value: "advanced", minimumRoleLevel: 90 }
              ],
              allowEmpty: false
            }
          },
          categories: ["sound"]
        },
        {
          key: "correctSound",
          option: {
            label: "Correct Sound",
            type: "select",
            defaultValue: "default",
            validators: [null],
            hideIf: [
              [{ key: "sound", compare: "NOT_EQUAL", value: "advanced" }]
            ],
            props: {
              options: [
                { value: "none", name: "None" },
                { value: "default", name: "Default" },
                { value: "gimkitLive", name: "Gimkit (Classic)" }
              ],
              allowEmpty: false
            }
          },
          categories: ["sound"],
          minimumRoleLevel: 90
        },
        {
          key: "incorrectSound",
          option: {
            label: "Incorrect Sound",
            type: "select",
            defaultValue: "default",
            validators: [null],
            hideIf: [
              [{ key: "sound", compare: "NOT_EQUAL", value: "advanced" }]
            ],
            props: {
              options: [
                { value: "none", name: "None" },
                { value: "default", name: "Default" },
                { value: "gimkitLive", name: "Gimkit (Classic)" }
              ],
              allowEmpty: false
            }
          },
          categories: ["sound"],
          minimumRoleLevel: 90
        },
        {
          key: "actionSound",
          option: {
            label: "Click Sound",
            type: "select",
            defaultValue: "default",
            validators: [null],
            hideIf: [
              [{ key: "sound", compare: "NOT_EQUAL", value: "advanced" }]
            ],
            props: {
              options: [
                { value: "none", name: "None" },
                { value: "default", name: "Default" },
                { value: "gimkitLive", name: "Gimkit (Classic)" }
              ],
              allowEmpty: false
            }
          },
          categories: ["sound"],
          minimumRoleLevel: 90
        },
        {
          key: "useCustomAction",
          option: {
            label: "Use Custom Action",
            type: "select",
            description: "Once a player answers a question correctly, replace the close button with a custom call to action?",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          minimumRoleLevel: 90,
          categories: ["interface"]
        },
        {
          key: "customActionText",
          option: {
            label: "Custom Action Button Label",
            description: "Text shown on the button after a player answers a question correctly",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 48 },
            hideIf: [
              [{ key: "useCustomAction", compare: "NOT_EQUAL", value: true }]
            ]
          },
          minimumRoleLevel: 90,
          categories: ["interface"]
        },
        {
          key: "channelToTriggerCustomAction",
          option: {
            label: "When custom action button clicked, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player clicks the custom action button, the device sends a signal on the selected channel",
            hideIf: [
              [{ key: "useCustomAction", compare: "NOT_EQUAL", value: true }]
            ]
          },
          minimumRoleLevel: 90,
          categories: ["interface"]
        },
        {
          key: "size",
          option: {
            label: "Size",
            type: "numberInput",
            defaultValue: 48,
            validators: [null],
            props: { min: 25, max: 100, allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: {
      enabled: false,
      questions: "[]",
      currentQuestionId: "",
      nextQuestionId: "",
      correctText: "Correct!",
      incorrectText: "Incorrect!"
    },
    codeGridSchema: {
      allowChannelGrids: true,
      triggers: [
        {
          type: "whenQuestionAnsweredCorrectly",
          name: "When question answered correctly...",
          customBlocks: ["question_answering_streak"]
        },
        {
          type: "whenQuestionAnsweredIncorrectly",
          name: "When question answered incorrectly..."
        },
        { type: "wire", name: "On wire pulse..." }
      ],
      customBlocks: ["message_correct_answer", "message_incorrect_answer"]
    },
    wireConfig: {
      out: {
        connections: [
          { id: "questionCorrect", name: "Question answered correctly" },
          { id: "questionIncorrect", name: "Question answered incorrectly" },
          { id: "opened", name: "Question answering screen opened" },
          { id: "closed", name: "Question answering screen closed" }
        ]
      },
      in: {
        connections: [
          { id: "open", name: "Open question answering screen" },
          { id: "close", name: "Close question answering screen" },
          { id: "enable", name: "Enable Questioner" },
          { id: "disable", name: "Disable Questioner" },
          { id: "codeGrid", name: "Run wire pulse block" }
        ]
      }
    },
    maxOnMap: 6,
    initialMemoryCost: 250,
    subsequentMemoryCost: 250
  },
  {
    id: "relay",
    name: "Relay",
    description: "Trigger events on behalf of other players",
    optionSchema: {
      options: [
        {
          key: "relayAs",
          option: {
            label: "Relay Audience",
            description: "Select the audience to relay the message on behalf of",
            type: "select",
            validators: [null],
            defaultValue: "All Players",
            props: {
              options: [
                { name: "All Players", value: "All Players" },
                { name: "All Other Players", value: "All Other Players" },
                {
                  name: "All Players On My Team",
                  value: "All Players On My Team"
                },
                { name: "Random Player", value: "Random Player" },
                {
                  name: "All Players On Specific Team",
                  value: "All Players On Team..."
                },
                {
                  name: "Random Player On Specific Team",
                  value: "Random Player On Team"
                },
                {
                  name: "Single Player On Each Team",
                  value: "Single Player On Each Team"
                }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "team",
          option: {
            label: "Team",
            description: "Set the configured team for the audience",
            type: "select",
            validators: [null],
            defaultValue: "1",
            props: {
              options: [
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "relayAs",
                  compare: "NOT_EQUAL",
                  value: "All Players On Team..."
                },
                {
                  key: "relayAs",
                  compare: "NOT_EQUAL",
                  value: "Random Player On Team"
                }
              ]
            ]
          }
        },
        {
          key: "channelToTrigger",
          option: {
            label: "Relay channel",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "The channel the relayed message will be transmitted on for each player in the selected audience"
          }
        },
        {
          key: "triggerWhenReceivingOnChannel",
          option: {
            label: "Relay when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Relay when the device receives a signal from the selected channel"
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: { connections: [{ id: "triggered", name: "Relay trigger" }] },
      in: { connections: [{ id: "trigger", name: "Trigger relay" }] }
    },
    maxOnMap: 128,
    initialMemoryCost: 20,
    subsequentMemoryCost: 20
  },
  {
    id: "repeater",
    name: "Repeater",
    description: "Repeat a task at a set interval",
    optionSchema: {
      categories: {
        categories: [{ id: "featured", name: "Featured" }],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "startChannel",
          option: {
            label: "Start repeater when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Start the repeater when the device receives a signal from the selected channel"
          },
          categories: ["featured"]
        },
        {
          key: "actionChannel",
          option: {
            label: "When task occurs, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the repeater runs the task, the device sends a signal on the selected channel"
          },
          categories: ["featured"]
        },
        {
          key: "repeatInterval",
          option: {
            label: "Task Interval",
            description: "How often (in seconds) the task will run",
            type: "numberInput",
            defaultValue: 5,
            validators: [null],
            props: { min: 0.5, max: 600, step: 0.5, allowEmpty: false }
          },
          categories: ["featured"]
        },
        {
          key: "stopRepeatingStrategy",
          option: {
            label: "Stop Strategy",
            description: "When the repeater will stop repeating the task",
            type: "select",
            validators: [null],
            defaultValue: "time",
            props: {
              options: [
                { name: "After period of time", value: "time" },
                {
                  name: "After number of repetitions",
                  value: "numberOfRepetitions"
                },
                { name: "After receiving on a channel", value: "channel" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "timePeriod",
          option: {
            label: "Time To Run",
            description: "How long (in seconds) the repeater will run",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 3, max: 1800, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "stopRepeatingStrategy",
                  compare: "NOT_EQUAL",
                  value: "time"
                }
              ]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "numberOfRepetitions",
          option: {
            label: "Number of Repetitions",
            description: "How many times the repeater will run a task before stopping",
            type: "numberInput",
            defaultValue: 5,
            validators: [null],
            props: { min: 2, max: 100, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "stopRepeatingStrategy",
                  compare: "NOT_EQUAL",
                  value: "numberOfRepetitions"
                }
              ]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "stopChannel",
          option: {
            label: "Stop repeater when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Stop the repeater when the device receives a signal from the selected channel",
            hideIf: [
              [
                {
                  key: "stopRepeatingStrategy",
                  compare: "NOT_EQUAL",
                  value: "channel"
                }
              ]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "maxConcurrentTasksPerPlayer",
          option: {
            label: "Max Concurrent Tasks Per Player",
            description: "The maximum number of tasks that can be running at the same time for each player",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 8, step: 1, allowEmpty: false }
          }
        },
        {
          key: "triggerTaskOnStart",
          option: {
            label: "Trigger Task On Start",
            type: "select",
            description: "If enabled, the task will run when the repeater starts. If disabled, it will wait until the first interval to run the task",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: { connections: [{ id: "action", name: "Repeater runs task" }] },
      in: {
        connections: [
          { id: "start", name: "Start repeater" },
          { id: "stop", name: "Stop repeater" }
        ]
      }
    },
    maxOnMap: 10,
    initialMemoryCost: 500,
    subsequentMemoryCost: 400
  },
  {
    id: "respawn",
    name: "Respawn",
    description: "Force a player to respawn",
    optionSchema: {
      options: [
        {
          key: "respawnOnChannel",
          option: {
            label: "Respawn player when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Respawn the triggering player when the device receives a signal from the selected channel"
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: { connections: [{ id: "respawn", name: "Respawn player" }] }
    },
    maxOnMap: 16
  },
  {
    id: "scorebar",
    name: "Scorebar",
    description: "Shows Scorebar UI at the top",
    optionSchema: {
      options: [
        {
          key: "numberOfTeams",
          option: {
            label: "Number of Teams",
            description: "How many teams to show in Scorebar",
            type: "select",
            validators: [null],
            defaultValue: 1,
            props: {
              options: [
                { value: 1, name: "1" },
                { value: 2, name: "2" },
                { value: 3, name: "3" },
                { value: 4, name: "4" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "team1",
          option: {
            label: "Team 1",
            type: "select",
            validators: [null],
            defaultValue: "1",
            props: {
              options: [
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "colorTeam1",
          option: {
            label: "Team 1 Color",
            type: "color",
            defaultValue: "#e93d37",
            validators: [null]
          }
        },
        {
          key: "team2",
          option: {
            label: "Team 2",
            type: "select",
            validators: [null],
            defaultValue: "2",
            props: {
              options: [
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "numberOfTeams", compare: "LESS_THAN", value: 2 }]
            ]
          }
        },
        {
          key: "colorTeam2",
          option: {
            label: "Team 2 Color",
            type: "color",
            defaultValue: "#4d56f3",
            validators: [null],
            hideIf: [
              [{ key: "numberOfTeams", compare: "LESS_THAN", value: 2 }]
            ]
          }
        },
        {
          key: "team3",
          option: {
            label: "Team 3",
            type: "select",
            validators: [null],
            defaultValue: "3",
            props: {
              options: [
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "numberOfTeams", compare: "LESS_THAN", value: 3 }]
            ]
          }
        },
        {
          key: "colorTeam3",
          option: {
            label: "Team 3 Color",
            type: "color",
            defaultValue: "#3ce634",
            validators: [null],
            hideIf: [
              [{ key: "numberOfTeams", compare: "LESS_THAN", value: 3 }]
            ]
          }
        },
        {
          key: "team4",
          option: {
            label: "Team 4",
            type: "select",
            validators: [null],
            defaultValue: "4",
            props: {
              options: [
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "numberOfTeams", compare: "LESS_THAN", value: 4 }]
            ]
          }
        },
        {
          key: "colorTeam4",
          option: {
            label: "Team 4 Color",
            type: "color",
            defaultValue: "#9d34e6",
            validators: [null],
            hideIf: [
              [{ key: "numberOfTeams", compare: "LESS_THAN", value: 4 }]
            ]
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {},
    minimumRoleLevel: 90,
    maxOnMap: 1,
    initialMemoryCost: 20,
    subsequentMemoryCost: 20
  },
  {
    id: "sentry",
    name: "Sentry",
    description: "An AI enemy that will attempt to knockout other players",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "difficulty", name: "Difficulty" },
          { id: "health", name: "Health" },
          { id: "knockout", name: "Knockout" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "weapon",
          option: {
            label: "Gadget",
            description: "The gadget the sentry will use to fire at players",
            type: "itemId",
            defaultValue: "zapper_common",
            validators: [null],
            props: {
              blockedItems: [
                "pickaxe_common",
                "pickaxe_uncommon",
                "pickaxe_rare",
                "pickaxe_epic",
                "pickaxe_legendary",
                "pixel_common",
                "pixel_uncommon",
                "pixel_rare",
                "pixel_epic",
                "pixel_legendary"
              ],
              allowedItemsCategories: ["weapon"]
            }
          },
          categories: ["featured"]
        },
        {
          key: "aimAccuracy",
          option: {
            label: "Aim Accuracy",
            description: "Customize how accurate the sentry is when aiming at players",
            type: "select",
            validators: [null],
            defaultValue: 0.5,
            props: {
              options: [
                { name: "Very Low", value: 0 },
                { name: "Low", value: 0.25 },
                { name: "Medium", value: 0.5 },
                { name: "High", value: 0.7 },
                { name: "Very High", value: 0.9 },
                { name: "Max", value: 1 }
              ],
              allowEmpty: false
            }
          },
          categories: ["difficulty"]
        },
        {
          key: "fireRate",
          option: {
            label: "Fire Rate",
            description: "How quickly does the sentry fire projectiles?",
            type: "select",
            validators: [null],
            defaultValue: 0.5,
            props: {
              options: [
                { name: "Super Slow", value: 0 },
                { name: "Very Slow", value: 0.1 },
                { name: "Slow", value: 0.25 },
                { name: "Medium", value: 0.5 },
                { name: "Fast", value: 0.75 },
                { name: "Very Fast", value: 0.9 },
                { name: "Fastest", value: 1 }
              ],
              allowEmpty: false
            }
          },
          categories: ["difficulty"]
        },
        {
          key: "baseHealth",
          option: {
            label: "Sentry Health",
            description: "How much health does the sentry have?",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 1, max: 1e5, step: 1, allowEmpty: false }
          },
          categories: ["featured", "health"]
        },
        {
          key: "baseShield",
          option: {
            label: "Sentry Shield",
            description: "How much shield does the sentry have?",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: 0, max: 1e5, step: 1, allowEmpty: false }
          },
          categories: ["health"]
        },
        {
          key: "useAdaptiveHealth",
          option: {
            label: "Use Adaptive Health",
            type: "select",
            description: "If enabled, the sentry will increase its health and shield based on the number of players in the game.",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["health"]
        },
        {
          key: "adaptiveHealth",
          option: {
            label: "Adaptive Health Amount",
            description: "How much health should the sentry gain per player?",
            type: "numberInput",
            defaultValue: 5,
            validators: [null],
            props: { min: 0, max: 1e4, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "useAdaptiveHealth", compare: "EQUAL", value: false }]
            ]
          },
          categories: ["health"]
        },
        {
          key: "adaptiveShield",
          option: {
            label: "Adaptive Shield Amount",
            description: "How much shield should the sentry gain per player?",
            type: "numberInput",
            defaultValue: 5,
            validators: [null],
            props: { min: 0, max: 1e4, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "useAdaptiveHealth", compare: "EQUAL", value: false }]
            ]
          },
          categories: ["health"]
        },
        {
          key: "skinId",
          option: {
            label: "Sentry Appearance",
            description: "Change the appearance of the sentry",
            type: "select",
            validators: [null],
            defaultValue: "character_sentryRobot",
            props: {
              options: [
                { name: "Sentry Robot", value: "character_sentryRobot" },
                { name: "Green Evil Plant", value: "character_evilPlantGreen" },
                { name: "Pink Evil Plant", value: "character_evilPlantPink" },
                { name: "Bonesy", value: "character_skeleton" },
                { name: "Captain Buck", value: "character_pirate" },
                { name: "Chompz Costume", value: "character_redDinoCostume" },
                { name: "Detective Baka", value: "character_detective" },
                { name: "Echo Agent", value: "character_echoAgent" },
                { name: "Kynami", value: "character_redNinja" },
                { name: "Libre", value: "character_luchador" },
                { name: "Ozi", value: "character_mummy" },
                { name: "Raveena", value: "character_witch" },
                { name: "Stache", value: "character_mustache" },
                { name: "Vortex Agent", value: "character_vortexAgent" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "team",
          option: {
            label: "Sentry Team",
            description: "Set the team the Sentry belongs to. The Sentry will not attack other players/sentries on the same team.",
            type: "select",
            validators: [null],
            defaultValue: "__SENTRY_TEAM",
            props: {
              options: [
                { value: "__SENTRY_TEAM", name: "Team Sentry" },
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "doesRespawn",
          option: {
            label: "Respawn Enabled",
            type: "select",
            description: "Does the sentry respawn after getting knocked out?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured", "difficulty"]
        },
        {
          key: "respawnDurationSeconds",
          option: {
            label: "Respawn Duration (Seconds)",
            description: "When knocked out, how many seconds does the sentry take to respawn?",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 0, max: 600, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "doesRespawn", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["featured", "difficulty"]
        },
        {
          key: "characterName",
          option: {
            label: "Sentry Name",
            description: "Set a custom name for this sentry, shown when a player causes it to get knocked out",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Sentry", maxLength: 24 }
          },
          categories: ["featured"]
        },
        {
          key: "rangeRadius",
          option: {
            label: "Range Radius",
            description: "How far away can the sentry detect players?",
            type: "numberInput",
            defaultValue: 1e3,
            validators: [null],
            props: { min: 250, max: 5e3, step: 1, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "dropItem",
          option: {
            label: "Item Drop",
            type: "select",
            description: "Does this sentry drop an item when knocked out?",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["knockout"]
        },
        {
          key: "itemId",
          option: {
            label: "Dropped Item",
            description: "What item does this sentry drop when knocked out?",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [[{ key: "dropItem", compare: "NOT_EQUAL", value: true }]]
          },
          categories: ["knockout"]
        },
        {
          key: "itemAmount",
          option: {
            label: "Dropped Item Amount",
            description: "How many of the item does this sentry drop when knocked out?",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 999999999, step: 1, allowEmpty: false },
            hideIf: [[{ key: "dropItem", compare: "NOT_EQUAL", value: true }]]
          },
          categories: ["knockout"]
        },
        {
          key: "onKnockoutChannel",
          option: {
            label: "When sentry knocked out, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When the sentry is knocked out, the device sends a signal on the selected channel"
          },
          categories: ["knockout", "channels"]
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active on Game Start",
            type: "select",
            description: "Is the sentry spawned in when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate sentry when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the sentry when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate sentry when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the sentry when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: { connections: [{ id: "knockedOut", name: "Sentry knocked out" }] },
      in: {
        connections: [
          { id: "activate", name: "Activate sentry" },
          { id: "deactivate", name: "Deactivate sentry" }
        ]
      }
    },
    maxOnMap: 100,
    initialMemoryCost: 1e3,
    subsequentMemoryCost: 500
  },
  {
    id: "shadow",
    name: "Shadow",
    description: "Create more realistic lighting by casting shadows",
    optionSchema: {
      options: [
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 300,
            validators: [null],
            props: { min: 15, max: 500 },
            hidden: true
          }
        },
        {
          key: "height",
          option: {
            label: "Height",
            type: "numberInput",
            defaultValue: 130,
            validators: [null],
            props: { min: 15, max: 500 },
            hidden: true
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    minimumRoleLevel: 90
  },
  {
    id: "soundEffect",
    name: "Sound Effect",
    description: "Play a sound effect",
    optionSchema: {
      options: [
        {
          key: "audioUrl",
          option: {
            label: "Audio URL",
            type: "textInput",
            defaultValue: "https://www.soundjay.com/mechanical/sounds/empty-bullet-shell-fall-02.mp3",
            validators: [null],
            props: { placeholder: "Enter audio url here..." }
          }
        },
        {
          key: "volume",
          option: {
            label: "Volume",
            type: "numberInput",
            defaultValue: 50,
            validators: [null],
            props: { min: 1, max: 100, step: 1, allowEmpty: false }
          }
        },
        {
          key: "playWhenReceivingFrom",
          option: {
            label: "Play When Receiving From...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "characterType",
          option: {
            label: "Allowed Player Type",
            description: "Which kinds of players can this sound play for?",
            type: "select",
            validators: [null],
            defaultValue: "all",
            props: {
              options: [
                { value: "all", name: "Everybody" },
                { value: "gameOwner", name: "Game Host" }
              ],
              allowEmpty: false
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: { connections: [{ id: "play", name: "Play sound effect" }] }
    },
    minimumRoleLevel: 90
  },
  {
    id: "characterSpawnPad",
    name: "Spawn Pad",
    description: "Set where players should be when the game begins",
    optionSchema: {
      options: [
        {
          key: "visibleInGame",
          option: {
            label: "Visible In-Game",
            type: "select",
            description: "Is the spawn pad visible when the game starts?",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "phase",
          option: {
            label: "Use During Phase",
            description: "Which phase of the game should this spawn pad be used?",
            type: "select",
            validators: [null],
            defaultValue: "All",
            props: {
              options: [
                { value: "All", name: "All" },
                { value: "Game", name: "Game" },
                { value: "Pre-Game", name: "Pre-Game" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "teamId",
          option: {
            label: "Allowed Team",
            description: "Which team can spawn at this spawn pad?",
            type: "select",
            validators: [null],
            defaultValue: "__ANY_TEAM__",
            props: {
              options: [
                { name: "Any Team", value: "__ANY_TEAM__" },
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "characterType",
          option: {
            label: "Allowed Player Type",
            description: "Which kinds of players can spawn at this spawn pad?",
            type: "select",
            validators: [null],
            defaultValue: "all",
            props: {
              options: [
                { value: "all", name: "Everybody" },
                { value: "gameOwner", name: "Game Host" },
                { value: "nonGameOwner", name: "Players" }
              ],
              allowEmpty: false
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    maxOnMap: 200
  },
  {
    id: "speed",
    name: "Speed Modifier",
    description: "Change how fast a player moves",
    optionSchema: {
      options: [
        {
          key: "speed",
          option: {
            label: "Speed",
            description: "Speed the player will move at. 1 is default speed, 0.5 is half speed, 2 is double speed, etc.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 0, max: 4, step: 0.01, allowEmpty: false }
          }
        },
        {
          key: "activateWhenReceivingFrom",
          option: {
            label: "Set player to configured speed when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Set the triggering player to the configured speed when the device receives a signal from the selected channel"
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "setSpeed", name: "Set player to configured speed" }
        ]
      }
    },
    maxOnMap: 32
  },
  {
    id: "startingInventory",
    name: "Starting Inventory",
    description: "Give players items when the game begins",
    optionSchema: {
      options: [
        {
          key: "itemId",
          option: {
            label: "Item To Grant",
            description: "The item that will be granted to the player at the start of the game",
            type: "itemId",
            validators: [null],
            props: {}
          }
        },
        {
          key: "itemAmount",
          option: {
            label: "Granted Item Amount",
            description: "The amount of the item that will be granted to the player at the start of the game",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 999999999999999, step: 1, allowEmpty: false }
          }
        },
        {
          key: "equipOnGrant",
          option: {
            label: "Equip When Granted",
            type: "select",
            description: "If the item is a gadget or usable, should it be automatically equipped when granted?",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "grantDuringPhase",
          option: {
            label: "Grant During Phase",
            description: "The phase the player gets the item.",
            type: "select",
            validators: [null],
            defaultValue: "game",
            props: {
              options: [
                { name: "All", value: "all" },
                { name: "Game", value: "game" },
                { name: "Pre-Game", value: "preGame" }
              ],
              allowEmpty: false
            }
          },
          minimumRoleLevel: 90
        },
        {
          key: "grantForSavedCharacters",
          option: {
            label: "Grant For Saved Players",
            type: "select",
            description: "Should the item still be granted for players that have a save? This could allow players to duplicate the item by loading in, leaving, and then rejoining.",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          minimumRoleLevel: 90
        },
        {
          key: "enabled",
          option: {
            label: "Enabled",
            type: "select",
            description: "If disabled, then this item will not be granted to the player.",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          minimumRoleLevel: 90
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    maxOnMap: 64
  },
  {
    id: "tagZone",
    name: "Tag Zone",
    description: "Allow players to tag each-other!",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "channels", name: "Channels" },
          { id: "availability", name: "Availability" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "taggingTeam",
          option: {
            label: "Tagging Team",
            description: "The team that is allowed to tag other players",
            type: "select",
            validators: [null],
            defaultValue: "1",
            props: {
              options: [
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "whenTaggedTransmitOn",
          option: {
            label: "When player tagged, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player is tagged, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "whenTagsTransmitOn",
          option: {
            label: "When player tags another player, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player tags another player, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "respawnWhenTagged",
          option: {
            label: "Respawn When Tagged",
            type: "select",
            description: "Respawn the tagged player when they are tagged",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "detectionArea",
          option: {
            label: "Tag Area",
            description: "Set up tagging across the entire map or within a specific area",
            type: "select",
            validators: [null],
            defaultValue: "everywhere",
            props: {
              options: [
                { name: "Entire Map", value: "everywhere" },
                { name: "Zone", value: "zone" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "detectionDistance",
          option: {
            label: "Tag Distance",
            description: "Distance (in tiles) two players can be apart before a tag is registered",
            type: "numberInput",
            defaultValue: 1.5,
            validators: [null],
            props: { min: 0.5, max: 3, step: 0.1, allowEmpty: false }
          },
          categories: ["featured"]
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active on Game Start",
            type: "select",
            description: "Whether the tag zone is active when the game starts",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["availability"]
        },
        {
          key: "activateWhenReceivingFrom",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the tag zone when the device receives a signal from the selected channel"
          },
          categories: ["availability", "channels"]
        },
        {
          key: "deactivateWhenReceivingFrom",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the tag zone when the device receives a signal from the selected channel"
          },
          categories: ["availability", "channels"]
        },
        {
          key: "width",
          option: {
            label: "Zone Width",
            type: "numberInput",
            defaultValue: 500,
            validators: [null],
            props: { min: 350, max: 1e5, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "height",
          option: {
            label: "Zone Height",
            type: "numberInput",
            defaultValue: 500,
            validators: [null],
            props: { min: 350, max: 1e5, allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [
        { type: "onTags", name: "On player tags someone..." },
        { type: "onTagged", name: "On player tagged by someone else..." }
      ],
      customBlocks: [
        "tag_zone_other_character_name",
        "tag_zone_other_character_team_number"
      ]
    },
    wireConfig: {
      out: {
        connections: [
          { id: "tags", name: "Player tags someone" },
          { id: "tagged", name: "Player gets tagged by someone else" }
        ]
      },
      in: {
        connections: [
          { id: "activate", name: "Activate Tag Zone Device" },
          { id: "deactivate", name: "Deactivate Tag Zone Device" }
        ]
      }
    },
    maxOnMap: 6,
    initialMemoryCost: 1500,
    subsequentMemoryCost: 1500
  },
  {
    id: "teamSettings",
    name: "Team Settings",
    description: "Set a team's name and modify other settings",
    optionSchema: {
      options: [
        {
          key: "team",
          option: {
            label: "Team",
            type: "select",
            validators: [null],
            defaultValue: "1",
            props: {
              options: [
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "teamName",
          option: {
            label: "Team Name",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "whenPlayerJoinsTransmitOn",
          option: {
            label: "When player joins team, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player joins this team, the device sends a signal on the selected channel"
          }
        },
        {
          key: "maxPlayers",
          option: {
            label: "Max Players",
            type: "select",
            validators: [null],
            defaultValue: 4,
            props: {
              options: [
                { name: "1", value: 1 },
                { name: "2", value: 2 },
                { name: "3", value: 3 },
                { name: "4", value: 4 },
                { name: "5", value: 5 },
                { name: "6", value: 6 },
                { name: "7", value: 7 },
                { name: "8", value: 8 },
                { name: "9", value: 9 },
                { name: "10", value: 10 },
                { name: "11", value: 11 },
                { name: "12", value: 12 },
                { name: "13", value: 13 },
                { name: "14", value: 14 },
                { name: "15", value: 15 },
                { name: "16", value: 16 },
                { name: "17", value: 17 },
                { name: "18", value: 18 },
                { name: "19", value: 19 },
                { name: "20", value: 20 },
                { name: "21", value: 21 },
                { name: "22", value: 22 },
                { name: "23", value: 23 },
                { name: "24", value: 24 },
                { name: "25", value: 25 },
                { name: "26", value: 26 },
                { name: "27", value: 27 },
                { name: "28", value: 28 },
                { name: "29", value: 29 },
                { name: "30", value: 30 },
                { name: "31", value: 31 },
                { name: "32", value: 32 },
                { name: "33", value: 33 },
                { name: "34", value: 34 },
                { name: "35", value: 35 },
                { name: "36", value: 36 },
                { name: "37", value: 37 },
                { name: "38", value: 38 },
                { name: "39", value: 39 },
                { name: "40", value: 40 },
                { name: "41", value: 41 },
                { name: "42", value: 42 },
                { name: "43", value: 43 },
                { name: "44", value: 44 },
                { name: "45", value: 45 },
                { name: "46", value: 46 },
                { name: "47", value: 47 },
                { name: "48", value: 48 },
                { name: "49", value: 49 },
                { name: "50", value: 50 },
                { name: "51", value: 51 },
                { name: "52", value: 52 },
                { name: "53", value: 53 },
                { name: "54", value: 54 },
                { name: "55", value: 55 },
                { name: "56", value: 56 },
                { name: "57", value: 57 },
                { name: "58", value: 58 },
                { name: "59", value: 59 },
                { name: "60", value: 60 }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "placementPriorityOnGameStart",
          option: {
            label: "Placement Priority On Game Start",
            type: "select",
            validators: [null],
            defaultValue: 30,
            props: {
              options: [
                { name: "1st", value: 1 },
                { name: "2nd", value: 2 },
                { name: "3rd", value: 3 },
                { name: "4th", value: 4 },
                { name: "5th", value: 5 },
                { name: "6th", value: 6 },
                { name: "7th", value: 7 },
                { name: "8th", value: 8 },
                { name: "9th", value: 9 },
                { name: "10th", value: 10 },
                { name: "11th", value: 11 },
                { name: "12th", value: 12 },
                { name: "13th", value: 13 },
                { name: "14th", value: 14 },
                { name: "15th", value: 15 },
                { name: "16th", value: 16 },
                { name: "17th", value: 17 },
                { name: "18th", value: 18 },
                { name: "19th", value: 19 },
                { name: "20th", value: 20 },
                { name: "21st", value: 21 },
                { name: "22nd", value: 22 },
                { name: "23rd", value: 23 },
                { name: "24th", value: 24 },
                { name: "25th", value: 25 },
                { name: "26th", value: 26 },
                { name: "27th", value: 27 },
                { name: "28th", value: 28 },
                { name: "29th", value: 29 },
                { name: "30th", value: 30 },
                { name: "31st", value: 31 },
                { name: "32nd", value: 32 },
                { name: "33rd", value: 33 },
                { name: "34th", value: 34 },
                { name: "35th", value: 35 },
                { name: "36th", value: 36 },
                { name: "37th", value: 37 },
                { name: "38th", value: 38 },
                { name: "39th", value: 39 },
                { name: "40th", value: 40 },
                { name: "41st", value: 41 },
                { name: "42nd", value: 42 },
                { name: "43rd", value: 43 },
                { name: "44th", value: 44 },
                { name: "45th", value: 45 },
                { name: "46th", value: 46 },
                { name: "47th", value: 47 },
                { name: "48th", value: 48 },
                { name: "49th", value: 49 },
                { name: "50th", value: 50 },
                { name: "51st", value: 51 },
                { name: "52nd", value: 52 },
                { name: "53rd", value: 53 },
                { name: "54th", value: 54 },
                { name: "55th", value: 55 },
                { name: "56th", value: 56 },
                { name: "57th", value: 57 },
                { name: "58th", value: 58 },
                { name: "59th", value: 59 },
                { name: "60th", value: 60 }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "placementPriorityDuringGame",
          option: {
            label: "Placement Priority During Game",
            type: "select",
            validators: [null],
            defaultValue: 30,
            props: {
              options: [
                { name: "1st", value: 1 },
                { name: "2nd", value: 2 },
                { name: "3rd", value: 3 },
                { name: "4th", value: 4 },
                { name: "5th", value: 5 },
                { name: "6th", value: 6 },
                { name: "7th", value: 7 },
                { name: "8th", value: 8 },
                { name: "9th", value: 9 },
                { name: "10th", value: 10 },
                { name: "11th", value: 11 },
                { name: "12th", value: 12 },
                { name: "13th", value: 13 },
                { name: "14th", value: 14 },
                { name: "15th", value: 15 },
                { name: "16th", value: 16 },
                { name: "17th", value: 17 },
                { name: "18th", value: 18 },
                { name: "19th", value: 19 },
                { name: "20th", value: 20 },
                { name: "21st", value: 21 },
                { name: "22nd", value: 22 },
                { name: "23rd", value: 23 },
                { name: "24th", value: 24 },
                { name: "25th", value: 25 },
                { name: "26th", value: 26 },
                { name: "27th", value: 27 },
                { name: "28th", value: 28 },
                { name: "29th", value: 29 },
                { name: "30th", value: 30 },
                { name: "31st", value: 31 },
                { name: "32nd", value: 32 },
                { name: "33rd", value: 33 },
                { name: "34th", value: 34 },
                { name: "35th", value: 35 },
                { name: "36th", value: 36 },
                { name: "37th", value: 37 },
                { name: "38th", value: 38 },
                { name: "39th", value: 39 },
                { name: "40th", value: 40 },
                { name: "41st", value: 41 },
                { name: "42nd", value: 42 },
                { name: "43rd", value: 43 },
                { name: "44th", value: 44 },
                { name: "45th", value: 45 },
                { name: "46th", value: 46 },
                { name: "47th", value: 47 },
                { name: "48th", value: 48 },
                { name: "49th", value: 49 },
                { name: "50th", value: 50 },
                { name: "51st", value: 51 },
                { name: "52nd", value: 52 },
                { name: "53rd", value: 53 },
                { name: "54th", value: 54 },
                { name: "55th", value: 55 },
                { name: "56th", value: 56 },
                { name: "57th", value: 57 },
                { name: "58th", value: 58 },
                { name: "59th", value: 59 },
                { name: "60th", value: 60 }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "allowCustomHostPlacement",
          option: {
            label: "Allow custom host placement",
            type: "select",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [
        {
          type: "WHEN_PLAYER_COUNT_CHANGES",
          name: "When player count changes..."
        }
      ],
      customBlocks: ["get_player_count"]
    },
    wireConfig: {
      out: {
        connections: [{ id: "characterJoinsTeam", name: "Player joins team" }]
      }
    },
    minimumRoleLevel: 90
  },
  {
    id: "teamSwitcher",
    name: "Team Switcher",
    description: "Switch a player to a different team",
    optionSchema: {
      options: [
        {
          key: "switchToStrategy",
          option: {
            label: "Switch Strategy",
            description: "How to choose which team to switch to",
            type: "select",
            validators: [null],
            defaultValue: "randomTeam",
            props: {
              options: [
                { name: "Random Team", value: "randomTeam" },
                { name: "Specific Team", value: "specificTeam" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "specificTeam",
          option: {
            label: "Team",
            description: "The team the player will switch to",
            type: "select",
            validators: [null],
            defaultValue: "__SPECTATORS_TEAM",
            props: {
              options: [
                { name: "Spectators", value: "__SPECTATORS_TEAM" },
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "switchToStrategy",
                  compare: "NOT_EQUAL",
                  value: "specificTeam"
                }
              ]
            ]
          }
        },
        {
          key: "switchChannel",
          option: {
            label: "Switch to configured team when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Switch to configured team when the device receives a signal from the selected channel"
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "switch", name: "Switch player to configured team" }
        ]
      }
    },
    maxOnMap: 100,
    initialMemoryCost: 7,
    subsequentMemoryCost: 7
  },
  {
    id: "teleporter",
    name: "Teleporter",
    description: "Teleport players from one location to another",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "group",
          option: {
            label: "Group",
            description: "The group this teleporter belongs to",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Group here...",
              category: "teleporter-group",
              maxLength: 64
            }
          },
          categories: ["featured"]
        },
        {
          key: "targetGroup",
          option: {
            label: "Target Group",
            description: "When a player enters, they will teleport to a teleporter with this group",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Group here...",
              category: "teleporter-group",
              maxLength: 64
            }
          },
          categories: ["featured"]
        },
        {
          key: "whenTeleportedHereChannel",
          option: {
            label: "When teleported here, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player is teleported here, the device sends a signal on the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "teleportToOnChannel",
          option: {
            label: "Teleport here when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Teleport to this teleporter when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "teleportToTargetChannel",
          option: {
            label: "Teleport to target when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Teleport to the teleporter's target when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "visibleInGame",
          option: {
            label: "Visible In-Game",
            type: "select",
            description: "Whether the teleporter is visible in-game",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [{ id: "teleportedHere", name: "Player teleported here" }]
      },
      in: {
        connections: [
          { id: "teleportHere", name: "Teleport player here" },
          { id: "teleportToTarget", name: "Teleport player to target" }
        ]
      }
    },
    maxOnMap: 300,
    initialMemoryCost: 50,
    subsequentMemoryCost: 50
  },
  {
    id: "terrainLayerAppearance",
    name: "Terrain Layer Appearance",
    optionSchema: {
      options: [
        {
          key: "layer",
          option: {
            label: "Layer",
            type: "select",
            validators: [null],
            defaultValue: "AdditionalBackground1",
            props: {
              options: [
                { name: "Background 1", value: "AdditionalBackground1" },
                { name: "Background 2", value: "AdditionalBackground2" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "modifyTint",
          option: {
            label: "Modify Tint",
            type: "select",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "tint",
          option: {
            label: "Tint",
            type: "color",
            defaultValue: "#ffffff",
            validators: [null],
            hideIf: [
              [{ key: "modifyTint", compare: "NOT_EQUAL", value: true }]
            ]
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    minimumRoleLevel: 90,
    initialMemoryCost: 0,
    subsequentMemoryCost: 0
  },
  {
    id: "textBillboard",
    name: "Text",
    description: "Place down text with your content & style",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "appearance", name: "Appearance" },
          { id: "availability", name: "Availability" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "text",
          option: {
            label: "Text",
            description: "Set the text to display",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Enter text here...",
              textArea: true,
              maxLength: 256
            }
          },
          categories: ["featured"]
        },
        {
          key: "fontSize",
          option: {
            label: "Text Size",
            description: "Set the font size",
            type: "numberInput",
            defaultValue: 22,
            validators: [null],
            props: { min: 6, max: 144, step: 1, allowEmpty: false }
          },
          categories: ["featured", "appearance"]
        },
        {
          key: "scope",
          option: {
            label: "Content Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the content of the text changes, who does it apply to?"
          },
          categories: ["featured"]
        },
        {
          key: "googleFont",
          option: {
            label: "Font",
            description: "Select the font for the text",
            type: "select",
            validators: [null],
            defaultValue: "Rubik",
            props: {
              options: [
                { value: "Rubik", name: "Rubik" },
                { value: "Roboto", name: "Roboto" },
                { value: "Staatliches", name: "Staatliches" },
                { value: "Galindo", name: "Galindo" },
                { value: "Kalam", name: "Kalam" },
                { value: "Bangers", name: "Bangers" },
                { value: "Fugaz One", name: "Fugaz One" },
                { value: "Outfit", name: "Outfit" },
                { value: "PT Mono", name: "PT Mono" },
                { value: "Space Grotesk", name: "Space Grotesk" },
                { value: "Lobster", name: "Lobster" },
                { value: "Zeyada", name: "Zeyada" },
                { value: "Titan One", name: "Titan One" },
                { value: "Rye", name: "Rye" },
                { value: "Caprasimo", name: "Caprasimo" }
              ],
              allowEmpty: false
            }
          },
          categories: ["appearance"]
        },
        {
          key: "color",
          option: {
            label: "Text Color",
            type: "color",
            defaultValue: "#000000",
            validators: [null]
          },
          categories: ["appearance"]
        },
        {
          key: "alpha",
          option: {
            label: "Alpha",
            description: "Set the transparency of the text. 1 is fully visible, 0 is invisible.",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 0.2, max: 1, step: 0.01, allowEmpty: false }
          },
          categories: ["appearance"]
        },
        {
          key: "strokeThickness",
          option: {
            label: "Stroke Width",
            description: "Add a stroke traced around each letter",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: 0, max: 36, step: 1, allowEmpty: false }
          },
          categories: ["appearance"]
        },
        {
          key: "strokeColor",
          option: {
            label: "Stroke Color",
            description: "The color of the stroke around each letter",
            type: "color",
            defaultValue: "#FFFFFF",
            validators: [null],
            hideIf: [[{ key: "strokeThickness", compare: "EQUAL", value: 0 }]]
          },
          categories: ["appearance"]
        },
        {
          key: "rotation",
          option: {
            label: "Rotation",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: -360, max: 360, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "visibleOnGameStart",
          option: {
            label: "Visible On Game Start",
            description: "Should the text be visible when the game starts?",
            type: "select",
            validators: [null],
            defaultValue: "Yes",
            props: {
              options: [
                { value: "Yes", name: "Yes" },
                { value: "No", name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["availability"]
        },
        {
          key: "showWhenReceivingFrom",
          option: {
            label: "Show text when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Show the text when the device receives a signal from the selected channel"
          },
          categories: ["availability"]
        },
        {
          key: "hideWhenReceivingFrom",
          option: {
            label: "Hide text when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Hide the text when the device receives a signal from the selected channel"
          },
          categories: ["availability"]
        }
      ]
    },
    defaultState: { text: "", textColor: "", visible: true },
    codeGridSchema: {
      allowChannelGrids: true,
      triggers: [{ type: "wire", name: "On wire pulse..." }],
      customBlocks: ["set_billboard_text", "set_text_color"]
    },
    wireConfig: {
      in: {
        connections: [
          { id: "show", name: "Show text" },
          { id: "hide", name: "Hide text" },
          { id: "codeGrid", name: "Run wire pulse block" }
        ]
      }
    },
    maxOnMap: 400,
    initialMemoryCost: 60,
    subsequentMemoryCost: 60
  },
  {
    id: "trigger",
    name: "Trigger",
    description: "Core device to send messages and run events",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "configuration", name: "Configuration" },
          { id: "availability", name: "Availability" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "channelToTrigger",
          option: {
            label: "When triggered, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When this trigger is triggered, the device sends a signal on the selected channel"
          },
          categories: ["featured"]
        },
        {
          key: "triggerWhenReceivingOnChannel",
          option: {
            label: "Trigger when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Trigger this trigger when the device receives a signal from the selected channel"
          },
          categories: ["featured"]
        },
        {
          key: "triggerDelay",
          option: {
            label: "Trigger Delay",
            description: "Once triggered, how long (in seconds) does it wait before taking action?",
            type: "numberInput",
            validators: [null],
            props: { min: 0, max: 120, allowEmpty: true }
          },
          categories: ["featured", "configuration"]
        },
        {
          key: "visibleInGame",
          option: {
            label: "Visible In-Game",
            type: "select",
            description: "Is this trigger visible in-game?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "team",
          option: {
            label: "Allowed Team",
            description: "What team is allowed to trigger this device?",
            type: "select",
            validators: [null],
            defaultValue: "__ANY_TEAM__",
            props: {
              options: [
                { name: "Any Team", value: "__ANY_TEAM__" },
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            }
          },
          categories: ["configuration"]
        },
        {
          key: "maxTriggers",
          option: {
            label: "Max Triggers",
            description: "How many times can this trigger be triggered?",
            type: "numberInput",
            validators: [null],
            props: { min: 1, max: 100, allowEmpty: true }
          },
          categories: ["configuration"]
        },
        {
          key: "scope",
          option: {
            label: "Max Triggers Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "The count of times triggers is shared by who?",
            hideIf: [[{ key: "maxTriggers", compare: "EQUAL" }]]
          },
          categories: ["configuration"]
        },
        {
          key: "allowedModeType",
          option: {
            label: "Allowed Mode Type",
            description: "Will only trigger when the mode type matches",
            type: "select",
            validators: [null],
            defaultValue: "all",
            props: {
              options: [
                { name: "All", value: "all" },
                { name: "Live Game", value: "liveGame" },
                { name: "Assignment", value: "assignment" }
              ],
              allowEmpty: false
            }
          },
          minimumRoleLevel: 90,
          categories: ["configuration"]
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Is the trigger active and ready to transmit when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["availability"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate this trigger when the device receives a signal from the selected channel"
          },
          categories: ["availability"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate this trigger when the device receives a signal from the selected channel"
          },
          categories: ["availability"]
        },
        {
          key: "activeScope",
          option: {
            label: "Active Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When the trigger is activated/deactivated, who does it apply to?"
          },
          categories: ["availability"]
        },
        {
          key: "triggeredByPlayerCollision",
          option: {
            label: "Trigger By Player Collision",
            type: "select",
            description: "Can this trigger be triggered by a player stepping over it?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["configuration"]
        }
      ]
    },
    defaultState: { active: true },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [{ type: "WHEN_TRIGGERED", name: "When triggered..." }],
      customBlocks: []
    },
    wireConfig: {
      out: { connections: [{ id: "triggered", name: "Triggered" }] },
      in: {
        connections: [
          { id: "trigger", name: "Trigger" },
          { id: "activate", name: "Activate trigger" },
          { id: "deactivate", name: "Deactivate trigger" }
        ]
      }
    },
    initialMemoryCost: 40,
    subsequentMemoryCost: 40
  },
  {
    id: "vendingMachine",
    name: "Vending Machine",
    description: "Device used to sell items to players",
    optionSchema: {
      categories: {
        categories: [
          { id: "Featured", name: "Featured" },
          { id: "Grant Item", name: "Grant Item" },
          { id: "Transmit On Channel", name: "Transmit On Channel" },
          { id: "Appearance", name: "Appearance" },
          { id: "Availability", name: "Availability" },
          { id: "Adaptive Cost", name: "Adaptive Cost" },
          { id: "Stock", name: "Stock" },
          { id: "Funding", name: "Funding" },
          { id: "Channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "grantAction",
          option: {
            label: "Purchase Action",
            description: "When a player purchases from the vending machine, does the device grant an item or transmit on a channel?",
            type: "select",
            validators: [null],
            defaultValue: "Grant Item",
            props: {
              options: [
                { value: "Grant Item", name: "Grant Item" },
                { value: "Broadcast On Channel", name: "Transmit On Channel" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured", "Grant Item", "Transmit On Channel"]
        },
        {
          key: "requiredItemId",
          option: {
            label: "Required Item",
            description: "The item required for a player to purchase from the vending machine",
            type: "itemId",
            validators: [null],
            props: {}
          },
          categories: ["Featured"]
        },
        {
          key: "amountOfRequiredItem",
          option: {
            label: "Required Item Amount",
            description: "How much of the required item a player must have to purchase from the vending machine",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 0, max: 999999999999999, step: 1, allowEmpty: false }
          },
          categories: ["Featured"]
        },
        {
          key: "grantedItemId",
          option: {
            label: "Granted Item",
            description: "When a player purchases from the vending machine, what item is granted to them?",
            type: "itemId",
            validators: [null],
            props: {},
            hideIf: [
              [
                {
                  key: "grantAction",
                  compare: "NOT_EQUAL",
                  value: "Grant Item"
                }
              ]
            ]
          },
          categories: ["Featured", "Grant Item"]
        },
        {
          key: "amountOfGrantedItem",
          option: {
            label: "Granted Item Amount",
            description: "How much of the granted item is given to the player",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 999999999999999, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "grantAction",
                  compare: "NOT_EQUAL",
                  value: "Grant Item"
                }
              ]
            ]
          },
          categories: ["Featured", "Grant Item"]
        },
        {
          key: "purchaseChannel",
          option: {
            label: "When item purchased, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player purchases the item from the vending machine, the device sends a signal on the selected channel"
          },
          categories: ["Featured", "Transmit On Channel", "Channels"]
        },
        {
          key: "visibleInGame",
          option: {
            label: "Visible In-Game",
            type: "select",
            description: "Is the body of the Vending Machine present in-game?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured", "Appearance"]
        },
        {
          key: "grantedItemImageUrl",
          option: {
            label: "Item Image",
            description: "Supply an image shown for the item in the vending machine. Custom images are not allowed. Refer to the Gimkit Creative documentation for usage of icon images.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 64 },
            hideIf: [
              [
                {
                  key: "grantAction",
                  compare: "NOT_EQUAL",
                  value: "Broadcast On Channel"
                }
              ],
              [{ key: "visibleInGame", compare: "EQUAL", value: false }]
            ]
          },
          categories: ["Transmit On Channel", "Appearance"]
        },
        {
          key: "grantedItemName",
          option: {
            label: "Item Name",
            description: "The name of the item being purchased from the vending machine. By default, the name of the Granted Item is used.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 64 }
          },
          categories: ["Appearance", "Transmit On Channel"]
        },
        {
          key: "grantedItemDescription",
          option: {
            label: "Item Description",
            description: "An optional description of the item being purchased from the vending machine.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 128 }
          },
          categories: ["Appearance", "Transmit On Channel"]
        },
        {
          key: "deactivateOnPurchase",
          option: {
            label: "Deactivate On Purchase",
            type: "select",
            description: "If enabled, the vending machine will deactivate after the item is purchased.",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Availability"]
        },
        {
          key: "useAdaptiveCost",
          option: {
            label: "Use Adaptive Cost",
            type: "select",
            description: "If enabled, the cost of the item will increase based on the number of players in-game",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Adaptive Cost"]
        },
        {
          key: "adaptiveCostIncreasePerPlayer",
          option: {
            label: "Adaptive Cost Increase Per Player",
            description: "How much the cost of the item increases per additional player",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: 0, max: 999999999, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "useAdaptiveCost", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["Adaptive Cost"]
        },
        {
          key: "allowFunding",
          option: {
            label: "Allow Funding",
            type: "select",
            description: "If enabled, players can fund the vending machine to decrease the cost of the item",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Funding"]
        },
        {
          key: "fundingScope",
          option: {
            label: "Funding Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "For funding, the current price of the item is applied to who?",
            hideIf: [
              [{ key: "allowFunding", compare: "NOT_EQUAL", value: true }]
            ]
          },
          categories: ["Funding"]
        },
        {
          key: "useLimitedStock",
          option: {
            label: "Use Limited Stock",
            type: "select",
            description: "If enabled, the vending machine will be out of stock after a certain amount of purchases",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ key: "deactivateOnPurchase", compare: "EQUAL", value: true }]
            ]
          },
          categories: ["Stock"]
        },
        {
          key: "maxStock",
          option: {
            label: "Limited Stock Amount",
            description: "The maximum amount of purchases that can be made from the vending machine before it goes out of stock",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 1, max: 999, step: 1, allowEmpty: false },
            hideIf: [
              [{ key: "useLimitedStock", compare: "NOT_EQUAL", value: true }],
              [{ key: "deactivateOnPurchase", compare: "EQUAL", value: true }]
            ]
          },
          categories: ["Stock"]
        },
        {
          key: "maxStockScope",
          option: {
            label: "Limited Stock Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "The current stock of the vending machine is applied to who?",
            hideIf: [
              [{ key: "useLimitedStock", compare: "NOT_EQUAL", value: true }],
              [{ key: "deactivateOnPurchase", compare: "EQUAL", value: true }]
            ]
          },
          categories: ["Stock"]
        },
        {
          key: "attachCostToNameWhenHidden",
          option: {
            label: "Attach Cost To Name",
            type: "select",
            description: "When enabled, the cost of the item will be added to the end of the item's name",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "visibleInGame", compare: "EQUAL", value: true }]]
          }
        },
        {
          key: "activeOnStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Is this vending machine available to make purchases from when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Availability"]
        },
        {
          key: "activeScope",
          option: {
            label: "Active Scope",
            type: "select",
            defaultValue: "player",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "When activated/deactivated, who does it apply to?"
          },
          categories: ["Availability"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the vending machine when the device receives a signal from the selected channel"
          },
          categories: ["Availability", "Channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the vending machine when the device receives a signal from the selected channel"
          },
          categories: ["Availability", "Channels"]
        },
        {
          key: "allowedPurchaseTeam",
          option: {
            label: "Team Allowed To Purchased",
            description: "Which team is allowed to purchase from the vending machine?",
            type: "select",
            validators: [null],
            defaultValue: "__ANY_TEAM__",
            props: {
              options: [
                { name: "Any Team", value: "__ANY_TEAM__" },
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Availability"]
        },
        {
          key: "attemptToPurchaseChannel",
          option: {
            label: "Attempt to purchase when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Attempt to purchase an item from the vending machine when the device receives a signal from the selected channel"
          },
          categories: ["Channels"]
        },
        {
          key: "onAttemptedPurchaseFailedChannel",
          option: {
            label: "When attempted purchase failed, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When a player attempted to purchase an item from the vending machine, but failed, the device sends a signal on the selected channel"
          },
          categories: ["Channels"]
        },
        {
          key: "interactionDuration",
          option: {
            label: "Interaction Duration",
            description: "How long does a player have to interact with the vending machine to make the purchase?",
            type: "select",
            validators: [null],
            defaultValue: 1,
            props: {
              options: [
                { name: "Instant", value: 0 },
                { name: "1 Second", value: 1 },
                { name: "3 Seconds", value: 3 },
                { name: "5 Seconds", value: 5 }
              ],
              allowEmpty: false
            }
          },
          categories: ["Appearance"]
        },
        {
          key: "matchItemRarity",
          option: {
            label: "Match Item Rarity",
            type: "select",
            description: "Match the colors of the vending machine to the granted item's rarity",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "grantAction",
                  compare: "NOT_EQUAL",
                  value: "Grant Item"
                }
              ]
            ]
          },
          categories: ["Appearance"]
        },
        {
          key: "backgroundColor1",
          option: {
            label: "Exterior Color",
            description: "The color of the vending machine background exterior",
            type: "color",
            defaultValue: "#d44224",
            validators: [null],
            hideIf: [
              [{ key: "matchItemRarity", compare: "EQUAL", value: true }]
            ]
          },
          categories: ["Appearance"]
        },
        {
          key: "backgroundColor2",
          option: {
            label: "Interior Color",
            description: "The color of the vending machine background interior",
            type: "color",
            defaultValue: "#f7d253",
            validators: [null],
            hideIf: [
              [{ key: "matchItemRarity", compare: "EQUAL", value: true }]
            ]
          },
          categories: ["Appearance"]
        },
        {
          key: "raysColor",
          option: {
            label: "Rays Color",
            description: "The color of the rays rotating on the vending machine",
            type: "color",
            defaultValue: "#f7d253",
            validators: [null],
            hideIf: [
              [{ key: "matchItemRarity", compare: "EQUAL", value: true }]
            ]
          },
          categories: ["Appearance"]
        },
        {
          key: "numberOfRays",
          option: {
            label: "Number Of Rays",
            type: "numberInput",
            defaultValue: 16,
            validators: [null],
            props: { min: 4, max: 64, step: 1, allowEmpty: false }
          },
          minimumRoleLevel: 90,
          categories: ["Appearance"]
        },
        {
          key: "raysWidthFactor",
          option: {
            label: "Ray Width Factor",
            type: "numberInput",
            defaultValue: 1.25,
            validators: [null],
            props: { min: 0.5, max: 3, step: 0.05, allowEmpty: false }
          },
          minimumRoleLevel: 90,
          categories: ["Appearance"]
        },
        {
          key: "raysAlpha",
          option: {
            label: "Ray Alpha",
            type: "numberInput",
            defaultValue: 0.5,
            validators: [null],
            props: { min: 0, max: 1, step: 0.01, allowEmpty: false }
          },
          minimumRoleLevel: 90,
          categories: ["Appearance"]
        },
        {
          key: "raysAdditive",
          option: {
            label: "Use Additive Blend Mode",
            type: "select",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          minimumRoleLevel: 90,
          categories: ["Appearance"]
        },
        {
          key: "soundEnabled",
          option: {
            label: "Sound Enabled",
            type: "select",
            description: "Play a sound effect when the item is purchased",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Appearance"]
        },
        {
          key: "showShadow",
          option: {
            label: "Cast Shadow",
            type: "select",
            description: "Does the vending machine cast a shadow?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [{ value: "visibleInGame", compare: "EQUAL", key: "false" }]
            ]
          },
          categories: ["Appearance"]
        },
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 250,
            validators: [null],
            props: { min: 250, max: 750, step: 1, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "height",
          option: {
            label: "Height",
            type: "numberInput",
            defaultValue: 250,
            validators: [null],
            props: { min: 250, max: 750, step: 1, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "radius",
          option: {
            label: "InteractionRadius",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 50, max: 200, step: 1, allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: { active: false, currentStock: 0, fundedAmount: 0, cost: 0 },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [
          { id: "itemPurchased", name: "Item purchased" },
          { id: "activated", name: "Machine activated" },
          { id: "deactivated", name: "Machine deactivated" },
          { id: "purchasedFailed", name: "Attempt to purchase fails" }
        ]
      },
      in: {
        connections: [
          { id: "attemptToPurchase", name: "Attempt to purchase" },
          { id: "activate", name: "Activate machine" },
          { id: "deactivate", name: "Deactivate machine" }
        ]
      }
    },
    initialMemoryCost: 125,
    subsequentMemoryCost: 125
  },
  {
    id: "voiceLine",
    name: "Voice Line",
    description: "Plays Voice Overs",
    optionSchema: {
      options: [
        {
          key: "playBehavior",
          option: {
            label: "Play Bahavior",
            description: "What should happen when the device is triggered and an audio line is already playing?",
            type: "select",
            validators: [null],
            defaultValue: "interrupt",
            props: {
              options: [
                { name: "Interrupt", value: "interrupt" },
                { name: "Queue", value: "queue" },
                { name: "Cancel", value: "cancel" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "volume",
          option: {
            label: "Volume",
            description: "The volume of Voice Overs",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 0, max: 1, step: 1e-3, allowEmpty: false }
          }
        },
        {
          key: "playChance",
          option: {
            label: "Play Chance",
            description: "Percentage chance that the voice line will play when triggered",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 0, max: 100, step: 1, allowEmpty: false }
          }
        },
        {
          key: "audioUrl1",
          option: {
            label: "Audio URL 1",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "audioUrl2",
          option: {
            label: "Audio URL 2",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "audioUrl3",
          option: {
            label: "Audio URL 3",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "audioUrl4",
          option: {
            label: "Audio URL 4",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "audioUrl5",
          option: {
            label: "Audio URL 5",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "audioUrl6",
          option: {
            label: "Audio URL 6",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "audioUrl7",
          option: {
            label: "Audio URL 7",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "audioUrl8",
          option: {
            label: "Audio URL 8",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here..." }
          }
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active on game start",
            type: "select",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "playWhenReceivingOnChannel",
          option: {
            label: "Play When Receiving On...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: { in: { connections: [{ id: "play", name: "Play sound" }] } },
    minimumRoleLevel: 90,
    maxOnMap: 512,
    initialMemoryCost: 25,
    subsequentMemoryCost: 25
  },
  {
    id: "waypoint",
    name: "Waypoint",
    description: "Mark a location for players to pay attention to",
    optionSchema: {
      categories: {
        categories: [
          { id: "featured", name: "Featured" },
          { id: "channels", name: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "target",
          option: {
            label: "Waypoint Target",
            description: "What is the waypoint tracking?",
            type: "select",
            validators: [null],
            defaultValue: "deviceLocation",
            props: {
              options: [
                { name: "Location Of Device", value: "deviceLocation" },
                { name: "Location Of Player", value: "player" },
                {
                  name: "Flag",
                  value: "flag",
                  supportedMapStyles: ["topDown"]
                },
                {
                  name: "Ball",
                  value: "ball",
                  supportedMapStyles: ["topDown"]
                }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "flagColor",
          option: {
            label: "Flag Color",
            description: "The color of the flag the waypoint will track",
            type: "select",
            validators: [null],
            defaultValue: "black",
            props: {
              options: [
                { name: "Black", value: "black" },
                { name: "Blue", value: "blue" },
                { name: "Green", value: "green" },
                { name: "Orange", value: "orange" },
                { name: "Purple", value: "purple" },
                { name: "Red", value: "red" },
                { name: "White", value: "white" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "target", compare: "NOT_EQUAL", value: "flag" }]]
          },
          categories: ["featured"]
        },
        {
          key: "ballId",
          option: {
            label: "Ball Identifier",
            description: "Enter the identifier of the Ball you want to track. Make sure to set the identifier on the proper Ball Device as well.",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Enter ID here...", category: "ball-id" },
            hideIf: [[{ key: "target", compare: "NOT_EQUAL", value: "ball" }]]
          },
          categories: ["featured"]
        },
        {
          key: "name",
          option: {
            label: "Waypoint Name",
            description: "The display name of the waypoint shown in-game",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Text here...", maxLength: 32 }
          },
          categories: ["featured"]
        },
        {
          key: "useDeactivateWithinRange",
          option: {
            label: "Deactivate When Player Within Range",
            type: "select",
            description: "Automatically deactivate the waypoint when a player is within range to it",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [
              [
                {
                  key: "target",
                  compare: "NOT_EQUAL",
                  value: "deviceLocation"
                }
              ]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "deactivateWithinRange",
          option: {
            label: "Automatic Deactivation Range",
            description: "Distance (in meters) the waypoint will automatically deactivate when a player is within range to it",
            type: "numberInput",
            defaultValue: 3,
            validators: [null],
            props: { min: 1, max: 50, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "target",
                  compare: "NOT_EQUAL",
                  value: "deviceLocation"
                }
              ],
              [
                {
                  key: "useDeactivateWithinRange",
                  compare: "NOT_EQUAL",
                  value: true
                }
              ]
            ]
          },
          categories: ["featured"]
        },
        {
          key: "startFollowingPlayer",
          option: {
            label: "Start following player when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Start following the triggering player when the device receives a signal from the selected channel",
            hideIf: [
              [{ key: "target", compare: "NOT_EQUAL", value: "player" }]
            ]
          },
          categories: ["featured", "channels"]
        },
        {
          key: "stopFollowingPlayer",
          option: {
            label: "Stop following player when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Stop following the currently tracked player when the device receives a signal from the selected channel",
            hideIf: [
              [{ key: "target", compare: "NOT_EQUAL", value: "player" }]
            ]
          },
          categories: ["featured", "channels"]
        },
        {
          key: "hideWhenFlagIsInBase",
          option: {
            label: "Hide When Flag Is In Base",
            type: "select",
            description: "Hide the waypoint when the flag is in the base",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            },
            hideIf: [[{ key: "target", compare: "NOT_EQUAL", value: "flag" }]]
          }
        },
        {
          key: "activeOnGameStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "Is the waypoint active & visible when the game starts?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["featured"]
        },
        {
          key: "color",
          option: {
            label: "Waypoint Color",
            description: "Change the color of the waypoint's UI",
            type: "color",
            defaultValue: "#FFFFFF",
            validators: [null]
          },
          categories: ["featured"]
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate when the device receives a signal from the selected channel"
          },
          categories: ["channels"]
        },
        {
          key: "scope",
          option: {
            label: "Activate Scope",
            type: "select",
            defaultValue: "global",
            validators: [null],
            props: {
              options: [
                { value: "global", name: "global" },
                { value: "player", name: "player" },
                { value: "team", name: "team" }
              ],
              allowEmpty: false
            },
            description: "Activation/deactivation of the waypoint applies to who?"
          }
        }
      ]
    },
    defaultState: { active: false },
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      in: {
        connections: [
          { id: "activate", name: "Activate waypoint" },
          { id: "deactivate", name: "Deactivate waypoint" }
        ]
      }
    },
    maxOnMap: 64,
    initialMemoryCost: 175,
    subsequentMemoryCost: 175
  },
  {
    id: "wireRepeater",
    name: "Wire Repeater",
    description: "A node to connect wires to/from",
    optionSchema: {
      options: [
        {
          key: "delaySeconds",
          option: {
            label: "Delay",
            description: "When a pulse is received, how long (in seconds) to wait before relaying it",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { min: 0, max: 60, step: 0.1, allowEmpty: false }
          }
        },
        {
          key: "team",
          option: {
            label: "Allowed Team",
            description: "The wire's pulse will be blocked if the message is not from a player on this team",
            type: "select",
            validators: [null],
            defaultValue: "__ANY_TEAM__",
            props: {
              options: [
                { name: "Any Team", value: "__ANY_TEAM__" },
                { name: "Team 1", value: "1" },
                { name: "Team 2", value: "2" },
                { name: "Team 3", value: "3" },
                { name: "Team 4", value: "4" },
                { name: "Team 5", value: "5" },
                { name: "Team 6", value: "6" },
                { name: "Team 7", value: "7" },
                { name: "Team 8", value: "8" },
                { name: "Team 9", value: "9" },
                { name: "Team 10", value: "10" },
                { name: "Team 11", value: "11" },
                { name: "Team 12", value: "12" },
                { name: "Team 13", value: "13" },
                { name: "Team 14", value: "14" },
                { name: "Team 15", value: "15" },
                { name: "Team 16", value: "16" },
                { name: "Team 17", value: "17" },
                { name: "Team 18", value: "18" },
                { name: "Team 19", value: "19" },
                { name: "Team 20", value: "20" },
                { name: "Team 21", value: "21" },
                { name: "Team 22", value: "22" },
                { name: "Team 23", value: "23" },
                { name: "Team 24", value: "24" },
                { name: "Team 25", value: "25" },
                { name: "Team 26", value: "26" },
                { name: "Team 27", value: "27" },
                { name: "Team 28", value: "28" },
                { name: "Team 29", value: "29" },
                { name: "Team 30", value: "30" },
                { name: "Team 31", value: "31" },
                { name: "Team 32", value: "32" },
                { name: "Team 33", value: "33" },
                { name: "Team 34", value: "34" },
                { name: "Team 35", value: "35" },
                { name: "Team 36", value: "36" },
                { name: "Team 37", value: "37" },
                { name: "Team 38", value: "38" },
                { name: "Team 39", value: "39" },
                { name: "Team 40", value: "40" },
                { name: "Team 41", value: "41" },
                { name: "Team 42", value: "42" },
                { name: "Team 43", value: "43" },
                { name: "Team 44", value: "44" },
                { name: "Team 45", value: "45" },
                { name: "Team 46", value: "46" },
                { name: "Team 47", value: "47" },
                { name: "Team 48", value: "48" },
                { name: "Team 49", value: "49" },
                { name: "Team 50", value: "50" },
                { name: "Team 51", value: "51" },
                { name: "Team 52", value: "52" },
                { name: "Team 53", value: "53" },
                { name: "Team 54", value: "54" },
                { name: "Team 55", value: "55" },
                { name: "Team 56", value: "56" },
                { name: "Team 57", value: "57" },
                { name: "Team 58", value: "58" },
                { name: "Team 59", value: "59" },
                { name: "Team 60", value: "60" }
              ],
              allowEmpty: false
            }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    maxOnMap: 1e3,
    initialMemoryCost: 5,
    subsequentMemoryCost: 5
  },
  {
    id: "xp",
    name: "XP Granter",
    description: "Grant XP to allow players to level up!",
    optionSchema: {
      options: [
        {
          key: "amount",
          option: {
            label: "XP To Grant",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 1, max: 1e4, step: 1, allowEmpty: false }
          }
        },
        {
          key: "reason",
          option: {
            label: "Reason",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: { placeholder: "Achievement accomplished" }
          }
        },
        {
          key: "grantOnChannel",
          option: {
            label: "Grant when receiving on channel...",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            }
          }
        },
        {
          key: "useIncrementalGrant",
          option: {
            label: "Use Incremental Grant",
            type: "select",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "incrementalGrantCharacterRequirement",
          option: {
            label: "Incremental Grant Character Requirement",
            type: "numberInput",
            defaultValue: 10,
            validators: [null],
            props: { min: 1, max: 60, step: 1, allowEmpty: false }
          }
        },
        {
          key: "useMinimumCharacterCount",
          option: {
            label: "Use Minimum Character Count",
            type: "select",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "minimumCharacterCount",
          option: {
            label: "Minimum Character Count",
            type: "numberInput",
            defaultValue: 6,
            validators: [null],
            props: { min: 1, max: 60, step: 1, allowEmpty: false }
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: { in: { connections: [{ id: "grant", name: "Grant XP" }] } },
    minimumRoleLevel: 90
  },
  {
    id: "zone",
    name: "Zone",
    description: "Detect when players enter certain areas, and change characteristics about those areas",
    optionSchema: {
      categories: {
        categories: [
          { id: "Featured", name: "Featured" },
          { id: "Items", name: "Items" },
          { name: "Channels", id: "Channels" }
        ],
        showAllOptionsAt: "end"
      },
      options: [
        {
          key: "playerEntersChannel",
          option: {
            label: "When player enters zone, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When player enters the zone, the device sends a signal on the selected channel"
          },
          categories: ["Featured", "Channels"]
        },
        {
          key: "playerLeavesChannel",
          option: {
            label: "When player leaves zone, transmit on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "When player leaves the zone, the device sends a signal on the selected channel"
          },
          categories: ["Featured", "Channels"]
        },
        {
          key: "allowWeaponFire",
          option: {
            label: "Allow Gadget Fire",
            type: "select",
            description: "Are gadgets allowed to be fired in the zone?",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured", "Items"]
        },
        {
          key: "shape",
          option: {
            label: "Zone Shape",
            description: "Set the shape of the zone",
            type: "select",
            validators: [null],
            defaultValue: "rectangle",
            props: {
              options: [
                { name: "Rectangle", value: "rectangle" },
                { name: "Circle", value: "circle" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured"]
        },
        {
          key: "visibleInGame",
          option: {
            label: "Visible In Game",
            type: "select",
            description: "Is the zone visible to players during the game?",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Featured"]
        },
        {
          key: "color",
          option: {
            label: "Background Color",
            type: "color",
            defaultValue: "#FFFFFF",
            validators: [null]
          }
        },
        {
          key: "activeOnStart",
          option: {
            label: "Active On Game Start",
            type: "select",
            description: "If enabled, the zone will be active when the game starts",
            defaultValue: true,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          }
        },
        {
          key: "activateChannel",
          option: {
            label: "Activate zone when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Activate the zone when the device receives a signal from the selected channel"
          },
          categories: ["Channels"]
        },
        {
          key: "deactivateChannel",
          option: {
            label: "Deactivate zone when receiving on",
            type: "textInput",
            defaultValue: "",
            validators: [null],
            props: {
              placeholder: "Channel name...",
              category: "channel",
              maxLength: 100
            },
            description: "Deactivate the zone when the device receives a signal from the selected channel"
          },
          categories: ["Channels"]
        },
        {
          key: "allowWeaponDrop",
          option: {
            label: "Allow Gadget Drop",
            description: "Are players allowed to drop gadgets in the zone?",
            type: "select",
            validators: [null],
            defaultValue: "Do Not Override",
            props: {
              options: [
                { name: "Do Not Override", value: "Do Not Override" },
                { name: "Yes", value: "Yes" },
                { name: "No", value: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Items"]
        },
        {
          key: "allowItemDrop",
          option: {
            label: "Allow Usable Drop",
            description: "Are players allowed to drop usable items in the zone?",
            type: "select",
            validators: [null],
            defaultValue: "Do Not Override",
            props: {
              options: [
                { name: "Do Not Override", value: "Do Not Override" },
                { name: "Yes", value: "Yes" },
                { name: "No", value: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Items"]
        },
        {
          key: "allowResourceDrop",
          option: {
            label: "Allow Resource Drop",
            description: "Are players allowed to drop resources in the zone?",
            type: "select",
            validators: [null],
            defaultValue: "Do Not Override",
            props: {
              options: [
                { name: "Do Not Override", value: "Do Not Override" },
                { name: "Yes", value: "Yes" },
                { name: "No", value: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Items"]
        },
        {
          key: "droppedItemDecayEnabled",
          option: {
            label: "Dropped Item Decay Enabled",
            type: "select",
            description: "If enabled, items dropped in the zone will automatically disappear after a set amount of time",
            defaultValue: false,
            validators: [null],
            props: {
              options: [
                { value: true, name: "Yes" },
                { value: false, name: "No" }
              ],
              allowEmpty: false
            }
          },
          categories: ["Items"]
        },
        {
          key: "droppedItemDecay",
          option: {
            label: "Dropped Item Decay",
            description: "How long (in seconds) it takes for items to disappear after being dropped in the zone",
            type: "numberInput",
            defaultValue: 1,
            validators: [null],
            props: { min: 1, max: 600, step: 1, allowEmpty: false },
            hideIf: [
              [
                {
                  key: "droppedItemDecayEnabled",
                  compare: "NOT_EQUAL",
                  value: true
                }
              ]
            ]
          },
          categories: ["Items"]
        },
        {
          key: "width",
          option: {
            label: "Width",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 100, max: 25e3, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "height",
          option: {
            label: "Height",
            type: "numberInput",
            defaultValue: 200,
            validators: [null],
            props: { min: 100, max: 25e3, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "radius",
          option: {
            label: "Radius",
            type: "numberInput",
            defaultValue: 100,
            validators: [null],
            props: { min: 50, max: 3500, allowEmpty: false },
            hidden: true
          }
        },
        {
          key: "rotation",
          option: {
            label: "Angle",
            type: "numberInput",
            defaultValue: 0,
            validators: [null],
            props: { allowEmpty: false },
            hidden: true
          }
        }
      ]
    },
    defaultState: {},
    codeGridSchema: {
      allowChannelGrids: false,
      triggers: [],
      customBlocks: []
    },
    wireConfig: {
      out: {
        connections: [
          { id: "characterEnters", name: "Player enters zone" },
          { id: "characterLeaves", name: "Player leaves zone" }
        ]
      },
      in: {
        connections: [
          { id: "activate", name: "Activate zone" },
          { id: "deactivate", name: "Deactivate zone" }
        ]
      }
    },
    maxOnMap: 64,
    initialMemoryCost: 300,
    subsequentMemoryCost: 200
  }
];

// src/lib/device/index.ts
function getDefaultDeviceOptions(id) {
  return defaultDeviceOptions[id];
}

// src/lib/builder.ts
var TransformBuilder = class {
  transform;
  constructor(x = 0, y = 0) {
    this.transform = { x, y };
  }
  x(x) {
    this.transform.x = x;
    return this;
  }
  y(y) {
    this.transform.y = y;
    return this;
  }
  depth(depth) {
    this.transform.depth = depth;
    return this;
  }
  addX(x) {
    this.transform.x += x;
    return this;
  }
  addY(y) {
    this.transform.y += y;
    return this;
  }
  add(transform2) {
    this.transform.x += transform2.x;
    this.transform.y += transform2.y;
    return this;
  }
  negative() {
    this.transform.x = -this.transform.x;
    this.transform.y = -this.transform.y;
    return this;
  }
  build() {
    return this.transform;
  }
};
function defaultDeviceForType(type) {
  return {
    type,
    transform: { x: 0, y: 0 },
    options: getDefaultDeviceOptions(type),
    codeGrids: []
  };
}
var DeviceBuilder = class {
  device;
  constructor(deviceType) {
    this.device = defaultDeviceForType(deviceType);
  }
  transform(transform2) {
    if (transform2 instanceof TransformBuilder) {
      this.device.transform = transform2.build();
    } else {
      this.device.transform = transform2;
    }
    return this;
  }
  options(options) {
    this.device.options = { ...this.device.options, ...options };
    return this;
  }
  setOption(key, value) {
    this.device.options[key] = value;
    return this;
  }
  addCodeGrid(codeGrid) {
    this.device.codeGrids.push(codeGrid);
    return this;
  }
  addTriggerCodeGrid(type, blocks) {
    this.device.codeGrids.push({ type, blocks });
    return this;
  }
  addChannelCodeGrid(channel, blocks) {
    this.device.codeGrids.push({
      type: "channel_radio",
      channel: channel.toString(),
      blocks
    });
    return this;
  }
  build() {
    return this.device;
  }
};
var BuildBuilder = class {
  _build;
  constructor(positionType) {
    this._build = { positionType, devices: [] };
  }
  name(name) {
    this._build.name = name;
    return this;
  }
  devices(devices) {
    this._build.devices = devices;
    return this;
  }
  addDevice(device2) {
    if (device2 instanceof DeviceBuilder) {
      this._build.devices.push(device2.build());
    } else {
      this._build.devices.push(device2);
    }
    return this;
  }
  build() {
    return this._build;
  }
};

// src/lib/build.ts
var DeviceBuilder2 = class extends DeviceBuilder {
  constructor(deviceType) {
    super(deviceType);
  }
};
var BuildBuilder2 = class extends BuildBuilder {
  constructor(positionType) {
    super(positionType);
  }
};
function transform(x = 0, y = 0) {
  return new TransformBuilder(x, y);
}
function device(deviceType) {
  return new DeviceBuilder2(deviceType);
}
function build(positionType) {
  return new BuildBuilder2(positionType);
}

// src/lib/info.ts
function getInfo(build2) {
  let deviceCounts = {};
  let memory = 0;
  for (const device2 of build2.devices) {
    deviceCounts[device2.type] = (deviceCounts[device2.type] ?? 0) + 1;
    let deviceOption = deviceOptions.find((d) => d.id === device2.type);
    if (deviceCounts[device2.type] == 1) {
      memory += deviceOption.initialMemoryCost ?? 0;
    } else {
      memory += deviceOption.subsequentMemoryCost ?? 0;
    }
  }
  return { deviceCounts, memory };
}

// src/lib/validate.ts
import { countProgramBlocks } from "gimblocks";
function validate(build2) {
  let info = getInfo(build2);
  let res = validateDeviceCounts(info.deviceCounts);
  if (res.type === "error")
    return res;
  res = validateMemory(info.memory);
  if (res.type === "error")
    return res;
  res = validateCodeGridCounts(build2);
  if (res.type === "error")
    return res;
  res = validateCodeGrids(build2);
  if (res.type === "error")
    return res;
  return { type: "success" };
}
function validateDeviceCounts(deviceCounts) {
  for (const [type, count] of Object.entries(deviceCounts)) {
    let deviceOption = deviceOptions.find((d) => d.id === type);
    if (deviceOption.maxOnMap != null && count > deviceOption.maxOnMap) {
      return {
        type: "error",
        errorType: "tooManyDevices",
        deviceType: type,
        maxOnMap: deviceOption.maxOnMap,
        actualOnMap: count
      };
    }
  }
  return {
    type: "success"
  };
}
function validateMemory(memory) {
  if (memory > 1e5) {
    return {
      type: "error",
      errorType: "memoryTooHigh",
      memory
    };
  }
  return {
    type: "success"
  };
}
function validateCodeGridCounts(build2) {
  for (const device2 of build2.devices) {
    if (device2.codeGrids.length > 6) {
      return {
        type: "error",
        errorType: "tooManyCodeGrids",
        device: device2
      };
    }
  }
  return {
    type: "success"
  };
}
function validateCodeGrids(build2) {
  for (const device2 of build2.devices) {
    for (const grid of device2.codeGrids) {
      if (countProgramBlocks(grid.blocks) > 75) {
        return {
          type: "error",
          errorType: "tooManyBlocks",
          device: device2,
          codeGrid: grid.blocks
        };
      }
    }
  }
  return {
    type: "success"
  };
}
export {
  BuildBuilder2 as BuildBuilder,
  BuildBuilder as BuildBuilderGeneric,
  DeviceBuilder2 as DeviceBuilder,
  DeviceBuilder as DeviceBuilderGeneric,
  TransformBuilder,
  build,
  device,
  getInfo,
  transform,
  validate
};
