import { ChevronDownIcon, InfoOutlineIcon, SearchIcon } from "@chakra-ui/icons";
import transcripts from "../../data/transcripts";
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import GameCard from "../components/GameCard";
import { useRef, useState } from "react";

const ReadingPage = () => {
  const [languageFilter, setLanguageFilter] = useState("All");
  const [textFilter, setTextFilter] = useState("");

  const languages = [
    "All",
    ...Array.from(new Set(transcripts.map((t) => t.language))),
  ];

  const filteredGamesByLanguages =
    languageFilter !== "All"
      ? transcripts.filter((t) => t.language === languageFilter)
      : transcripts;
  const filteredGames =
    textFilter !== ""
      ? filteredGamesByLanguages.filter(
          (t) =>
            t.name.toLowerCase().includes(textFilter) ||
            t.artist.toLowerCase().includes(textFilter)
        )
      : filteredGamesByLanguages;

  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box>
      <Box padding={5} paddingTop={0} paddingBottom={0}>
        <HStack justifyContent='space-between'>
          <Heading>Reading</Heading>
          <InputGroup marginLeft={2} paddingRight={2}>
            <InputLeftElement children={<SearchIcon />} />
            <Input
              ref={ref}
              borderRadius={20}
              placeholder=''
              variant='filled'
              onChange={() => {
                if (ref.current) {
                  setTextFilter(ref.current.value.toLowerCase());
                }
              }}
            />
          </InputGroup>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Show above='md'>
                <Text marginRight={5}>{languageFilter}</Text>
              </Show>
            </MenuButton>
            <MenuList>
              {languages.map((l) => (
                <MenuItem key={l} onClick={() => setLanguageFilter(l)}>
                  {l}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
        <Text paddingTop={2} fontSize='small' fontWeight='light'>
          <InfoOutlineIcon marginRight={2} />
          Practice your Sign Language skills through music games. Select a song
          below to try!
        </Text>
      </Box>
      <SimpleGrid
        padding={5}
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={5}
        textAlign='center'
      >
        {filteredGames.map((t) => (
          <GameCard transcript={t} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ReadingPage;
