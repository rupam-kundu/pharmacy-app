/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading } from "@aws-amplify/ui-react";
export default function MedicinesListHeading(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="30px 507px 30px 507px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MedicinesListHeading")}
    >
      <Heading
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        level="2"
        children="Medicines’ list"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
    </Flex>
  );
}
