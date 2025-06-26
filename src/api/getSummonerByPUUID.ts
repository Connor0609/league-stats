import { SummonerDTO } from "./dtos";
const SUM_URL =
  "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid";
export default async function getSummonerbyPUUID(
  puuid: string
): Promise<SummonerDTO> {
  const reqURL = `${SUM_URL}/${puuid}?api_key=${process.env.RIOT_API_KEY}`;
  const data = await fetch(reqURL);
  console.log(data.status);

  return data.json();
}
