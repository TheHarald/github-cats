import { cow } from "@/svgs/cow";
import { NextApiRequest, NextApiResponse } from "next";

const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <!-- Initial frame -->
  <image href="/cow0.svg" width="100%" height="100%">

    <animate attributeName="href" values="/cow1.svg;/cow2.svg;/cow1.svg" dur="1s" repeatCount="indefinite" />
  </image>
</svg>
`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  res.status(200).send(svgContent);
}
