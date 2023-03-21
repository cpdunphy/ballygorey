import Head from "next/head";
import { Image } from "@nextui-org/react";
import styles from "../styles/Home.module.css";
import { Container, Text, Button, Row, Col, useTheme } from "@nextui-org/react";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div>
      <Head>
        <title>Collin Dunphy</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        <Container>
          <Row align="center">
            <Col align="center">
              <Text h1>Collin Dunphy</Text>
              <Button>Learn More</Button>
            </Col>

            <Col align="center">
              <Image
                src="https://www.sec.vt.edu/content/dam/sec_vt_edu/headshots/2022-23/CollinDunphy-Profile.jpg"
                alt="Collin Dunphy Profile Picture"
                width={250}
                height={250}
                className={styles.profile}
              />
            </Col>
          </Row>
        </Container>
        <Container align="center">
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
              Student Engineers' Council at Virginia Tech
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
          <Text size="$xl">
            If you are interested in working with me, please feel free to{" "}
            <a
              target="_blank"
              href="mailto:collind@vt.edu">
              contact me
            </a>
            .
          </Text>
        </Container>
      </main>

      <footer>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer">
          &copy; 2023 Ballygorey Labs LLC{" "}
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        // code {
        //   background: #fafafa;
        //   border-radius: 5px;
        //   padding: 0.75rem;
        //   font-size: 1.1rem;
        //   font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        // }
      `}</style>

      {/* <style
        jsx
        global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
}
/*
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
        */
