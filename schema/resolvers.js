"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_scalars_1 = require("graphql-scalars");
const db_1 = require("../db");
const resolvers = {
    Date: graphql_scalars_1.DateTimeResolver,
    URL: graphql_scalars_1.URLResolver,
    Chat: {
        messages(chat) {
            return db_1.messages.filter((m) => chat.messages.includes(m.id));
        },
        lastMessage(chat) {
            const lastMessage = chat.messages[chat.messages.length - 1];
            return db_1.messages.find((m) => m.id === lastMessage);
        },
    },
    Query: {
        // Queryの中に、Chatがあるので、スコープ範囲を間違えないように。
        chats() {
            return db_1.chats;
        },
        chat(root, { chatId }) {
            return db_1.chats.find((c) => c.id === chatId);
        },
    },
    Mutation: {
        addMessage(root, { chatId, content }) {
            const chatIndex = db_1.chats.findIndex((c) => c.id === chatId);
            if (chatIndex === -1)
                return null;
            const chat = db_1.chats[chatIndex];
            const messagesIds = db_1.messages.map((currentMessage) => Number(currentMessage.id));
            const messageId = String(Math.max(...messagesIds) + 1);
            const message = {
                id: messageId,
                createdAt: new Date(),
                content,
            };
            db_1.messages.push(message);
            chat.messages.push(messageId);
            chat.messages.push(messageId);
            db_1.chats.splice(chatIndex, 1);
            db_1.chats.unshift(chat);
            return message;
        },
    },
};
exports.default = resolvers;
