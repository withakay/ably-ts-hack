
### Note: This project is just for testing, assume it is broken or incomplete.

Testing Ably's TypeScript types.

This project has a modified TypeScript Type Definition that exposes the JS libs internals to make it possible to instance classes such as `Message()` from TypeScript. 

To run:

- `npm install -g typescript`
- `npm install`
- `rm node_modules/ably/browser/static/ably.d.ts && rm node_modules/ably/ably.d.ts` 
- `tsc && node index.js`
