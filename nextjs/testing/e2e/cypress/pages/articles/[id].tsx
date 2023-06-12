import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();

  return <p>Article: {router.query.id}</p>;
}
