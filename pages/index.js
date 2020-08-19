import Head from 'next/head'

const Twitch = require("twitch.tv-api");
const twitch = new Twitch({
  id: process.env.TWITCH_ID,
  secret: process.env.TWITCH_SECRET
})

import '../public/styles/style.css';
import '../public/styles/twitch.css';
import '../public/styles/accordion.css';

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

const userToStream = "vykio";

async function foo() {
  let data = await twitch.getUser(userToStream);
  return data;
}


/*async function isStreamLive(userName) {
  const user = await apiClient.helix.users.getUserByName(userName);
  if (!user) {
    return false;
  }
  return await user.getStream() !== null;
}*/

export async function getServerSideProps() {

  const res = await fetch(defaultEndpoint);
  const data = await res.json();



  //const dd = await isStreamLive("vykio");
  const dd = await foo();
  //console.log(dd);

  return {
    props: {
      data,
      dd
    }
  }
}


export default function Home({ data, dd }) {
  const { results = [] } = data;
  var live = false;
  //const { res = [] } = dd;


  return (
    <>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"></link>
      {dd.stream === null ? live = false : (dd.stream["stream_type"] == 'live' ? live = true : live = false)}


      <div className="container">
        <Head>
          <title>Vykio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            <span class="blue">V</span>ykio
          </h1>

          <p className="description">
            {/*Get started by editing <code>pages/index.js</code>*/}
            <code>BTC: 1JXAhLPtXbC7QoGLQTRNqnfbKwizez5Y3K</code>
          </p>




          {live
            ?
            <>
              {/*<div class="live-indicator-block">
                <span class="live-indicator">
                  <i class="fa fa-circle blink" aria-hidden="true"></i>Live
            </span>
          </div>*/}
              <ul class="accordion css-accordion">
                <li class="accordion-item">
                  <input class="accordion-item-input" type="checkbox" name="accordion" id="item1" />
                  <label for="item1" class="accordion-item-hd"><span><img src="/imgs/red_dot.png" className="dot" />En live sur Twitch maintenant !</span><span class="accordion-item-hd-cta">&#9650;</span></label>
                  <div class="accordion-item-bd">
                    <div class="twitch border">
                      {/*<div className=" padNext"><span><img src="/imgs/red_dot.png" className="dot" />En ligne</span></div>*/}
                      <input type="hidden" value="49.648729|2.289973"></input>
                      <div class="twitch-video">
                        <iframe
                          src={"https://player.twitch.tv/?channel=" + userToStream + "&parent=localhost&autoplay=false"}
                          frameborder="0"
                          scrolling="no"
                          allowfullscreen="true"
                          height="100%"
                          width="100%">
                        </iframe>
                      </div>
                      <div class="twitch-chat">
                        <iframe
                          frameborder="0"
                          scrolling="no"
                          src={"https://www.twitch.tv/embed/" + userToStream + "/chat?parent=localhost"}
                          height="100%"
                          width="100%">
                        </iframe>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

            </>
            : <div class="twitch borderHorsLigne">
              <img src="/imgs/grey_dot.png" className="dot" />Stream hors ligne
              </div>}

          {/*<ul className="grid">

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
          */}
        </main>

        <footer>
          {/*<a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>*/}
          <div class="footerContainer">
            <a href="https://instagram.com/vykio.stream" target="_blank"><img src="/imgs/instagram.svg" className="logo" /></a>
            <a href="https://youtube.com/vykio" target="_blank"><img src="/imgs/youtube.svg" className="logo" /></a>
            <a href="https://twitch.tv/vykio" target="_blank"><img src="/imgs/twitch.svg" className="logo" /></a>
            <a href="https://github.com/vykio" target="_blank"><img src="/imgs/github.svg" className="logo" /></a>
          </div>
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




      </div></>
  )
}
