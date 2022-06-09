/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Medicines } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import MedicinesListItem from "./MedicinesListItem";
import { Collection } from "@aws-amplify/ui-react";
export default function MedicinesListItemCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Medicines,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "MedicinesListItemCollection")}
    >
      {(item, index) => (
        <MedicinesListItem
          medicines={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></MedicinesListItem>
      )}
    </Collection>
  );
}
