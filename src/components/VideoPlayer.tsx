interface Props {
  url: string;
  startTime: number;
  endTime: number;
}

const VideoPlayer = ({ url, startTime, endTime }: Props) => {
  return (
    <iframe
      width='690'
      height='388'
      src={`${url}?start=${startTime}&end=${endTime}&autoplay=1&mute=1`}
      title='My Love Mine All Mine Song (ASL)'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerPolicy='strict-origin-when-cross-origin'
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
