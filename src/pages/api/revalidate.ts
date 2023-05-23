import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.revalidate("/posts");
  res.status(200).json({ status: "ok" });
}
