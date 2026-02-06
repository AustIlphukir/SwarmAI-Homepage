export default function FeatureCard({
  icon,
  image,
  video,
  title,
  desc,
}: {
  icon?: React.ReactNode;
  image?: string;
  video?: string;
  title: string;
  desc?: string;
}) {
  const isMP4 = video && video.endsWith('.mp4');
  const isGif = video && video.endsWith('.gif');
  
  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-3">
        {isMP4 ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-28 h-28 md:w-36 md:h-36 mx-auto object-cover rounded-lg"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : isGif ? (
          <img
            src={video}
            alt={title}
            className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-lg"
          />
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="w-28 h-28 md:w-36 md:h-36 mx-auto object-cover rounded-lg"
          />
        ) : (
          <div className="text-3xl">{icon}</div>
        )}
      </div>
      <div className="font-semibold">{title}</div>
      {desc && <div className="text-sm mt-1 text-textSecondary">{desc}</div>}
    </div>
  );
}