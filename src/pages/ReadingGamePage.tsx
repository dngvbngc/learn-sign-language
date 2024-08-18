import { extractTimestampsAndLyrics } from "../utils.ts/videoUtils";
import transcripts from "../../data/transcripts";
import { useState } from "react";
import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import MissingWordInput from "../components/MissingWordInput";
import VideoPlayer from "../components/VideoPlayer";
import { Link, useParams } from "react-router-dom";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import ReactConfetti from "react-confetti";

const ReadingGamePage = () => {
  const { id } = useParams();
  const transcript = transcripts[parseInt(id!)];
  const videoPortions = extractTimestampsAndLyrics(transcript.content);
  const [currentLine, setCurrentLine] = useState(0);

  if (currentLine === videoPortions.length)
    return (
      <>
        <ReactConfetti />
        <Heading>
          {transcript.name} - {transcript.artist}
        </Heading>
        <Text padding={5}>You have completed this song!</Text>
        <VideoPlayer
          url='https://www.youtube.com/embed/C0HCP1b8zJk'
          startTime={0}
          endTime={3}
        />
        <HStack marginTop={{ base: 3, md: 3 }} justify='center'>
          <Button onClick={() => setCurrentLine(0)}>Restart</Button>
          <Link to='/reading'>
            <Button backgroundColor='brand.100' color='black'>
              Play Another
            </Button>
          </Link>
        </HStack>
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
      <Heading paddingBottom={2} fontSize='xx-large'>
        {transcript.name} - {transcript.artist}
      </Heading>
      <Text paddingBottom={1} fontSize='small' fontWeight='light'>
        <InfoOutlineIcon marginRight={2} />
        Insert the missing word from the lyric to progress
      </Text>
      <VideoPlayer
        url={transcript.url}
        startTime={startTime}
        endTime={endTime}
      />
      <Box marginTop={{ base: 5, md: 5 }}>
        <MissingWordInput
          lyric={currentLyric}
          onCorrectInput={() => setCurrentLine(currentLine + 1)}
        />
      </Box>
    </>
  );
};

export default ReadingGamePage;
