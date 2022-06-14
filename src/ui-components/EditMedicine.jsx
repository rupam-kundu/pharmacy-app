/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Heading, TextField, View } from "@aws-amplify/ui-react";
export default function EditMedicine(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="1080px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "EditMedicine")}
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
        {...getOverrideProps(overrides, "TextField32192778")}
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
        {...getOverrideProps(overrides, "TextField32192779")}
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
        {...getOverrideProps(overrides, "TextField32192780")}
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
        {...getOverrideProps(overrides, "TextField32192781")}
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
        {...getOverrideProps(overrides, "Button32192782")}
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
        {...getOverrideProps(overrides, "Button32192783")}
      ></Button>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="calc(50% - 25px - 423px)"
        left="calc(50% - 144.5px - 0.5px)"
        direction="row"
        padding="0px 0px 0px 0px"
        level="2"
        children="Edit a medicine"
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
        {...getOverrideProps(overrides, "TextField32192785")}
      ></TextField>
    </View>
  );
}
