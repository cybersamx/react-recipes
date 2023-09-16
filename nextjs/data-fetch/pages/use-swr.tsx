import Head from 'next/head';
import useSWR from 'swr';

import {User, UsersResult} from '@/pages/common';

function isUsersResult(ur: any): ur is UsersResult {
  return !!((ur as UsersResult).info);
}

async function fetchUser(url: string): Promise<User | null> {
  const res = await fetch(url);
  const data = await res.json();

  const ur = (isUsersResult(data)) ? data as UsersResult : null;

  if (ur && ur.results && ur.results.length) {
    return Promise.resolve(ur.results[0]);
  }

  return Promise.resolve(null);
}

export default function useSwr() {
  const url = 'https://randomuser.me/api';

  const { isLoading, data, error, mutate} = useSWR(url, fetchUser,);

  const updateBtn = async () => {
    await mutate(url);
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error instanceof Error) {
    return <div>{`Error: ${error.message}`}</div>;
  }

  return (
    <>
      <Head>
        <title>React Recipes - Basic API Call</title>
      </Head>
      <div>
        <h1>Next.js Basic API Call Using useQuery</h1>
        <button onClick={updateBtn}>{data && data.name && data.name.first}</button>
      </div>
    </>
  );
}
