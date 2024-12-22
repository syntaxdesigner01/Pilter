import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle"

const Spinner = () => {
  return (
    <ProgressCircleRoot value={null} size="sm">
      <ProgressCircleRing cap="round" />
    </ProgressCircleRoot>
  )
}


export default Spinner