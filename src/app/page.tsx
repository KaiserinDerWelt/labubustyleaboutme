import AboutMe from "./components/home/about-me"
import EducationSkills from "./components/home/education-skills"
import HeroSection from "./components/home/hero-section"
const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <AboutMe />
        <EducationSkills />
      </main>
    </>
  )
}

export default page