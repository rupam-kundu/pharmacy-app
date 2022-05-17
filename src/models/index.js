// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ingredients, SKUs, Medicines, MedicinesSKUs } = initSchema(schema);

export {
  Ingredients,
  SKUs,
  Medicines,
  MedicinesSKUs
};