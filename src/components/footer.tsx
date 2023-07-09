import Socials from './socials'

export default function Footer() {
  return (
    <footer>
      <hr className="my-4 border-gray-200 dark:border-gray-800 sm:mx-auto lg:my-6" />
      <div className="mx-auto max-w-7xl px-6 pb-4 sm:flex sm:items-center sm:justify-between lg:px-8">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          &copy; 2023 Ballygorey Labs LLC. All Rights Reserved.
        </span>
        <Socials />
      </div>
    </footer>
  )
}
