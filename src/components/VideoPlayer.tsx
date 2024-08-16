interface Props {
  startTime: number;
  endTime: number;
}

const VideoPlayer = ({ startTime, endTime }: Props) => {
  return (
    <iframe
      width='690'
      height='388'
      src={`https://www.youtube.com/embed/QLOUXJdE4UY?start=${startTime}&end=${endTime}&autoplay=1&mute=1`}
      title='My Love Mine All Mine Song (ASL)'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerPolicy='strict-origin-when-cross-origin'
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
