
import {sync_job} from "../job/sync_job";

export  const incremental = async () : Promise<boolean> => {
    try {
        await sync_job(); // Wait for completion
        return true; // Success
    } catch (e) {
        console.error('Error syncing databases:', e);
        return false; // Failure
    }
}