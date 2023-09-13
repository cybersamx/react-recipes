import Head from 'next/head';
import {useEffect, useState} from "react";

type Info = {
  page: number;
  result: number;
  seed: string;
}

type User = {
  email: string;
  gender: 'female' | 'male';
  name: {
    title: string;
    first: string;
    last: string;
  };
}

type UsersResult = {
  info: Info;
  results: User[];
}

function isUsersResult(ur: any): ur is UsersResult {
  return !!((ur as UsersResult).info);
}

async function getUser(): Promise<UsersResult | null> {
  const res = await fetch(`https://randomuser.me/api`);
  const results = await res.json();

  // Note that `as` is a compile time, not a runtime, construct.
  // As with any typecasting, we should check if a typecast operation passes/fails.
  // We use is*** function to validate the type.
  return (isUsersResult(results)) ? results as UsersResult : null;
}

export default function Home() {
  const [user, setUser] = useState<User>();

  const fetchUser = async () => {
    const u = await getUser();

    if (u && u.results.length) {
      setUser(u.results[0]);
    }
  }

  useEffect(() => {
    // We only fetch a user when the user variable isn't set. Otherwise, we will
    // be fetching users continuously as the page refreshes due to setUser.
    if (!user) {
      fetchUser().then(err => console.log(err));
    }
  }, [user]);

  const updateBtn = () => {
    fetchUser().then(err => console.log(err));
  }

  return (
    <>
      <Head>
        <title>React Recipes - Basic API Call</title>
      </Head>
      <div>
        <h1>Next.js Basic API Call</h1>
        <button onClick={updateBtn}>{user && user.name.first}</button>
      </div>
    </>
  );
}
