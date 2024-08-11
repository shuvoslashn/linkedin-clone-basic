import Image from "next/image";
import SearchInput from "./SearchInput";
import NavItems from "./NavItems";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <div className="fixed w-full bg-white z-50 py-2 border-b">
            <div className="flex gap-8 items-center max-w-6xl justify-between h-14 mx-auto px-3">
                {/* Left bar */}
                <div className="flex gap-4 items-center">
                    <Image
                        src={"/LinkedIn_logo.png"}
                        width={40}
                        height={40}
                        alt="Linkedin Clone Logo"
                    />
                    <SearchInput />
                </div>

                {/* Right bar */}
                <div className="flex items-center gap-8">
                    <NavItems />
                    <div>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <Button>
                                <SignInButton />
                            </Button>
                        </SignedOut>
                    </div>
                </div>
            </div>
        </div>
    );
}
