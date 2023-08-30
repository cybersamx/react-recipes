import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

export default function Article() {
  const router = useRouter();

  const { id } = router.query as ParsedUrlQuery & {
    id?: string;
  }

  return <p>Article: {id}</p>;
}
