import React, { useRef } from "react";
import { CardAudio, PlayButton } from "../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Audio = ({ src }) => {
    const audioRef = useRef();
  
    return (
        <CardAudio>
            <div>
                <audio
                    controls = "controls"
                    preload = "auto"
                    autobuffer = "true"
                    style = {{display: "none"}}
                    ref = {audioRef}
                >
                    <source src={src} />
                </audio>
            </div>

            <div>
                <PlayButton onClick = {() => audioRef.current.play()}>
                    <FontAwesomeIcon icon = {faPlay} />
                </PlayButton>
            </div>
        </CardAudio>
    );
}

export default Audio;