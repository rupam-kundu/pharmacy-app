import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EditMedicine } from "../ui-components";
import { DataStore } from "@aws-amplify/datastore";
import { Medicines } from "../models";

export default function EditMed() {
  const [textFieldNameValue, setTextFieldNameValue] = useState("");
  const [textFieldDescriptionValue, setTextFieldDescriptionValue] =
    useState("");
  const [textFieldManufacturerValue, setTextFieldManufacturerValue] =
    useState("");
  const [textFieldMRPValue, setTextFieldMRPValue] = useState(0);
  const [textFieldSKUValue, setTextFieldSKUValue] = useState("");

  const location = useLocation();
  useEffect(() => {
    console.log(location.state.updateMedicine);
    setTextFieldNameValue(location.state.updateMedicine.name);
    setTextFieldDescriptionValue(location.state.updateMedicine.description);
    setTextFieldManufacturerValue(location.state.updateMedicine.manufacturer);
    setTextFieldMRPValue(location.state.updateMedicine.mrp);
    setTextFieldSKUValue(location.state.updateMedicine.sku);
  }, []);

  const buttonThreeTwoOneNineTwoSevenEightTwoOnClick = async () => {
    const originalMedicine = await DataStore.query(
      Medicines,
      location.state.updateMedicine.id
    );
    await DataStore.save(
      Medicines.copyOf(originalMedicine, (item) => {
        item.name = textFieldNameValue;
        item.description = textFieldDescriptionValue;
        item.manufacturer = textFieldManufacturerValue;
        item.mrp = Number(textFieldMRPValue);
        item.sku = textFieldSKUValue;
      })
    );
  };

  const medicineOverrides = {
    TextField32192781: {
      value: textFieldNameValue,
      onChange: (event) => {
        setTextFieldNameValue(event.target.value);
      },
    },
    TextField32192778: {
      value: textFieldDescriptionValue,
      onChange: (event) => {
        setTextFieldDescriptionValue(event.target.value);
      },
    },
    TextField32192779: {
      value: textFieldManufacturerValue,
      onChange: (event) => {
        setTextFieldManufacturerValue(event.target.value);
      },
    },
    TextField32192780: {
      value: textFieldMRPValue,
      onChange: (event) => {
        setTextFieldMRPValue(event.target.value);
      },
    },
    TextField32192785: {
      value: textFieldSKUValue,
      onChange: (event) => {
        setTextFieldSKUValue(event.target.value);
      },
    },
    Button32192782: {
      onClick: buttonThreeTwoOneNineTwoSevenEightTwoOnClick,
    },
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <EditMedicine overrides={medicineOverrides} />
      </div>
    </>
  );
}
