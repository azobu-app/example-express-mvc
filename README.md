# Example Express

- Production: https://example-express.azobu.app
- Heroku: https://azobu-example-express.herokuapp.com

## API Documentation

### Index

| HTTP  | Endpoint | Description              |
| ----- | -------- | ------------------------ |
| `GET` | `/`      | Show welcome message     |
| `GET` | `/hello` | Show hello world message |

### Users

| HTTP     | Endpoint     | Description           |
| -------- | ------------ | --------------------- |
| `GET`    | `/users`     | Get all users         |
| `GET`    | `/users/:id` | Get one user by id    |
| `POST`   | `/users`     | Add new user          |
| `DELETE` | `/users`     | Delete all users      |
| `DELETE` | `/users/:id` | Delete one user by id |
| `PUT`    | `/users/:id` | Update one user by id |
| `PATCH`  | `/users/:id` | Patch one user by id  |

## Usage

### Installation

```sh
yarn
```

### Development

```sh
yarn dev
```

### Production

```sh
yarn start
```

## License

MIT
