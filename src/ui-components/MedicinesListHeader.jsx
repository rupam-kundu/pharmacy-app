/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Heading, View } from "@aws-amplify/ui-react";
export default function MedicinesListHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="220px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MedicinesListHeader")}
    >
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="60px"
        left="492px"
        direction="row"
        padding="0px 0px 0px 0px"
        level="2"
        children="Medicines’ list"
        {...getOverrideProps(overrides, "Heading31492704")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="155px"
        left="85px"
        direction="row"
        padding="0px 0px 0px 0px"
        level="3"
        children="#"
        {...getOverrideProps(overrides, "Heading31492706")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="155px"
        left="225px"
        direction="row"
        padding="0px 0px 0px 0px"
        level="3"
        children="Name"
        {...getOverrideProps(overrides, "Heading31492708")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="155px"
        left="461px"
        direction="row"
        padding="0px 0px 0px 0px"
        level="3"
        children="Manufacturer"
        {...getOverrideProps(overrides, "Heading31492710")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="155px"
        left="787px"
        direction="row"
        padding="0px 0px 0px 0px"
        level="3"
        children="MRP"
        {...getOverrideProps(overrides, "Heading31492712")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="155px"
        left="976px"
        direction="row"
        padding="0px 0px 0px 0px"
        level="3"
        children="Description"
        {...getOverrideProps(overrides, "Heading31492714")}
      ></Heading>
    </View>
  );
}
