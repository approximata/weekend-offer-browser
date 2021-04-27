import OfferItem from './OfferItem';
import offerStyles from '../styles/Offer.module.css';
import { OfferModel } from '../interfaces';
import { ReactElement } from 'react';
import { pageSize } from '../config';

interface OfferListProps {
    offerList: OfferModel[],
}

const OfferList = ({offerList}: OfferListProps): ReactElement => {
    const pageOffers = offerList.filter((offer, idx) => {
        return idx < pageSize;
    });
    return (
        <div className={offerStyles.grid}>
            {pageOffers.map((offer) => (
                <OfferItem offer={offer} key={offer.id} />
            ))}
        </div>
    );
};

export default OfferList;
