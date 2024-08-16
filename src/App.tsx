import { extractTimestampsAndLyrics } from "./utils.ts/videoUtils";
import transcripts from "../data/transcripts";
import { useState } from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import VideoPlayer from "./components/videoPlayer";

const App = () => {
  const transcript = transcripts[0];
  const videoPortions = extractTimestampsAndLyrics(transcript.content);
  const [currentLine, setCurrentLine] = useState(0);

  if (currentLine == videoPortions.length)
    return (
      <>
        <Heading>
          {transcript.name} - {transcript.artist}
        </Heading>
        <Text>Congratulations! You have learned this song!</Text>
        <Button onClick={() => setCurrentLine(0)}>Restart</Button>
      </>
    );

  const startTime =
    videoPortions.length > 0 ? videoPortions[currentLine].timestamp : 0;
  const endTime =
    currentLine < videoPortions.length - 1
      ? videoPortions[currentLine + 1].timestamp
      : transcript.duration;

  return (
    <>
      <Heading>
        {transcript.name} - {transcript.artist}
      </Heading>
      <VideoPlayer startTime={startTime} endTime={endTime}></VideoPlayer>
      <Text>{transcript.content[currentLine].lyrics}</Text>
      <Button onClick={() => setCurrentLine(currentLine + 1)}>Click</Button>
    </>
  );
};

export default App;
