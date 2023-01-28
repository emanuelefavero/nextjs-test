import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Go Home after 3 seconds
    setTimeout(() => {
      router.push('/')
    }, 3000)
  })

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1>404 - Page Not Found</h1>
      <Link href='/'>Go Back Home</Link>
    </>
  )
}
