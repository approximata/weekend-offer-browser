import OfferItem from './OfferItem';
import offerStyles from '../styles/Offer.module.css';
import { OfferModel } from '../interfaces';

interface OfferListProps {
    offerList: OfferModel[]
}

const OfferList = ({offerList}: OfferListProps) => {
    return (
        <div className={offerStyles.grid}>
            {offerList.map((offer) => (
                <OfferItem offer={offer} key={offer.id} />
            ))}
        </div>
    );
};

export default OfferList;
