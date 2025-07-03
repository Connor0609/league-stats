import getAccountbyNameAndTag from "api/getAccountByNameAndTag";
import getRankByPUUID from "api/getRankByPUUID";
import getSummonerbyPUUID from "api/getSummonerByPUUID";
import ProfileCard from "app/ui/ProfileCard";

export default async function Page({
  params,
}: {
  params: Promise<{ nameTag: string }>;
}) {
  const { nameTag } = await params;
  const [gameName, tag] = nameTag.split("-");
  const accountInfo = await getAccountbyNameAndTag(gameName, tag);
  const summonerInfo = await getSummonerbyPUUID(accountInfo.puuid);
  const rankInfo = await getRankByPUUID(accountInfo.puuid);
  const tftRank = rankInfo.find((i) => i.queueType === "RANKED_TFT");

  console.log(rankInfo);

  return (
    <>
      <ProfileCard
        name={gameName}
        tag={tag}
        profileIconId={summonerInfo.profileIconId}
        tier={tftRank?.tier || "Unranked"}
      />
    </>
  );
}
