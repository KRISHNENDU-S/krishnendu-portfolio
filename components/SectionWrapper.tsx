import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  withGrid?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className,
  withGrid = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 px-6",
        withGrid && "section-grid",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
