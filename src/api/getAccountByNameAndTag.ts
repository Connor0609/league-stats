import { AccountDTO } from "./dtos";
const ACC_URL =
  "https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id";

export default async function getAccountbyNameAndTag(
  gameName: string,
  tag: string
): Promise<AccountDTO> {
  const reqURL = `${ACC_URL}/${gameName}/${tag}?api_key=${process.env.RIOT_API_KEY}`;
  const data = await fetch(reqURL);
  console.log(data.status);

  return data.json();
}
