import Link from 'next/link'
import Image from 'next/image'
import projects from '@/data/projects.json'

export const metadata = {
  title: 'Projects',
  description: 'Bio Page for Collin Dunphy',
}

export default function Page() {
  const title = "Things I've Made"

  const description =
    "A selection of projects I've worked on, exploring different ideas and technologies. These are the ones I'm proud of, and each has been a chance to build, learn, and create. Feel free to explore the code, and reach out if you'd like to collaborate."

  return (
    <section>
      <h1>{title}</h1>

      <p className="mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <div className="grid grow grid-cols-1 flex-row gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const domain = new URL(project.url).hostname
          return (
            <Link
              key={project.title}
              passHref
              href={project.url}
              className="rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
            >
              <div className="group relative flex flex-col items-start space-y-4 p-4 transition ease-in-out">
                <div className="relative flex h-14 w-14 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
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

                <p className="font-semibold">{project.title}</p>

                <p className="grow text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <p className="relative flex items-center justify-center text-sm text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon />
                  <span className="ml-2">{domain}</span>
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-4 w-4 flex-none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  )
}
