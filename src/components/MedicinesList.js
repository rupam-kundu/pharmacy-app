import {
  MedicinesListHeading,
  MedicinesListHeader,
  MedicinesListItemCollection,
} from "../ui-components";

export default function MedicinesList() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MedicinesListHeading />
        <MedicinesListHeader />
        <MedicinesListItemCollection />
      </div>
    </>
  );
}
