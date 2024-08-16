import { FaVolumeHigh } from "react-icons/fa6";
import { IoShuffle } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function NowPlayingBar() {
    const [isFavorite, setFavorite] = useState<boolean>(false)
    const [onShuffleMode, setShuffleMode] = useState<boolean>(true)
    const [onRepeat, setRepeatMode] = useState<boolean>(true)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const toggleFavorite = () => {
        setFavorite(!isFavorite)
    }

    const toggleShuffleMode = () => {
        setShuffleMode(!onShuffleMode)
    }

    const toggleRepeatMode = () => {
        setRepeatMode(!onRepeat)
    }

    const togglePlaying = () => {
        setIsPlaying(!isPlaying)
    }





    return (
        <section className="bg-yellow-800 w-full p-5 flex items-center justify-around">
            <div className="flex gap-2 min-w-[300px]">
                <img src="/images/MiqChequePodcast_Logo.jpg" className="rounded-full" alt="Mic Cheque Hosts" width="50px" />
                <div>
                    <h1 className="font-bold text-lg text-white">Welcome Home</h1>
                    <p className="font-semibold text-md text-slate-300">John Doe</p>
                </div>
            </div>
            <div className="flex items-center gap-10">
                <ul className="flex items-center gap-5 text-2xl text-white w-fit ">
                    <li><button className="active:scale-75" title="Previous"><IoPlaySkipBackSharp /></button></li>
                    <li>
                        {
                            isPlaying ? <button className="active:scale-75" title="Pause"><IoPause /></button> : 
                            <button className="active:scale-75" title="Play" onClick={togglePlaying}><FaPlay size={20} className="mb-1"/></button>
                        }
                    </li> 
                    <li><button className="active:scale-75" title="Next"><IoPlaySkipForward /></button></li>
                    <li><button title="Like" className="active:scale-75" onClick={toggleFavorite}><MdFavorite className={`transition-all ease-in-out duration-300 ${isFavorite ? 'fill-yellow-300' : 'fill-white'}`}/></button></li>
                </ul>
                <div className="w-[600px] text-2xl flex items-center gap-5">
                    <div className="w-full bg-slate-400 rounded-full">
                        <hr className="w-3/4 h-2 bg-yellow-300 border-none outline-none rounded-full" />
                    </div>
                    <span className="text-slate-200 font-semibold">3:23</span>
                </div>
            </div>
            <div className="flex items-center gap-5 text-2xl">
                <div className="flex items-center gap-2.5">
                    <FaVolumeHigh className="text-white" />
                    <input type="range" name="volume" id="volume" title="Volume" className=" accent-yellow-300 cursor-pointer" max={100} min={25} defaultValue={30} />
                </div>
                <ul className="flex gap-5 text-2xl text-white">
                    <li><button title="Shuffle" onClick={toggleShuffleMode} className="active:scale-75"><IoShuffle className={`${onShuffleMode && "text-yellow-300"}`}/></button></li>
                    <li><button title="Repeat" onClick={toggleRepeatMode} className="active:scale-75"><BsArrowRepeat className={`${onRepeat && "text-yellow-300"}`}/></button></li>
                    <li><button title="Playlist" className="active:scale-75"><RiPlayList2Fill /></button></li>
                </ul>
            </div>
            <button title="Close" className="text-slate-400/80 transition-all duration-300 hover:text-red-500"><IoClose size={35}/></button>
        </section>
    )
}