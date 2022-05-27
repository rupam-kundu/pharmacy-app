/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function TableCellLabel(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="273px"
      height="106px"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TableCellLabel")}
    >
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="33px"
        bottom="33px"
        left="95px"
        right="94px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Label"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
    </View>
  );
}
