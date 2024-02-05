import { cowWalkFrame1, cowWalkFrame2 } from "./cow-frames";

export const cow = `
  <g width="128" height="128" fill="none" > 
    <g width="128" height="128" fill="none" >
      ${cowWalkFrame1}
      <animate attributeName="visibility" values="visible;hidden" dur="1s" repeatCount="indefinite" />
    </g>
    <g width="128" height="128" fill="none" >
      ${cowWalkFrame2}
      <animate attributeName="visibility" values="hidden;visible" dur="1s" repeatCount="indefinite" />
    </g>
  </g>
`;

export const walkingCow = `
<svg width="600" height="128" xmlns="http://www.w3.org/2000/svg">
${cow}
<animateTransform attributeName="transform" type="translate" values="-100,0;700,0" dur="16s" repeatCount="indefinite" />
</svg>
`;
