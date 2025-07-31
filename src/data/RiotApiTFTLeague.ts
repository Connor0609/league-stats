import { LeagueEntryDto } from "./dtos";
import { PLATFORM_ROUTING } from "./routingValues";

//TODO: adjust the function to take a routing value instead of being hard coded to na1

const BASE_URL = "api.riotgames.com/tft/league/v1";
/**
 * Queries the Riot Api at api.riotgames.com/tft/league/v1/by-puuid/${puuid}
 * @param puuid An encrypted puuid associated the account of interest
 * @returns A Promise that contains a JSON response that has the shape of the LeagueEntryDto
 */
export async function getRankByPUUID(puuid: string): Promise<LeagueEntryDto[]> {
  const reqURL = tftLeagueRequestUrlBuilder(
    PLATFORM_ROUTING.NA1,
    `by-puuid/${puuid}`
  );
  const data = await fetch(reqURL);

  return data.json();
}

/**
 * A helper function that creates a request URL for Riot's TFT League endpoints
 * @param routingVal A Riot Api Platform routing value
 * @param endpoint The portion of the endpoint following /tft/league/v1
 * @returns A url of the form "https://${routingVal}.api.riotgames.com/tft/league/v1/${endpoint}?api_key=${RIOT_API_KEY}"
 */
function tftLeagueRequestUrlBuilder(
  routingVal: PLATFORM_ROUTING,
  endpoint: string
) {
  return `https://${routingVal}.${BASE_URL}/${endpoint}?api_key=${process.env.RIOT_API_KEY}`;
}
