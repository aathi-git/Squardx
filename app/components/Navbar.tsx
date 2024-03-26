import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
    return (
        <nav className="w-full relative flex items-center place-content-center bg-slate-950 mx-auto px-4 py-5">
            <Link href="/" className="font-bold text-3xl text-white	">
            SquadX
            </Link>
        </nav>
    )
}