import ProfileSection from "@/components/sections/Profile";
import SkillsSection from "@/components/sections/Skills";
import ExperienceSection from "@/components/sections/Experience";
import EducationSection from "@/components/sections/Education";
import ToolsSection from "@/components/sections/Tools";
import ContactSection from "@/components/sections/Contact";
import LandingSection from "@/components/sections/LandingSection";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <LandingSection />
      <ProfileSection />
      <SkillsSection />
      <ToolsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
