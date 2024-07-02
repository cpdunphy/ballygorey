import Chip from '@/components/chip'
import WorkExperiences from '@/components/work-experience'
import technology from '@/data/technologies.json'
import experiences from '@/data/workExperiences.json'
import Image from 'next/image'
import Link from 'next/link'

const technologies = [
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

export default function Demo() {
  function formatDateString(dateString: string) {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
    }
    return date.toLocaleDateString('en-US', options)
  }

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
              <div className="flex flex-wrap gap-x-2">
                {item.skills.map((skill_key) => {
                  const skill = technology.find((tech) => tech.id === skill_key)
                  if (!skill) return null
                  return (
                    <Chip key={skill_key} color={skill.color}>
                      <div className="flex items-center space-x-4">
                        <div className="relative mr-2 flex h-3 w-3 items-center">
                          <Image
                            src={skill.imagePath}
                            alt={`${skill.name} Logo`}
                            className="object-contain"
                            fill
                            sizes="12px"
                          />
                        </div>
                        {skill.name}
                      </div>
                    </Chip>
                  )
                })}
              </div>

              <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6 dark:border-gray-800" />
            </div>
          )
        })}
      </div>

      <div className="lg:items-centerw flex flex-col lg:flex-row">
        <h2 className="mb-4 text-balance lg:mb-0 lg:mr-8 lg:flex lg:w-1/4 lg:items-center">
          Using an ever-growing list of technology.
        </h2>
        <div className="grid flex-1 auto-rows-fr grid-cols-[repeat(auto-fit,_minmax(125px,_1fr))] gap-4">
          {technologies.map((key) => {
            const skill = technology.find((tech) => tech.id === key)
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
