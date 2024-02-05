import { walkingCow } from "@/svgs/cow/cow";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, method } = req;

  console.log(query, method);

  const { pet } = query;

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  if (pet === "cow") {
    res.status(200).send(walkingCow);
  }

  res.status(200).send(walkingCow);
}
