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
      className="relative flex flex-1 flex-shrink-0 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="searchBar" className="sr-only">
        Search
      </label>
      <input
        className="block w-sm h-7 rounded-md bg-alabaster pl-10 text-sm placeholder:text-indigodye"
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
