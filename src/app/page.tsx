import Image from 'next/image'
import Link from 'next/link'
import avatar from 'app/avatar.jpg'

export default function Page() {
  return (
    <>
      <div className="flex-start flex-col p-6">
        <Link href="/">
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

        <div className="text-4xl font-bold">
          Software engineer, amazing human, and ameture comedian.
        </div>
        <p className="text-slate-500">
          Hey, I&apos;m Collin. 👋 I&apos;m a Junior majoring in Computer
          Science at Virginia Tech.
        </p>
      </div>
    </>
  )
}
