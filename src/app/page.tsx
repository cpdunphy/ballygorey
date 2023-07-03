import Image from 'next/image'
import Link from 'next/link'
import avatar from 'app/avatar.jpg'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/24/solid'

export default function Page() {
  return (
    <>
      <div className="flex-start mx-auto max-w-7xl flex-col space-y-6 p-6">
        <Link href="/" passHref>
          <Image
            className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
            src={avatar}
            alt="Collin Dunphy headshot"
            height={64}
            width={64}
            sizes="33vw"
            style={{ objectFit: 'cover' }}
          />
        </Link>

        <div className="text-3xl font-bold sm:text-5xl">
          Software engineer, amazing human, and amateur comedian.
        </div>
        <p className="text-slate-500">
          Hey, I&apos;m Collin. 👋 I&apos;m a Junior majoring in Computer
          Science at Virginia Tech.
        </p>
        <Work />
      </div>
    </>
  )
}

function Work() {
  return (
    <div className="rounded-lg p-6 outline outline-1 outline-slate-700">
      <h2 className="inline-flex items-center justify-center gap-x-2">
        <BriefcaseIcon className="h-4 w-4" />
        Work
      </h2>
      {workExperiences.map((item) => (
        <div key={item.company}>
          <div>{item.company}</div>
          <div className="text-slate-500">{item.title}</div>
        </div>
      ))}
      <DownloadResumeButton />
    </div>
  )
}

function DownloadResumeButton() {
  return (
    <Link
      href="/resume"
      className="inline-flex items-center justify-center gap-x-2 rounded-md bg-teal-600 px-4 py-2 text-sm  hover:bg-teal-500"
      passHref
    >
      Download Resume
      <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

const workExperiences = [
  {
    company: 'Ballygorey Labs',
    title: 'Founder',
    startDate: '2020-01-01',
    endDate: '2021-01-01',
    location: 'Virginia Beach, VA',
    description: 'A software development company.',
    imagePath: '/ballygorey-labs.png',
    link: 'https://ballygorey.com',
  },
  {
    company: 'Virginia Tech',
    title: 'Undergraduate Research Assistant',
    startDate: '2020-01-01',
    endDate: '2021-01-01',
    location: 'Blacksburg, VA',
    description: 'A software development company.',
    imagePath: '/ballygorey-labs.png',
    link: 'https://cs.vt.edu',
  },
  {
    company: 'Tenable',
    title: 'Research Engineer Intern',
    startDate: '2023-06-05',
    endDate: '2023-08-04',
    location: 'Columbia, MD',
    description: 'A software development company.',
    imagePath: '/tenable.png',
    link: 'https://tenable.com',
  },
  {
    company: "Student Engineers' Council at Virginia Tech",
    title: 'Director of Finance',
    startDate: '2021-09-05',
    endDate: 'Present',
    location: 'Blacksburg, VA',
    description: 'A software development company.',
    imagePath: '/secatvt.png',
    link: 'https://sec.vt.edu',
  },
  {
    company: 'NeuroID',
    title: 'Software Engineer Intern',
    startDate: '2022-07-01',
    endDate: '2022-08-05',
    location: 'Clifton, VA',
    description: 'A software development company.',
    imagePath: '/secatvt.png',
    link: 'https://neuroid.com',
  },
]
