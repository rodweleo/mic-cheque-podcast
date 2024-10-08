import { FaPlay } from "react-icons/fa";
import { Badge } from "./ui/badge";

export default function EpisodeCard(){
    return <div className="relative max-w-[350px] space-y-2">
        <div className="relative">
            <img src="/images/MiqChequePodcast_Logo.jpg" width="350px" alt="Mic Cheque"/>
            <span className="bg-black text-white py-3 px-6 absolute bottom-5 right-0 font-semibold text-xl">EP 69</span>
        </div>
        <div className="space-y-2">
            <h3 className="flex items-center justify-between"><span className="font-semibold text-xl">John Doe</span> <Badge className="bg-yellow-300 text-yellow-800 hover:bg-yellow-400 cursor-pointer"><a href="">Pure Banter</a></Badge></h3>
            <h2 className="font-bold text-3xl">P.A.Y.E (Pay As You Exist)</h2>
            <p className="text-slate-500 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam sequi quam tenetur magni officia, consequatur, eveniet expedita exercitationem quo, esse voluptate beatae error iste quod. Incidunt nam numquam veritatis!</p>
            <ul className="flex items-center justify-between">
                <li><button className="font-bold text-xl flex items-center gap-1"><FaPlay size={15}/> <span>Play Episode</span></button></li>
                <li><p className="text-slate-500 text-xl">40 mins</p></li>
            </ul>
        </div>
    </div>
}