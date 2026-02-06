export default function FeatureCard({
  icon,
  image,
  video,
  title,
  desc,
  layout = 'vertical',
  boxed = false,
}: {
  icon?: React.ReactNode;
  image?: string;
  video?: string;
  title: string;
  desc?: string;
  layout?: 'vertical' | 'horizontal';
  boxed?: boolean;
}) {
  const isMP4 = video && video.endsWith('.mp4');
  const isGif = video && video.endsWith('.gif');
  const isHorizontal = layout === 'horizontal';

  return (
    <div
      className={[
        isHorizontal ? 'flex items-start gap-4 p-4' : 'relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8',
        boxed ? 'rounded-xl border border-white/10 bg-card/50' : '',
      ].join(' ')}
    >
      <div className={isHorizontal ? 'shrink-0' : 'mb-3'}>
        {isMP4 ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className={isHorizontal ? 'h-20 w-20 rounded-lg object-cover' : 'mx-auto h-28 w-28 rounded-lg object-cover md:h-36 md:w-36'}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : isGif ? (
          <img
            src={video}
            alt={title}
            className={isHorizontal ? 'h-20 w-20 rounded-lg object-cover' : 'mx-auto h-28 w-28 rounded-lg md:h-36 md:w-36'}
          />
        ) : image ? (
          <img
            src={image}
            alt={title}
            className={isHorizontal ? 'h-20 w-20 rounded-lg object-cover' : 'mx-auto h-28 w-28 rounded-lg object-cover md:h-36 md:w-36'}
          />
        ) : (
          <div className="text-3xl">{icon}</div>
        )}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        {desc && <div className="mt-1 text-sm text-textSecondary">{desc}</div>}
      </div>
    </div>
  );
}
