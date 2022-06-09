/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
export default function MedicinesListItem(props) {
  const { medicines, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1100px"
      height="450px"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MedicinesListItem")}
    >
      <View
        width="210px"
        height="450px"
        grow="1"
        basis="210px"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TableCellLabel31902743")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="172px"
          height="466px"
          position="absolute"
          top="calc(50% - 233px - 0px)"
          left="calc(50% - 86px - 0px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.name}
          {...getOverrideProps(overrides, "Label31902744")}
        ></Text>
      </View>
      <View
        width="210px"
        height="450px"
        grow="1"
        basis="210px"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TableCellLabel31902741")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="21px"
          bottom="19px"
          left="15px"
          right="15px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.manufacturer}
          {...getOverrideProps(overrides, "Label31902742")}
        ></Text>
      </View>
      <View
        width="210px"
        height="450px"
        grow="1"
        basis="210px"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TableCellLabel31902739")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="21px"
          bottom="15px"
          left="19px"
          right="15px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.mrp}
          {...getOverrideProps(overrides, "Label31902740")}
        ></Text>
      </View>
      <View
        width="210px"
        height="450px"
        grow="1"
        basis="210px"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TableCellLabel31902737")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="19px"
          bottom="19px"
          left="19px"
          right="17px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.description}
          {...getOverrideProps(overrides, "Label31902738")}
        ></Text>
      </View>
      <View
        width="130px"
        height="450px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TableCellButton31902732")}
      >
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="calc(50% - 23px - 1px)"
          left="calc(50% - 35.5px - 1.5px)"
          direction="row"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(255,255,255,1)"
          size="large"
          isDisabled={false}
          variation="default"
          children="Edit"
          {...getOverrideProps(overrides, "Button31902733")}
        ></Button>
      </View>
      <View
        width="130px"
        height="450px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TableCellButton31902727")}
      >
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="calc(50% - 23px - 1px)"
          left="calc(50% - 48px - 1px)"
          direction="row"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(255,255,255,1)"
          size="large"
          isDisabled={false}
          variation="default"
          children="Delete"
          {...getOverrideProps(overrides, "Button31902728")}
        ></Button>
      </View>
    </Flex>
  );
}
