import type { FC } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
import Head from 'next/head';

import Layout from '../../components/layout';

export const FirstPost: FC = () => {
  return (
    // <>
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
    </Layout>
  );
};

export default FirstPost;
