import Chip from '@/components/chip'
import Image from 'next/image'
import Link from 'next/link'
import technologies from '@/data/technologies.json'
import experiences from '@/data/workExperiences.json'
import TechChips from './TechChips'

const highlightSkills = [
  'react',
  'swift',
  'ts',
  'firebase',
  'docker',
  'tailwind',
  'nextjs',
  'figma',
  'python',
  'ansible',
  'flask',
  'git',
]

function formatDateString(dateString: string) {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  }
  return date.toLocaleDateString('en-US', options)
}

export default function Experience() {
  return (
    <>
      <h1>Work Experience</h1>
      <div>
        {experiences.map((item) => {
          const startDate = formatDateString(item.startDate)
          const endDate = item.endDate
            ? formatDateString(item.endDate)
            : 'Present'

          return (
            <div key={item.company}>
              <h3 className="pb-1">
                {item.role} @{' '}
                <Link href={item.url} className="hover:text-teal-500">
                  {item.company}
                </Link>
              </h3>

              <p className="pb-1 text-sm">
                {startDate} — {endDate}
              </p>

              <p className="pb-1">{item.description}</p>

              {/* Skills */}
              <TechChips skills={item.skills} />

              <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6 dark:border-gray-800" />
            </div>
          )
        })}
      </div>

      {/* Highlighted Skills Grid */}
      <div className="flex flex-col lg:flex-row lg:items-center">
        <h2 className="mb-4 text-balance lg:mb-0 lg:mr-8 lg:flex lg:w-1/4 lg:items-center">
          Using an ever-growing list of technology.
        </h2>
        <div className="grid flex-1 auto-rows-fr grid-cols-[repeat(auto-fit,_minmax(125px,_1fr))] gap-4">
          {highlightSkills.map((key) => {
            const skill = technologies.find((tech) => tech.id === key)
            if (!skill) return null
            return (
              <Link
                className="group relative flex min-h-32 flex-col items-center justify-between rounded-lg bg-zinc-50 p-4 transition ease-in-out hover:bg-zinc-100 dark:bg-zinc-900/70 dark:hover:bg-zinc-800/70"
                key={skill.name}
                passHref
                href={skill.url}
                target="_blank"
              >
                <div className="relative flex h-full max-h-12 w-full max-w-12">
                  <Image
                    src={skill.imagePath}
                    alt={`${skill.name} Logo`}
                    className="object-contain"
                    fill
                    sizes="48px"
                  />
                </div>
                <p className="pt-4 text-center tracking-wide dark:text-slate-200">
                  {skill.name}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
