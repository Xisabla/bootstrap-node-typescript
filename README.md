# bootstrap-node-typescript

This repository provides a bootstrap setup for a Node.js project using TypeScript. It includes a variety of scripts and configurations to streamline development, testing, and deployment.

## Table of Contents

- [bootstrap-node-typescript](#bootstrap-node-typescript)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites 📋](#prerequisites-)
  - [Getting Started 🏁](#getting-started-)
  - [Available Scripts 📜](#available-scripts-)
  - [Docker 🐳](#docker-)
  - [CI/CD ⚙️](#cicd-️)
  - [Changelog 📝](#changelog-)
  - [Contributing 🤝](#contributing-)
  - [License 📄](#license-)

## Prerequisites 📋

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Getting Started 🏁

Follow these steps to get started with the repository:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Xisabla/bootstrap-node-typescript.git
    cd bootstrap-node-typescript
    ```

2. **Reset the history (optional):**

    If you want to start with a fresh commit history, you can reset the history:

    ```sh
    rm -rf .git
    git init
    git add .
    git commit -m "Initial commit"
    ```

3. **Install dependencies:**

    Make sure you have [Yarn](https://yarnpkg.com/) installed, then run:

    ```sh
    yarn install
    ```

4. **Run the application:**

    To start the application, run:

    ```sh
    yarn start
    ```

## Available Scripts 📜

Here are the available scripts you can run using `yarn`:

- `yarn build`: Generates the version file and compiles the TypeScript code.
- `yarn start`: Runs the application using `tsx`.
- `yarn start:dev`: Generates the version file and runs the application in watch mode.
- `yarn start:debug`: Runs the application in watch mode with the inspector enabled.
- `yarn start:prod`: Runs the compiled application using Node.js.
- `yarn clean`: Removes the `dist` directory.
- `yarn lint`: Runs ESLint on the `src` directory and fixes issues.
- `yarn format`: Formats the code in the `src` directory using Prettier.
- `yarn test`: Runs the test suite using Jest.
- `yarn test:watch`: Runs the test suite in watch mode.
- `yarn test:cov`: Runs the test suite and generates a coverage report.
- `yarn test:debug`: Runs the test suite with the inspector enabled.
- `yarn generate-version`: Generates the `version.json` file.
- `yarn update-version`: Updates the version in the `package.json` file.
- `yarn changelog`: Generates the changelog using `auto-changelog`.

## Docker 🐳

This repository includes a `Dockerfile` to build a Docker image for the application. You can build the image using the following command:

```sh
docker build -t bootstrap-node-typescript .
```

To run the application in a Docker container, use the following command:

```sh
docker run -p 3000:3000 bootstrap-node-typescript
```

## CI/CD ⚙️

The project contains multiple GitHub Actions workflows to automate the CI/CD process. The workflows are defined in the `.github/workflows` directory:

- `test-and-build.yml`: Runs the test suite and builds the application for every pull requests on the `main` and `dev` branch.
- `release.yml`: Bumps the version and generates the changelog for every pull request merged into the `main` branch.

## Changelog 📝

The changelog is available in the [CHANGELOG.md](CHANGELOG.md) file. The changelog is generated using [auto-changelog](https://www.npmjs.com/package/auto-changelog).

## Contributing 🤝

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your fork.
5. Open a pull request to the main repository.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
