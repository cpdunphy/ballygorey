'use client'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import workExperiences from '@/data/workExperiences.json'

export default function WorkExperiences() {
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

  return (
    <div className="max-w-md space-y-4 rounded-2xl p-6 outline outline-gray-100 dark:outline-gray-600">
      <div className="inline-flex items-center justify-center gap-x-2 font-semibold">
        <BriefcaseIcon className="h-5 w-5" />
        Work
      </div>

      <div className="space-y-4">
        {workExperiences.map((item) => (
          <Link
            key={item.company}
            href={item.url}
            target="_blank"
            passHref
            className="flex items-center gap-4 space-y-0"
          >
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
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
              <div className="text-gray-500">{item.role}</div>
            </div>
          </Link>
        ))}
      </div>

      <DownloadResumeButton />
    </div>
  )
}
