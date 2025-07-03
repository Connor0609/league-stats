import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="w-full h-10 flex bg-blue-900 items-center justify-center">
      <SearchBar placeholder="Game Name #Tag" />
    </nav>
  );
}
