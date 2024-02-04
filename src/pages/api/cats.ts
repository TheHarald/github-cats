import { cow0, cow1, cow2 } from "@/svgs/cow-frames";
import { NextApiRequest, NextApiResponse } from "next";

const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  ${cow1}
  ${cow2}
</svg>
`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  res.status(200).send(svgContent);
}
