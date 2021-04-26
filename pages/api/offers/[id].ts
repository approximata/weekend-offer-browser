import { server } from '../../../config';
import { getData, searchResult } from '../../../helpers/getData';

interface Request {
    query: { id: number };
}

export default async function handler(req: Request, res: any) {
    try {
        if(!searchResult.exactMatch) {
            await getData(5);
        }
        const offer = searchResult.exactMatch.find(offer => offer.id = req.query.id);
        if (offer) {
            res.status(200).json(offer);
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
