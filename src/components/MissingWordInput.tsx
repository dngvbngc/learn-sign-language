import { Input, Text } from "@chakra-ui/react";

interface Props {
  lyric: string;
  onCorrectInput: () => void;
}

const MissingWordInput = ({ lyric, onCorrectInput }: Props) => {
  const words = lyric.split(" ").filter((word: string) => word.trim() !== "");
  const randomIndex = Math.floor(Math.random() * words.length);
  const rawMissingWord = words[randomIndex].match(/^([\w']+)([.,!?;:'"-]*)$/);
  const missingWord = rawMissingWord ? rawMissingWord[1] : words[randomIndex];
  const punctuation = rawMissingWord ? rawMissingWord[2] : "";

  return (
    <>
      {words.slice(0, randomIndex).join(" ")}
      <Input
        marginLeft={2}
        name='missingWord'
        width={100}
        size={{ base: "sm", md: "md" }}
        textAlign='center'
        onChange={(e) => {
          if (e.target.value.toLowerCase() === missingWord.toLowerCase()) {
            onCorrectInput();
            e.target.value = "";
          }
        }}
      />
      {punctuation + " " + words.slice(randomIndex + 1, words.length).join(" ")}
    </>
  );
};

export default MissingWordInput;
