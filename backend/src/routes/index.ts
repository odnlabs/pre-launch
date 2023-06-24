import { Group, Route } from 'express-custom';

import * as notify from './notify';

const route = new Route({
  name: 'Notify',
  description: 'The notify route.',
  path: '/notify',
})
  .addEndpoint(notify.addEmail)
  .addEndpoint(notify.getCount);

export const websiteGroup = new Group({
  name: 'Website',
  description: 'The website group.',
  path: '/',
}).addRoute(route);
