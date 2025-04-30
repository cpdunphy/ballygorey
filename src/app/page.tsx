import Image from 'next/image'
import Link from 'next/link'
import WorkExperiences from '@/components/work-experience'
import Socials from '@/components/socials'

export default function Page() {
  const images = [
    '/images/20241026_homecoming.jpeg',
    '/images/20250410_hokie_launch_party.jpeg',
    '/images/20250329_eball.jpg',
    '/images/graduation_2023.jpeg',
    '/images/20250424_academy.jpeg',
  ]

  const title = 'Software Engineer, Aspiring Comedian, and Student'
  const subtitle =
    "Hey, I'm Collin—a Senior majoring in Computer Science at Virginia Tech. I'm passionate about creating impactful solutions and making a positive difference in the world. I'm looking for full-time opportunities starting Summer 2025."

  return (
    <div className="space-y-6">
      <section>
        <Link href="/" passHref className="block">
          <Image
            className="h-16 w-16 rounded-full border border-neutral-200 object-cover dark:border-neutral-700"
            src="/images/avatar.jpg"
            alt="Collin Dunphy headshot"
            height={64}
            width={64}
            sizes="128px"
          />
        </Link>

        <h1 className="max-w-2xl">{title}</h1>

        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>

        <Socials />
      </section>

      <div className="flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((imagePath, index) => (
          <div
            key={imagePath}
            className={`${
              index % 2 === 0 ? 'rotate-2' : '-rotate-2'
            } relative aspect-10/9 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800`}
          >
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={imagePath}
              alt={imagePath
                .replace('/images/', '')
                .replace('.jpeg', '')
                .replaceAll('_', ' ')}
              priority
              width={3000}
              height={2000}
              sizes="(min-width: 640px) 18rem, 11rem"
            />
          </div>
        ))}
      </div>

      <section>
        <WorkExperiences />
      </section>
    </div>
  )
}
