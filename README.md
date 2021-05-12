# esm-migration-utils

## install

```
npm install esm-migration-utils
```

## usage

```js
import esmMigrationUtils from "esm-migration-utils";

const { __filename, __dirname, require } = esmMigrationUtils(import.meta);
```
