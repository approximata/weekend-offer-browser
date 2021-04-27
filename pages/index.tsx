import { apiServerUrl, maximumResult, pageSize } from '../config'
import OfferList from '../components/OfferList'
import { OfferModel } from '../interfaces'
import { ReactNode, useEffect, useState } from 'react';


interface Props {
    offersFromServer: OfferModel[];
    offersLength: number;
}

const Home = ({ offersFromServer }: Props): ReactNode => {
    const [isInitalOffersLoaded, setIInitalOffersLoaded] = useState<boolean>(
        false
    );

    useEffect(() => {
    const loadAllData = async (): Promise<void> => {
        await fetch(`${apiServerUrl}/api/offers?limit=${maximumResult}&forcefetch=true`);
    };
      if (offersFromServer.length > 0) {
        setIInitalOffersLoaded(true);
        loadAllData();
      }
    }, [offersFromServer])
    return (
        <div>
            <OfferList offerList={offersFromServer} />
            {isInitalOffersLoaded && <div>loaded </div>}
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