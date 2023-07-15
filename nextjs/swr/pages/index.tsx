import Head from 'next/head';
import useSWR, { Fetcher } from 'swr';

import type { Profile } from './api/me'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()
  let profile: Profile = JSON.parse(data)

  return profile
}

export default function Home() {
  const { data, error, isLoading } = useSWR<Profile>('http://localhost:3000/api/me', fetcher)

  if (error) {
    return <div>Failed to load</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>React Recipes - SWR</title>
      </Head>
      <div>
        <h1>Next.js SWR</h1>
        <p>hello {data && data.fullName}</p>
      </div>
    </>
  );
}
