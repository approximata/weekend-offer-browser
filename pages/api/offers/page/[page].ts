import { getAllData } from "../../../../helpers/getData";
import { PAGE_SIZE } from "../../../../constant"

interface Request {
    query: { page: number}
}

export default async function handler(req: Request, res: any) {
    try {
        const result = await getAllData();
        const pageOffers = result.exactMatch.filter((offer, idx) => {
            const endIdx = req.query.page * PAGE_SIZE;
            const initIdx = endIdx - PAGE_SIZE;
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