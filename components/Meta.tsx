import Head from 'next/head'

interface Props {
    title: string;
    keywords: string;
    description: string;
}

const Meta = ({ title, keywords, description }: Props) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Weekend Offers',
  keywords: 'short holiday, weekend',
  description: 'Check the latest offers for the weekend',
}

export default Meta
