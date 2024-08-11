import { Input } from "./ui/input";

export default function SearchInput() {
    return (
        <div className="md:block hidden">
            <Input
                type="text"
                placeholder="Search"
                className="bg-[#EDF3F8] border-none"
            />
        </div>
    );
}
