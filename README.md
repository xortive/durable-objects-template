# 👷 `worker-template` Hello World

A template for kick starting a Cloudflare Workers project using durable objects, modules, rollup, and wrangler.

* Worker code is in src/. The durable object class is in counter.mjs, and the eyeball script is in index.mjs. The eyeball script is also the main module, and since the runtime only looks at the main module for exported classes, it must re-export the counter class.
* The compiled main module is set using the package.json "module" field. This should be set to the compiled bundle, in this case dist/index.mjs