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
      gap="12.699999809265137px"
      direction="column"
      width="1200px"
      height="127px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="38.099998474121094px 643.8900146484375px 38.099998474121094px 643.8900146484375px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MedicinesListHeading")}
    >
      <Heading
        display="flex"
        gap="0"
        direction="row"
        width="272px"
        height="66px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        level="2"
        children="Product List"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
    </Flex>
  );
}
