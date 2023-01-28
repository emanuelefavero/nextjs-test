import Head from 'next/head'
import Image from 'next/image'

export default function about() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <h1>About Page</h1>
      <Image
        src='https://images.pexels.com/photos/13010270/pexels-photo-13010270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        width={200}
        height={200}
        alt='Landscape'
      />
    </>
  )
}
