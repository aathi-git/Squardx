import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Hero() {
    return (
        <div className="h-[50rem] max-h-full w-full flex flex-col justify-center items-center bg-slate-950 antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <h1 className="text-1xl md:text-2xl pt-0 pr-0 font-bold absolute top-0 right-0 m-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">SquadX</h1>
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-15 text-center">
                <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Building Autonomous Drones <br /> for SAEINDIA
                </h1>

                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    SquadX, One of the team of robotics club at Easwari Engineering College, is dedicated to creating cutting-edge autonomous drones for SAEINDIA competitions. Our mission is to innovate, collaborate, and excel in the field of robotics and autonomous systems.
                </p>
            </div>
        </div>
    );
}
