import * as express from 'express';
import { ApolloServer, gql} from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        allCars: [Car]
    }
  
    type Car {
        brand: String!
        model: String!
    }
`;

const resolvers = {
  Query: {
    allCars: () => [{
      brand: 'Tesla,',
      model: 'Model S'
    }, {
      brand: 'Tesla,',
      model: 'Model 3'
    }, {
      brand: 'Tesla,',
      model: 'Model X'
    }, {
      brand: 'Tesla,',
      model: 'Model Y'
    }],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
