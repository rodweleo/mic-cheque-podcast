export default function TopicCard(){
    return <div className="relative max-w-[350px] space-y-2">
            <img src="/src/assets/images/MiqChequePodcast_Logojpg.jpg" width="350px" alt=""/>
            <div className="space-y-1 absolute bg-black w-full bottom-0 backdrop-blur-md bg-opacity-80 p-2">
                <h2 className="font-bold sm:text-3xl sm:text-x2l text-white">Personal Branding</h2>
                <p className="text-slate-200 sm:text-xl font-medium">40 Episodes</p>
            </div>
    </div>
}