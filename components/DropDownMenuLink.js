import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function DropDownMenuLink({ href, children }) {
  const router = useRouter()

  let className = children.props.className || ''

  if (router.pathname === href) {
    className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6";
  }
  else {
    className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6";
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}