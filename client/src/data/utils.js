export const elements = [
    "Physical",
    "Fire",
    "Ice",
    "Wind",
    "Lightning",
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

export const stars = ["StarBig_WhiteGlow", "StarBig"]

export const getIconPathById = (id) => {
    return paths.find(path => path.id === id).tag
}
