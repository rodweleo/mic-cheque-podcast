import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SubscribeNewsletter(){
    return <form className="flex w-full max-w-xl bg-white">
        <Input placeholder="abc@example.com" className="w-full rounded-r-none"/>
        <Button className="w-full max-w-[125px] rounded-l-none outline-none">Subscribe</Button>
    </form>
}