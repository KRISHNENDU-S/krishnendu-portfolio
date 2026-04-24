import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/config";
import { Github } from "lucide-react";

export default function GitHubStats() {
  const { githubUsername, github } = siteConfig;

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&icon_color=a78bfa&text_color=9090b0&bg_color=00000000&count_private=true`;

  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=6366f1&text_color=9090b0&bg_color=00000000`;

  const streakUrl = `https://streak-stats.demolab.com?user=${githubUsername}&theme=transparent&hide_border=true&ring=6366f1&fire=a78bfa&currStreakLabel=9090b0&sideLabels=9090b0&dates=505070&background=00000000`;

  return (
    <SectionWrapper id="github" withGrid>
      <SectionHeading
        label="open source"
        title="GitHub Activity"
        subtitle="Contributions, streaks, and top languages from my public GitHub profile."
      />

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Stats card */}
        <div className="bg-bg-card rounded-xl p-6 border border-bg-border flex items-center justify-center min-h-[160px]">
          <Image
            src={statsUrl}
            alt={`${githubUsername}'s GitHub stats`}
            width={495}
            height={195}
            className="w-full h-auto"
            unoptimized
          />
        </div>

        {/* Top langs card */}
        <div className="bg-bg-card rounded-xl p-6 border border-bg-border flex items-center justify-center min-h-[160px]">
          <Image
            src={langsUrl}
            alt={`${githubUsername}'s top languages`}
            width={495}
            height={195}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </div>

      {/* Streak */}
      <div className="bg-bg-card rounded-xl p-6 border border-bg-border flex items-center justify-center">
        <Image
          src={streakUrl}
          alt={`${githubUsername}'s GitHub streak`}
          width={700}
          height={150}
          className="w-full max-w-2xl h-auto"
          unoptimized
        />
      </div>

      {/* Profile link */}
      <div className="mt-8 text-center">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-bg-border text-text-secondary text-sm font-mono rounded hover:border-accent-primary hover:text-text-primary transition-all"
        >
          <Github size={14} />
          View GitHub Profile
        </a>
      </div>
    </SectionWrapper>
  );
}
