import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { Projects } from "@/components/site/projects";
import { SiteShell } from "@/components/site/shell";
import { Skills } from "@/components/site/skills";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Sonusi Abiodun — Data Analyst" }],
  }),
});

function Home() {
  return (
    <SiteShell>
      <Hero />
      <Skills />
      <Projects />
      <Process />
      <Contact />
    </SiteShell>
  );
}
