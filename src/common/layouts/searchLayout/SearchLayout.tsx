import { Outlet } from "react-router-dom";
import HeaderSearch from "./components/HeaderSearch";

const SearchLayout = () => {
  return (
    <>
      <HeaderSearch />
        <Outlet /> 
    </>
  );
};

export default SearchLayout;