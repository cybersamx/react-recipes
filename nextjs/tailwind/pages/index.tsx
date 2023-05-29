import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js/Tailwind</title>
      </Head>
      <div className="p-6">
        <h1 className="text-left font-semibold text-xl">Tailwind Recipes</h1>
        <div className="px-6 py-4">
          <ul role="list">
            <li className="flex"><a href="/color" className="text-blue-500 hover:text-green-400">Color</a></li>
            <li className="flex"><a href="/width" className="text-blue-500 hover:text-green-400">Width & Heights</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
