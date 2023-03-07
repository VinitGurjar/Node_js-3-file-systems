//NEW node api
//For resolving the problem of both callbacks and Sync
import { readdir, rm } from "fs/promises";
//1st read the dir then use a map over the files and
//convert each one into a removal operation promise
const files = readdir(dir);
//files.map(f => rm(`${dir}/${f}`))
//Use async await to execute all the removels in parallel
await promise.all(files.map((f) => rm(`${dir}/${f}`)));
