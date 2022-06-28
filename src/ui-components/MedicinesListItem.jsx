/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Medicines } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
export default function MedicinesListItem(props) {
  const { medicines, overrides, ...rest } = props;
  const buttonThreeTwoNineFiveTwoSevenSevenTwoOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  const buttonThreeTwoNineFiveTwoSevenSevenSixOnClick =
    useDataStoreDeleteAction({
      id: medicines?.id,
      model: Medicines,
      schema: schema,
    });
  return (
    <Flex
      gap="0"
      direction="row"
      width="1200px"
      height="180px"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MedicinesListItem")}
    >
      <View
        width="188px"
        height="180px"
        grow="1"
        basis="188px"
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
          width="162px"
          height="426px"
          position="absolute"
          top="calc(50% - 213px - 1px)"
          left="calc(50% - 81px - 0px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.name}
          {...getOverrideProps(overrides, "Label31902744")}
        ></Text>
      </View>
      <View
        width="188px"
        height="180px"
        grow="1"
        basis="188px"
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
          width="158px"
          height="260px"
          position="absolute"
          top="calc(50% - 130px - -1px)"
          left="calc(50% - 79px - 0px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.manufacturer}
          {...getOverrideProps(overrides, "Label31902742")}
        ></Text>
      </View>
      <View
        width="188px"
        height="180px"
        grow="1"
        basis="188px"
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
          width="154px"
          height="264px"
          position="absolute"
          top="calc(50% - 132px - -3px)"
          left="calc(50% - 77px - -2px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.mrp}
          {...getOverrideProps(overrides, "Label31902740")}
        ></Text>
      </View>
      <View
        width="188px"
        height="180px"
        grow="1"
        basis="188px"
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
          width="152px"
          height="262px"
          position="absolute"
          top="calc(50% - 131px - 0px)"
          left="calc(50% - 76px - -1px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.sku}
          {...getOverrideProps(overrides, "Label31902738")}
        ></Text>
      </View>
      <View
        width="188px"
        height="180px"
        grow="1"
        basis="188px"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TableCellLabel33132758")}
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
          width="152px"
          height="262px"
          position="absolute"
          top="calc(50% - 131px - 0px)"
          left="calc(50% - 76px - -1px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.description}
          {...getOverrideProps(overrides, "Label33132759")}
        ></Text>
      </View>
      <View
        width="130px"
        height="180px"
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
          top="calc(50% - 20px - 1px)"
          left="calc(50% - 31.5px - 1.5px)"
          direction="row"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Edit"
          onClick={() => {
            buttonThreeTwoNineFiveTwoSevenSevenTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Button32952772")}
        ></Button>
      </View>
      <View
        width="130px"
        height="180px"
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
          top="calc(50% - 20px - 1px)"
          left="calc(50% - 41.5px - 1.5px)"
          direction="row"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Delete"
          onClick={() => {
            buttonThreeTwoNineFiveTwoSevenSevenSixOnClick();
          }}
          {...getOverrideProps(overrides, "Button32952776")}
        ></Button>
      </View>
    </Flex>
  );
}
