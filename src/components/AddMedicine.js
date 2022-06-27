import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddMedicine } from "../ui-components";
import { DataStore } from "@aws-amplify/datastore";
import { Medicines } from "../models";

export default function AddMed() {
  const [textFieldNameValue, setTextFieldNameValue] = useState("");
  const [textFieldDescriptionValue, setTextFieldDescriptionValue] =
    useState("");
  const [textFieldManufacturerValue, setTextFieldManufacturerValue] =
    useState("");
  const [textFieldMRPValue, setTextFieldMRPValue] = useState("");
  const [textFieldSKUValue, setTextFieldSKUValue] = useState("");

  let navigate = useNavigate();

  const buttonOnClick = async () => {
    await DataStore.save(
      new Medicines({
        name: textFieldNameValue,
        description: textFieldDescriptionValue,
        manufacturer: textFieldManufacturerValue,
        mrp: Number(textFieldMRPValue),
        sku: textFieldSKUValue,
      })
    );
    navigate("/");
  };

  const medicineOverrides = {
    TextField32052823: {
      value: textFieldNameValue,
      onChange: (event) => {
        setTextFieldNameValue(event.target.value);
      },
    },
    TextField32052802: {
      value: textFieldDescriptionValue,
      onChange: (event) => {
        setTextFieldDescriptionValue(event.target.value);
      },
    },
    TextField32052809: {
      value: textFieldManufacturerValue,
      onChange: (event) => {
        setTextFieldManufacturerValue(event.target.value);
      },
    },
    TextField32052816: {
      value: textFieldMRPValue,
      onChange: (event) => {
        setTextFieldMRPValue(event.target.value);
      },
    },

    TextField32152773: {
      value: textFieldSKUValue,
      onChange: (event) => {
        setTextFieldSKUValue(event.target.value);
      },
    },
    Button: {
      onClick: () => {
        buttonOnClick();
      },
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
        <AddMedicine overrides={medicineOverrides} />
      </div>
    </>
  );
}
