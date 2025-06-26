import getAccountbyNameAndTag from "api/getAccountByNameAndTag";
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

  console.log(summonerInfo);

  return (
    <>
      <ProfileCard
        name={gameName}
        tag={tag}
        profileIconId={summonerInfo.profileIconId}
      />
    </>
  );
}
