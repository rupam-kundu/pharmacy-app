import { useState, useEffect } from "react";
import {
  MedicinesListHeading,
  MedicinesListHeader,
  MedicinesListItemCollection,
} from "../ui-components";
import { useNavigate } from "react-router-dom";

export default function MedicinesList() {
  const [updateMedicine, setUpdateMedicine] = useState();
  const navigate = useNavigate();
  const editButtonOnClick = () => {
    navigate("/edit", { state: { updateMedicine } });
  };

  useEffect(() => {
    console.log(updateMedicine);
    if (typeof updateMedicine !== "undefined") {
      editButtonOnClick();
    }
  }, [updateMedicine]);

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
        <MedicinesListItemCollection
          overrideItems={({ item, index }) => ({
            overrides: {
              Button32952772: {
                onClick: () => {
                  setUpdateMedicine(item);
                },
              },
            },
          })}
        />
      </div>
    </>
  );
}
