import Head from "next/head";
import { About } from "../components/CardAbout";
import { Header } from "../components/Header";
import { HomeHero } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ScrollTop } from "../components/ScrollTop";
import { Footer } from "../components/Footer";
import { Experience } from "../components/Experience";
import { CardContact } from "../components/CardContact";
import { Section } from "../styles/styles";
import { Education } from "../components/Education";
import { Certificates } from "../components/Certificates/index";

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <ScrollTop />
      <Section>
        <Section>
        <HomeHero />
        </Section>
        <About />
        <Skills />
        <Education />
        <Experience />
        <Certificates />
        <Projects />
        <CardContact />
      </Section>

      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script
        src={botkey}
        defer
      ></script>
      <Footer />
    </>
  );
}
