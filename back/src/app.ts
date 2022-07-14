import createServer from 'server';

const startServer = async () => {
  const app = createServer();
  app.listen(app.get('PORT'), () => {
    console.log(`Server running on port ${app.get('PORT')}`);
  });
};

startServer();