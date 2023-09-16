import Head from 'next/head';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>React Recipes - Basic API Call</title>
      </Head>
      <div>
        <h1>Next.js Basic API Call using various Hooks</h1>
        <ul>
          <li><Link href="use-effect">useEffect</Link></li>
          <li><Link href="use-once">useOnce</Link></li>
          <li><Link href="use-query">useQuery</Link></li>
          <li><Link href="use-swr">useSWR</Link></li>
        </ul>
      </div>
    </>
  );
}
