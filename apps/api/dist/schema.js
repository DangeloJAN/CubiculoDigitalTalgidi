import { createSchema } from 'graphql-yoga';
import { prisma } from '@cubiculo/db';
export const schema = createSchema({
    typeDefs: /* GraphQL */ `
    type User {
      id: ID!
      email: String!
      name: String
    }

    type Query {
      health: String!
      users: [User!]!
    }
  `,
    resolvers: {
        Query: {
            health: () => 'ok',
            users: async () => {
                return prisma.user.findMany();
            },
        },
    },
});
