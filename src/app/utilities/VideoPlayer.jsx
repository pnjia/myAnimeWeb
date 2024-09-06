"use client";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ id }) => {
  const [isOpen, setIsOpen] = useState(true);
  const options = {
    width: "250",
    height: "200",
  };
  const handleButton = () => {
    setIsOpen((prevState) => !prevState);
  };
  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button className="rounded bg-color-tertiary text-color-primary p-1 absolute -top-10 right-0" onClick={handleButton}>
          X
        </button>
        <YouTube videoId={id} opts={options} />
      </div>
    );
  };
  const ButtonOpenTrailer = () => {
    return (
      <button className="fixed text-l transition-all rounded hover:text-color-accent bg-color-primary text-color-black bottom-2 right-2" onClick={handleButton}>
        Tonton trailer
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenTrailer />;
};
export default VideoPlayer;
