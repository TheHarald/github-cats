import { cow } from "@/svgs/cow";
import { NextApiRequest, NextApiResponse } from "next";

// const svgContent = `
// <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
//   <!-- Initial frame -->
//   <image xlink:href="data:image/svg+xml;" href="/cow0.svg"  width="100%" height="100%">

//     <animate attributeName="href" values="/cow1.svg;/cow2.svg;/cow1.svg" dur="1s" repeatCount="indefinite" />
//   </image>
// </svg>
// `;

const cow0Url =
  "https://raw.githubusercontent.com/TheHarald/github-cats/main/public/cow0.svg";
const cow1Url =
  "https://raw.githubusercontent.com/TheHarald/github-cats/main/public/cow1.svg";
const cow2Url =
  "https://raw.githubusercontent.com/TheHarald/github-cats/main/public/cow2.svg";

const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <image href="${cow0Url}" width="100%" height="100%">
    <animate attributeName="href" values="${cow1Url};${cow2Url};${cow1Url};" dur="1s" repeatCount="indefinite" />
  </image>
</svg>
`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  res.status(200).send(svgContent);
}
