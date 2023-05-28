import Head from 'next/head';

import Banner from '@/stories/banner';
import Button from '@/stories/button';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Recipes - Basic Next.js</title>
      </Head>
      <div>
        <Banner />
        <h1>Next.js Basic App</h1>
        <Button variant="primary" label="Login" />
      </div>
    </>
  );
}
