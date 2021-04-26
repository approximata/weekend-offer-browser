import { server } from '../config'
import OfferList from '../components/OfferList'
import { OfferModel } from '../interfaces'
import { useEffect, useState } from 'react';


interface Props {
    offersFromServer: OfferModel[];
}

const Home = ({ offersFromServer }: Props) => {
    const [isOfferLoaded, setIsOfferLoaded] = useState<boolean>(false);

    useEffect(() => {
       const loadAllData = async () => {
           await fetch(`${server}/api/offers?limit=30`);
       };
      if (offersFromServer.length > 0) {
        setIsOfferLoaded(true);
        loadAllData();
      }
    }, [offersFromServer])
    return (
        <div>
            <OfferList offerList={offersFromServer} />
            {isOfferLoaded && <div>loaded</div>}
        </div>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch(`${server}/api/offers`);
    const { offers } = await res.json();
    const offersFromServer = offers;
    return { props: { offersFromServer } };
};


export default Home; 