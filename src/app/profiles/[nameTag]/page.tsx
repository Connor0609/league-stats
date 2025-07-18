import { MatchDTO } from "api/dtos";
import getAccountbyNameAndTag from "api/getAccountByNameAndTag";
import getMatchByMatchId from "api/getMatchByMatchId";
import getMatchIdsByPUUID from "api/getMatchIdsByPUUID";
import getRankByPUUID from "api/getRankByPUUID";
import getSummonerbyPUUID from "api/getSummonerByPUUID";
import MatchAccordion from "ui/MatchAccordion";
import ProfileCard from "ui/ProfileCard";

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
  const matchIds = await getMatchIdsByPUUID(accountInfo.puuid);
  const matches: MatchDTO[] = [];

  for (const matchId of matchIds) {
    const match = await getMatchByMatchId(matchId);
    matches.push(match);
  }

  const matchAccordions = matches.map((m) => (
    <MatchAccordion
      mainParticipantId={accountInfo.puuid}
      participants={m.info.participants}
      key={m.metadata.match_id}
    ></MatchAccordion>
  ));

  return (
    <>
      <ProfileCard
        name={gameName}
        tag={tag}
        profileIconId={summonerInfo.profileIconId}
        tier={tftRank?.tier || "Unranked"}
      />
      {matchAccordions}
    </>
  );
}
