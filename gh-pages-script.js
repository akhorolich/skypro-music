import fs from 'node:fs';
import path from 'node:path';

//creates an index.html file in the out directory to redirect to the allowed path /skypro-music, becaaaause that's how 'serve' works)))
const createRedirectHTML = () => {
  const pathToOutDir = path.resolve(import.meta.dirname, 'out', 'index.html');
  try {
    fs.writeFileSync(
      pathToOutDir,
      `<meta http-equiv="refresh" content="0; URL='/skypro-music/'" />`,
      'utf8',
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createRedirectHTML();
