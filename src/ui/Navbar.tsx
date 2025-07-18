import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="w-full h-10 flex items-center justify-center">
      <SearchBar placeholder="Game Name #Tag" />
    </nav>
  );
}
