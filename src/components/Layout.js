import { NavBar } from "../ui-components";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Layout({ signOut }) {
  let navigate = useNavigate();
  const medicineslistOnClick = () => navigate("/");
  const addamedicineOnClick = () => navigate("/add");

  const navBarOverrides = {
    "Medicines list": {
      style: {
        cursor: "pointer",
      },
      onClick: () => medicineslistOnClick(),
    },
    "Add a medicine": {
      style: {
        cursor: "pointer",
      },
      onClick: () => addamedicineOnClick(),
    },
    "Sign out": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        signOut({ global: true });
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
