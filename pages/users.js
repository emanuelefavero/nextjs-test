import Link from 'next/link'

export default function Users({ users }) {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>
            <h2>{user.name}</h2>
            {/* <p>{user.email}</p> */}
          </Link>
        </div>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=6')
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}
