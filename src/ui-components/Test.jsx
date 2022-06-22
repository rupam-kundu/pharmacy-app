/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Test(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: "https://www.freecodecamp.org/",
  });
  return (
    <View
      width="628.49px"
      height="310px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Test")}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="76px"
        left="280px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Click me"
        {...getOverrideProps(overrides, "Click me")}
      ></Text>
      <Flex
        gap="0"
        position="absolute"
        top="134px"
        left="240px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Default Button"
          {...getOverrideProps(overrides, "label")}
        ></Text>
      </Flex>
    </View>
  );
}
