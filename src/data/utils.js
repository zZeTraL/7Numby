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


export const stars = [{icon: "StarBig_WhiteGlow", int:4}, {icon:"StarBig", int:5}]

// Functions
export const getIconPathById = (id) => {
    let result = "";
    paths.forEach(path => {
        if (path.id === id) result = path.tag
    })
    return result
}

export const getAeonByPath = (path) => {
    let result = {}
    aeons.forEach(aeon => {
        if (aeon.path === path) result = aeon
    })
    return result
}

export const reduceCharacterName = (name) => {
    switch (name) {
        case "Dan Heng • Imbibitor Lunae":
            return "Imbibitor Lunae"
        default:
            return name
    }
}
