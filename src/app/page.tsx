import Image from 'next/image'
import Link from 'next/link'
import avatar from 'app/avatar.jpg'
import WorkExperiences from '@/components/work-experience'
import Socials from '@/components/socials'

export default function Page() {
  return (
    <>
      <div className="flex-start mx-auto max-w-7xl flex-col space-y-6 px-6">
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

        <h1>Software engineer, amazing human, and amateur comedian.</h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m Collin. I&apos;m a Junior majoring in Computer Science at
          Virginia Tech. I&apos;m passionate about building software that makes
          a difference in the world. I&apos;m currently looking for an
          internship for Summer 2022.
        </p>
        <div className="">
          <Socials />
        </div>
        <WorkExperiences />
      </div>
    </>
  )
}
