import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'Bio Page for Collin Dunphy',
}

export default function Page() {
  return (
    <section>
      <h1>
        I’m Collin Dunphy. I’m a Senior majoring in Computer Science at Virginia
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
          in May 2025. I lead and serve my community as an Eagle Scout and as a
          directing member of the{' '}
          <Link target="_blank" href="https://sec.vt.edu" rel="noreferrer">
            Student Engineers&apos; Council at Virginia Tech
          </Link>
          . Overseeing a 501(c)(3) nonprofit with $800k+ in annual revenue, I
          manage a team of 20+ student engineers and work with the university to
          improve the student experience.
        </p>
      </div>

      <div>
        <h2>Technical Skills</h2>
        Swift (iOS), Flutter, React, Java, Python, AWS, Google Firebase, 3D
        Prototyping, Robotics Design, CAD.
        <h2>Skills</h2>
        Leadership, Public Speaking, Team Management, Project Management, Event
        Planning, Marketing, Fundraising, and Community Outreach, Strategic
        Planning, and Problem-Solving
      </div>
      <p>
        When I’m not coding or leading projects, you’ll find me hiking,
        exploring new tech gadgets, or tinkering with 3D printers.
      </p>
    </section>
  )
}
