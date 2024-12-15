const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volume = document.querySelector(".volume-slider input")
const teclasOn = document.querySelector(".keys-check input")


let mapedKeys = [];

let audio = new Audio("./assets/sounds/a.wav");

const playTune = (key)=> {
    audio.src = `./assets/sounds/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")

    setTimeout(() =>{
        clickedKey.classList.remove("active")
    },150)

    console.log(mapedKeys)

}
pianoKeys.forEach((key) => {
    key.addEventListener("click", () => 
    playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
  });

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
      playTune(e.key);
    }
  });
const handleVolume = (e) =>{
    audio.volume = e.target.value
}

const showKeys = () =>{
    pianoKeys.forEach(key =>key.classList.toggle("hide"))
}
volume.addEventListener('input', handleVolume)

teclasOn.addEventListener("click", showKeys)

