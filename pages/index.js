import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <ul>
        <li>
          Visit <Link href='/notes'>Notes Page</Link> to see how data is
          rendered from the client
        </li>
        <li>
          Visit <Link href='/users'>Users Page</Link> to see how data is
          rendered from the server
        </li>
      </ul>
    </>
  )
}
