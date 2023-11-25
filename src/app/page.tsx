import Image from 'next/image'
import Link from 'next/link'
import avatar from 'app/avatar.jpg'
import WorkExperiences from '@/components/work-experience'
import Socials from '@/components/socials'

export default function Page() {
  return (
    <>
      <section className="space-y-6 ">
        <Link href="/" passHref className="h-16 w-16">
          <Image
            className="h-16 w-16 rounded-full border border-neutral-200 object-cover dark:border-neutral-700"
            src={avatar}
            alt="Collin Dunphy headshot"
            height={64}
            width={64}
            sizes="128px"
          />
        </Link>
        <h1>Software engineer, amazing human, and amateur comedian.</h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m Collin. I&apos;m a Junior majoring in Computer Science at
          Virginia Tech. I&apos;m passionate about building amazing things make
          a difference in the world. I&apos;m currently looking for an
          internship for Summer 2023.
        </p>
        <Socials />
        <WorkExperiences />
      </section>
    </>
  )
}
