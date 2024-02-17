import axios from "axios";
const baseURL = import.meta.env.PROD ? "./data/index_new/" : "./src/data/index_new/";
export const availableFiles = ["achievements", "avatars", "character_promotions", "character_ranks", "character_skill_trees", "character_skills",
    "characters", "descriptions", "elements", "items", "light_cone_promotions", "light_cone_ranks", "light_cones", "nickname", "paths",
    "properties", "relic_main_affixes", "relic_sets", "relic_sub_affixes", "relics", "simulated_blessings", "simulated_blocks",
    "simulated_curios", "simulated_events"
];

export const fetchData = async (file, lng) => {
    const result = await axios.get(baseURL + lng + "/" + file + ".json")
    return result.data;
}

export const fetchMultipleData = async (files, lng) => {
    console.info("Current language: " + lng);
    return await axios.all(files.map(file => fetchData(file, lng)));
}

export const fetchAllData = async (lng) => {
    return await axios.all(availableFiles.map(file => fetchData(file, lng)));
}