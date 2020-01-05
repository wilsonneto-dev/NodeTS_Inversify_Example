import {
  controller,
  httpGet,
  response,
  interfaces,
  BaseHttpController,
} from 'inversify-express-utils';

import { Response } from 'express';

@controller('/')
export class HomeController extends BaseHttpController {
  @httpGet('/')
  public get() {
    return this.notFound();
    ({ message: "that's all OK 1." });
    // res.json({ message: "that's all OK." });
  }
}
