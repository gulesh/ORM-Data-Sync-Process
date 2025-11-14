import { incomingSourceDB, outgoingSourceDB } from "./data-source"
import {initial_full_load} from "./migration/initial_full_load";


async function initializeDatabases() {
    console.log("Initializing databases!");
    await incomingSourceDB.initialize();
    await outgoingSourceDB.initialize();
    console.log("Database initialized!")
}

initializeDatabases().then(r =>
{
    initial_full_load().then( () => {console.log('initial load successful...!!!')});
}).catch(error => console.log(error));



