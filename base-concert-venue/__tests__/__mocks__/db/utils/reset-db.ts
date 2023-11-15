import {readFakeData} from "@/__tests__/__mocks__/fakeData"
import {writeJSONToFile, filenames} from "@/lib/db/db-utils";
import * as process from "process";

export const resetDb = async (): Promise<void> => {
    const safeToReset = process.env.NODE_ENV === "test" || process.env.CYPRESS;
    if(!safeToReset) {
        throw new Error("Not safe to reset database in non-test environment");
    }
    const fakeData = await readFakeData();
    await Promise.any([
        writeJSONToFile(filenames.users, fakeData.fakeUsers),
        writeJSONToFile(filenames.shows, fakeData.fakeShows),
        writeJSONToFile(filenames.bands, fakeData.fakeBands),
        writeJSONToFile(filenames.reservations, fakeData.fakeReservations),
    ])
}