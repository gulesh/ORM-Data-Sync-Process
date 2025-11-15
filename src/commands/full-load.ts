import {initial_full_load} from "../migration/initial_full_load";

export const full_load_command = async (): Promise<boolean> => {
    try {
        await initial_full_load(); // Wait for completion
        return true; // Success
    } catch (e) {
        console.error('Error completing initial load:', e);
        return false; // Failure
    }
}
