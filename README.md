<p align="center">
    <h1 align="center">Busca CEP</h1>
</p>

<div align="center">
  <h2>Stack Used</h2>
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
</div>

<br/>
<br/>

## About it

Busca CEP is an API that allows you to find addresses by giving a valid CEP code.

If CEP exists the API will return you the address information like this:

```json
{
  "code": "47645-970",
  "state": "BA",
  "city": "Açudina",
  "district": "Açudina",
  "address": "Praça do Mercado, s/n",
  "statusText": "ok"
}
```

<br/>

## How to use it

<hr/>

### Make a request to the following endpoint:

```http
POST /cep
```

| Body  | Type     | Description                       |
| :---- | :------- | :-------------------------------- |
| `cep` | `string` | **Unique**/**Required**. CEP code |

<br/>

## How to run locally

<hr/>

<br/>

### Clone the repository:

```bash
git clone https://github.com/Fvieira99/desafio-cep-back.git
```

<br/>

### Go to the project directory:

```bash
cd desafio-cep-back/
```

<br/>

### Install Dependencies

```bash
npm install
```

<br/>

### Create env file following the example:

```
Follow the env.example file.
```

<br/>

### Run it

```bash
npm run start or npm run dev
```
