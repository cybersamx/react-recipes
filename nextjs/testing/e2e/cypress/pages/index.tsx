import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Recipes - Next.js Routing</title>
      </Head>
      <div>
        <h1>Next.js Routing</h1>
        <ul id="pages">
          <li><a href="/about">About Us</a></li>
          <li><a href="/articles">Articles</a></li>
          <ul>
            <li><a href="/articles/1">Article 1</a></li>
            <li><a href="/articles/2">Article 2</a></li>
            <li><a href="/articles/3">Article 3</a></li>
          </ul>
          <li><a href="/contact">Contact info</a></li>
          <ul>
            <li><a href="/contact/ceo">CEO</a></li>
            <li><a href="/contact/cto">CTO</a></li>
            <li><a href="/contact/cfo">CFO</a></li>
          </ul>
        </ul>
      </div>
    </>
  );
}
