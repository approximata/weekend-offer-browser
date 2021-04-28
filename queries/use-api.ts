import { useState, useEffect, useRef } from 'react';
import { apiServerUrl, ApiStates, maximumResult, pageSize } from '../config';
import { SearchResult } from '../interfaces';


interface Response {
    apiState: string;
    response: SearchResult[];
    apiError?: string;
}

const useApi = (limit = pageSize, forceFetch = false): Response => {

    const [response, setResponse] = useState<Response>({
        apiState: ApiStates.LOADING,
        apiError: '',
        response: [],
    });

    // eslint-disable-next-line
    const fetchData = useRef((url: string) => {});

     fetchData.current = async (url) => {
         const setPartialResponse = (partialResponse: Response): void =>
             setResponse({ ...response, ...partialResponse });

         setPartialResponse({
             apiState: ApiStates.LOADING,
             response: [],
         });
         await fetch(url)
             .then((res) =>
                 res.json().then((json) =>
                     setPartialResponse({
                         apiState: ApiStates.SUCCESS,
                         response: json,
                     })
                 )
             )
             .catch((e) => {
                 setPartialResponse({
                     apiState: ApiStates.ERROR,
                     response: [],
                     apiError: `Fetch failed: ${e}`,
                 });
             });
     };
   
    useEffect(() => {
        const url = `${apiServerUrl}/api/offers?limit=${
            limit || maximumResult
        }&forcefetch=${forceFetch}`;
        fetchData.current(url);
    }, [limit, forceFetch, fetchData]);

    return response;
};

export default useApi;
