const dir = "./notYaBuss";

//Callback: async and non-blocking event loop
//Using callback api benifits us that the actual
//file ops happen aysnchronously off of the main thread
import { readdir, rm } from "fs";
//After reading the dir we can access the files in a callback function.
readdir(dir, (err, files) => {
  if (err) throw err;
  //Write for loop to remove the err to loop over the file which also uses a callback function
  for (const f of files) {
    rm(`${dir}/${f}`, (err) => {
      if (err) throw err;
      //So we have created a nested callback also called as callback hell.
    });
  }
});
