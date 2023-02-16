const joke = document.getElementById("joke");

const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  joke.innerHTML = "";

  data.joke.split("?").forEach((item, index) => {
    if (index === 0) {
      if (!item.includes(".")) {
        item = `${item}?`;
      }
    }
    if (index === 1) {
      item = `- ${item}`;
    }
    joke.innerHTML += `<p>${item}</p>`;
  });
  console.log(data.joke);
}
