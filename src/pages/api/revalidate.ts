import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  await res.revalidate("/posts");
  res.status(200).json({ status: "ok" });
}
