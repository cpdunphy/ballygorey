'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

const logo = '/images/logo.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    import('../lib/firebase').then(({ analytics }) => {
      // Firebase Analytics initialized
    })
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-lg dark:bg-black/70">
      <nav
        className="z-40 mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" passHref>
            <span className="sr-only">Ballygorey Labs</span>
            <Image
              className="h-8 w-auto"
              src={logo}
              alt="Logo"
              sizes="128px"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/projects" className="text-sm font-semibold leading-6">
            Projects
          </Link>
          <Link href="/experience" className="text-sm font-semibold leading-6">
            Experience
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Insert a trailing item here */}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/30 px-6 py-4 backdrop-blur-2xl sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-black/30">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Ballygorey Labs</span>
              <Image
                className="h-8 w-auto"
                src={logo}
                alt="Logo"
                sizes="128px"
                width={32}
                height={32}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-950"
                >
                  Projects
                </a>
                <a
                  href="/experience"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-950"
                >
                  Experience
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <hr className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-800" />
    </header>
  )
}
