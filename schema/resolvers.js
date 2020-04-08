"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_scalars_1 = require("graphql-scalars");
const db_1 = require("../db");
const resolvers = {
    Date: graphql_scalars_1.DateTimeResolver,
    URL: graphql_scalars_1.URLResolver,
    Chat: {
        lastMessage(chat) {
            return db_1.messages.find(m => m.id === chat.lastMessage);
        },
    },
    Query: {
        chats() {
            return db_1.chats;
        },
    },
};
exports.default = resolvers;
