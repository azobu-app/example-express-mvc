# Example Express MVC

- Production: https://example-express-mvc.azobu.app
- Heroku: https://azobu-example-express-mvc.herokuapp.com

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
| `GET`    | `/users/:id` | Get user by id        |
| `POST`   | `/users`     | Add new user          |
| `DELETE` | `/users`     | Delete all users      |
| `DELETE` | `/users/:id` | Delete one user by id |
| `PUT`    | `/users/:id` | Update one user by id |

## Data Schema

### User

```json
{
  "id": 1,
  "name": "M Haidar Hanif",
  "username": "mhaidarh",
  "email": "haidar@haidar.com"
}
```

### Todo

```json
{
  "id": 1,
  "text": "Read a story book",
  "isCompleted": true
}
```

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
