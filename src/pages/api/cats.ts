import { NextApiRequest, NextApiResponse } from "next";

const svgContent = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="20" fill="blue">
  <animate
    attributeName="cy"
    values="30;170;30"
    dur="2s"
    keyTimes="0;0.5;1"
    repeatCount="indefinite"
  />
</circle>
</svg>`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  res.status(200).send(svgContent);
}
