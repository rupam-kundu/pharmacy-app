import { NavBar } from "../ui-components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar width={"100vw"} />
      <Outlet />
    </>
  );
}
