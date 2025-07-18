const MATCHES_URL =
  "https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid";
export default async function getMatchIdsByPUUID(
  puuid: string
): Promise<string[]> {
  const reqURL = `${MATCHES_URL}/${puuid}/ids?api_key=${process.env.RIOT_API_KEY}`;
  const data = await fetch(reqURL);

  return data.json();
}
