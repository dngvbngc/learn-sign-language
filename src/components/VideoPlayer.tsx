import { AspectRatio } from "@chakra-ui/react";

interface Props {
  url: string;
  startTime: number;
  endTime: number;
}

const VideoPlayer = ({ url, startTime, endTime }: Props) => {
  return (
    <AspectRatio
      marginLeft={{ base: 0, md: "20vw" }}
      maxW={{ base: "90vw", md: "60vw" }}
      ratio={16 / 9}
    >
      <iframe
        src={`${url}?start=${startTime}&end=${endTime}&autoplay=1&mute=1`}
        title='My Love Mine All Mine Song (ASL)'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      />
    </AspectRatio>
  );
};

export default VideoPlayer;
