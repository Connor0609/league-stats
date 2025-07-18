import { Accordion } from "@base-ui-components/react/accordion";
import { ParticipantDTO } from "api/dtos";
import ChampionSprite from "./ChampionSprite";

export default function MatchAccordion({
  mainParticipantId,
  participants,
}: {
  mainParticipantId: string;
  participants: ParticipantDTO[];
}) {
  const mainParticipant = participants.find(
    (p) => p.puuid == mainParticipantId
  );
  const mainUnitAvatars = mainParticipant!.units.map((u) => {
    return (
      <ChampionSprite
        championId={u.character_id}
        key={crypto.randomUUID()}
      ></ChampionSprite>
    );
  });
  return (
    <Accordion.Root className="block w-3xl">
      <Accordion.Item className="m-2">
        <Accordion.Header className="bg-indigodye-800 w-full rounded-md">
          <Accordion.Trigger className="w-full">
            {mainUnitAvatars}
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Panel className="bg-indigodye-700 flex rounded-b-md w-[97%] mr-auto ml-auto justify-center">
          Panel is open
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}
