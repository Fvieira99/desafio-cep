import { Request, Response } from 'express';
import cepService from '../services/cepService.js';

async function getAddressByCEP(req: Request, res: Response) {
  const cep: string = req.body.cep;

  console.log(cep);

  const address = await cepService.getAddressByCEP(cep);

  console.log(address);

  res.status(200).send(address);
}

const cepController = {
  getAddressByCEP,
};

export default cepController;
