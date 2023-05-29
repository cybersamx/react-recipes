import Head from 'next/head';
import colors from 'tailwindcss/colors';

import { colorWeights, excludedColors } from '@/constants';

const validColors = Object.keys(colors).filter((color) => {
  return !excludedColors.includes(color);
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js/Tailwind - Colors</title>
      </Head>
      <div className="p-6">
        <div className="py-3">
          <a href="/" className="text-blue-500 hover:text-green-400">Back home...</a>
        </div>
        <h1 className="text-left font-semibold text-xl">Tailwind Colors</h1>
        <div className="px-6 py-4">
          <ul role="list">
            {
              validColors.map((color) => {
                return (
                  <div key={color}>
                    <li key={`header-${color}`} className="px-2">{color}</li>
                    <li key={`box-${color}`} className="p-2">
                      <ul className="grid grid-cols-10 gap-2">
                        {
                          colorWeights.map((weight) => {
                            return (
                              <li key={`${color}-${weight}`} className={`${
                                (weight > 500)
                                  ? 'text-white'
                                  : 'text-black'
                              } bg-${color}-${weight} px-2 py-1 aspect-square text-xs`}
                              >
                                {`${color}-${weight}`}
                              </li>
                            );
                          })
                        }
                      </ul>
                    </li>
                  </div>
                );
              })
            }
          </ul>
        </div>
      </div>
    </>
  );
}
