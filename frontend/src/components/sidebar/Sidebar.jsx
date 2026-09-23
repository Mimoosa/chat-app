import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col w-full md:w-[250px]">
      <SearchInput />
      <div className="divider my-4"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
