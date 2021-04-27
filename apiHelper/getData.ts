import { SearchResult } from "../interfaces";
import { externalUrl } from '../config';


const fetchData = async (limit: number): Promise<SearchResult> => {
    const url = `${externalUrl}&limit=${limit}`;
    const res = await fetch(url);
    return await res.json();
}

export const getData = async (limit: number): Promise<SearchResult> => {
    const data = await fetchData(limit);
    return data;
};
