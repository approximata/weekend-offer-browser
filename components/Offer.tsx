import { ReactElement } from 'react';
import Image from 'next/image';
import { OfferModel } from '../interfaces';
import offerStyles from '../styles/Offer.module.css';
import { useRouter } from 'next/router';

interface Props {
    offer: OfferModel;
}

const Offer = ({offer}: Props): ReactElement => {

    console.log(offer);
    const router = useRouter();

    const fallback_image = 'https://approximatastockphotos.s3-eu-west-1.amazonaws.com/Summer-Sea-03.jpeg'

    return (
        <div className={offerStyles.page}>
            <h2>{offer.label}</h2>
            <small>{offer.location?.address}</small>

            <div className={offerStyles.container}>
                <section>
                    <Image
                        alt='offer'
                        src={
                            (offer.weekend && offer.weekend[0].imageUrl) ||
                            fallback_image
                        }
                        width='300px'
                        height='300px'
                        layout='intrinsic'
                        objectFit='cover'
                        quality={100}
                    />
                </section>
                <section>
                    <div>
                        <h4>{offer.weekend && offer.weekend[0].label}</h4>
                        {offer.weekend &&
                            offer.weekend[0].programIntro?.map(
                                (program, idx) => (
                                    <tr key={idx}>
                                        <small>{program}</small>
                                    </tr>
                                )
                            )}
                    </div>
                    <div className={offerStyles.tag}>
                        {offer.weekend &&
                            offer.weekend[0].topTheme?.map((theme, idx) => (
                                <tr key={idx}>
                                    <small>{theme}</small>
                                </tr>
                            ))}
                    </div>
                </section>
            </div>
            <section className={offerStyles.foot}>
                <button onClick={() => router.back()}>back</button>
            </section>
        </div>
    );
};

export default Offer;
