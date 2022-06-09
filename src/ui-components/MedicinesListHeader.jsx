/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function MedicinesListHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1100px"
      height="100px"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "MedicinesListHeader")}
    >
      <View
        width="210px"
        height="100px"
        grow="1"
        basis="210px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        border="1px SOLID rgba(255,255,255,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "TableCellLabel31902715")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="25px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="38px"
          bottom="37px"
          left="83.29px"
          right="60.71px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Name"
          {...getOverrideProps(overrides, "Name")}
        ></Text>
      </View>
      <View
        width="210px"
        height="100px"
        grow="1"
        basis="210px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        border="1px SOLID rgba(255,255,255,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "TableCellLabel31902713")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="25px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="37px"
          bottom="38px"
          left="35px"
          right="35px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Manufacturer"
          {...getOverrideProps(overrides, "Manufacturer")}
        ></Text>
      </View>
      <View
        width="210px"
        height="100px"
        grow="1"
        basis="210px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        border="1px SOLID rgba(255,255,255,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "TableCellLabel31902711")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="25px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="38px"
          bottom="37px"
          left="78px"
          right="78px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="MRP"
          {...getOverrideProps(overrides, "MRP")}
        ></Text>
      </View>
      <View
        width="210px"
        height="100px"
        grow="1"
        basis="210px"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(255,255,255,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "TableCellLabel31882709")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="25px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="38px"
          bottom="37px"
          left="45px"
          right="45px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Description"
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </View>
      <View
        width="130px"
        height="100px"
        shrink="0"
        overflow="hidden"
        position="relative"
        border="1px SOLID rgba(255,255,255,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Blank31902717")}
      ></View>
      <View
        width="130px"
        height="100px"
        shrink="0"
        overflow="hidden"
        position="relative"
        border="1px SOLID rgba(255,255,255,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Blank31902722")}
      ></View>
    </Flex>
  );
}
