import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="w-full bg-indigo-100">
      <SearchBar placeholder="Game Name #Tag" />
    </nav>
  );
}
