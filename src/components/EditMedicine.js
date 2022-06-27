import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EditMedicine } from "../ui-components";
import { DataStore } from "@aws-amplify/datastore";
import { Medicines } from "../models";

export default function EditMed() {
  const [originalMedicine, setOriginalMedicine] = useState();
  const [textFieldNameValue, setTextFieldNameValue] = useState("");
  const [textFieldDescriptionValue, setTextFieldDescriptionValue] =
    useState("");
  const [textFieldManufacturerValue, setTextFieldManufacturerValue] =
    useState("");
  const [textFieldMRPValue, setTextFieldMRPValue] = useState("");
  const [textFieldSKUValue, setTextFieldSKUValue] = useState("");
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const getOriginalMedicine = async () => {
      const originalMedicineObj = await DataStore.query(
        Medicines,
        location.state.updateMedicine.id
      );
      setOriginalMedicine(originalMedicineObj);
    };
    getOriginalMedicine();
    setTextFieldNameValue(location.state.updateMedicine.name);
    setTextFieldDescriptionValue(location.state.updateMedicine.description);
    setTextFieldManufacturerValue(location.state.updateMedicine.manufacturer);
    setTextFieldMRPValue(location.state.updateMedicine.mrp);
    setTextFieldSKUValue(location.state.updateMedicine.sku);
  }, []);

  const buttonOnClick = async () => {
    await DataStore.save(
      Medicines.copyOf(originalMedicine, (item) => {
        item.name = textFieldNameValue;
        item.description = textFieldDescriptionValue;
        item.manufacturer = textFieldManufacturerValue;
        item.mrp = Number(textFieldMRPValue);
        item.sku = textFieldSKUValue;
      })
    );
    navigate("/");
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
        <EditMedicine overrides={medicineOverrides} />
      </div>
    </>
  );
}
