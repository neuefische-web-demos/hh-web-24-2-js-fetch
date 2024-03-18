// Import Functions & Modules
import { JokeSection } from "../components/JokeSection/JokeSection.js";
import { Joke } from "../components/Joke/Joke.js";

const root = document.body;

// Assemble DOM for joke section
const jokeSection = JokeSection();
root.append(jokeSection);

function renderJoke(joke) {
  // Clear the joke section

  const newJoke = Joke(joke);

  jokeSection.append(newJoke);
}

// renderJoke("Thanks for explaining the word “many” to me, it means a lot.");

async function getJoke() {
  jokeSection.innerHTML = "";

  // fetch returns a Promise
  const response = await fetch(
    `https://example-apis.vercel.app/api/bad-jokes/`
  );

  // response returns a Promise too!
  const data = await response.json();

  console.log(data);
  data.forEach((item) => {
    renderJoke(item.joke);
  });
}

getJoke();
