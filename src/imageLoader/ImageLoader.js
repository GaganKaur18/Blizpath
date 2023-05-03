import React,{useState,useEffect} from 'react'
import { Blurhash } from 'react-blurhash'

function ImageLoader({src,hash,width='100%',height='100%'}) {
    const [isImageLoad,setIsImageLoad] = useState(false)
    useEffect(()=>{
        const img = new Image()
        img.onload=()=>{
            setIsImageLoad(true)
        }
    },[src])

  return (
    <>
    {!isImageLoad && (
        <Blurhash
        hash={hash}
        width = {width}
        height= {height}
        resolutionX={32}
        resolutionY={32}
        punch = {1}
        />
    )}
    {isImageLoad && (
        <img 
        src={src}
        alt=''
        width = {width}
        height={height}
        />
    )}
    </>
  )
}

export default ImageLoader