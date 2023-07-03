import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function WorkExperiences() {
  return (
    <div className="max-w-md space-y-4 rounded-lg p-6 outline outline-1 outline-gray-100 dark:outline-gray-600">
      <div className="inline-flex items-center justify-center gap-x-2 font-semibold">
        <BriefcaseIcon className="h-5 w-5" />
        Work
      </div>
      <div className="space-y-4">
        {workExperiences.map((item) => (
          <div key={item.company} className="space-y-0">
            <div className="text-sm">{item.company}</div>
            <div className="text-sm text-slate-500">{item.title}</div>
          </div>
        ))}
      </div>
      <DownloadResumeButton />
    </div>
  )
}

function DownloadResumeButton() {
  return (
    <Link
      href="/CollinDunphy_Resume.pdf"
      className="inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-teal-600 px-4 py-2 text-sm text-white hover:bg-teal-500"
      passHref
      target="_blank"
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
    location: 'Clifton, VA',
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
