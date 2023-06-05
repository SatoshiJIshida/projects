/**
 * data object
 */
const data = {
  /**
   * Levels 1, 2 and 3 items
   */
  items: {
    "item-1": { id: "item-1" },
    "item-2": { id: "item-2" },
    "item-3": { id: "item-3" },
    "item-4": { id: "item-4" },
    "item-5": { id: "item-5" },
    "item-6": { id: "item-6" },
    "item-7": { id: "item-7" },
    "item-8": { id: "item-8" },
    "item-9": { id: "item-9" },

    "level2-item-1": { id: "level2-item-1" },
    "level2-item-2": { id: "level2-item-2" },
    "level2-item-3": { id: "level2-item-3" },
    "level2-item-4": { id: "level2-item-4" },
    "level2-item-5": { id: "level2-item-5" },
    "level2-item-6": { id: "level2-item-6" },
    "level2-item-7": { id: "level2-item-7" },
    "level2-item-8": { id: "level2-item-8" },
    "level2-item-9": { id: "level2-item-9" },

    "level3-item-1": { id: "level3-item-1" },
    "level3-item-2": { id: "level3-item-2" },
    "level3-item-3": { id: "level3-item-3" },
    "level3-item-4": { id: "level3-item-4" },
    "level3-item-5": { id: "level3-item-5" },
    "level3-item-6": { id: "level3-item-6" },
    "level3-item-7": { id: "level3-item-7" },
    "level3-item-8": { id: "level3-item-8" },
    "level3-item-9": { id: "level3-item-9" },
  },

  /**
   * Level 1 dropZones
   */
  dropZones: {
    "dropZone-1": {
      id: "dropZone-1",
      itemIds: ["item-1"],
    },
    "dropZone-2": {
      id: "dropZone-2",
      itemIds: ["item-2"],
    },
    "dropZone-3": {
      id: "dropZone-3",
      itemIds: ["item-3"],
    },
    "dropZone-4": {
      id: "dropZone-4",
      itemIds: ["item-4"],
    },
    "dropZone-5": {
      id: "dropZone-5",
      itemIds: ["item-5"],
    },
    "dropZone-6": {
      id: "dropZone-6",
      itemIds: ["item-6"],
    },
    "dropZone-7": {
      id: "dropZone-7",
      itemIds: ["item-7"],
    },
    "dropZone-8": {
      id: "dropZone-8",
      itemIds: ["item-8"],
    },
    "dropZone-9": {
      id: "dropZone-9",
      itemIds: ["item-9"],
    },
    "dropZone-10": {
      id: "dropZone-10",
      itemIds: [],
    },
    "dropZone-11": {
      id: "dropZone-11",
      itemIds: [],
    },
  },

  // dropZones: {
  //   "dropZone-1": {
  //     id: "dropZone-1",
  //     itemIds: ["item-1"],
  //   },
  //   "dropZone-2": {
  //     id: "dropZone-2",
  //     itemIds: [],
  //   },
  //   "dropZone-3": {
  //     id: "dropZone-3",
  //     itemIds: [],
  //   },
  //   "dropZone-4": {
  //     id: "dropZone-4",
  //     itemIds: ["item-4"],
  //   },
  //   "dropZone-5": {
  //     id: "dropZone-5",
  //     itemIds: [],
  //   },
  //   "dropZone-6": {
  //     id: "dropZone-6",
  //     itemIds: [],
  //   },
  //   "dropZone-7": {
  //     id: "dropZone-7",
  //     itemIds: [],
  //   },
  //   "dropZone-8": {
  //     id: "dropZone-8",
  //     itemIds: [],
  //   },
  //   "dropZone-9": {
  //     id: "dropZone-9",
  //     itemIds: [],
  //   },
  //   "dropZone-10": {
  //     id: "dropZone-10",
  //     itemIds: ["item-5", "item-6", "item-3"],
  //   },
  //   "dropZone-11": {
  //     id: "dropZone-11",
  //     itemIds: ["item-7", "item-2", "item-9", "item-8"],
  //   },
  // },

  /**
   * Level 1 dropZoneOrder array
   */
  dropZoneOrder: [
    "dropZone-1",
    "dropZone-2",
    "dropZone-3",
    "dropZone-4",
    "dropZone-5",
    "dropZone-6",
    "dropZone-7",
    "dropZone-8",
    "dropZone-9",
    "dropZone-10",
    "dropZone-11",
  ],

  /**
   * Level 2 dropZones
   */
  dropZones2: {
    "dropZone-1": {
      id: "dropZone-1",
      itemIds: ["level2-item-1"],
    },
    "dropZone-2": {
      id: "dropZone-2",
      itemIds: ["level2-item-2"],
    },
    "dropZone-3": {
      id: "dropZone-3",
      itemIds: ["level2-item-3"],
    },
    "dropZone-4": {
      id: "dropZone-4",
      itemIds: ["level2-item-4"],
    },
    "dropZone-5": {
      id: "dropZone-5",
      itemIds: ["level2-item-5"],
    },
    "dropZone-6": {
      id: "dropZone-6",
      itemIds: ["level2-item-6"],
    },
    "dropZone-7": {
      id: "dropZone-7",
      itemIds: ["level2-item-7"],
    },
    "dropZone-8": {
      id: "dropZone-8",
      itemIds: ["level2-item-8"],
    },
    "dropZone-9": {
      id: "dropZone-9",
      itemIds: ["level2-item-9"],
    },
    "dropZone-10": {
      id: "dropZone-10",
      itemIds: [],
    },
    "dropZone-11": {
      id: "dropZone-11",
      itemIds: [],
    },
  },

  // dropZones2: {
  //   "dropZone-1": {
  //     id: "dropZone-1",
  //     itemIds: ["level2-item-1"],
  //   },
  //   "dropZone-2": {
  //     id: "dropZone-2",
  //     itemIds: [],
  //   },
  //   "dropZone-3": {
  //     id: "dropZone-3",
  //     itemIds: [],
  //   },
  //   "dropZone-4": {
  //     id: "dropZone-4",
  //     itemIds: [],
  //   },
  //   "dropZone-5": {
  //     id: "dropZone-5",
  //     itemIds: [],
  //   },
  //   "dropZone-6": {
  //     id: "dropZone-6",
  //     itemIds: [],
  //   },
  //   "dropZone-7": {
  //     id: "dropZone-7",
  //     itemIds: [],
  //   },
  //   "dropZone-8": {
  //     id: "dropZone-8",
  //     itemIds: [],
  //   },
  //   "dropZone-9": {
  //     id: "dropZone-9",
  //     itemIds: [],
  //   },
  //   "dropZone-10": {
  //     id: "dropZone-10",
  //     itemIds: [
  //       "level2-item-9",
  //       "level2-item-4",
  //       "level2-item-7",
  //       "level2-item-3",
  //     ],
  //   },
  //   "dropZone-11": {
  //     id: "dropZone-11",
  //     itemIds: [
  //       "level2-item-5",
  //       "level2-item-6",
  //       "level2-item-2",
  //       "level2-item-8",
  //     ],
  //   },
  // },

  /**
   * Level 2 dropZoneOrder array
   */
  dropZoneOrder2: [
    "dropZone-1",
    "dropZone-2",
    "dropZone-3",
    "dropZone-4",
    "dropZone-5",
    "dropZone-6",
    "dropZone-7",
    "dropZone-8",
    "dropZone-9",
    "dropZone-10",
    "dropZone-11",
  ],

  /**
   * Level 3 dropZones
   */
  dropZones3: {
    "dropZone-1": {
      id: "dropZone-1",
      itemIds: ["level3-item-1"],
    },
    "dropZone-2": {
      id: "dropZone-2",
      itemIds: ["level3-item-2"],
    },
    "dropZone-3": {
      id: "dropZone-3",
      itemIds: ["level3-item-3"],
    },
    "dropZone-4": {
      id: "dropZone-4",
      itemIds: ["level3-item-4"],
    },
    "dropZone-5": {
      id: "dropZone-5",
      itemIds: ["level3-item-5"],
    },
    "dropZone-6": {
      id: "dropZone-6",
      itemIds: ["level3-item-6"],
    },
    "dropZone-7": {
      id: "dropZone-7",
      itemIds: ["level3-item-7"],
    },
    "dropZone-8": {
      id: "dropZone-8",
      itemIds: ["level3-item-8"],
    },
    "dropZone-9": {
      id: "dropZone-9",
      itemIds: ["level3-item-9"],
    },
    "dropZone-10": {
      id: "dropZone-10",
      itemIds: [],
    },
    "dropZone-11": {
      id: "dropZone-11",
      itemIds: [],
    },
  },

  // dropZones3: {
  //   "dropZone-1": {
  //     id: "dropZone-1",
  //     itemIds: ["level3-item-1"],
  //   },
  //   "dropZone-2": {
  //     id: "dropZone-2",
  //     itemIds: [],
  //   },
  //   "dropZone-3": {
  //     id: "dropZone-3",
  //     itemIds: [],
  //   },
  //   "dropZone-4": {
  //     id: "dropZone-4",
  //     itemIds: [],
  //   },
  //   "dropZone-5": {
  //     id: "dropZone-5",
  //     itemIds: [],
  //   },
  //   "dropZone-6": {
  //     id: "dropZone-6",
  //     itemIds: [],
  //   },
  //   "dropZone-7": {
  //     id: "dropZone-7",
  //     itemIds: [],
  //   },
  //   "dropZone-8": {
  //     id: "dropZone-8",
  //     itemIds: [],
  //   },
  //   "dropZone-9": {
  //     id: "dropZone-9",
  //     itemIds: [],
  //   },
  //   "dropZone-10": {
  //     id: "dropZone-10",
  //     itemIds: [
  //       "level3-item-7",
  //       "level3-item-3",
  //       "level3-item-9",
  //       "level3-item-4",
  //     ],
  //   },
  //   "dropZone-11": {
  //     id: "dropZone-11",
  //     itemIds: [
  //       "level3-item-2",
  //       "level3-item-5",
  //       "level3-item-8",
  //       "level3-item-6",
  //     ],
  //   },
  // },

  /**
   * Level 3 dropZoneOrder array
   */
  dropZoneOrder3: [
    "dropZone-1",
    "dropZone-2",
    "dropZone-3",
    "dropZone-4",
    "dropZone-5",
    "dropZone-6",
    "dropZone-7",
    "dropZone-8",
    "dropZone-9",
    "dropZone-10",
    "dropZone-11",
  ],
};

export default data;
