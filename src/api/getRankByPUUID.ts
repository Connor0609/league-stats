import { LeagueEntryDTO } from "./dtos";

const RANK_URL = "https://na1.api.riotgames.com/tft/league/v1/by-puuid";

export default async function getRankByPUUID(
  puuid: string
): Promise<LeagueEntryDTO[]> {
  const reqURL = `${RANK_URL}/${puuid}?api_key=${process.env.RIOT_API_KEY}`;
  const data = await fetch(reqURL);

  return data.json();
}
