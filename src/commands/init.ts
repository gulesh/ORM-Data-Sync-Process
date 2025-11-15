import {incomingSourceDB, outgoingSourceDB} from "../data-source";

export const initCommand = async (): Promise<boolean> => {
    try {
        await initializeDatabases(); // Wait for completion
        return true; // Success
    } catch (e) {
        console.error('Error initializing databases:', e);
        return false; // Failure
    }
}

async function initializeDatabases(){
    console.log("Initializing databases!");
    await incomingSourceDB.initialize();
    await outgoingSourceDB.initialize();
    console.log("Database initialized!")
}