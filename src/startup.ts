import express, { Request, Response } from 'express';

const app = express();

app.use(
  '/',
  async (_: Request, res: Response): Promise<Response> =>
    res.json({ message: "that's all ok!" }),
);

app.listen(3333, () => {
  console.log(`listenning 3333.`);
});
