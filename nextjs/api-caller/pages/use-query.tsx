import Head from 'next/head';
import {useQuery} from 'react-query';
import axios from 'axios';

import {User, UsersResult} from '@/pages/common';

function fetchUser(gender: string): Promise<User> {
  // Let's suppose must pass the gender param in the fetch url. And we
  // aren't declaring the gender param as literal string type.
  if (gender !== 'female' && gender !== 'male') {
    return Promise.reject(new Error(`wrong gender:${gender}`));
  }

  return axios
    .get<UsersResult>(`https://randomuser.me/api/?gender=${gender}`)
    .then((res) => {
      const ur = res.data;
      if (!!ur && !!ur.results || ur.results.length > 0) {
        return ur.results[0];
      }

      throw new Error('no user found')
    });
}

export default function UseQuery() {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUser('female'),
  });

  const updateBtn = async () => {
    refetch().catch((err) => console.error(err));
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
