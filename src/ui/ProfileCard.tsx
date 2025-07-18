import { Avatar } from "@base-ui-components/react";
import Image from "next/image";

export default function ProfileCard({
  name,
  tag,
  profileIconId,
  tier,
}: {
  name: string;
  tag: string;
  profileIconId: number;
  tier: string;
}) {
  return (
    <div className="flex flex-col items-center bg-indigodye-800 w-2xs h-fit rounded-sm">
      <Avatar.Root>
        <Avatar.Image
          src={`https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon${profileIconId}.png`}
          alt={"Profile Icon"}
          className="h-28 w-28 rounded-full"
        ></Avatar.Image>
      </Avatar.Root>
      <p>
        {name}#{tag}
      </p>
      <Image
        src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/${tier.toLowerCase()}.png`}
        alt={tier}
        width="144"
        height="144"
        loading="lazy"
      ></Image>
    </div>
  );
}
