// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SKUs, Medicines, MedicinesSKUs } = initSchema(schema);

export {
  SKUs,
  Medicines,
  MedicinesSKUs
};