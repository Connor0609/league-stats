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
