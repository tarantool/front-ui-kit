// @flow
/* eslint-disable max-len */
import * as React from 'react';
import { css, cx } from 'emotion';

const style = css`
  & #eczxjgpdt4q42_to {
    animation: eczxjgpdt4q42_to__to 1500ms linear infinite normal forwards;
  }

  @keyframes eczxjgpdt4q42_to__to {
    0% {
      transform: translate(104.357658px,104.499840px);
      animation-timing-function: cubic-bezier(0.470000,0,0.745000,0.715000);
    }

    46.666667% {
      transform: translate(179.667419px,104.500167px);
      animation-timing-function: cubic-bezier(0.390000,0.575000,0.565000,1);
    }

    100% {
      transform: translate(104.357658px,104.500167px);
    }
  }

  & #eczxjgpdt4q43_to {
    animation: eczxjgpdt4q43_to__to 1500ms linear infinite normal forwards;
  }

  @keyframes eczxjgpdt4q43_to__to {
    0% {
      transform: translate(201.513877px,104.499839px);
      animation-timing-function: cubic-bezier(0.470000,0,0.745000,0.715000);
    }
    46.666667% {
      transform: translate(83.486128px,104.500167px);
      animation-timing-function: cubic-bezier(0.390000,0.575000,0.565000,1);
    }
    100% {
      transform: translate(200.538956px,104.500167px);
    }
  }
`;

type Props = { className?: string }

export const TarantoolLogoSpinner = ({ className }: Props) => (
  <svg className={cx(style, className)} viewBox='0 0 285 209' width='285' height='209'>
    <defs>
      <radialGradient
        id='eczxjgpdt4q42-fill'
        cx='210.283005'
        cy='109.552002'
        r='211.647003'
        spreadMethod='pad'
        gradientUnits='userSpaceOnUse'
      >
        <stop id='eczxjgpdt4q42-fill-0' offset='37.313400%' stopColor='rgba(142,145,153,0.5099999904632568)'/>
        <stop id='eczxjgpdt4q42-fill-1' offset='100%' stopColor='rgb(142,145,153)'/>
      </radialGradient>
      <radialGradient
        id='eczxjgpdt4q43-fill'
        cx='128.451996'
        cy='104.079002'
        r='155.093002'
        spreadMethod='pad'
        gradientUnits='userSpaceOnUse'
      >
        <stop id='eczxjgpdt4q43-fill-0' offset='32.971300%' stopColor='rgba(142,145,153,0.4000000059604645)'/>
        <stop id='eczxjgpdt4q43-fill-1' offset='100%' stopColor='rgb(142,145,153)'/>
      </radialGradient>
    </defs>
    <g id='eczxjgpdt4q42_to' transform='translate(104.357658,104.499840)'>
      <path
        id='eczxjgpdt4q42'
        d='M138.015000,10.230400C144.935000,14.749800,157.154000,25.341000,170.270000,38.474400C183.132000,51.354000,193.552000,63.370800,198.207000,70.366000C212.115000,90.708500,212.218000,117.704000,198.512000,138.150000C194.015000,145.071000,183.417000,157.336000,170.270000,170.502000C157.122000,183.668000,144.874000,194.280000,137.961000,198.783000C117.529000,212.516000,90.546000,212.405000,70.225600,198.446000C63.234100,193.772000,51.257300,183.354000,38.422400,170.502000C25.333200,157.395000,14.772700,145.182000,10.244200,138.245000C-3.106620,118.386000,-3.407470,92.319900,9.339790,72.175300C13.233300,65.584300,24.371500,52.544800,38.422400,38.474700C52.473000,24.405000,65.495100,13.251500,72.078000,9.352420C92.180300,-3.403340,118.189000,-3.111130,138.015000,10.230400Z'
        transform='translate(-104.357655,-104.499847)'
        clipRule='evenodd'
        fill='url(#eczxjgpdt4q42-fill)'
        fillRule='evenodd'
        stroke='none'
        strokeWidth='1'
      />
    </g>
    <g id='eczxjgpdt4q43_to' transform='translate(201.513877,104.499839)'>
      <path
        id='eczxjgpdt4q43'
        d='M227.465000,29.081900C233,32.697400,242.776000,41.170400,253.268000,51.677200C263.558000,61.980900,271.895000,71.594700,275.618000,77.190500C286.745000,93.464600,286.827000,115.060000,275.863000,131.417000C272.265000,136.955000,263.787000,146.766000,253.268000,157.299000C242.750000,167.832000,232.952000,176.321000,227.422000,179.925000C211.076000,190.911000,189.490000,190.822000,173.233000,179.655000C167.640000,175.915000,158.059000,167.581000,147.791000,157.298000C137.319000,146.814000,128.871000,137.043000,125.249000,131.494000C114.567000,115.607000,114.327000,94.753800,124.525000,78.638500C127.640000,73.365700,136.550000,62.933500,147.791000,51.677400C159.031000,40.421600,169.449000,31.498800,174.715000,28.379600C190.797000,18.175000,211.604000,18.408700,227.465000,29.081900Z'
        transform='translate(-200.538956,-104.497784)'
        clipRule='evenodd'
        fill='url(#eczxjgpdt4q43-fill)'
        fillRule='evenodd'
        stroke='none'
        strokeWidth='1'
      />
    </g>
  </svg>
);
