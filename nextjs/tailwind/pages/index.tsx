import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Recipes - Basic Next.js</title>
      </Head>
      <div className="p-6 ">
        <h1 className="text-left font-medium text-xl">Next.js Basic App</h1>
        <div className="px-6 py-4">
          <button className="items-center w-24 h-10 rounded-full bg-blue-400 text-white">Login</button>
        </div>
      </div>
    </>
  );
}
