import { cow1Rects, cow2Rects } from "./cow-rects";

export const cow = `
<svg width="600" height="128" xmlns="http://www.w3.org/2000/svg">
  <g width="128" height="128" fill="none" > 
    <g width="128" height="128" fill="none" >
      ${cow1Rects}
      <animate attributeName="visibility" values="visible;hidden" dur="1s" repeatCount="indefinite" />
    </g>
    <g width="128" height="128" fill="none" >
      ${cow2Rects}
      <animate attributeName="visibility" values="hidden;visible" dur="1s" repeatCount="indefinite" />
    </g>
    <animateTransform attributeName="transform" type="translate" values="-100,0;800,0" dur="16s" repeatCount="indefinite" />
  </g>
</svg>
`;
