import { apiServerUrl, maximumResult, pageSize } from '../config'
import OfferList from '../components/OfferList'
import { OfferModel } from '../interfaces'
import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link'
import pageStyles from '../styles/Page.module.css';


interface Props {
    offersFromServer: OfferModel[];
    offersLength: number;
}

const Home = ({ offersFromServer }: Props): ReactNode => {
    const [allDataLoaded, setAllDataLoaded] = useState<boolean>(false);

    useEffect(() => {
    const loadAllData = async (): Promise<void> => {
        await fetch(`${apiServerUrl}/api/offers?limit=${maximumResult}&forcefetch=true`);
        setAllDataLoaded(true)
    };
      loadAllData();
    }, [offersFromServer])
    return (
        <div className={pageStyles.page}>
            <OfferList offerList={offersFromServer} />
            {allDataLoaded && <Link href='/offers/page/2'>I Want More</Link>}
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