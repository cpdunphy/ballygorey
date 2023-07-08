import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'Bio Page for Collin Dunphy',
}

export default function Page() {
  return (
    <div>
      <h1>
        I’m Collin Dunphy. I’m a Junior majoring in Computer Science at Virginia
        Tech.
      </h1>
      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <p>
          As a student leader with an insatiable appetite for learning new
          technology and business expertise, I am an aspiring computer scientist
          set to graduate from{' '}
          <Link target="_blank" href="https://vt.edu" rel="noreferrer">
            Virginia Tech
          </Link>{' '}
          in May of 2025. I lead and serve my community as an Eagle Scout and as
          a directing member of the{' '}
          <Link target="_blank" href="https://sec.vt.edu" rel="noreferrer">
            Student Engineers&apos; Council at Virginia Tech
          </Link>
          , I oversee a 501(c)(3) nonprofit with $800k+ in annual revenue,
          manage a team of 20+ student engineers, and work with the university
          to improve the student experience. I am a results-driven mobile
          application developer with four years of experience in Swift (iOS),
          Flutter, and React. One of my notable projects is an app designed to
          assist Speech Pathologists with their clinical assessments, receiving
          over 800 downloads in its first week. I also have experience coding in
          Java and Python, as well as deploying application backend on AWS and
          Google Firebase. Additionally, I have hands-on expertise in 3D
          prototyping, robotics design and fabrication, and Computer-Aided
          Design (CAD). Most recently I had internship last summer working on
          mobile SDK for a fraud detection and analysis product. I am now doing
          research for the VT computer science department on their CSGenome
          project, which researches and catalogs different computer systems. I
          am currently looking for an internship or contract software
          engineering position starting in May of 2023.
        </p>
      </div>
    </div>
  )
}
