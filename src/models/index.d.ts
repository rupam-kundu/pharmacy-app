import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type IngredientsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SKUsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MedicinesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MedicinesSKUsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Ingredients {
  readonly id: string;
  readonly ingredient?: string | null;
  readonly medicinesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ingredients, IngredientsMetaData>);
  static copyOf(source: Ingredients, mutator: (draft: MutableModel<Ingredients, IngredientsMetaData>) => MutableModel<Ingredients, IngredientsMetaData> | void): Ingredients;
}

export declare class SKUs {
  readonly id: string;
  readonly sku?: string | null;
  readonly mediciness?: (MedicinesSKUs | null)[] | null;
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
  readonly SKuses?: (MedicinesSKUs | null)[] | null;
  readonly Ingredients?: (Ingredients | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Medicines, MedicinesMetaData>);
  static copyOf(source: Medicines, mutator: (draft: MutableModel<Medicines, MedicinesMetaData>) => MutableModel<Medicines, MedicinesMetaData> | void): Medicines;
}

export declare class MedicinesSKUs {
  readonly id: string;
  readonly skUs: SKUs;
  readonly medicines: Medicines;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MedicinesSKUs, MedicinesSKUsMetaData>);
  static copyOf(source: MedicinesSKUs, mutator: (draft: MutableModel<MedicinesSKUs, MedicinesSKUsMetaData>) => MutableModel<MedicinesSKUs, MedicinesSKUsMetaData> | void): MedicinesSKUs;
}