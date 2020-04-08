import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import { chats } from './db';
import schema from './schema';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/_ping', (req, res) => {
  res.json(chats);
});

const server = new ApolloServer({ schema });
server.applyMiddleware({
  app,
  path: '/graphql',
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is listening on the ${port}`);
  // this ${port} is connecting with port function.
});
