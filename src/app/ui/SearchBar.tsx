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
        className="block w-sm h-7 rounded-md bg-slate-300 border border-slate-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-slate-500"
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
