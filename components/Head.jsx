import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Tewodros Genetu's Profolio."
      />
      <meta
        name="keywords"
        content="Tewodros Genetu, kostas, georgiou, data scientist portfolio, machine learning engineer, Tewodros Genetu portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Tewodros Genetu's Portfolio" />
      <meta
        property="og:description"
        content="Tewodros Genetu's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.tech" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Tewodros Genetu',
};
