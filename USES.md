## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/open-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd open-api
   ```
3. Install the dependencies:
   ```bash
   npm install or bun install
   ```

## Usage

To start the project, use the following command:

```bash
npm start or bun start
```

This will start the server and you can access the API at `http://localhost:3002`.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.

2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of your changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Create a pull request.

## API Routes

For detailed API documentation, including all routes, queries, and params, please refer to the [API_README.md](./API_README.md) file.

### v0.1 Routes

- `GET /v0.1/random_user/:any/:query`
- `GET /v0.1/random_user`
- `GET /v0.1/random_user/big`
- `GET /v0.1/random_user/big0`
- `GET /v0.1/random_image`
- `GET /v0.1/random_image/auto`
- `GET /v0.1/random_image/img/:query`
- `GET /v0.1/random_image/t/:avatarStyle/:query/:imageType`

### v1.0 Routes

- `GET /v1.0/contry/:contryCode`
- `GET /v1.0/contry/:contryCode/:type`
- `GET /v1.0/contry`
- `GET /v1.0/contry/random`
- `GET /v1.0/address/:contryCode`
- `GET /v1.0/address`
- `GET /v1.0/address/random`
- `GET /v1.0/user`
- `GET /v1.0/user/:contryCode`
- `GET /v1.0/saavnCDN`
- `GET /v1.0/github/user`
- `GET /v1.0/github/user/random`
- `GET /v1.0/github/avatar/random`
- `GET /v1.0/gravatar`
- `POST /v1.0/crypt/c`
- `POST /v1.0/crypt/d`
- `GET /v1.0/crypt/c`
- `GET /v1.0/crypt/d`

### Home Page Route

- `GET /`

---

### Query, Params, etc.

### Random Image Routes

- `GET /v0.1/random_image`

  - Query: None
  - Params: None
  - Example: `GET /v0.1/random_image`

---

- `GET /v0.1/random_image/auto`

  - Query: None
  - Params: None
  - Example: `GET /v0.1/random_image/auto`

---

- `GET /v0.1/random_image/img/:query`

  - Query: None
  - Params: `query` (string) - Image type (e.g., png, jpg, jpeg, svg, auto)
  - Example: `GET /v0.1/random_image/img/png`

---

- `GET /v0.1/random_image/t/:avatarStyle/:query/:imageType`
  - Query: None
  - Params:
    - `avatarStyle` (string) - Avatar style (e.g., Adventurer, Avataaars, Big Ears, etc.)
    - `query` (string) - Image type (e.g., png, jpg, jpeg, svg, auto)
    - `imageType` (string) - Image type (e.g., png, jpg, jpeg, svg, auto)
  - Example: `GET /v0.1/random_image/t/Adventurer/png/svg`

---

### Random User Routes

- `GET /v0.1/random_user`

  - Query: None
  - Params: None
  - Example: `GET /v0.1/random_user`

---

- `GET /v0.1/random_user/big`

  - Query: None
  - Params: None
  - Example: `GET /v0.1/random_user/big`

---

- `GET /v0.1/random_user/big0`

  - Query: None
  - Params: None
  - Example: `GET /v0.1/random_user/big0`

---

- `GET /v0.1/random_user/:any/:query`
  - Query: None
  - Params:
    - `any` (string) - Any string
    - `query` (string) - Any string
  - Example: `GET /v0.1/random_user/any/query`

---

### Address Routes

- `GET /v1.0/address/:contryCode`

  - Query: None
  - Params: `contryCode` (string) - Country code (e.g., AU, BR, CA, CH, DE, DK, ES, GB, IN, US)
  - Example: `GET /v1.0/address/AU`

---

- `GET /v1.0/address`

  - Query: None
  - Params: None
  - Example: `GET /v1.0/address`

---

- `GET /v1.0/address/random`

  - Query: None
  - Params: None
  - Example: `GET /v1.0/address/random`

---

### Country Routes

- `GET /v1.0/contry/:contryCode`

  - Query: None
  - Params: `contryCode` (string) - Country code (e.g., AU, BR, CA, CH, DE, DK, ES, GB, IN, US)
  - Example: `GET /v1.0/contry/AU`

---

- `GET /v1.0/contry/:contryCode/:type`

  - Query: None
  - Params:
    - `contryCode` (string) - Country code (e.g., AU, BR, CA, CH, DE, DK, ES, GB, IN, US)
    - `type` (string) - Type of information (e.g., maleFirst, femaleFirst, lastName, citys, streets, states)
  - Example: `GET /v1.0/contry/AU/maleFirst`

---

- `GET /v1.0/contry`

  - Query: None
  - Params: None
  - Example: `GET /v1.0/contry`

---

- `GET /v1.0/contry/random`
  - Query: None
  - Params: None
  - Example: `GET /v1.0/contry/random`

---

### User Routes

- `GET /v1.0/user`

  - Query: None
  - Params: None
  - Example: `GET /v1.0/user`

---

- `GET /v1.0/user/:contryCode`
  - Query: None
  - Params: `contryCode` (string) - Country code (e.g., AU, BR, CA, CH, DE, DK, ES, GB, IN, US)
  - Example: `GET /v1.0/user/AU`

---

### Saavn CDN Routes

- `GET /v1.0/saavnCDN`
  - Query: None
  - Params: None
  - Example: `GET /v1.0/saavnCDN`

---

### GitHub Routes

- `GET /v1.0/github/user`

  - Query: None
  - Params: None
  - Example: `GET /v1.0/github/user`

---

- `GET /v1.0/github/user/random`

  - Query: None
  - Params: None
  - Example: `GET /v1.0/github/user/random`

---

- `GET /v1.0/github/avatar/random`
  - Query: None
  - Params: None
  - Example: `GET /v1.0/github/avatar/random`

---

### Gravatar Routes

- `GET /v1.0/gravatar`
  - Query: None
  - Params: None
  - Example: `GET /v1.0/gravatar`

---

### Crypt Routes

- `POST /v1.0/crypt/c`

  - Query: None
  - Params: None
  - Example: `POST /v1.0/crypt/c`

---

- `POST /v1.0/crypt/d`

  - Query: None
  - Params: None
  - Example: `POST /v1.0/crypt/d`

---

- `GET /v1.0/crypt/c`

  - Query: None
  - Params: None
  - Example: `GET /v1.0/crypt/c`

---

- `GET /v1.0/crypt/d`
  - Query: None
  - Params: None
  - Example: `GET /v1.0/crypt/d`

---
