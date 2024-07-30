import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <section>
        <h1>
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </section>
    </>
  );
}
