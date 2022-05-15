import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SKUsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MedicinesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SKUs {
  readonly id: string;
  readonly sku?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SKUs, SKUsMetaData>);
  static copyOf(source: SKUs, mutator: (draft: MutableModel<SKUs, SKUsMetaData>) => MutableModel<SKUs, SKUsMetaData> | void): SKUs;
}

export declare class Medicines {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly manufacturer?: string | null;
  readonly mrp?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Medicines, MedicinesMetaData>);
  static copyOf(source: Medicines, mutator: (draft: MutableModel<Medicines, MedicinesMetaData>) => MutableModel<Medicines, MedicinesMetaData> | void): Medicines;
}