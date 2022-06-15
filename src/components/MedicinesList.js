import { useState, useEffect } from "react";
import {
  MedicinesListHeading,
  MedicinesListHeader,
  MedicinesListItemCollection,
} from "../ui-components";
import { useNavigateAction } from "@aws-amplify/ui-react/internal";

export default function MedicinesList() {
  const baseURL = "http://localhost:3000/edit/";
  const [medicineId, setMedicineId] = useState("");
  const buttonThreeTwoNineFiveTwoSevenSevenTwoOnClick = useNavigateAction({
    type: "url",
    url: baseURL + medicineId,
  });

  useEffect(() => {
    console.log(baseURL + medicineId);
    if (medicineId !== "") {
      buttonThreeTwoNineFiveTwoSevenSevenTwoOnClick();
    }
  }, [medicineId]);

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
                  setMedicineId(item.id);
                },
              },
            },
          })}
        />
      </div>
    </>
  );
}
