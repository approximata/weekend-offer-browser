import { apiServerUrl, ApiStates, maximumResult, pageSize } from '../config'
import OfferList from '../components/OfferList'
import { OfferModel } from '../interfaces'
import { ReactNode } from 'react';
import Link from 'next/link'
import pageStyles from '../styles/Page.module.css';
import useApi from '../queries/use-api';



interface Props {
    offersFromServer: OfferModel[];
    offersLength: number;
}

const Home = ({ offersFromServer }: Props): ReactNode => {
    const { apiState, apiError } = useApi(maximumResult, true);

    return (
        <div className={pageStyles.page}>

            <OfferList offerList={offersFromServer} />

            {apiState === ApiStates.LOADING && (
                <div>Loading more...</div>
            )}
            {apiState === ApiStates.SUCCESS && (
                <Link href='/offers/page/2'>I Want More</Link>
            )}
            {apiState === ApiStates.ERROR && (
                <div>
                    Something went wrong while fatching all data: {apiError}
                </div>
            )}
        </div>
    );
}

export const getServerSideProps = async (): Promise<{
    props: { offersFromServer: OfferModel[] };
}> => {
    const res = await fetch(`${apiServerUrl}/api/offers?limit=${pageSize}&forcefetch=true`);
    const { offers } = await res.json();
    const offersFromServer = offers;
    return { props: { offersFromServer } };
};


export default Home; 