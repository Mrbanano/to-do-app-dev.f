import app from './app';
import './Database/database';

async function main() {
  await app.listen(app.get('port'));
  console.log('Server in port', app.get('port'));
}

main();
