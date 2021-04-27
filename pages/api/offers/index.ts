import { NextApiResponse } from 'next';
import { getData } from '../../../server/getData';

interface Request {
    query: { 
        limit: number;
        forcefetch?: string;
    };
}

export default async function handler(req: Request, res: NextApiResponse): Promise<void> {
    try {
        const isFetchForced = req.query.forcefetch?.toString() === 'true';
        const { mainTitle, mainImage, exactMatch }  = await getData(req.query.limit || 5, isFetchForced);
        res.status(200).json({
            mainTitle,
            mainImage,
            offers: exactMatch,
            offersLength: exactMatch.length,
        });
    } catch (error) {
        res.status(500).json({
            message: `Something went wrong. :( | ${error}`,
        });
    }
}
