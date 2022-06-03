import { MedicinesListHeading } from "./ui-components";
import { MedicinesListHeader } from "./ui-components";
import { MedicinesListItemCollection } from "./ui-components";
import { NavBar } from "./ui-components";

function App() {
  return (
    <>
      <NavBar />
      <MedicinesListHeading />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div></div>
        <MedicinesListHeader />
        <div></div>
      </div>
      <MedicinesListItemCollection />
    </>
  );
}

export default App;
