import { SearchResult } from "../interfaces";
import { URL } from '../constant';

export const getAllData = async (): Promise<SearchResult> => {
    const res = await fetch(URL!);
    const data = await res.json();
    return data;
};
