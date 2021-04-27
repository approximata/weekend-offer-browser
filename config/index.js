/* eslint-disable no-undef */
const isDev = process.env.NODE_ENV !== 'production';
export const apiServerUrl = isDev ? 'http://localhost:3000' : 'https://weekend-offer-browser.vercel.app';
export const externalUrl = process.env.MAIN_URL;
export const pageSize = 5;
export const maximumResult = 50;