import { Request, Response } from 'express';
import cepService from '../services/cepService.js';

async function getAddressByCEP(req: Request, res: Response) {
  const cep: string = req.body.cep;

  const address = await cepService.getAddressByCEP(cep);

  res.status(200).send('Acessando o controller');
}

const cepController = {
  getAddressByCEP,
};

export default cepController;
