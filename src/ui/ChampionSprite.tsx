import { Avatar } from "@base-ui-components/react/avatar";
import setsInfo from "data/sets.json";

const CostColors = ["#afafaf", "#1bc660", "#0c6ac0", "#dd43b5", "#fa8701"];

const baseUrl = "https://raw.communitydragon.org/latest/game";

export default function ChampionSprite({
  championId,
  set,
}: {
  championId: string;
  set: number;
}) {
  const setInfo = setsInfo[set];
  const championInfo = setInfo.champions.find((c) => c.apiName === championId);
  // console.log(`Looking for ${championId} found ${championInfo?.apiName}`);

  const lowercasePath = championInfo!.tileIcon.toLowerCase();
  const imageUrl = `${baseUrl}/${lowercasePath}`.replace("tex", "png");
  const borderColor = CostColors[championInfo!.cost - 1];

  return (
    <Avatar.Root
      className={`inline-flex justify-center items-center align-middle overflow-hidden rounded-full border-3 m-2`}
      style={{ borderColor: borderColor }}
    >
      <Avatar.Image src={imageUrl} className="w-[48px] h-[48px]"></Avatar.Image>
      <Avatar.Fallback className="w-[48px] h-[48px] bg-gray-700"></Avatar.Fallback>
    </Avatar.Root>
  );
}
