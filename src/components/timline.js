"use client";
import React from "react";
import { Timeline } from "./ui/timeline";
import { aboutUs_data } from "../utils/about_us_data";

export function TimelineDemo() {
  return (
    <div className="relative w-full overflow-hidden bg-[#f5f3ef] py-10 md:py-20 px-4">
      <Timeline aboutUs_data={aboutUs_data} />
    </div>
  );
}
