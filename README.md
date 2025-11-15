# Project Setup

1. Start by cloning the Git repository.
2. Run `npm i` command inside the root directory(ORM-Data-Sync-Process).
3. add .env file with following details. Put .env file in the root directory
    - USERNAME = root
    - PASSWORD = <password>
    - HOST = localhost
    - PORT = <PORT>
    - DATABASE = <database-name>
    - OUTGOING_DATABASE = <second-database>
4. Run `npm start` command.

# Using the CLI:

1. Run `npm i` command the root directory.
2. Run this command in terminal: `npm run build`
3. Next, make `cli.js` inside `build` executable using:  
   `chmod +x build/cli.js`
4. Register CLI globally using:  
   `npm link`
5. Check if the registration was successful with:  
   `which orm-cli`
6. Type `orm-cli` and hit enter to run the CLI
7. Now, you have access to the following commands:
    1. `init`
    2. `full-load`
    3. `incremental`
    4. `validate`
    5. `exit`

