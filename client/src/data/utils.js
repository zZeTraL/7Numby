// Constants
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

export const stars = [{icon: "StarBig_WhiteGlow", int:4}, {icon:"StarBig", int:5}]

// Functions
export const getIconPathById = (id) => {
    return paths.find(path => path.id === id).tag
}

export const reduceCharacterName = (name) => {
    switch (name) {
        case "Dan Heng • Imbibitor Lunae":
            return "Imbibitor"
        case "Topaz & Numby": case "Topaz & Compti":
            return "Topaz"
        default:
            return name
    }
}
