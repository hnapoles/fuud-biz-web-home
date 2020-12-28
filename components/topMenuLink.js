import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function TopMenuLink({ href, children }) {
  const router = useRouter()

  let className = children.props.className || ''

  if (router.pathname === href) {
    className = "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
  }
  else {
    className = "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}