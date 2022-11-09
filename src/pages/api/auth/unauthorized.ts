import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseBody {
  message: string;
}

export default function Unauthorized(
  _: NextApiRequest,
  res: NextApiResponse<ResponseBody>,
) {
  res.status(401).json({ message: 'Not authenticated.' });
}
