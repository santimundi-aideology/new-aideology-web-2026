import HeroSection from "@/components/HeroSection"
import InfoSection from "@/components/InfoSection"
import { roboticSimulationHero, roboticSimulationInfo } from "@/utils/data"
import Head from "next/head"

export const metadata = {
  title: "Robotic Design & Simulation Solutions | AIdeology",
  description:
    "Explore AIdeology's robotic Design & Simulation solutions for optimizing manufacturing processes, enhancing efficiency, and reducing costs.",
}

const RoboticSimulationPage = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <HeroSection {...roboticSimulationHero} />
      <InfoSection {...roboticSimulationInfo} />
    </>
  )
}

export default RoboticSimulationPage
