import Link from 'next/link';
import { OfferModel } from '../interfaces';
import offerStyles from '../styles/Offer.module.css';


interface OfferProps {
    offer: OfferModel;
}

const OfferItem = ({offer}: OfferProps) => {
    return (
        <Link href={`/offers/${offer.id}`} key={offer.id}>
            <a className={offerStyles.card}>
                <h3>{offer.label} &rarr;</h3>
                <p>{offer.review.average}</p>
            </a>
        </Link>
    );
};

export default OfferItem;
