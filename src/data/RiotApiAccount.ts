import { AccountDto } from "./dtos";
import { ACCOUNT_ROUTING } from "./routingValues";

//TODO: adjust the function to take a routing value instead of being hardcoded to americas

const BASE_URL = "api.riotgames.com/riot/account/v1";

/**
 * Queries the Riot Api at api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tag}
 * @param gameName The portion of the Riot Id that precedes the '#' character
 * @param tag The portion of the Riot Id that follows the '#' character
 * @returns A Promise that contains a JSON response that has the shape of the AccountDto
 */
export async function getAccountbyNameAndTag(
  gameName: string,
  tag: string
): Promise<AccountDto> {
  const reqUrl = accountRequestUrlBuilder(
    ACCOUNT_ROUTING.AMERICAS,
    `accounts/by-riot-id/${gameName}/${tag}`
  );
  const data = await fetch(reqUrl);
  // console.log(data.status);

  return data.json();
}

/**
 * Queries the Riot Api at api.riotgames.com/riot/account/v1/account/by-puuid/${puuid}
 * @param puuid An encrypted puuid associated with a Riot account
 * @returns A Promise that contains a JSON response that has the shape of the AccountDto
 */
export async function getAccountByPuuid(puuid: string): Promise<AccountDto> {
  const reqUrl = accountRequestUrlBuilder(
    ACCOUNT_ROUTING.AMERICAS,
    `accounts/by-puuid/${puuid}`
  );
  const data = await fetch(reqUrl);

  return data.json();
}

/**
 * A helper function that creates a request URL for Riot's account endpoints
 * @param routingVal One of three routing values (americas, asia, europe) that correspond to region clusters. Queries can retrieve accounts from any region. Use the nearest cluster.
 * @param endpoint A partial, unique path for a specific endpoint.
 * @returns A url of the form "https://${routingVal}.api.riotgames.com/riot/account/v1/${endpoint}?api_key=${RIOT_API_KEY}"
 */
function accountRequestUrlBuilder(
  routingVal: ACCOUNT_ROUTING,
  endpoint: string
) {
  return `https://${routingVal}.${BASE_URL}/${endpoint}?api_key=${process.env.RIOT_API_KEY}`;
}
