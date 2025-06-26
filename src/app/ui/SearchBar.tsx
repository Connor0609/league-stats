"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const { push } = useRouter();
  const [nameTag, setNameTag] = useState("");

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const pathComponent = nameTag.split("#").join("-");
    push(`/profiles/${pathComponent}`);
  }

  return (
    <form
      className="relative flex flex-1 flex-shrink-0"
      onSubmit={handleSubmit}
    >
      <label htmlFor="searchBar" className="sr-only">
        Search:
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        id="searchBar"
        type="text"
        onChange={(e) => {
          setNameTag(e.target.value);
        }}
      />
    </form>
  );
}
