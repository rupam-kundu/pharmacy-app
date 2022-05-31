import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MedicinesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Medicines {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly manufacturer?: string | null;
  readonly mrp?: number | null;
  readonly sku?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Medicines, MedicinesMetaData>);
  static copyOf(source: Medicines, mutator: (draft: MutableModel<Medicines, MedicinesMetaData>) => MutableModel<Medicines, MedicinesMetaData> | void): Medicines;
}