import { NextApiResponse } from 'next';
import { getData } from '../../../apiHelper/getData';
import { maximumResult } from '../../../config';

interface Request {
    query: { id: number };
}

export default async function handler(req: Request, res: NextApiResponse): Promise<void> {
    try {   
        const searchResult = await getData(maximumResult);
        const result = searchResult.exactMatch.find(
            (offer) => (offer.id === Number(req.query.id))
        );
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: 'Could not find offer',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: `Something went wrong. :( | Error: ${error}`,
        });
    }
}
