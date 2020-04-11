"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_testing_1 = require("apollo-server-testing");
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = __importDefault(require("../../schema"));
const db_1 = require("../../db");
describe('Mutation.addMessage', () => {
    beforeEach(db_1.resetDb);
    it('should add message to specified chat', async () => {
        const server = new apollo_server_express_1.ApolloServer({ schema: schema_1.default });
        const { query, mutate } = apollo_server_testing_1.createTestClient(server);
        const addMessageRes = await mutate({
            variables: { chatId: '1', content: 'Hello World' },
            mutation: apollo_server_express_1.gql `
        mutation AddMessage($chatId: ID!, $content: String!) {
          addMessage(chatId: $chatId, content: $content) {
            id
            content
          }
        }
      `,
        });
        expect(addMessageRes.data).toBeDefined();
        expect(addMessageRes.errors).toBeUndefined();
        expect(addMessageRes.data).toMatchSnapshot();
        const getChatRes = await query({
            variables: { chatId: '1' },
            query: apollo_server_express_1.gql `
        query GetChat($chatId: ID!) {
          chat(chatId: $chatId) {
            id
            lastMessage {
              id
              content
            }
          }
        }
      `,
        });
        expect(getChatRes.data).toBeDefined();
        expect(getChatRes.errors).toBeUndefined();
        expect(getChatRes.data).toMatchSnapshot();
    });
});
