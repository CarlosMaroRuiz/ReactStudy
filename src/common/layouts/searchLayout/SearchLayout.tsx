import { Outlet } from "react-router-dom";
import HeaderSearch from "./components/HeaderSearch";

const SearchLayout = () => {
  return (
    <>
      <HeaderSearch />
      <main className="content-wrapper">
        <Outlet /> 
      </main>
    </>
  );
};

export default SearchLayout;