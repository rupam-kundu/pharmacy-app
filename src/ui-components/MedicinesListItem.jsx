/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function MedicinesListItem(props) {
  const { medicines, overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="142px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MedicinesListItem")}
    >
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="112px"
        height="46px"
        position="absolute"
        top="54px"
        left="89px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="#"
        {...getOverrideProps(overrides, "#")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="124px"
        height="42px"
        position="absolute"
        top="52px"
        left="215px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={medicines?.name}
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="262px"
        height="48px"
        position="absolute"
        top="50px"
        left="469px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={medicines?.manufacturer}
        {...getOverrideProps(overrides, "Manufacturer")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="128px"
        height="44px"
        position="absolute"
        top="50px"
        left="795px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={medicines?.mrp}
        {...getOverrideProps(overrides, "MRP")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="260px"
        height="40px"
        position="absolute"
        top="44px"
        left="987px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={medicines?.description}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
    </View>
  );
}
