import { apiServerUrl } from '../../../config';
import Meta from '../../../components/Meta';
import Offer from '../../../components/Offer';

import { OfferModel } from '../../../interfaces';
import { ReactNode } from 'react';


interface Context { 
    params: { id: number; }; 
}

interface Props {
    offer: OfferModel
}

const offerPage = ({ offer }: Props): ReactNode => {
    return (
        <>
            <Meta title={offer.label} description={offer.label} />
            <Offer offer={offer} />
        </>
    );
};

export const getServerSideProps = async (context: Context): Promise<{props:{offer: OfferModel}}> => {
    const res = await fetch(`${apiServerUrl}/api/offers/${context.params.id}`);
    const offer = await res.json();

    return {
        props: {
            offer,
        },
    };
};


export default offerPage;
