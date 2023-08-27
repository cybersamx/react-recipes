import Head from 'next/head';
import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>React Recipes - Next.js Routing</title>
      </Head>
      <div>
        <h1>Next.js Routing</h1>
        <ul>
          <li><a href={`${router.basePath}/about`}>About Us</a></li>
          <li><a href={`${router.basePath}/articles`}>Articles</a></li>
          <ul>
            <li><a href={`${router.basePath}/articles/1`}>Article 1</a></li>
            <li><a href={`${router.basePath}/articles/2`}>Article 2</a></li>
            <li><a href={`${router.basePath}/articles/3`}>Article 3</a></li>
          </ul>
          <li><a href={`${router.basePath}/contact`}>Contact info</a></li>
          <ul>
            <li><a href={`${router.basePath}/contact/ceo`}>CEO</a></li>
            <li><a href={`${router.basePath}/contact/cto`}>CTO</a></li>
            <li><a href={`${router.basePath}/contact/cfo`}>CFO</a></li>
          </ul>
        </ul>
      </div>
    </>
  );
}
