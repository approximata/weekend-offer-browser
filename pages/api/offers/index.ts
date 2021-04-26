import { getData, searchResult } from '../../../helpers/getData';
import { OfferModel } from '../../../interfaces';

interface Response {
    status: (
        arg0: number
    ) => {
        (): any;
        new (): any;
        json: {
            (arg0: {
                mainTitle?: string;
                mainImage?: string;
                offers?: OfferModel[];
                offersLength?: number;
                message?: string;
            }): void;
            new (): any;
        };
    };
}

interface Request {
    query: { limit: any };
}

export default async function handler(req: Request, res: Response) {
    try {
        await getData(req.query.limit || 5);
        const { mainTitle, mainImage, exactMatch } = searchResult;
        res.status(200).json({
            mainTitle,
            mainImage,
            offers: exactMatch,
            offersLength: exactMatch.length,
        });
    } catch (error) {
        res.status(500).json({
            message: `Something went wrong. :( | Error: ${error}`,
        });
    }
}
