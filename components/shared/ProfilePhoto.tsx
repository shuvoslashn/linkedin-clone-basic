import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ProfilePhoto({ src }: { src: string }) {
    return (
        <Avatar className="border-2 border-blue-700">
            <AvatarImage src={src} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
}
