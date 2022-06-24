import { NavBar } from "../ui-components";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Layout({ signOut }) {
  let navigate = useNavigate();
  const medicineslistOnClick = () => navigate("/");
  const addamedicineOnClick = () => navigate("/add");
  const navBarOverrides = {
    "Medicines list": {
      onClick: () => medicineslistOnClick(),
    },
    "Add a medicine": {
      onClick: () => addamedicineOnClick(),
    },
    "Sign out": {
      onClick: () => {
        signOut();
        navigate("/");
      },
    },
  };

  return (
    <>
      <NavBar overrides={navBarOverrides} width={"100vw"} />
      <Outlet />
    </>
  );
}
