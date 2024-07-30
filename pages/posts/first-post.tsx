import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const FirstPost: FC = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Image
        src="/images/profile.jpg" // イメージファイルのルート
        height={144} // イメージサイズの設定
        width={144} // アスペクト比を正しく
        alt="Your Name"
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home!!</Link>
      </h2>
    </>
  );
};
export default FirstPost;
