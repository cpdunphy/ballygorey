import Badge from '@/components/badge'
import WorkExperiences from '@/components/work-experience'
import tech from '@/data/technologies.json'
import experiences from '@/data/workExperiences.json'
import Image from 'next/image'
import Link from 'next/link'

const technologies = [
  'react',
  'swift',
  'git',
  'firebase',
  'shopify',
  'tailwind',
  'stripe',
  'docker',
  'next',
  'ramp',
  'figma',
  'python',
]

export default function Demo() {
  return (
    <>
      <h1>Work Experience</h1>
      <div>
        {experiences.map((item) => {
          return (
            <div key={item.company}>
              <h3>
                {item.role} @ {item.company}
              </h3>

              <p className="text-sm">
                {item.startDate} to {item.endDate ?? 'Present'}
              </p>

              <p>{item.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-x-2">
                {item.skills.map((skill_key) => {
                  const skill = tech.find(
                    (technology) => technology.id === skill_key
                  )
                  if (!skill) return null
                  return (
                    <Badge key={skill_key} color={skill.color}>
                      {skill.name}
                    </Badge>
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
          {technologies.map((key: string) => {
            const item = tech.find((technology) => technology.id === key)
            if (!item) return null
            return (
              <Link
                className="group relative flex min-h-32 flex-col items-center justify-between rounded-lg bg-zinc-50 p-4 transition ease-in-out hover:bg-zinc-100 dark:bg-zinc-900/70 dark:hover:bg-zinc-800/70"
                key={item.name}
                passHref
                href={item.url}
                target="_blank"
              >
                <div className="relative flex h-full max-h-12 w-full max-w-12">
                  <Image
                    src={item.imagePath}
                    alt={`${item.imagePath} Logo`}
                    className="object-contain"
                    fill
                    sizes="48px"
                  />
                </div>
                <p className="pt-4 text-center tracking-wide dark:text-slate-200">
                  {item.name}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
