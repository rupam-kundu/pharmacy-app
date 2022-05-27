/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, View } from "@aws-amplify/ui-react";
export default function TableCellButton(props) {
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
      {...getOverrideProps(overrides, "TableCellButton")}
    >
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="calc(50% - 23px - 1px)"
        left="calc(50% - 87px - 0.5px)"
        direction="row"
        justifyContent="center"
        alignItems="center"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="large"
        isDisabled={false}
        variation="default"
        children="Default Button"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
