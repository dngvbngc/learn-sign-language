import { Link } from "react-router-dom";
import transcripts from "../../data/transcripts";

const ReadingPage = () => {
  return (
    <>
      {transcripts.map((t, index) => (
        <Link to={`/reading/${index}`}>
          <p key={index}>{t.name}</p>
        </Link>
      ))}
    </>
  );
};

export default ReadingPage;
