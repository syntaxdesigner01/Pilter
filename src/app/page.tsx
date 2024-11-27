import React from "react";

import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle";

export default function Home() {
  return (
    <main className="flex w-screen h-screen justify-center items-center">
      <ProgressCircleRoot value={null}>
        <ProgressCircleRing />
      </ProgressCircleRoot>
    </main>
  );
}
