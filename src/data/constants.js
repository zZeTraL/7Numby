export const currentSidebarIcon = "1307" // provide a number such as "1001"
export const sidebarLinks = [
    {
        key: "sidebar.home",
        icon: "QuestMainIcon",
        link: "/",
    },
    {
        key: "sidebar.characters",
        icon: "AvatarIcon",
        link: "/characters"
    },
    {
        key: "sidebar.warp_counter",
        icon: "DrawcardIcon",
        link: "/warp"
    },
    {
        key: "sidebar.calculator",
        icon: "InventoryConsumablesIcon",
        link: "/calculator"
    },
    {
        key: "sidebar.timeline",
        icon: "ActivityIcon",
        link: "/timeline"
    },
    {
        key: "sidebar.database",
        icon: "QuestIcon",
        link: "/database"
    },
    {
        key: "sidebar.settings",
        icon: "SettingsIcon",
        link: "/settings"
    }
]

export const characterInformationHash = {
    "#skills": "skills",
    "#traces": "traces",
    "#eidolons": "eidolons",
    "#builds": "builds"
}

// ==============================
// Related game constants
// ==============================
export const elements = [
    "Physical",
    "Fire",
    "Ice",
    "Wind",
    "Thunder",
    "Imaginary",
    "Quantum"
];
export const paths = [
    {id: "Priest", tag: "Abundance"},
    {id: "Warrior", tag: "Destruction"},
    {id: "Mage", tag: "Erudition"},
    {id: "Shaman", tag: "Harmony"},
    {id: "Rogue", tag: "Hunt"},
    {id: "Warlock", tag: "Nihility"},
    {id: "Knight", tag: "Preservation"},
]

export const aeons = [
    {
        path: "Priest",
        title: "Yaoshi",
        tag: "HoshinoKami_003",
    },
    {
        path: "Warrior",
        title: "Nanook",
        tag: "HoshinoKami_002",
    },
    {
        path: "Mage",
        title: "Nous",
        tag: "HoshinoKami_012",
    },
    {
        path: "Shaman",
        title: "Xipe",
        tag: "HoshinoKami_008",
    },
    {
        path: "Rogue",
        title: "Lan",
        tag: "HoshinoKami_005",
    },
    {
        path: "Warlock",
        title: "IX",
        tag: "HoshinoKami_004",
    },
    {
        path: "Knight",
        title: "Qlipoth",
        tag: "HoshinoKami_001",
    },
]

export const rarity = [
    {int: 3, stars: ["StarBig", "StarBig", "StarBig"]},
    {int: 4, stars: ["StarBig", "StarBig", "StarBig", "StarBig"]},
    {int: 5, stars: ["StarBig", "StarBig", "StarBig", "StarBig", "StarBig"]}
]

export const stars = [{icon: "StarBig_WhiteGlow", int:4}, {icon:"StarBig", int:5}]
