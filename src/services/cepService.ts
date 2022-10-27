import dotenv from 'dotenv';
import axios from 'axios';

import notFoundError from '../errors/notFoundError.js';
import badRequestError from '../errors/badRequestError.js';

dotenv.config();

const apiURL = process.env.API;

async function getAddressByCEP(cep: string) {
  const { data } = await axios.get(`${apiURL}${cep}`);

  if (data.status === 404) throw notFoundError(data.message);

  if (data.status === 400) throw badRequestError(data.message);

  delete data.status && delete data.ok;

  return data;
}

const cepService = {
  getAddressByCEP,
};

export default cepService;
