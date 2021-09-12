const { readFile, writeFile } = require('fs');
const util = require('util');

readFilePromise = util.promisify(readFile);
writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise('./content/first.txt', 'utf8');
    const second = await readFilePromise('./content/second.txt', 'utf8');
    console.log(first, second);
    await writeFilePromise(
      './content/resul-edu-green.txt',
      `This is the result: ${first}\n ${second}`
    );
  } catch (err) {
    console.log(err);
  }
};

start();
