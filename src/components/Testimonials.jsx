import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Fragment, useEffect, useRef } from 'react'

const Testimonials = () => {
    return (
        <section className="overflow-hidden bg-gray-50 dark:bg-zinc-700/40 dark:border-zinc-700/40 py-12 md:py-10 lg:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-10">
              <div className="mx-auto max-w-3xl text-center text-2xl  dark:text-zinc-100 font-medium leading-9 text-gray-900">
                <p>
                  &ldquo;I got a chance to work with Dan on a project with DHHS. He is GREAT to work with and an awesome collaborator. He and I completed this integration of two systems. <br/> <br/> At one point after he left the project, a comment was made &lsquo;Where is Dan? Bring him back because we actually get work done.&rsquo; <br/> <br/> Given the opportunity, I would flip tables over to work with him again. He&apos;s that good.&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <Image
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://media-exp1.licdn.com/dms/image/C4E03AQF0YEwuFWdCgg/profile-displayphoto-shrink_400_400/0/1658839613990?e=1670457600&v=beta&t=hJUgxLMYhkDR_93PGnDypjfaLNEW16Li9MiCZrU6x8c"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium dark:text-zinc-100 text-gray-900">Addam Driver</div>
  
                    <svg className="mx-1 hidden h-5 w-5 dark:text-zinc-100  text-indigo-600 md:block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>
  
                    <div className="text-base font-medium dark:text-zinc-100 text-gray-500">Lead Solutions Architect, U.S. Department of Health and Human Services</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    )
  }

  export default Testimonials;