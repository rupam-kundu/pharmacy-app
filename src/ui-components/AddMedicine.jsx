/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Medicines } from "../models";
import { schema } from "../models/schema";
import { Button, Heading, TextField, View } from "@aws-amplify/ui-react";
export default function AddMedicine(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldThreeTwoZeroFiveTwoEightTwoThreeValue,
    setTextFieldThreeTwoZeroFiveTwoEightTwoThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeTwoZeroFiveTwoEightZeroTwoValue,
    setTextFieldThreeTwoZeroFiveTwoEightZeroTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeTwoZeroFiveTwoEightZeroNineValue,
    setTextFieldThreeTwoZeroFiveTwoEightZeroNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeTwoZeroFiveTwoEightOneSixValue,
    setTextFieldThreeTwoZeroFiveTwoEightOneSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeTwoOneFiveTwoSevenSevenThreeValue,
    setTextFieldThreeTwoOneFiveTwoSevenSevenThreeValue,
  ] = useStateMutationAction("");
  const buttonThreeTwoZeroSevenTwoEightTwoFiveOnClick =
    useDataStoreCreateAction({
      fields: {
        name: textFieldThreeTwoZeroFiveTwoEightTwoThreeValue,
        description: textFieldThreeTwoZeroFiveTwoEightZeroTwoValue,
        manufacturer: textFieldThreeTwoZeroFiveTwoEightZeroNineValue,
        mrp: textFieldThreeTwoZeroFiveTwoEightOneSixValue,
        sku: textFieldThreeTwoOneFiveTwoSevenSevenThreeValue,
      },
      model: Medicines,
      schema: schema,
    });
  return (
    <View
      width="1920px"
      height="1080px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AddMedicine")}
    >
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="calc(50% - 36px - 165px)"
        left="calc(50% - 150px - 1px)"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Description"
        placeholder="Description"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeTwoZeroFiveTwoEightZeroTwoValue}
        onChange={(event) => {
          setTextFieldThreeTwoZeroFiveTwoEightZeroTwoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField32052802")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="calc(50% - 36px - 16px)"
        left="calc(50% - 150px - 6px)"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Manufacturer"
        placeholder="Manufacturer"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeTwoZeroFiveTwoEightZeroNineValue}
        onChange={(event) => {
          setTextFieldThreeTwoZeroFiveTwoEightZeroNineValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField32052809")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="calc(50% - 36px - -118px)"
        left="calc(50% - 150px - 6px)"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="MRP"
        placeholder="MRP"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeTwoZeroFiveTwoEightOneSixValue}
        onChange={(event) => {
          setTextFieldThreeTwoZeroFiveTwoEightOneSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField32052816")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="calc(50% - 36px - 314px)"
        left="calc(50% - 150px - 0px)"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Name"
        placeholder="Name"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeTwoZeroFiveTwoEightTwoThreeValue}
        onChange={(event) => {
          setTextFieldThreeTwoZeroFiveTwoEightTwoThreeValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField32052823")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="calc(50% - 20px - -387px)"
        left="calc(50% - 44px - 110px)"
        direction="row"
        justifyContent="center"
        alignItems="center"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Submit"
        onClick={() => {
          buttonThreeTwoZeroSevenTwoEightTwoFiveOnClick();
        }}
        {...getOverrideProps(overrides, "Button32072825")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="calc(50% - 20px - -387px)"
        left="calc(50% - 38.5px - -110.5px)"
        direction="row"
        justifyContent="center"
        alignItems="center"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Reset"
        {...getOverrideProps(overrides, "Button32072829")}
      ></Button>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="calc(50% - 25px - 423px)"
        left="calc(50% - 146.5px - 0.5px)"
        direction="row"
        padding="0px 0px 0px 0px"
        level="2"
        children="Add a medicine"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="calc(50% - 36px - -261px)"
        left="calc(50% - 150px - 4px)"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="SKU"
        placeholder="SKU"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeTwoOneFiveTwoSevenSevenThreeValue}
        onChange={(event) => {
          setTextFieldThreeTwoOneFiveTwoSevenSevenThreeValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField32152773")}
      ></TextField>
    </View>
  );
}
