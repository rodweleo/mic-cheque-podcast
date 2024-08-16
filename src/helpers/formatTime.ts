const formatTime = (nativeSeconds: number) => {
    const minutes: number = Math.floor(nativeSeconds / 60); 
    const hours: number = minutes > 60 ? Math.floor(minutes % 60) : 0;
    const seconds: number = Math.floor(nativeSeconds % 60)

    let time = ""

    if(hours === 0){
        time = `${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`
    }else {
        time = `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`
    }

    return time;
}

export default formatTime;