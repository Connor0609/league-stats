import { SummonerDto } from "./dtos";

//TODO: Adjust the function to take a routing value instead of being hard coded to NA1

const SUM_URL =
  "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid";

/**
 *
 * @param puuid
 * @returns
 */
export async function getSummonerbyPUUID(puuid: string): Promise<SummonerDto> {
  const reqURL = `${SUM_URL}/${puuid}?api_key=${process.env.RIOT_API_KEY}`;
  const data = await fetch(reqURL);
  console.log(data.status);

  return data.json();
}
