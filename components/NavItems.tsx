import {
    Bell,
    BriefcaseBusiness,
    Home,
    MessageCircleMore,
    User,
} from "lucide-react";
import Link from "next/link";

export default function NavItems() {
    type NAVITEMS = {
        src: string;
        icon: JSX.Element;
        text: string;
    };

    const navItems: NAVITEMS[] = [
        {
            src: "/home",
            icon: <Home />,
            text: "Home",
        },
        {
            src: "/networks",
            icon: <User />,
            text: "My Network",
        },
        {
            src: "/jobs",
            icon: <BriefcaseBusiness />,
            text: "Jobs",
        },
        {
            src: "/message",
            icon: <MessageCircleMore />,
            text: "Messaging",
        },
        {
            src: "/notification",
            icon: <Bell />,
            text: "Notification",
        },
    ];
    return (
        <div className="gap-8 hidden lg:flex">
            {navItems.map((navItem) => {
                return (
                    <Link
                        href={`${navItem.src}`}
                        key={navItem.text}
                        className="flex gap-1 flex-col items-center text-[#666] hover:text-[#000] cursor-pointer"
                    >
                        <span>{navItem.icon}</span>
                        <span className="text-xs">{navItem.text}</span>
                    </Link>
                );
            })}
        </div>
    );
}
