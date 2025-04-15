import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Body() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Body;
