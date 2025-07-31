import { MatchDto } from "./dtos";
import { REGIONAL_ROUTING } from "./routingValues";

const MATCH_URL = "api.riotgames.com/tft/match/v1/matches";

//TODO: Adjust functions to take a routing value insted of being hard coded to americas

type MatchesQueryParams = {
  start?: number; // start index, defaults to 0
  endTime?: number; // Epoch timestamp in seconds
  startTime?: number; // Epoch timestamp in seconds
  count?: number; // number of match ids to return, defaults to 20
};

/**
 * Queries the Riot Api at api.riotgames.com/tft/match/v1/matches/${matchId}
 * @param matchId A string representing the id of the match being queried
 *
 * @returns A Promise that contains a JSON response that has the shape of the MatchDto
 */
export async function getMatchByMatchId(
  matchId: string,
  queryParams?: MatchesQueryParams
): Promise<MatchDto> {
  const reqURL = matchRequestURLBuilder(
    REGIONAL_ROUTING.AMERICAS,
    matchId,
    queryParams
  );
  const data = await fetch(reqURL);

  return data.json();
}

/**
 * Queries the Riot Api at api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids
 * @param puuid An encrypted puuid associated with the account of interest
 * @returns A Promise that contains an array of match id strings
 */
export async function getMatchIdsByPUUID(puuid: string): Promise<string[]> {
  const reqURL = matchRequestURLBuilder(
    REGIONAL_ROUTING.AMERICAS,
    `by-puuid/${puuid}/ids`
  );
  const data = await fetch(reqURL);

  return data.json();
}

/**
 * A helper function that creates a request URL for Riot's TFT Match endpoints
 * @param routingVal A Riot Api Regional routing value
 * @param endpoint The portion of the endpoint that follows /tft/match/v1/matches
 * @param queryParams Optional query parameters
 * @returns A url of the form "https://${routingVal}.api.riotgames.com/tft/match/v1/matches/${endpoint}?api_key=${RIOT_API_KEY}(&queryParam1=val...)"
 */
function matchRequestURLBuilder(
  routingVal: REGIONAL_ROUTING,
  endpoint: string,
  queryParams?: MatchesQueryParams
) {
  const url = `https://${routingVal}.${MATCH_URL}/${endpoint}?api_key=${process.env.RIOT_API_KEY}`;
  if (queryParams) {
    const queryParamsStr = "";
    for (const param in queryParams) {
      queryParamsStr.concat("&", param, queryParams[param]);
    }

    return url.concat(queryParamsStr);
  }
  return url;
}
