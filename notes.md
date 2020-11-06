# Server

1. Start a node project using `npm init -y`
2. Ensure you are on correct/latest version of node
3. Get TypeScript and node to behave well together `yarn add -D @types/node typescript`
4. Get a tsconfig `npx tsconfig.json`, select `node`.
5. Get a `src/index.ts` set up and just whack a console.log in there
6. Set up some scripts - the watch script will compile typescript to JavaScript and then in a second terminal, nodemon will listen for changes and re-run javascript in the dist.

## Set up orm

1. this is what will help us interact with our database
2. `yarn add @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations` for the orm
3. depending on the db `yarn add @mikro-orm/postgresql pg`

NOTE - ensure you have the database installed. This can be a pain but I've bookmarked some good resources to help.

4. Set up a MikroOrm instance, your first entity and get make sure you can create a table for that entity by doing a migration

## Set up server

this app will use express and graphql for the server
