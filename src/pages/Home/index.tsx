import EpisodeCard from "@/components/episode-card";
import SubscribeNewsletter from "@/components/subscribe-newsletter";
import TopicCard from "@/components/topic-card";
import { Button } from "@/components/ui/button";
import { FaSpotify, FaYoutube } from "react-icons/fa";

export default function Home() {
    return <main>
        <section className="p-10 min-h-screen bg-yellow-300 grid sm:grid-cols-2 sm:flex sm:justify-center sm:gap-20 w-full place-items-center">
            <div className="space-y-10">
                <div className="space-y-4 max-w-3xl">
                    <h1 className='sm:text-7xl font-bold'>Now when you Watch it, You'll Understand</h1>
                    <p className="max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse assumenda ex tenetur dolores impedit, magni voluptatibus facilis quas? Ea ab temporibus debitis deserunt enim asperiores nesciunt dolores ipsa amet voluptas!</p>
                    <ul className='flex gap-5'>
                        <li><Button className='rounded-full w-[200px]'>Start listening</Button></li>
                        <li><Button className='rounded-full w-[200px]' variant="outline">Reach out</Button></li>
                    </ul>
                </div>
                <div className="space-y-2.5">
                    <h2 className="font-semibold text-xl">Catch us here:</h2>
                    <ul className="flex gap-5">
                        <li className="flex items-center gap-1"><FaSpotify size={30} color="green"/><span className="text-xl font-semibold">Spotify</span></li>
                        <li className="flex items-center gap-1"><FaYoutube size={30} color="red"/><span className="text-xl font-semibold">YouTube</span></li>
                    </ul>
                </div>
            </div>
            <img src="/images/MiqChequePodcast_Logo.jpg" className="rounded-full" alt="Mic Cheque Hosts"/>
        </section>

        <section className="min-h-screen space-y-10 w-full p-10 py-20">
            <h1 className="font-bold sm:text-5xl text-center">Latest Episodes</h1>
            <div className="w-fit flex flex-wrap items-center gap-10 justify-center">
                <EpisodeCard/>
                <EpisodeCard/>
                <EpisodeCard/>
                <EpisodeCard/>
                <EpisodeCard/>
                <EpisodeCard/>
            </div>
        </section>

        <section className="h-fit flex flex-wrap gap-20 justify-center py-20 p-5">
           <div className="relative w-fit">
                <div className="bg-yellow-200 bg-opacity-80 rounded-full size-20 absolute -right-5"></div>
                <img src="/images/MiqChequePodcast_Logo.jpg" loading="lazy" alt="Mic Cheque"/>
                <div className="bg-yellow-200 bg-opacity-80 rounded-full animate-pulse size-30 absolute -left-5 bottom-0"></div>
           </div>
           <div className="space-y-5 max-w-xl flex flex-col justify-between">
                <div className="space-y-4">
                    <h1 className="font-bold sm:text-4xl text-2xl">Hi ChequeMates, Meet Your Host</h1>
                    <div className="space-y-4">
                        <p className="text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat blanditiis necessitatibus facere beatae facilis ipsum amet nesciunt! Corporis laboriosam asperiores quibusdam pariatur nemo, aperiam eligendi debitis corrupti numquam, excepturi doloremque.</p>
                        <p className="text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat blanditiis necessitatibus facere beatae facilis ipsum amet nesciunt! Corporis laboriosam asperiores quibusdam pariatur nemo, aperiam eligendi debitis corrupti numquam, excepturi doloremque.</p>
                    </div>
                </div>
                <Button className="rounded-full w-fit px-14 py-6 bg-transparent border border-black text-black hover:bg-yellow-300 transition-all duration-300 hover:border-yellow-300"><a href="#">Learn More</a></Button>
           </div>
        </section>

        <section className="min-h-screen space-y-10 w-full p-10">
            <h1 className="font-bold sm:text-5xl text-center">Topics</h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-10">
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
            </div>
        </section>

        <section className="px-10 py-20 grid grid-cols-1 place-items-center space-y-10 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300">
            <header className="space-y-2.5 text-center max-w-3xl">
                <h1 className="text-slate-800 font-bold sm:text-5xl">Keep in Touch and Stay Inspiring Everyday</h1>
                <p className="text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis aperiam eius enim velit, nam facilis autem aut magnam deserunt fugit in deleniti quo odit suscipit. Dolor quaerat soluta fugiat.</p>
            </header>
            <SubscribeNewsletter/>
        </section>
    </main>
}