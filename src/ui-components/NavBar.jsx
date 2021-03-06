/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const medicineslistOnClick = useNavigateAction({
    type: "url",
    url: "http://localhost:3000/",
  });
  const addamedicineOnClick = useNavigateAction({ type: "url", url: "" });
  const signoutOnClick = useAuthSignOutAction({ global: true });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1280px"
      height="100px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(59,47,79,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="40px"
        direction="row"
        width="598px"
        alignItems="center"
        grow="1"
        basis="598px"
        height="24px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.17px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Product list"
          onClick={() => {
            medicineslistOnClick();
          }}
          {...getOverrideProps(overrides, "Medicines list")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.17px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add a product"
          onClick={() => {
            addamedicineOnClick();
          }}
          {...getOverrideProps(overrides, "Add a medicine")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="598px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="598px"
        height="39px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="37.5px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign out"
          onClick={() => {
            signoutOnClick();
          }}
          {...getOverrideProps(overrides, "Sign out")}
        ></Text>
      </Flex>
    </Flex>
  );
}
