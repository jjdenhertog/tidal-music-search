import { SearchConfig } from "@jjdenhertog/music-search";
import { TidalMusicSearchApproach } from "./TidalMusicSearchApproach";

export type TidalMusicSearchConfig = SearchConfig & {
    searchApproaches?: TidalMusicSearchApproach[];
};
