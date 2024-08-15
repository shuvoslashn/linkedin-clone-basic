import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
    const user = await currentUser();

    return (
        <div className="mt-[73px] pt-4">
            <div className="max-w-6xl mx-auto flex justify-between gap-8">
                <Sidebar user={user} />
                <Feed />
                <News />
            </div>
        </div>
    );
}
