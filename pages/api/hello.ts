// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { pool } = require('../../config/db-config')


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await pool.query('SELECT * FROM reports')
  
  res.status(200).json(response.rows)
}


