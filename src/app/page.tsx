"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BrideAndGroom from "./components/bride-and-groom";
import Event from "./components/event";
import Hero from "./components/hero";
import React from "react";
import { CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import Snowfall from "react-snowfall";
import ReactAudioPlayer from "react-audio-player";
import Nav from "./components/nav";
import Timeline from "./components/timeline";
import Form from "./components/form";
import SendGifts from "./components/send_gifts";
import { ToastContainer } from "react-toastify";
import Images from "./components/images";
import Thank from "./components/thank";

export default function Home() {
  const [isVolumeOn, setIsVolumeOn] = React.useState(false);
  const audioRef = React.useRef<any>(null);
  console.log("🚀 ~ Home ~ audioRef:", audioRef);

  React.useEffect(() => {
    console.log(
      "🚀 ~ React.useEffect ~ audioRef.current.audioEl:",
      audioRef.current.audioEl
    );
    if (audioRef != null && audioRef.current != null) {
      if (isVolumeOn) {
        audioRef.current.audioEl.current.play();
      } else {
        audioRef.current.audioEl.current.pause();
      }
    }
  }, [isVolumeOn, audioRef]);

  return (
    <>
      <div className="fixed bottom-10 left-2 z-10">
        <div
          onClick={() => setIsVolumeOn(!isVolumeOn)}
          className="bg-pink-400 cursor-pointer outline-1 outline-pink-400 outline-offset-1  text-white w-[40px] h-[40px] text-[20px] rounded-full flex items-center justify-center"
        >
          {isVolumeOn ? <CiVolumeHigh /> : <CiVolumeMute />}
        </div>

        <ReactAudioPlayer
          ref={audioRef}
          style={{
            display: "none",
          }}
          src="song.mp3"
          controls
        />
      </div>
      <Snowfall
        color="red"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        snowflakeCount={10}
      />

      <Nav />
      <main>
        <Hero />
        <BrideAndGroom />
        <hr className="opacity-55 text-gray-400" />
        <Event />
        <hr className="opacity-55 text-gray-400" />
        <Timeline />
        <hr className="opacity-55 text-gray-400" />
        <Form />
        <hr className="opacity-55 text-gray-400" />
        <SendGifts />
        <hr className="opacity-55 text-gray-400" />
        <Images />
        <hr className="opacity-55 text-gray-400" />
        <Thank />
      </main>
    </>
  );
}
