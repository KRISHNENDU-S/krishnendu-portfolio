"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink, X, ZoomIn, MapPin, Calendar, Users } from "lucide-react";

const journalStats = [
  { label: "Quartile", value: "Q1", color: "#34d399" },
  { label: "Percentile", value: "97th", color: "#a78bfa" },
  { label: "Impact Factor", value: "3.3", color: "#f472b6" },
  { label: "Cite Score", value: "9.3", color: "#fbbf24" },
];

const keyFindings = [
  {
    icon: "🏥",
    finding:
      "Inadequate healthcare — nearest hospital 36km away, causing maternal & neonatal risks due to unaffordable travel.",
  },
  {
    icon: "💧",
    finding:
      "Irrigation water scarcity — seasonal agriculture collapse driving youth out-migration from both villages.",
  },
  {
    icon: "📚",
    finding:
      "30% dropout rate, especially among girls, due to poor infrastructure, transport costs, and cultural barriers.",
  },
  {
    icon: "🚰",
    finding:
      "Sanitation & waste management gaps — open defecation, poor menstrual hygiene, absence of water filtration.",
  },
];

const villagePhotos = [
  { src: "/village-school.jpg", caption: "Education Session", sub: "Malegaon Village School" },
  { src: "/village-women.jpg", caption: "Women Empowerment", sub: "Community Engagement" },
  { src: "/village-team.jpg", caption: "Team Community Catalyst", sub: "With Mentor Prof. Kanakasabapathy" },
  { src: "/village-bags.jpg", caption: "School Supplies Distribution", sub: "Bhandravali Village" },
];

const publications = [
  {
    cert: "/research-appreciation.jpg",
    certLabel: "Appreciation Poster",
    certSub: "Amrita Vishwa Vidyapeetham",
    title: "Sustainable Futures, Elsevier",
    meta: "Q1 · 97th Percentile · IF 3.3 · Cite Score 9.3",
    metaColor: "#34d399",
    url: "https://www.sciencedirect.com/science/article/pii/S2666188825001741",
    urlLabel: "View on ScienceDirect",
    lightboxTitle: "Q1 Publication Appreciation — Amrita Vishwa Vidyapeetham",
  },
  {
    cert: "/cert-lila.jpg",
    certLabel: "Certificate of Participation",
    certSub: "Live-in-Labs® · A+ Grade",
    title: "Live-in-Labs® · Level I",
    meta: "Amrita University · UNESCO Chair · A+ Grade",
    metaColor: "#fbbf24",
    url: null,
    urlLabel: null,
    lightboxTitle: "Live-in-Labs® Certificate of Participation — Amrita Vishwa Vidyapeetham",
  },
];

interface LightboxProps {
  src: string;
  title: string;
  onClose: () => void;
}

function Lightbox({ src, title, onClose }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-bg-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-bg-card border-b border-bg-border">
          <p className="font-mono text-xs text-text-muted truncate pr-4">{title}</p>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-bg-border transition-all"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
        <div className="relative w-full bg-bg-primary" style={{ aspectRatio: "4/3" }}>
          <Image src={src} alt={title} fill className="object-contain" priority />
        </div>
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/30">
        Click outside to close
      </p>
    </div>
  );
}

export default function Research() {
  const [activeLightbox, setActiveLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <SectionWrapper id="research" withGrid>
      <SectionHeading
        label="research"
        title="Field Research & Publication"
        subtitle="Q1 Elsevier journal research born from 10 days of grassroots fieldwork in rural Maharashtra."
      />

      {activeLightbox && (
        <Lightbox
          src={activeLightbox.src}
          title={activeLightbox.title}
          onClose={() => setActiveLightbox(null)}
        />
      )}

      <div className="grid lg:grid-cols-2 gap-12">

        {/* LEFT — Paper details */}
        <div className="flex flex-col gap-6">

          {/* Journal stat pills */}
          <div className="flex flex-wrap gap-3">
            {journalStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-4 py-2.5 rounded-xl border"
                style={{ borderColor: `${stat.color}30`, background: `${stat.color}0d` }}
              >
                <span className="font-display font-extrabold text-xl leading-none" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] text-text-muted mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Journal badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold border border-emerald-400/25 bg-emerald-400/10 text-emerald-400">
              Elsevier &middot; Sustainable Futures
            </span>
            <span className="font-mono text-[10px] text-text-muted">
              2025 &middot; Vol 9 &middot; Article 100604
            </span>
          </div>

          {/* Paper title */}
          <div>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2">Paper Title</p>
            <h3 className="font-display font-bold text-text-primary text-base leading-snug">
              Towards Grassroots Sustainable Development using Human-Centered Design and Participatory Rural Appraisal: A Study in Two Rural Indian Villages
            </h3>
          </div>

          {/* Abstract */}
          <div>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2">Abstract</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Developed an Integrated HCD-PRA Framework to identify and solve interconnected sustainability challenges in two rural Indian villages &mdash; Ambewadi and Bhandravali, Bhor tehsil, Pune district. The study engaged 40+ community stakeholders using participatory tools including resource mapping, seasonal calendars, and focus group discussions to co-design community-driven interventions.
            </p>
          </div>

          {/* Key findings */}
          <div>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-3">Key Findings</p>
            <div className="flex flex-col gap-2">
              {keyFindings.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-bg-card rounded-lg border border-bg-border">
                  <span className="text-base flex-shrink-0 mt-0.5">{f.icon}</span>
                  <p className="text-xs text-text-secondary leading-relaxed">{f.finding}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publication + LiLa cert cards — same style as IEEE in Experience */}
          <div>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-3">
              Certificates & Publication
            </p>
            <div className="flex flex-col gap-4">
              {publications.map((pub, i) => (
                <div
                  key={i}
                  className="group flex gap-3 p-4 bg-bg-card rounded-xl border border-bg-border hover:border-accent-primary/40 transition-all"
                >
                  {/* Cert thumbnail */}
                  <button
                    onClick={() => setActiveLightbox({ src: pub.cert, title: pub.lightboxTitle })}
                    className="group/thumb flex-shrink-0 relative w-[72px] h-[92px] rounded-lg overflow-hidden border border-bg-border hover:border-accent-primary/50 transition-all cursor-zoom-in"
                    aria-label={`View ${pub.certLabel}`}
                  >
                    <Image
                      src={pub.cert}
                      alt={pub.certLabel}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/40 transition-all flex items-center justify-center">
                      <ZoomIn size={16} className="text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                    </div>
                  </button>

                  {/* Text + links */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium text-text-primary group-hover:text-accent-secondary transition-colors leading-snug mb-1">
                        {pub.title}
                      </p>
                      <p className="font-mono text-[10px]" style={{ color: pub.metaColor }}>
                        {pub.meta}
                      </p>
                      <p className="font-mono text-[10px] text-text-muted mt-0.5">{pub.certSub}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[10px] font-mono text-accent-secondary hover:text-accent-primary transition-colors"
                        >
                          <ExternalLink size={10} />
                          {pub.urlLabel}
                        </a>
                      )}
                      <button
                        onClick={() => setActiveLightbox({ src: pub.cert, title: pub.lightboxTitle })}
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono text-text-muted hover:text-white transition-colors"
                      >
                        <ZoomIn size={10} />
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT — Experience + photo gallery */}
        <div className="flex flex-col gap-6">

          {/* Experience card */}
          <div className="p-5 bg-bg-card rounded-xl border border-bg-border">
            <p className="font-mono text-[10px] text-accent-primary uppercase tracking-widest mb-4">
              Field Experience
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
                <Calendar size={10} /> Feb 18 &ndash; 28, 2024
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
                <MapPin size={10} /> Malegaon, Maharashtra
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
                <Users size={10} /> Team Community Catalyst
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              Led{" "}
              <span style={{ color: "#a78bfa", fontWeight: 600 }}>Team Community Catalyst</span>{" "}
              &mdash; living alongside villagers in Ambewadi and Bhandravali for 10 days under the{" "}
              <span style={{ color: "#34d399", fontWeight: 600 }}>Live-in-Labs&reg; program</span>.
              Forged deep connections with 70+ residents through immersive fieldwork, socio-economic analysis, and community-driven problem solving.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              Conducted{" "}
              <span style={{ color: "#f472b6", fontWeight: 600 }}>women empowerment sessions</span>,
              educational initiatives, and community awareness drives. Participated in the Pran Prathishta ceremony during Vardhapan Din &mdash; immersing in traditional Marathi culture and Dhol Tasha performances.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              The fieldwork insights became the foundation of a paper published in{" "}
              <span style={{ color: "#fbbf24", fontWeight: 600 }}>Sustainable Futures (Elsevier)</span>{" "}
              &mdash; a Q1 journal at the 97th percentile, contributing to SDGs 2, 3, 4, 5, 6, and 17.
            </p>
          </div>

          {/* Photo gallery */}
          <div>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-3">
              From the Field
            </p>
            <div className="grid grid-cols-2 gap-3">
              {villagePhotos.map((photo, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl overflow-hidden border border-bg-border hover:border-accent-primary/30 transition-all"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-2.5 py-2"
                    style={{ background: "linear-gradient(to top, rgba(10,10,15,0.88) 0%, transparent 100%)" }}
                  >
                    <p className="font-mono text-[9px] text-white/80 leading-tight">{photo.caption}</p>
                    <p className="font-mono text-[8px] text-white/50">{photo.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
