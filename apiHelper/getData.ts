import { SearchResult } from "../interfaces";
import { externalUrl, maximumResult } from '../config';
import * as fsPromise  from 'fs/promises';
import path from 'path';
import fs from 'fs';

const cacheFilePath = path.join(process.cwd(), 'public', 'cache.json');

const cacheTimeSec = 300;

const writeDataToFile = (data: SearchResult): void => {
    fsPromise.writeFile(cacheFilePath, JSON.stringify(data), 'utf-8');
}

const isCacheExist = (): boolean => (
    fs.existsSync(cacheFilePath)
)

const createdDate = (): Date => {
    const { mtime } = fs.statSync(cacheFilePath);
    return mtime;
}

const isCacheExpired = (): boolean => {
    const now = Date.now();
    const cacheCreated = createdDate().getTime();
    const ellapsedSec = Math.floor((now - cacheCreated) / 1000);
    return ellapsedSec > cacheTimeSec;
}

const readDataFromFile = async (): Promise<SearchResult> => {
    const data = await fsPromise.readFile(cacheFilePath);
    return JSON.parse(data.toString('utf8'));
}

const fetchData = async (limit: number): Promise<SearchResult> => {
    const url = `${externalUrl}&limit=${limit}`;
    const res = await fetch(url);
    return await res.json();
}

export const getData = async (limit: number, forceFetch = false): Promise<SearchResult> => {
    if(!isCacheExist() || isCacheExpired() || forceFetch) { 
        const data = await fetchData(limit);
        writeDataToFile(data);
        return data;
    }
   return readDataFromFile();
};

export const getDataFromCacheFirst = async (): Promise<SearchResult> => {
    if (isCacheExist() && !isCacheExpired()) return readDataFromFile();
    return await getData(maximumResult);
}