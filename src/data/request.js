import axios from "axios";
import i18next from "i18next";

const lng = i18next.language;
const baseURL = import.meta.env.PROD ? "./data/index_new/" : "./src/data/index_new/";
const availableFiles = ["achievements", "avatars", "character_promotions", "character_ranks", "character_skill_trees", "character_skills",
    "characters", "descriptions", "elements", "items", "light_cone_promotions", "light_cone_ranks", "light_cones", "nickname", "paths",
    "properties", "relic_main_affixes", "relic_sets", "relic_sub_affixes", "relics", "simulated_blessings", "simulated_blocks",
    "simulated_curios", "simulated_events"
];

export const fetchData = async (file) => {
    const result = await axios.get(baseURL + lng + "/" + file + ".json")
    return result.data;
}

export const fetchMultipleData = async (files) => {
    return await axios.all(files.map(file => fetchData(file)));
}

export const fetchAllData = async () => {
    return await axios.all(availableFiles.map(file => fetchData(file)));
}