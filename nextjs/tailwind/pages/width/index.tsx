import Head from 'next/head';

import { sizes } from '@/constants';

console.log(sizes);

const reversedSizes = [...sizes].reverse();

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js/Tailwind</title>
      </Head>
      <div className="p-6">
        <div className="py-3">
          <a href="/" className="text-blue-500 hover:text-green-400">Back home...</a>
        </div>
        <div>
          <h1 className="text-left font-semibold text-xl">Tailwind Widths</h1>
          <div className="px-6 py-4">
            <div className="space-y-4">
              {
                sizes.map((size) => {
                  const width = `w-${size}`;

                  return (
                    <div key={width} className={`${width} bg-indigo-400 shadow rounded px-2 py-0.5`}>
                      {width}
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-left font-semibold text-xl">Tailwind Heights</h1>
          <div className="px-6 py-4">
            <div className="flex space-x-4">
              {
                reversedSizes.map((size) => {
                  const height = `h-${size}`;

                  return (
                    <div key={height} className={`${height} bg-indigo-400 shadow rounded px-2 pe-2 rotate-180 text-right`} style={{writingMode: 'vertical-rl'}}>
                      {height}
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
