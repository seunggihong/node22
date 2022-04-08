const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "write file")
  .then(() => {
    return fs.readFile("./writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
