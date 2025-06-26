import Image from "next/image";
export default function ProfileCard({
  name,
  tag,
  profileIconId,
}: {
  name: string;
  tag: string;
  profileIconId: number;
}) {
  return (
    <div>
      <Image
        src={`/dataDragon/15.11.1/img/profileicon/${profileIconId}.png`}
        alt={""}
        width={150}
        height={150}
      ></Image>
      <p>
        {name}#{tag}
      </p>
    </div>
  );
}
