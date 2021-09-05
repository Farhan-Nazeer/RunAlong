import * as React from "react"
import Svg, { Path, Mask, Circle } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={296}
      height={296}
      fill="none"
      viewBox="0 0 296 296"
    >
      <Path
        stroke="#fff"
        d="M204 179.726l22 12.279M217.956 204.471l22.071 17.816M227.695 235.492l20.108 21.919"
      />
      <Path
        fill="#10F5E2"
        d="M296 148c0 81.738-66.262 148-148 148S0 229.738 0 148 66.262 0 148 0s148 66.262 148 148zm-30 0c0 65.17-52.83 118-118 118S30 213.17 30 148 82.83 30 148 30s118 52.83 118 118z"
      />
      <Mask
        id="prefix__a"
        width={238}
        height={238}
        x={29}
        y={29}
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <Path fill="#fff" d="M29 29h238v238H29z" />
        <Path d="M148 266c65.17 0 118-52.83 118-118S213.17 30 148 30 30 82.83 30 148s52.83 118 118 118zm0-28c49.706 0 90-40.294 90-90s-40.294-90-90-90-90 40.294-90 90 40.294 90 90 90z" />
      </Mask>
      <Path
        fill="#7CE01D"
        d="M148 266c65.17 0 118-52.83 118-118S213.17 30 148 30 30 82.83 30 148s52.83 118 118 118zm0-28c49.706 0 90-40.294 90-90s-40.294-90-90-90-90 40.294-90 90 40.294 90 90 90z"
      />
      <Path
        fill="#fff"
        d="M265 148c0 64.617-52.383 117-117 117v2c65.722 0 119-53.278 119-119h-2zM148 31c64.617 0 117 52.383 117 117h2c0-65.722-53.278-119-119-119v2zM31 148C31 83.383 83.383 31 148 31v-2C82.278 29 29 82.278 29 148h2zm117 117c-64.617 0-117-52.383-117-117h-2c0 65.722 53.278 119 119 119v-2zm89-117c0 49.153-39.847 89-89 89v2c50.258 0 91-40.742 91-91h-2zm-89-89c49.153 0 89 39.847 89 89h2c0-50.258-40.742-91-91-91v2zm-89 89c0-49.153 39.847-89 89-89v-2c-50.258 0-91 40.742-91 91h2zm89 89c-49.153 0-89-39.847-89-89h-2c0 50.258 40.742 91 91 91v-2z"
        mask="url(#prefix__a)"
      />
      <Mask
        id="prefix__b"
        width={238}
        height={238}
        x={29}
        y={29}
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <Path fill="#fff" d="M29 29h238v238H29z" />
        <Path d="M148 266c65.17 0 118-52.83 118-118S213.17 30 148 30 30 82.83 30 148s52.83 118 118 118zm0-28c49.706 0 90-40.294 90-90s-40.294-90-90-90-90 40.294-90 90 40.294 90 90 90z" />
      </Mask>
      <Path
        fill="#7CE01D"
        d="M148 266c65.17 0 118-52.83 118-118S213.17 30 148 30 30 82.83 30 148s52.83 118 118 118zm0-28c49.706 0 90-40.294 90-90s-40.294-90-90-90-90 40.294-90 90 40.294 90 90 90z"
      />
      <Path
        fill="#fff"
        d="M265 148c0 64.617-52.383 117-117 117v2c65.722 0 119-53.278 119-119h-2zM148 31c64.617 0 117 52.383 117 117h2c0-65.722-53.278-119-119-119v2zM31 148C31 83.383 83.383 31 148 31v-2C82.278 29 29 82.278 29 148h2zm117 117c-64.617 0-117-52.383-117-117h-2c0 65.722 53.278 119 119 119v-2zm89-117c0 49.153-39.847 89-89 89v2c50.258 0 91-40.742 91-91h-2zm-89-89c49.153 0 89 39.847 89 89h2c0-50.258-40.742-91-91-91v2zm-89 89c0-49.153 39.847-89 89-89v-2c-50.258 0-91 40.742-91 91h2zm89 89c-49.153 0-89-39.847-89-89h-2c0 50.258 40.742 91 91 91v-2z"
        mask="url(#prefix__b)"
      />
      <Mask id="prefix__c" fill="#fff">
        <Path d="M238 148c0 49.706-40.294 90-90 90s-90-40.294-90-90 40.294-90 90-90 90 40.294 90 90zm-25 0c0 35.899-29.101 65-65 65s-65-29.101-65-65 29.101-65 65-65 65 29.101 65 65z" />
      </Mask>
      <Path
        fill="#FFB005"
        d="M238 148c0 49.706-40.294 90-90 90s-90-40.294-90-90 40.294-90 90-90 90 40.294 90 90zm-25 0c0 35.899-29.101 65-65 65s-65-29.101-65-65 29.101-65 65-65 65 29.101 65 65z"
      />
      <Path
        fill="#fff"
        d="M148 239c50.258 0 91-40.742 91-91h-2c0 49.153-39.847 89-89 89v2zm-91-91c0 50.258 40.742 91 91 91v-2c-49.153 0-89-39.847-89-89h-2zm91-91c-50.258 0-91 40.742-91 91h2c0-49.153 39.847-89 89-89v-2zm91 91c0-50.258-40.742-91-91-91v2c49.153 0 89 39.847 89 89h2zm-91 66c36.451 0 66-29.549 66-66h-2c0 35.346-28.654 64-64 64v2zm-66-66c0 36.451 29.549 66 66 66v-2c-35.346 0-64-28.654-64-64h-2zm66-66c-36.451 0-66 29.549-66 66h2c0-35.346 28.654-64 64-64v-2zm66 66c0-36.451-29.549-66-66-66v2c35.346 0 64 28.654 64 64h2z"
        mask="url(#prefix__c)"
      />
      <Mask id="prefix__d" fill="#fff">
        <Path d="M238 148c0 49.706-40.294 90-90 90s-90-40.294-90-90 40.294-90 90-90 90 40.294 90 90zm-25 0c0 35.899-29.101 65-65 65s-65-29.101-65-65 29.101-65 65-65 65 29.101 65 65z" />
      </Mask>
      <Path
        fill="#FFB005"
        d="M238 148c0 49.706-40.294 90-90 90s-90-40.294-90-90 40.294-90 90-90 90 40.294 90 90zm-25 0c0 35.899-29.101 65-65 65s-65-29.101-65-65 29.101-65 65-65 65 29.101 65 65z"
      />
      <Path
        fill="#fff"
        d="M148 239c50.258 0 91-40.742 91-91h-2c0 49.153-39.847 89-89 89v2zm-91-91c0 50.258 40.742 91 91 91v-2c-49.153 0-89-39.847-89-89h-2zm91-91c-50.258 0-91 40.742-91 91h2c0-49.153 39.847-89 89-89v-2zm91 91c0-50.258-40.742-91-91-91v2c49.153 0 89 39.847 89 89h2zm-91 66c36.451 0 66-29.549 66-66h-2c0 35.346-28.654 64-64 64v2zm-66-66c0 36.451 29.549 66 66 66v-2c-35.346 0-64-28.654-64-64h-2zm66-66c-36.451 0-66 29.549-66 66h2c0-35.346 28.654-64 64-64v-2zm66 66c0-36.451-29.549-66-66-66v2c35.346 0 64 28.654 64 64h2z"
        mask="url(#prefix__d)"
      />
      <Circle cx={148} cy={148} r={65} fill="#FA255C" />
      <Circle cx={148} cy={148} r={65.5} stroke="#fff" />
      <Circle cx={148} cy={148} r={65} fill="#FA255C" />
      <Circle cx={148} cy={148} r={65.5} stroke="#fff" />
      <Circle cx={148} cy={148} r={65} fill="#FA255C" />
      <Circle cx={148} cy={148} r={65.5} stroke="#fff" />
      <Circle cx={148} cy={148} r={65} fill="#FA255C" />
      <Circle cx={148} cy={148} r={65.5} stroke="#fff" />
      <Circle cx={148} cy={148} r={65} fill="#FA255C" />
      <Circle cx={148} cy={148} r={65.5} stroke="#fff" />
    </Svg>
  )
}

export default SvgComponent
