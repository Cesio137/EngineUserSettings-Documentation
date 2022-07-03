import { useRef } from "react";
import Plyr, { APITypes } from "plyr-react";
import "plyr-react/plyr.css";

/*
const videoId = "yWtFb9LJs3o";
const provider = "youtube";
const videoOptions = undefined;
*/

type Props = { videoId:any, provider:any, videoOptions:any };

const PlyrComponent = ({ videoId,  provider, videoOptions }: Props) => {
  const ref = useRef<APITypes>(null);

  const enterVideo = () => {
    (ref.current?.plyr as Plyr)?.fullscreen.enter();
  };

  const plyrVideo = 
    videoId && provider ? (
      <Plyr
        ref={ref}
        source={{
          type: "video",
          sources: [
            {
              src: videoId,
              provider: provider
            }
          ]
        }}
        options={videoOptions}
      />
    ) : null;

  return (
    <div>
      {plyrVideo}
      <button onClick={enterVideo}>fullscreen</button>
    </div>
  );
};

export default PlyrComponent;