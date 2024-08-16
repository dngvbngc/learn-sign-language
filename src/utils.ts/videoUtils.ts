interface ImportedVideoPortion {
  timestamp: string;
  lyrics: string;
}

interface VideoPortion {
  timestamp: number;
  lyrics: string;
}

/** Convert timestamp string to seconds since 0 for playing video
 * @param timestamp Timestamp in \d*:\d* format
 * @returns Number of seconds
 */
function convertTimestampToSeconds(timestamp: string): number {
  const [minutes, seconds] = timestamp.split(":").map(Number);
  return minutes * 60 + seconds;
}

/** Extract timestamps and lyrics to correct format
 * @param timestamp Timestamp in \d*:\d* format
 * @returns Number of seconds
 */
export function extractTimestampsAndLyrics(
  content: ImportedVideoPortion[]
): VideoPortion[] {
  return content.map((line) => ({
    timestamp: convertTimestampToSeconds(line.timestamp),
    lyrics: line.lyrics,
  }));
}
