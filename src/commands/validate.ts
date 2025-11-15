import {validation_job} from "../job/validation_job";

export  const validate = async () : Promise<boolean> => {
    try {
        await validation_job(); // Wait for completion
        return true; // Success
    } catch (e) {
        console.error('Error validating records:', e);
        return false; // Failure
    }
}