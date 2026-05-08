import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const activities = [
  {
    photo: "/volunteer-vidyut.jpg",
    tag: "Leadership",
    tagColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    title: "VIDYUT MULTIFEST",
    role: "Event Director",
    summary:
      "Led a team of 6 to organise a national-level tech fest, driving 100+ registrations in 3 days through cross-functional coordination and outreach.",
    learning:
      "Managing diverse team dynamics under pressure taught me that true leadership isn't about authority — it's about trust, clarity, and bringing out the best in people when it matters most.",
  },
  {
    photo: "/volunteer-oracle.jpg",
    tag: "Oracle",
    tagColor: "text-red-400 bg-red-400/10 border-red-400/20",
    title: "Oracle Volunteering Initiative",
    role: "Oracle Global Tech Program",
    summary:
      "Delivered sessions on ethical AI usage and responsible technology adoption to promote awareness within the organisation.",
    learning:
      "This reminded me that growth is not only about career milestones — it's about staying connected to empathy and purpose. A career built not just with ambition, but with the intention to create value for others.",
  },
  {
    photo: "/volunteer-ssr.jpg",
    tag: "Education",
    tagColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    title: "Electro Savvy",
    role: "SSR Initiative",
    summary:
      "Conducted 3+ tech workshops on responsible smartphone usage to improve digital literacy across student communities.",
    learning:
      "Through engaging with students, I refined my ability to express ideas diplomatically and learnt that even the smallest actions can yield significant impact — stewards of knowledge must use it responsibly.",
  },
];

export default function Volunteering() {
  return (
    <SectionWrapper id="volunteering" withGrid>
      <SectionHeading
        label="giving back"
        title="Volunteering & Leadership"
        subtitle="Community impact through tech festivals, social initiatives, and awareness programs."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {activities.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col bg-bg-card rounded-2xl border border-bg-border hover:border-accent-primary/25 transition-all duration-300 overflow-hidden"
          >
            {/* Photo */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={item.photo}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Tag overlay on photo */}
              <div className="absolute top-3 left-3">
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border backdrop-blur-sm ${item.tagColor}`}
                >
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">

              {/* Title + role */}
              <div>
                <h3 className="font-display font-bold text-text-primary text-base leading-snug group-hover:text-accent-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-[10px] text-accent-primary mt-0.5">
                  {item.role}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-bg-border" />

              {/* 1-line summary */}
              <p className="text-xs text-text-secondary leading-relaxed">
                {item.summary}
              </p>

              {/* Personal learning */}
              <div className="mt-auto pt-3 border-t border-bg-border">
                <p className="font-mono text-[9px] text-accent-primary uppercase tracking-widest mb-1.5">
                  Personal Learning
                </p>
                <p className="text-xs text-text-muted leading-relaxed italic">
                  &ldquo;{item.learning}&rdquo;
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
