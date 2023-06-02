'use client'

import Head from 'next/head';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    // Cancel the default event when a form is submitted, which prevents the
    // browser from reloading the page.
    e.preventDefault();
    setLoading(true);

    // Define the type of the form.
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };

    const res = await signIn('credentials', {
      redirect: false,
      username: target.username.value,
      password: target.password.value,
    });

    setLoading(false);

    if (!res || res.error || !res.ok) {
      console.log('failure');
      return;
    }

    console.log('success');
    router.push('/protected');
  };

  return (
    <>
      <Head>
        <title>React Recipes - Next-Auth</title>
      </Head>
      <div className="flex h-screen w-screen justify-center items-center text-center">
        <div className="rounded-2xl border border-gray-300 space-y-3 px-5 py-5">
          <h3 className="text-xl font-semibold">NextAuth.js App</h3>
          <p className="text-sm">Use username=<code>admin</code> and password=<code>admin</code></p>
          <form
            className="space-y-3 px-4 py-4"
            onSubmit={handleLogin}
          >
            <div>
              <label
                htmlFor="username"
                className="text-sm block text-left"
              >Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="block w-full border-gray-400 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm block text-left"
              >Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full border-gray-400 rounded-md"
              />
            </div>
            <button
              disabled={loading}
              className={`${
                loading
                  ? 'cursor-not-allowed text-gray-300'
                  : 'bg-blue-600 text-white hover:bg-blue-200 hover:text-black'
              } w-3/4 items-center rounded-md border-gray-500`}
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
