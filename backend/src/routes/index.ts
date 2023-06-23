import { Group, Route } from 'express-custom';

import { addEmail } from './email';

const route = new Route({
  name: 'Email',
  description: 'The email route.',
  path: '/email',
}).addEndpoint(addEmail);

export const websiteGroup = new Group({
  name: 'Website',
  description: 'The website group.',
  path: '/',
}).addRoute(route);
