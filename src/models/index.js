// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Medicines } = initSchema(schema);

export {
  Medicines
};