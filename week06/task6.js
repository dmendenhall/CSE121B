// dmendenhall: My Library (https://github.com/dmendenhall/repo)" https://icanhazdadjoke.com/

const getRandomDadJoke = async () => {

    const response = await fetch(
      "https://icanhazdadjoke.com/", {headers:{accept: "application/json"}}
    );

      jokeList = await response.json();
    outputRandomJoke(jokeList);
  };
  
  const searchDadJoke = async (search) => {

    const response = await fetch(
      "https://icanhazdadjoke.com/search?term="+search, {headers:{accept: "application/json"}}
    );

      jokeList = await response.json();
    outputSearchResult(jokeList);
  };

const reset = () => {
  document.querySelector("#jokes").innerHTML = "";
};


const buttonElement = document.getElementById("submitButton");
const selectionElement = document.getElementById("selection")
const inputElement = document.getElementById("inputBox");

function copyInput() {
    const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}

function submitButton() {
        const selection = selectionElement.value
        if (selection == "randomDadJoke")
            getRandomDadJoke()
        else { 
            const inputElement = document.getElementById("inputBox");
            searchDadJoke(inputElement.value)
        }
}

function outputRandomJoke(jokeList){
    const outputElement = document.getElementById("output");
  outputElement.innerHTML = jokeList.joke;
}
  function outputSearchResult(jokeList){
    const outputElement = document.getElementById("output");
    let i = Math.floor(Math.random() * jokeList.results.length)

    outputElement.innerHTML = jokeList.results[i].joke;
}

function dropDownChange(event) {
    const selection = selectionElement.value
        if (selection == "randomDadJoke")
            inputElement.className = "hidden"
        else { 
            inputElement.className = ""
        }
}

buttonElement.addEventListener("click", submitButton);
selectionElement.addEventListener("change", dropDownChange);
dropDownChange()