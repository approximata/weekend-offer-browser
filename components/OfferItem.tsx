import Link from 'next/link';
import { ReactElement } from 'react';
import { OfferModel } from '../interfaces';
import offerStyles from '../styles/Offer.module.css';


interface OfferProps {
    offer: OfferModel;
}

const OfferItem = ({offer}: OfferProps): ReactElement => {
    return (
        <Link href={`/offers/${offer.id}`} key={offer.id}>
            <a className={offerStyles.card}>
                <h3>{offer.label} &rarr;</h3>
                <p>{offer.weekend && offer.weekend[0].label}</p>
                <hr/>
                <small>{offer.location?.address}</small>
                <br />
                <small className={offerStyles.tag}><tr>{offer.review?.average || ''}</tr></small>
            </a>
        </Link>
    );
};

export default OfferItem;
