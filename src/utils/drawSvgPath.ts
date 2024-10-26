import { MotionKeyframesDefinition } from 'motion'

export function drawSvgPath(progress: number): MotionKeyframesDefinition {
  return {
    strokeDashoffset: 1 - progress,
    visibility: 'visible',
  }
}
