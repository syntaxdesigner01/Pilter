import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle"

const Spinner = ({color}:{color?:string}) => {
  return (
    <ProgressCircleRoot value={null} size="sm" colorPalette={ color ? color : "white"}>
      <ProgressCircleRing cap="round" css={{'--thickness':'2px'}} />
    </ProgressCircleRoot>
  )
}


export default Spinner