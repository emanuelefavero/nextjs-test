import Link from 'next/link'

export default function Header() {
  return (
    <>
      <Link href='/'>
        <h1>Home</h1>
      </Link>{' '}
      {' | '}
      <Link href='/notes'>Notes</Link> {' | '}
      <Link href='/users'>Users</Link> {' | '}
      <Link href='/about'>About</Link> {' | '}
      <hr />
    </>
  )
}
