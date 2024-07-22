import { useEffect, useState } from "react";

export default function Joker() {
  let [Joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };
  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      //   console.log(jsonResponse);
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);
  return (
    <div>
      <h1>Joker!</h1>
      <h3>{Joke.setup}</h3>
      <h3>{Joke.punchline}</h3>
      <button onClick={getNewJoke}>Get Joke</button>
    </div>
  );
}
