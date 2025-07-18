import { MatchDTO } from "./dtos";
const MATCH_URL = "https://americas.api.riotgames.com/tft/match/v1/matches";

export default async function getMatchByMatchId(
  matchId: string
): Promise<MatchDTO> {
  const reqURL = `${MATCH_URL}/${matchId}?api_key=${process.env.RIOT_API_KEY}`;
  const data = await fetch(reqURL);

  return data.json();
}
