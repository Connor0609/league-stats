export type AccountDTO = {
  puuid: string;
  gameName?: string;
  tagLine?: string;
};

export type SummonerDTO = {
  profileIconId: number;
  revisionDate: number;
  puuid: string;
  summonerLevel: number;
};

export type LeagueEntryDTO = {
  puuid: string;
  leagueId: string;
  queueType: string;
  ratedTier?: string;
  ratedRating?: string;
  tier: string;
  rank: string;
  leaguePoints: string;
  wins: number;
  losses: number;
  hotStreak: boolean;
  veteran: boolean;
  freshBlood: boolean;
  inactive: boolean;
  miniSeries?: MiniSeriesDTO;
};

export type MiniSeriesDTO = {
  losses: number;
  progress: string;
  target: number;
  wins: number;
};

export type MatchDTO = {
  metadata: MetadataDTO;
  info: InfoDTO;
};

export type MetadataDTO = {
  data_version: string;
  match_id: string;
  participants: string[];
};

export type InfoDTO = {
  endOfGameResult: string;
  gameCreation: number;
  gameId: number;
  game_datetime: number;
  game_length: number;
  game_version: string;
  mapId: number;
  participants: ParticipantDTO[];
  queue_id: number;
  tft_game_type: string;
  tft_set_core_name: string;
  tft_set_number: number;
};

export type ParticipantDTO = {
  companion: CompanionDTO;
  gold_left: number;
  last_round: number;
  level: number;
  placement: number;
  players_eliminated: number;
  puuid: string;
  riotIdGameName: string;
  riotIdTagline: string;
  time_eliminated: number;
  total_damage_to_players: number;
  traits: TraitDTO[];
  units: UnitDTO[];
  win: boolean;
};

export type CompanionDTO = {
  content_ID: string;
  item_ID: number;
  skin_ID: number;
  species: string;
};

export type TraitDTO = {
  name: string;
  num_units: number;
  style: number; // 0 = No style, 1 = Bronze, 2 = Silver, 3 = Gold, 4 = Chromatic
  tier_current: number;
  tier_total: number;
};

export type UnitDTO = {
  items: number[];
  character_id: string;
  itemNames: string[];
  chosen?: string;
  name?: string;
  rarity: number;
  tier: number;
};
