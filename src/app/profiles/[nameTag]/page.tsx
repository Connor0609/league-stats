import { MatchDto } from "data/dtos";
import { getAccountbyNameAndTag } from "data/RiotApiAccount";
import { getMatchByMatchId, getMatchIdsByPUUID } from "data/RiotApiTFTMatch";
import { getRankByPUUID } from "data/RiotApiTFTLeague";
import { getSummonerbyPUUID } from "data/RiotApiTFTSummoner";
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
  const matches: MatchDto[] = [];

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
