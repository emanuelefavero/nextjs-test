import { useRouter } from 'next/router'

export default function UserDetail({ user }) {
  const router = useRouter()
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
      <button
        onClick={() => {
          router.back()
        }}
      >
        Go Back
      </button>
    </>
  )
}

// getStaticPaths is used to generate the paths for each user at build time
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  // * we need to return an array of objects with params property that has an id property
  // * the id is needed to fetch the data for each user in getStaticProps below
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    }
  })

  return {
    paths,
    fallback: false, // return 404 page if path is not found
  }
}

// getStaticProps is used to fetch the data for each user at build time
export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { user: data },
  }
}
