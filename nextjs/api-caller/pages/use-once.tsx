import Head from 'next/head';
import {useEffect, useRef, useState} from "react";

import {User, UsersResult} from "@/pages/common";

function isUsersResult(ur: any): ur is UsersResult {
  return !!((ur as UsersResult).info);
}

export default function UseOnce() {
  const [user, setUser] = useState<User>();

  const fetchUser = async () => {
    const res = await fetch(`https://randomuser.me/api`);
    const results = await res.json();

    // Note that `as` is a compile time, not a runtime, construct.
    // As with any typecasting, we should check if a typecast operation passes/fails.
    // We use is*** function to validate the type.
    const u = (isUsersResult(results)) ? results as UsersResult : null;

    if (u && u.results && u.results.length) {
      setUser(u.results[0]);
    }
  }

  const useOnce = (fn: () => void) => {
    const ref = useRef(false);
    useEffect(() => {
      if (ref.current) {
        fn();
      }

      return () => {
        ref.current = true;
      };
    }, [fn]);
  }

  useOnce(() => {
    // We only fetch a user when the user variable isn't set. Otherwise, we will
    // be fetching users continuously as the page refreshes due to setUser.
    if (!user) {
      fetchUser().catch(err => console.log(err));
    }
  });

  const updateBtn = () => {
    fetchUser().catch(err => console.log(err));
  }

  return (
    <>
      <Head>
        <title>React Recipes - Basic API Call</title>
      </Head>
      <div>
        <h1>Next.js Basic API Call Using useEffect for Updating the State Once</h1>
        <button onClick={updateBtn}>{user && user.name.first}</button>
      </div>
    </>
  );
}
