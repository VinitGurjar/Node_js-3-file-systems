//For simplifing callback hell we will use
// // Sync API: Nocallbacks, Blocking the main thread
import { readdirSync, rmSync } from "fs";
//For every file system function there's a corresponding Sync function that uses the Sync API
readdirSync(dir).forEach((f) => rmSync(`${dir}/${f}`));
