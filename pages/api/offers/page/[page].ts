import { searchResult } from "../../../../helpers/getData";
import { pageSize } from "../../../../config"

interface Request {
    query: { page: number}
}

export default async function handler(req: Request, res: any) {
    try {
        const pageOffers = searchResult.exactMatch.filter((offer, idx) => {
            const endIdx = req.query.page * pageSize;
            const initIdx = endIdx - pageSize;
            return idx <= endIdx && idx >= initIdx;
        });
        if(pageOffers.length > 0) {
            res.status(200).json(pageOffers);
        } else { 
             res.status(404).json({
                 message: `Could not find page`,
             });
        }
    } catch (error) {
        res.status(500).json({
            message: `Something went wrong. :( | Error: ${error}`,
        });
    }
};