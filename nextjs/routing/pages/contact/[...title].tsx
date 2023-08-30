import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

export default function Title() {
  const router = useRouter();

  const { title } = router.query as ParsedUrlQuery & {
    title?: string;
  }

  return (
    <p>Role: {title}</p>
  );
}
