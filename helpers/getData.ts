import { SearchResult } from "../interfaces";
import { externalUrl } from '../config';

export let searchResult = {} as SearchResult;

export const getData = async (limit: number) => {
    const url = `${externalUrl!}&limit=${limit}`
    const res = await fetch(url);
    searchResult = await res.json();
};

