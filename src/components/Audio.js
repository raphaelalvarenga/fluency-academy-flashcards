import React, { useRef, useState, useEffect } from "react";
import { CardAudio, PlayButton, AudioTrack, AudioBackgroundRed, AudioBackgroundGrey, AudioFrequencyHigh, AudioFrequencyLow, AudioFrequencyTick } from "../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Audio = ({ src }) => {
    const audioRef = useRef();

    const [audio, setAudio] = useState({duration: "0s", width: "0%", icon: faPlay, isPlaying: false});
    const [highTicks, setHighTicks] = useState([]);
    const [lowTicks, setLowTicks] = useState([]);
    const [greyBackground, setGreyBackground] = useState(0);

    useEffect(() => {
        setWidth();
    }, [lowTicks]);

    const setWidth = () => {
        setGreyBackground(100);
    }

    const play = () => {
        setAudio({duration: `${audioRef.current.duration}s`, width: "100%", icon: faPause, isPlaying: true});
        audioRef.current.play();
    }

    const stop = () => {
        setAudio({duration: "0s", width: "0%", icon: faPlay, isPlaying: false});
        audioRef.current.load();
    }

    useEffect(() => {
        const tempTicks = [];
        for (let x = 0; x < 175; x++) {
            const isEven = x % 2 === 0 ? true : false;

            const tempTick = isEven ? 25 : Math.floor(Math.random() * (22 - 4)) + 4;
            
            tempTicks.push(tempTick);
        }

        setHighTicks(tempTicks);
        setLowTicks(tempTicks);
    }, [])
  
    return (
        <CardAudio>
            <div>
                <audio
                    controls = "controls"
                    preload = "auto"
                    autobuffer = "true"
                    style = {{display: "none"}}
                    ref = {audioRef}
                    id = "teste"
                    onEnded = {stop}
                >
                    <source src={src} />
                </audio>

                <AudioTrack>
                    <AudioBackgroundGrey width = {greyBackground}></AudioBackgroundGrey>
                    <AudioBackgroundRed duration = {audio.duration} width = {audio.width}></AudioBackgroundRed>
                    <AudioFrequencyHigh>
                        {
                            highTicks.map((tick, index) => <AudioFrequencyTick key = {index} tick = {tick}></AudioFrequencyTick>)
                        }
                    </AudioFrequencyHigh>

                    <AudioFrequencyLow>
                        {
                            lowTicks.map((tick, index) => <AudioFrequencyTick key = {index} tick = {tick}></AudioFrequencyTick>)
                        }
                    </AudioFrequencyLow>
                </AudioTrack>
            </div>

            <div>
                <PlayButton onClick = {audio.isPlaying ? stop : play}>
                    <FontAwesomeIcon icon = {audio.icon} />
                </PlayButton>
            </div>
        </CardAudio>
    );
}

export default Audio;