import * as process from "process";

export const venueCapacity = 400;

// this will eventually use environment variables
export const getDbPath = (): string | void => {
    if(!process.env.DB_PATH) {
        throw new Error("DB_PATH environment variable not set");
    }

    return process.env.DB_PATH
}
