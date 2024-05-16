'use client'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function WorkExperiences() {
  return (
    <div className="max-w-md space-y-4 rounded-2xl p-6 outline outline-1 outline-gray-100 dark:outline-gray-600">
      <div className="inline-flex items-center justify-center gap-x-2 font-semibold">
        <BriefcaseIcon className="h-5 w-5" />
        Work
      </div>
      <div className="space-y-4">
        {workExperiences.map((item) => (
          <Link
            key={item.company}
            href={item.link}
            target="_blank"
            passHref
            className="flex items-center gap-4 space-y-0"
          >
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={item.imagePath}
                alt="${item.company} Logo"
                width={32}
                height={32}
                style={{ objectFit: 'contain' }}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="w-full">{item.company}</div>
              <div className="text-gray-500">{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <p className="text-gray-500">
          {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}
        </p>
      </div>
      <DownloadResumeButton />
    </div>
  )
}

function DownloadResumeButton() {
  return (
    <Link
      href="/CollinDunphy_Resume.pdf"
      className="inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-500"
      passHref
      target="_blank"
      key="Download Resume"
    >
      Download Resume
      <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

const workExperiences = [
  {
    company: 'Tenable',
    title: 'Research Engineer Intern',
    startDate: '2023-06-05',
    endDate: '2023-08-04',
    location: 'Columbia, MD',
    description: 'A software development company.',
    imagePath: '/images/tenable.jpeg',
    link: 'https://tenable.com',
  },
  {
    company: "Student Engineers' Council at Virginia Tech",
    title: 'President',
    startDate: '2021-09-22',
    endDate: 'Present',
    location: 'Blacksburg, VA',
    description: 'A software development company.',
    imagePath: '/images/secatvt.png',
    link: 'https://sec.vt.edu',
  },
  {
    company: 'Virginia Tech',
    title: 'Undergraduate Research Assistant',
    startDate: '2020-01-01',
    endDate: '2021-01-01',
    location: 'Blacksburg, VA',
    description: 'A software development company.',
    imagePath: '/images/virginiatech.jpeg',
    link: 'https://cs.vt.edu',
  },
  {
    company: 'NeuroID',
    title: 'Software Engineer Intern',
    startDate: '2022-07-01',
    endDate: '2022-08-05',
    location: 'Clifton, VA',
    description: 'A software development company.',
    imagePath: '/images/neuroid.jpeg',
    link: 'https://neuro-id.com',
  },
]
