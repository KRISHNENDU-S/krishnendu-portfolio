interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p className="font-mono text-xs text-accent-primary uppercase tracking-widest mb-3">
        {`// ${label}`}
      </p>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
