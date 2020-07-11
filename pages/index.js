import Head from 'next/head'
import '../public/styles/style.css';

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

export async function getServerSideProps() {

  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}


export default function Home({ data }) {
  const { results = [] } = data;
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js !</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <ul className="grid">

          {results.map(result => {
            const { id, name, image } = result;

            return (
              <li key={id} className="card">
                <a href="https://nextjs.org/docs" >
                  <img src={image} alt={`${name}`} />
                  <h3>{name}</h3>
                </a>
              </li>
            )

          })}


        </ul>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
