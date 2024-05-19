import Image from 'next/image'
import Link from 'next/link'
import avatar from 'app/avatar.jpg'
import WorkExperiences from '@/components/work-experience'
import Socials from '@/components/socials'

export default function Page() {
  const images = [
    '/images/family_photo_2023.jpeg',
    '/images/eweek_trivia_2023.jpeg',
    '/images/graduation_2023.jpeg',
    '/images/eweek_talent_2023.jpeg',
    '/images/advancement_dinner_2023.jpeg',
  ]

  return (
    <div className="space-y-6">
      <section>
        <Link href="/" passHref className="h-16 w-16">
          <Image
            className="h-16 w-16 rounded-full border border-neutral-200 object-cover dark:border-neutral-700"
            src="/images/avatar.jpg"
            alt="Collin Dunphy headshot"
            height={64}
            width={64}
            sizes="128px"
          />
        </Link>
        <h1>Software engineer, amazing human, and comedian in training.</h1>
        <p className="mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m Collin. I&apos;m a Senior majoring in Computer Science at
          Virginia Tech. I&apos;m passionate about building amazing things that
          make a difference in the world. I&apos;m currently looking for an
          full-time roles starting Summer 2024.
        </p>
        <Socials />
      </section>
      <div>
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {images.map((imagePath, index) => (
            <div
              key={imagePath}
              className={`${
                index % 2 === 0 ? 'rotate-2' : '-rotate-2'
              } relative aspect-[10/9] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800`}
            >
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={imagePath}
                alt="Graduation 2023"
                width={3000}
                height={2000}
                sizes="(min-width: 640px) 18rem, 11rem"
              />
            </div>
          ))}
        </div>
      </div>
      <section>
        <WorkExperiences />
      </section>
    </div>
  )
}
