import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div className=" mx-7 flex w-[30%] space-x-2 rounded-md bg-slate-100 p-2">
      <BiSearch className="text-2xl text-slate-300 " />
      <input
        type="text"
        className="w-full bg-transparent text-slate-700 outline-none"
        placeholder="Search for transaction, item, etc"
      />
    </div>
  );
}
