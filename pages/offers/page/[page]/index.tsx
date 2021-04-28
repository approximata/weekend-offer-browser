import { apiServerUrl } from '../../../../config';
import Link from 'next/link';
import { PageProps } from '../../../../interfaces';
import { ReactNode } from 'react';
import OfferList from '../../../../components/OfferList';
import Pagination from '../../../../components/Pagination';
import pageStyles from '../../../../styles/Page.module.css';



interface Context {
    params: { page: number };
}


const page = ({ offers, offersLength, pageNumber }: PageProps): ReactNode => {
    return (
        <div className={pageStyles.page}>
            <OfferList offerList={offers}/>
            <Pagination 
                offersLength={offersLength}
                pageNumber={pageNumber}
            />
            <Link href='/'>Go Back</Link>
        </div>
    );
};

export const getServerSideProps = async (
    context: Context
): Promise<{ props: PageProps}> => {
    const res = await fetch(
        `${apiServerUrl}/api/offers/page/${context.params.page}`
    );
    const { offers, offersLength, pageNumber } = await res.json();
    return {
        props: {
            offers,
            offersLength,
            pageNumber,
        },
    };
};

export default page;
