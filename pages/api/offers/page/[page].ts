import { getDataFromCacheFirst } from "../../helper/getData";
import { pageSize } from "../../../../config"
import { NextApiResponse } from "next";

interface Request {
    query: { page: number}
}

export default async function handler(req: Request, res: NextApiResponse): Promise<void> {
    try {
        const searchResult = await getDataFromCacheFirst();
        const offersLength = searchResult.exactMatch.length;
        const pageNumber = req.query.page;
        const offersOnPage = searchResult.exactMatch.filter((offer, idx) => {
            const endIdx = req.query.page * pageSize;
            const initIdx = endIdx - pageSize;
            return idx <= endIdx && idx >= initIdx;
        });
        if (offersOnPage.length > 0) {
            res.status(200).json({
                offers: offersOnPage,
                offersLength,
                pageNumber
            });
        } else {
            res.status(404).json({
                message: `Could not find page`,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: `Something went wrong. :( | ${error}`,
        });
    }
}