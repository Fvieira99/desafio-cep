import Joi from 'joi';

const cepPattern = /^[0-9]{5}-?[0-9]{3}$/;

interface CepData {
  cep: string;
}

const cepSchema = Joi.object<CepData>({
  cep: Joi.string().pattern(cepPattern).min(8).required(),
});

export default cepSchema;
