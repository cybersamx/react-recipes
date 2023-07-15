import type { NextApiRequest, NextApiResponse } from 'next'

export type Profile = {
  fullName: string
  age: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Sleep for a bit.
  await new Promise((res) => setTimeout(res, 2000));

  const payload: Profile = {
    fullName: 'John Lee',
    age: 40,
  }

  res.status(200).json(JSON.stringify(payload))
}
