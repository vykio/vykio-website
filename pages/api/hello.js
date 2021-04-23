const Twitch = require("twitch.tv-api");
const twitch = new Twitch({
  id: process.env.TWITCH_ID,
  secret: process.env.TWITCH_SECRET
})

const userToStream = "vykio";

async function getStream() {
  let data = await twitch.getUser(userToStream);
  return data;
}

export default (req, res) => {

  const stream = await getStream();
  var live = false;
  
   if (stream.stream === null) {
     live = false;
   } else {
     if(stream.stream["stream_type"] == 'live') {
       live = true;
     } else {
      live = false;
     }
   }

  res.statusCode = 200
  res.json({ live })
}

