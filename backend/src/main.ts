import { Server } from 'http';
import cg from './cg';

const main: () => Server = () => {
  const {
    startServer,
  } = cg();

  return startServer();
};

main();
