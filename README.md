
# iCara Dictionary API

RESTful API for iCara dictionary feature




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`STREAM_SERVER`

`DATAABSE_URL`


## Installation

1. Clone this repository

```bash
git clone https://github.com/yosmisyael/icara-dictionary-api.git
```
2. Install project dependencies
```bash
npm install
```
3. Prepare the `.env` file using the `.env.example` and adjust its config.
```bash
cp .env.example .env
```
3. [Bash/Shell Env Only] Run database seeder. (Note: If you are not using Bash/Shell environment, you should rename the `./prisma/seed` into `./prisma/seed.ts` and run it manually. Then, you should remove the file extension again.)
```bash
npm run seed
```
4. Build the app and run it
```bash
npm run build
npm run start
```
or if you prefer development mode, run:
```bash
npm run start:dev
```

## API Reference

#### Get all dictionary entries

```http
  GET /api/dictionary
```

#### Get dictionary entry by id

```http
  GET /api/dictionary/${id}
```

## Tech Stack

**Server:** Node, NestJS, Fastify, Postgresql


## License

[Apache 2.0](choosealicense.com/licenses/apache-2.0/)

