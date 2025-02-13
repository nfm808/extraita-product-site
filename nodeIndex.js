import fs from "fs";
import path from "path";

const main = async () => {
  const directoryPath = path.join(path.resolve());
  try {
    let directories = await fs
      .readdirSync(directoryPath, { withFileTypes: true })
      .filter(item => item.isDirectory())
      .map(item => item.name);

    const fileContents = {
      directories: [],
    };
    for (let x = 0; x < directories.length; x++) {
      let files = await fs.readdirSync(
        path.join(path.resolve() + "/" + directories[x]),
        {
          withFileTypes: true,
        }
      );

      fileContents.directories.push({
        directory: directories[x],
        content: files.map(item => "/" + item.name),
      });
    }
    console.log(fileContents);
    await fs.appendFile(
      "constant.json",
      JSON.stringify(fileContents),
      function (err) {
        if (err) throw err;
      }
    );
    console.log(directories);
  } catch (error) {
    console.error(error);
  }
};

main();
