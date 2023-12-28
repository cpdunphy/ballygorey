import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Projects',
  description: 'Bio Page for Collin Dunphy',
}

export default function Page() {
  return (
    <>
      <section className="max-w-7xl">
        <h1>Things I&apos;ve Made</h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">Check out the highlights of my coding adventures: the projects that stand out in my memory and portfolio. They&apos;re all labors of love, and many are open-source. If you&apos;re curious, take a look at the code, and let&apos;s collaborate to make something even better.</p>
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 flex-row flex-grow">
          {projects.map((project) => {
            const domain = new URL(project.url).hostname;
            return (
              <Link key={project.title} passHref href={project.url} className="hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-lg ">
                <div className="transition ease-in-out space-y-4 p-4 group relative flex flex-col items-start">
                  <div className="relative w-14 h-14 flex flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      src={project.imagePath}
                      alt={`${project.title} Logo`}
                      width={40}
                      height={40}
                      sizes="40px"
                      style={{ objectFit: 'contain' }}
                      className="rounded-full"
                    />
                  </div>

                  <h2 className="font-semibold">{project.title}</h2>
                  {/* <div className="abs olute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"> </div> */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 flex-grow">{project.description}</p>
                  <p className="relative text-sm items-center justify-center text-zinc-400 transition group-hover:text-teal-500 flex dark:text-zinc-200">
                    <LinkIcon />
                    <span className="ml-2">{domain}</span>
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-none">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  )
}


const projects = [
  {
    title: 'DDK: Diadochokinetic Assess',
    description: 'A simple, intuitive diagnostic tool that’s designed by and built for Speech Language Pathologists (SLPs)',
    imagePath: '/images/ddk.png',
    url: 'https://github.com/cpdunphy/DDK-Assess',
    tags: ['apple', 'swift', 'firebase']
  },
  {
    title: 'CVHS Wildcats',
    description: 'An up to date, live calendar to tell you what classes to join at different points of the day. A customizable course schedule updated in real time across all devices.',
    imagePath: '/images/wildcats.png',
    url: 'https://github.com/cpdunphy/Wildcats',
    tags: ['apple', 'swift', 'firebase']
  },
  {
    title: 'Ballygorey',
    description: 'This website! A personal website to showcase my work and projects.',
    imagePath: '/images/ballygorey.png',
    url: 'https://github.com/cpdunphy/ballygorey',
    tags: ['nextjs', 'tailwindcss', 'typescript'],
  },
  {
    title: 'Research: CS Genome Project',
    description: 'I am involved with the Computer Systems Genome Project at Virginia Tech. CSG is the first scientific effort to catalog the lineage of computer system performance over time. My contributions to the team are Hidden Figures and Crowdsourcing features.',
    imagePath: '/images/csgenome.jpg',
    url: 'https://csgenome.org',
    tags: ['api', 'devops', 'outreach'],
  },
  {
    title: 'E-Ball Check In',
    description: 'Scan ticekts to check attendees into E-Ball, a formal dance hosted by the Virginia Tech Engineering Student Council.',
    imagePath: '/images/eball-tickets.jpg',
    url: 'https://github.com/SECatVT/E-Ball-Tickets',
    tags: ['api', 'devops', 'outreach'],
  },
]