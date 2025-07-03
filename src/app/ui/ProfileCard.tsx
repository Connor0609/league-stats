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
    <div className="flex flex-col items-center bg-indigodye w-2xs h-fit rounded-sm">
      <Image
        src={`/dataDragon/15.11.1/img/profileicon/${profileIconId}.png`}
        alt={"Profile Icon"}
        width={150}
        height={150}
      ></Image>
      <p>
        {name}#{tag}
      </p>
      <Image
        src={`/rankEmblems/Rank=${tier}.png`}
        alt={tier}
        width={200}
        height={150}
      />
    </div>
  );
}
