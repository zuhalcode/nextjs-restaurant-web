import Head from "next/head";
import HeaderInfo from "../molecules/HeaderInfo";
import SearchBar from "../atoms/SearchBar";
import Sidebar from "./DashboardSidebar";

export default function DashboardLayout({ children, head = "Eccommerce" }) {
  return (
    <div className="grid grid-cols-12">
      <Head>
        <link rel="icon" href="/ruesto-logo.ico" />
        <title>Dashboard | {head}</title>
      </Head>
      <Sidebar />
      <div className="col-span-10 flex flex-col">
        <header className="flex w-full justify-between border-b bg-d-primary py-3">
          <SearchBar />
          <HeaderInfo />
        </header>
        <div className="min-h-[535px] w-full bg-neutral p-5">{children}</div>
      </div>
    </div>
  );
}
