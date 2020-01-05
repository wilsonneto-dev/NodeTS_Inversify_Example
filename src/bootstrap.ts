import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';

import './ioc/loader';
import { Container } from 'inversify';

let container = new Container();
let server = new InversifyExpressServer(container);

server.setConfig(() => {
  // app.use()...
});

let app = server.build();
app.listen(3000, () => {
  console.log('listening on 3000');
});
