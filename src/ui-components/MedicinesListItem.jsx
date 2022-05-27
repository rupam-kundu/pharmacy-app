/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function MedicinesListItem(props) {
  const { medicines, overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="106px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MedicinesListItem")}
    >
      <View
        width="245px"
        height="106px"
        position="absolute"
        top="0px"
        left="0px"
        overflow="hidden"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TableCellLabel31902743")}
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
          left="81px"
          right="80px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.name}
          {...getOverrideProps(overrides, "Label31902744")}
        ></Text>
      </View>
      <View
        width="245px"
        height="106px"
        position="absolute"
        top="0px"
        left="245px"
        overflow="hidden"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TableCellLabel31902741")}
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
          left="81px"
          right="80px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.manufacturer}
          {...getOverrideProps(overrides, "Label31902742")}
        ></Text>
      </View>
      <View
        width="245px"
        height="106px"
        position="absolute"
        top="0px"
        left="490px"
        overflow="hidden"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TableCellLabel31902739")}
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
          left="81px"
          right="80px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.mrp}
          {...getOverrideProps(overrides, "Label31902740")}
        ></Text>
      </View>
      <View
        width="245px"
        height="106px"
        position="absolute"
        top="0px"
        left="735px"
        overflow="hidden"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TableCellLabel31902737")}
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
          left="81px"
          right="80px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={medicines?.description}
          {...getOverrideProps(overrides, "Label31902738")}
        ></Text>
      </View>
      <View
        width="150px"
        height="106px"
        position="absolute"
        top="0px"
        left="980px"
        overflow="hidden"
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
          left="calc(50% - 35.5px - 1px)"
          direction="row"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="large"
          isDisabled={false}
          variation="default"
          children="Edit"
          {...getOverrideProps(overrides, "Button31902733")}
        ></Button>
      </View>
      <View
        width="150px"
        height="106px"
        position="absolute"
        top="0px"
        left="1130px"
        overflow="hidden"
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
          size="large"
          isDisabled={false}
          variation="default"
          children="Delete"
          {...getOverrideProps(overrides, "Button31902728")}
        ></Button>
      </View>
    </View>
  );
}
