"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BrideAndGroom from "./components/bride-and-groom";
import Event from "./components/event";
import Hero from "./components/hero";
import React from "react";
import { CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import ReactAudioPlayer from "react-audio-player";
import Nav from "./components/nav";
import Timeline from "./components/timeline";
import Form from "./components/form";
import SendGifts from "./components/send_gifts";
import { ToastContainer } from "react-toastify";
import Images from "./components/images";
import Thank from "./components/thank";
import Lottie from "lottie-react";
import animationData from "@/assets/heart_anim.json";
import Fab from "./components/fab/fab";
import Timer from "./components/timer";
import Snowfall from "./components/snowfall/Snowfall";

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <div className="h-screen w-screen fixed z-[100] bg-gray-400 flex items-center justify-center">
      <Lottie animationData={animationData} loop={true} />
    </div>
  ) : (
    <>
      <Fab />
      {/* <div className="fixed bottom-10 left-2 z-10">
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
      </div> */}

      <Snowfall />

      <Nav />
      <main>
        <Hero />
        <BrideAndGroom />
        <hr className="opacity-55 text-gray-400" />
        <Event />
        <hr className="opacity-55 text-gray-400" />
        <Timer />
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
