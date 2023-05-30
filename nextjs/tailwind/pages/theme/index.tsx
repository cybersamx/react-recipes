import { ChangeEvent, FormEvent, useState } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';

import { sizes } from '@/constants';


export default function Home() {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const msg = e.target.checked ? 'Checked' : 'Not checked';

    const targetTheme = e.target.checked ? 'dark' : 'light';
    setTheme(targetTheme);
  }

  return (
    <>
      <Head>
        <title>Next.js/Tailwind</title>
      </Head>
      <div className="bg-white dark:bg-stone-700">
        <div className="bg-white dark:bg-stone-700 mt-12 mx-8">
          <div className="bg-gray-200 dark:bg-gray-500 rounded-2xl p-8">
            <div className="grid grid-cols-2 py-1">
              <div><a href="/" className="text-blue-500 dark:text-sky-400 hover:text-green-400">Back home...</a></div>
              <div className="text-end">
                <div
                  className="relative mr-2 inline-block w-10 select-none align-middle transition duration-200 ease-in"
                >
                  <input
                    type="checkbox"
                    id="isDark"
                    checked={theme === 'dark'}
                    className="peer absolute block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 bg-white checked:right-0 checked:border-green-500"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="isDark"
                    className="block h-6 cursor-pointer overflow-hidden rounded-full bg-gray-300 peer-checked:bg-green-500"
                  ></label>
                </div>
                <label
                  className="text-bold text- font- font-bold tracking-wider text-gray-700 dark:text-white"
                >Dark</label>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-indigo-600 dark:text-indigo-300 text-3xl font-extrabold py-3">Tailwind Theme</h1>
              <h2 className="text-orange-600 dark:text-orange-300 text-xl font-semibold py-2">Hello World 🌎</h2>
              <div className="text-gray-700 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero augue, porta pharetra dolor
                fermentum, malesuada venenatis ligula. Vestibulum vitae lacus diam. Vestibulum suscipit dapibus nisl,
                ac euismod ligula posuere non. Fusce hendrerit magna ultricies, lobortis ante et, pharetra diam.
                Phasellus eleifend sapien diam, in tincidunt lorem tincidunt et. Nam vulputate arcu nec tempor feugiat.
                Nullam sit amet nulla justo. Sed nunc quam, volutpat non nisi et, vestibulum volutpat ipsum.
                Nam finibus tincidunt purus, sed ullamcorper justo dapibus in. Sed urna justo, molestie pulvinar
                rutrum suscipit, suscipit a nunc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
