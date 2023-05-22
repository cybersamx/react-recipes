import { useRouter } from 'next/router';

export default function Title() {
  const router = useRouter();

  return (
    <p>Role: {router.query.title}</p>
  );
}
