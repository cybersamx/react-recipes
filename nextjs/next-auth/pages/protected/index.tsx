import { signOut } from 'next-auth/react';

export default function Home() {
  return (
    <div className="h-screen w-screen flex-col flex justify-center text-center items-center">
      <h2 className="text-xl py-4">Authorized page</h2>
      <button
        className="bg-blue-600 text-white hover:bg-blue-200 hover:text-black w-1/4 rounded-md border-gray-500 justify-center"
        onClick={() => signOut()}
      >Log out</button>
    </div>
  );
}
