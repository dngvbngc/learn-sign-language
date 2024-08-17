import { extractTimestampsAndLyrics } from "../utils.ts/videoUtils";
import transcripts from "../../data/transcripts";
import { useState } from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import MissingWordInput from "../components/MissingWordInput";
import VideoPlayer from "../components/VideoPlayer";
import { useParams } from "react-router-dom";

const ReadingGamePage = () => {
  const { id } = useParams();
  const transcript = transcripts[parseInt(id!)];
  const videoPortions = extractTimestampsAndLyrics(transcript.content);
  const [currentLine, setCurrentLine] = useState(0);

  if (currentLine == videoPortions.length)
    return (
      <>
        <Heading>
          {transcript.name} - {transcript.artist}
        </Heading>
        <Text>Congratulations! You have completed this song!</Text>
        <Button onClick={() => setCurrentLine(0)}>Restart</Button>
      </>
    );

  const startTime =
    videoPortions.length > 0 ? videoPortions[currentLine].timestamp : 0;
  const endTime =
    currentLine < videoPortions.length - 1
      ? videoPortions[currentLine + 1].timestamp
      : transcript.duration;
  const currentLyric = transcript.content[currentLine].lyrics;

  return (
    <>
      <Heading>
        {transcript.name} - {transcript.artist}
      </Heading>
      <VideoPlayer
        url={transcript.url}
        startTime={startTime}
        endTime={endTime}
      />
      <MissingWordInput
        lyric={currentLyric}
        onCorrectInput={() => setCurrentLine(currentLine + 1)}
      />
    </>
  );
};

export default ReadingGamePage;
