import { type SchemaTypeDefinition } from 'sanity';

import product from './product';
import banner from './banner';
import service from './service';
import review from './review';
import landingPage from './landingPage';
import about from './about';
import transaction from './transaction';
import user from './admin';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, service, product, banner, review, landingPage, transaction, user],
}
