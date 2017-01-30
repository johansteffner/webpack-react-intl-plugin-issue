# Webpack react-intl plugin issue

## Instructions

1. Link `my-package`.

  ```sh
  cd my-package
  npm link
  ```

1. Install `my-project` dependencies.

  ```sh
  cd ../my-project
  npm install
  ```

1. Link `my-package` in `my-project`.

  ```sh
  npm link my-package
  ```

1. Build `my-project`

  ```sh
  webpack --config webpack.config.js
  ```
