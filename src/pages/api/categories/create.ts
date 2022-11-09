import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;

  const alreadyExists = await prisma.category.findFirst({ where: { name } });

  if (alreadyExists) {
    return res.status(400).json({ message: 'This category already exists' });
  }

  const category = await prisma.category.create({ data: { name } });

  return res.status(201).json({ category });
}
