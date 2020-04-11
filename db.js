"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = [];
exports.chats = [];
exports.resetDb = () => {
    exports.messages.splice(0, Infinity, ...[
        {
            id: '1',
            content: 'You on your way?',
            createdAt: new Date(new Date('1-1-2019').getTime() - 60 * 1000 * 1000),
        },
        {
            id: '2',
            content: 'Hey, it is me',
            createdAt: new Date(new Date('1-1-2019').getTime() - 2 * 60 * 1000 * 1000),
        },
        {
            id: '3',
            content: 'Hey, it is me',
            createdAt: new Date(new Date('1-1-2019').getTime() - 2 * 60 * 1000 * 1000),
        },
        {
            id: '4',
            content: 'Hey, it is me',
            createdAt: new Date(new Date('1-1-2019').getTime() - 2 * 60 * 1000 * 1000),
        },
    ]);
    exports.chats.splice(0, Infinity, ...[
        {
            id: '1',
            name: 'Ethan Gonzalez',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            messages: ['1'],
        },
        {
            id: '2',
            name: 'Bryan Wallace',
            picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
            messages: ['2'],
        },
        {
            id: '3',
            name: 'Avery Stewart',
            picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
            messages: ['3'],
        },
        {
            id: '4',
            name: 'Katie Peterson',
            picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
            messages: ['4'],
        },
    ]);
};
