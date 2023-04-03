import Head from "next/head";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { Button, Row, Col } from "@nextui-org/react";
import { Text, Container, Link, Image } from "@nextui-org/react";
import SkillsGrid from "@/components/SkillsGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ballygorey</title>
        <meta
          name="Collin Dunphy's Personal Website"
          content="Collin Dunphy's Personal Website"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Container alignContent="center">
        <Row
          gap={4}
          align="center"
          justify="center">
          <Col>
            <Text h1>Collin Dunphy</Text>
            <Button>Learn More</Button>
          </Col>

          <Col>
            <Image
              style={{ borderRadius: "15px", overflow: "hidden" }}
              showSkeleton
              src="https://sec.vt.edu/content/dam/sec_vt_edu/headshots/2022-23/CollinDunphy-Profile.jpg"
              alt="Picture of the author"
              width={200}
              height={200}
            />
          </Col>
        </Row>
        <Container>
          <Text size="$xl">
            As a student leader with an insatiable appetite for learning new technology and business expertise, I am an aspiring computer scientist set to
            graduate from{" "}
            <a
              target="_blank"
              href="https://vt.edu">
              Virginia Tech
            </a>{" "}
            in May of 2025. I lead and serve my community as an Eagle Scout and as a directing member of the{" "}
            <a
              target="_blank"
              href="https://sec.vt.edu">
              Student Engineers&apos; Council at Virginia Tech
            </a>{" "}
            , I oversee a 501(c)(3) nonprofit with $800k+ in annual revenue, manage a team of 20+ student engineers, and work with the university to improve the
            student experience. I am a results-driven mobile application developer with four years of experience in Swift (iOS), Flutter, and React. One of my
            notable projects is an app designed to assist Speech Pathologists with their clinical assessments, receiving over 800 downloads in its first week. I
            also have experience coding in Java and Python, as well as deploying application backend on AWS and Google Firebase. Additionally, I have hands-on
            expertise in 3D prototyping, robotics design and fabrication, and Computer-Aided Design (CAD). Most recently I had internship last summer working on
            mobile SDK for a fraud detection and analysis product. I am now doing research for the VT computer science department on their CSGenome project,
            which researches and catalogs different computer systems. I am currently looking for an internship or contract software engineering position
            starting in May of 2023.
          </Text>
        </Container>
        <SkillsGrid />
      </Container>
    </>
  );
}
