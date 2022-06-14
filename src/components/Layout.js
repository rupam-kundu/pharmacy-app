import { NavBar } from "../ui-components";
import { Outlet } from "react-router-dom";
import { useNavigateAction } from "@aws-amplify/ui-react/internal";

export default function Layout() {
  const medicineslistOnClick = useNavigateAction({
    type: "url",
    url: "http://localhost:3000/",
  });
  const addamedicineOnClick = useNavigateAction({
    type: "url",
    url: "http://localhost:3000/add/",
  });
  const medicinesListoverrides = {
    "Medicines list": {
      onClick: () => medicineslistOnClick(),
    },
    "Add a medicine": {
      onClick: () => addamedicineOnClick(),
    },
  };

  return (
    <>
      <NavBar overrides={medicinesListoverrides} width={"100vw"} />
      <Outlet />
    </>
  );
}
