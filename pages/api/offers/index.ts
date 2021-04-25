
import { getAllData } from "../../../helpers/getData";

export default async function handler(req: any, res: any) {
    try {
        const { mainTitle, mainImage, exactMatch } = await getAllData();
        res.status(200).json({
            mainTitle,
            mainImage,
            offersLength: exactMatch.length,
        });
    } catch (error) {
        res.status(500).json({
            message: `Something went wrong. :( | Error: ${error}`,
        });
    }
};