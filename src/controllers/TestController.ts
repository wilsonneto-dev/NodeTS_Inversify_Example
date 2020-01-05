import {
  controller,
  httpGet,
  response,
  interfaces,
} from 'inversify-express-utils';

import { Response } from 'express';

@controller('/test')
export class TestController {
  @httpGet('/ok')
  public get(@response() res: Response) {
    res.json({ message: 'thats my new controller.' });
  }
}
