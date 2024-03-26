"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { Avater } from "./Avater";

export function About() {
  return (
    <div className="flex items-center justify-center bg-slate-950 h-[40rem]  w-full">
      
        <Avater />
      
      
    </div>
  );
}
