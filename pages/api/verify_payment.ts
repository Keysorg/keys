// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { reference, secretKey } = req.body;
    try {
        fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                "Authorization": `Bearer ${secretKey}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                res.status(200).json(data)
            })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}
