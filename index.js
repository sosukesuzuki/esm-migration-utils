import url from "node:url";
import path from "node:path";
import { createRequire } from "node:module";

export default function (importMeta) {
  return {
    get __filename() {
      return url.fileURLToPath(importMeta.url);
    },
    get __dirname() {
      return path.dirname(url.fileURLToPath(importMeta.url));
    },
    get require() {
      return createRequire(importMeta.url);
    },
  };
}
