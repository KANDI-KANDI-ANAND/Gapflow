import { parseVideoUrl } from '../utils/videoParser';

interface VideoEmbedProps {
  url: string;
  title?: string;
}

export default function VideoEmbed({ url, title = 'Video' }: VideoEmbedProps) {
  const parsedVideo = parseVideoUrl(url);

  if (!parsedVideo) {
    console.error('Unable to parse video URL:', url);
    return null;
  }

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={parsedVideo.embedUrl}
        title={title}
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
