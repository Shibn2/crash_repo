const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Dummy data
const products = [
  { id: "1", name: "Laptop", price: 1000, description: "Powerful laptop" },
  { id: "2", name: "Phone", price: 500, description: "Smartphone with camera" },
];

const schema = buildSchema(`
    type Product {
        id: ID!
        name: String!
        price: Int!
        description: String
    }

    type Query {
        products: [Product]
        product(id: ID!): Product
    }
    `);

const root = {
  products: () => products,
  product: (id) => products.find((p) => p.id === id),
};

module.exports = graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
});
