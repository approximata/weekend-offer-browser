/* eslint-disable no-undef */
const isDev = process.env.NODE_ENV !== 'production';
export const server = isDev ? 'http://localhost:3000' : 'https://yourwebsite.com';
export const externalUrl = process.env.MAIN_URL;
export const pageSize = 5;