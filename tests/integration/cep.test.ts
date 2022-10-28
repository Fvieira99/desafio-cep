import supertest from 'supertest';

import app from '../../src/app.js';

const agent = supertest(app);

describe('CEP integration test suit', () => {
  it('Should return address given existing CEP', async () => {
    const CEP = '47645-970';

    const { statusCode, body } = await agent.post('/cep').send({ cep: CEP });

    expect(body.code).toBe(CEP);
    expect(body.state).toBe('BA');
    expect(statusCode).toBe(200);
  });

  it('Should return 422 statusCode given incorret CEP format', async () => {
    const wrongCepFormat = '111-111';

    const { statusCode } = await agent.post('/cep').send({ cep: wrongCepFormat });

    expect(statusCode).toBe(422);
  });

  it('Should return 404 statusCode given nonexisting CEP', async () => {
    const nonexistingCep = '11111-111';

    const { statusCode } = await agent.post('/cep').send({ cep: nonexistingCep });

    expect(statusCode).toBe(404);
  });
});
