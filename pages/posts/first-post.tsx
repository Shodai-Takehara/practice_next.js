import type { FC } from 'react';
import Link from 'next/link';

const FirstPost: FC = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home!!</Link>
      </h2>
    </>
  );
};
export default FirstPost;
