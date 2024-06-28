import Socials from './socials'

export default function Footer() {
  return (
    <footer>
      <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6 dark:border-gray-800" />
      <div className="mx-auto max-w-7xl px-6 pb-6 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2024 Ballygorey Labs. All Rights Reserved.
        </p>
        <Socials />
      </div>
    </footer>
  )
}
