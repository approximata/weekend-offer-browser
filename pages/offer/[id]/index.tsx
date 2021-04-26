import { server } from '../../../config';
import Link from 'next/link';
import Meta from '../../../components/Meta';
import { OfferModel } from '../../../interfaces';


interface Context { 
    params: { id: any; }; 
}

const offerItem = (offer: OfferModel) => {
    return ( 
        <>
            <Meta title={offer.label} description={offer.label} />
            <h1>{offer.label}</h1>
            <p>{offer.location.address}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    );
};

export const getServerSideProps = async (context: Context) => {
    const res = await fetch(`${server}/api/offers/${context.params.id}`);
    const offer = await res.json();

    console.log('offer in side res')
    console.log(offer)

    return {
        props: {
            offer,
        },
    };
};

// export const getStaticPaths = async () => {
//     const res = await fetch(`${server}/api/offers`);

//     const offerList = await res.json();
//         console.log('static path');
//         console.log(offerList)


//     const ids = offerList.map((offer: OfferModel) => offer.id);
//     const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

//     return {
//         paths,
//         fallback: false,
//     };
// };



export default offerItem;
