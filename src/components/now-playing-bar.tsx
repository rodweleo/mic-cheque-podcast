import { FaVolumeHigh } from "react-icons/fa6";
import { IoShuffle } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import formatTime from "@/helpers/formatTime";

export default function NowPlayingBar() {
    const [isFavorite, setFavorite] = useState<boolean>(false)
    const [onShuffleMode, setShuffleMode] = useState<boolean>(true)
    const [onRepeat, setRepeatMode] = useState<boolean>(true)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const audioPlayerRef = useRef<HTMLAudioElement | null>(null)
    const durationRef = useRef<HTMLSpanElement | null>(null)
    const audioVolumeRef = useRef<HTMLInputElement | null>(null)
    const seekRef = useRef<HTMLInputElement | null>(null)
    const nowPlayingRef = useRef<HTMLDivElement | null>(null)

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
        if(audioPlayerRef.current){
            if(audioPlayerRef.current.paused){
                audioPlayerRef.current.play()
                setIsPlaying(true)
            }
        }
        
    }

    const pauseAudio = () => {
        if(audioPlayerRef.current){
            if(audioPlayerRef.current.played){
                audioPlayerRef.current.pause()
                setIsPlaying(false)
            }
        }
    }

    if(isPlaying){
        if(audioPlayerRef.current){
            if(audioPlayerRef.current?.played){
                if(durationRef.current){
                    setInterval(() => {
                        
                    }, 1000)   
                }
            }
       }
    }

    const handleSongEnded = () => {
        setIsPlaying(false)
    }

    const handleSongLoaded = () => {
        seekRef.current!.value = "0";
        if(durationRef.current){
            durationRef.current!.innerText = formatTime(Math.floor(audioPlayerRef.current!.duration))
        }
    }

    const handleVolumeChange = (e: Event) => {
        if(audioPlayerRef.current){
            audioPlayerRef.current.volume = Number((e.target as HTMLInputElement).value) / 100
        }
    }

    

    const handleAudioPlaying = (e: Event) => {
        if(seekRef.current && durationRef.current){
            const updateRefId = setInterval(() => {
                const remainingSongSeconds = Math.floor(audioPlayerRef.current!.duration) - Math.floor(audioPlayerRef.current!.currentTime)
                seekRef.current!.value = Math.floor((Math.floor(audioPlayerRef.current!.currentTime) / Math.floor((e.target as HTMLAudioElement).duration)) * 100).toString()
                durationRef.current!.innerText = formatTime(remainingSongSeconds)
            }, 1000)

            //Stopping the countdown when the user pauses the song
            audioPlayerRef.current!.addEventListener("pause", () => {
                clearInterval(updateRefId)
            })

            //Resetting the seek bar after the song has finished playing
            if(Math.floor((Math.floor(audioPlayerRef.current!.currentTime) / Math.floor((e.target as HTMLAudioElement).duration)) * 100) === 100){
                clearInterval(updateRefId)
            }
        }
    }

    const toggleMute = () => {

    }
    

    useEffect(() => {
        if(audioPlayerRef.current){
            audioPlayerRef.current.addEventListener("ended", handleSongEnded)
            audioPlayerRef.current.addEventListener("loadeddata", handleSongLoaded)
        }

        if(audioVolumeRef.current){
            audioVolumeRef.current.addEventListener("input", handleVolumeChange)
        }

        if(audioPlayerRef.current){
            audioPlayerRef.current.addEventListener("playing", handleAudioPlaying)
        }

        if(seekRef.current){
            seekRef.current?.addEventListener("input", (e) => {
                const selectedSeekPosition = Number((e.target as HTMLInputElement).value)
                
                const currentTime = (selectedSeekPosition * audioPlayerRef.current!.duration) / 100
                //update the current time
                audioPlayerRef.current!.currentTime = currentTime;
            })
        }
    }, [])

    
    return (
       <section ref={nowPlayingRef}>
         <section className="bg-yellow-800 w-full p-5 flex items-center justify-around">
            <div className="flex gap-2 min-w-[300px]">
                <div className={`${isPlaying && 'animate-spin'} p-5  bg-black rounded-full bg-gradient-to-t from-slate-800 via-slate-700 to-slate-800`}>
                    <img src="/images/MiqChequePodcast_Logo.jpg" className="rounded-full" alt="Mic Cheque Hosts" width="25px" />
                </div>
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
                            isPlaying ? <button className="active:scale-75" title="Pause" onClick={pauseAudio}><IoPause /></button> : 
                            <button className="active:scale-75" title="Play" onClick={togglePlaying}><FaPlay size={20} className="mb-[1px]"/></button>
                        }
                    </li> 
                    <li><button className="active:scale-75" title="Next"><IoPlaySkipForward /></button></li>
                    <li><button title="Like" className="active:scale-75" onClick={toggleFavorite}><MdFavorite className={`transition-all ease-in-out duration-300 ${isFavorite ? 'fill-yellow-300' : 'fill-white'}`}/></button></li>
                </ul>
                <div className="w-[600px] text-lg flex items-center gap-5">
                    <input type="range" ref={seekRef} name="seek" id="seek" title="Seek" className=" accent-yellow-300 cursor-pointer w-full" max={100} min={0} />
                    <span className="text-slate-200 font-semibold mb-[1px]" ref={durationRef}></span>
                </div>
            </div>
            <div className="flex items-center gap-5 text-2xl">
                <div className="flex items-center gap-2.5">
                    <button title="Mute" className="active:scale-75" onClick={toggleMute}><FaVolumeHigh className="text-white" /></button>
                    <input type="range" name="volume" id="volume" title="Volume" className=" accent-yellow-300 cursor-pointer" max={100} min={0} defaultValue={30} ref={audioVolumeRef} />
                </div>
                <ul className="flex gap-5 text-2xl text-white">
                    <li><button title="Shuffle" onClick={toggleShuffleMode} className="active:scale-75"><IoShuffle className={`${onShuffleMode && "text-yellow-300"}`}/></button></li>
                    <li><button title="Repeat" onClick={toggleRepeatMode} className="active:scale-75"><BsArrowRepeat className={`${onRepeat && "text-yellow-300"}`}/></button></li>
                    <li><button title="Playlist" className="active:scale-75"><RiPlayList2Fill /></button></li>
                </ul>
            </div>
            <button title="Close" onClick={() => nowPlayingRef.current!.className += "hidden"} className="text-slate-400/80 transition-all duration-300 hover:text-red-500"><IoClose size={35}/></button>
        </section>
        <audio ref={audioPlayerRef} src="/audio/A1 x J1 Aitch  Scary.mp3"></audio>
       </section>
    )
}