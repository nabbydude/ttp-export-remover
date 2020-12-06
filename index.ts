import { promises } from "fs";
const { readFile, writeFile } = promises;

async function run() {
  let text = await readFile(process.argv[2], "utf8");
  text = text.replace(
    /^Object\.defineProperty\(exports,.*?\);$/m,
    "// $&"
  );
  await writeFile(process.argv[2], text, "utf8");
  console.log("done");
}

run().catch(e => console.error(e));
