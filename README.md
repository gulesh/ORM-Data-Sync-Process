# Project Setup

1. Start by cloning the Git repository.
2. Run `npm i` command inside the root directory.
3. Setup database settings inside `data-source.ts` file:
    - USERNAME = root
    - PASSWORD = <password>
    - HOST = localhost
    - PORT = <PORT>
    - DATABASE = <database-name>
    - OUTGOING_DATABASE = <second-database>
4. Run `npm start` command.

# Using the CLI:

1. Basic set up steps...TBD 
2. run this command in terminal- npm run build
3. Next, make cli.js inside build executable using: chmod +x build/cli.js
4. register cli globally, using npm link
5. check if the registration was successful with : which orm-cli
6. type. orm-cli and hit enter to run the cli
7. Now, you have access to following commands:
   1. init
   2. full-load
   3. incremental
   4. validate
   5. exit

