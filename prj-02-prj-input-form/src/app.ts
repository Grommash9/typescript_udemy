
const audioContext = new AudioContext();

function PlaySound(file_name: string) {
  fetch(file_name)
    .then(response => response.arrayBuffer())
    .then(data => audioContext.decodeAudioData(data))
    .then(buffer => {
      // Create an AudioBufferSourceNode
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
  
      // Connect to the audio context's destination (e.g., speakers)
      source.connect(audioContext.destination);
  
      // Start playing the sound
      source.start();
    })
    .catch(error => {
      console.error('Error loading or playing the audio:', error);
    });} 
    

let NameInputField = document.getElementById("name-input")! as HTMLInputElement

NameInputField.addEventListener("keypress", () => PlaySound("interface-button-154180.mp3"))

let SurnameInputField = document.getElementById("surname-input")! as HTMLInputElement

SurnameInputField.addEventListener("keypress", () => PlaySound("interface-button-154180.mp3"))

let FormButton = document.getElementById('open-form-button')! as HTMLButtonElement

FormButton.addEventListener("click", saveHuman)

let humanList = document.getElementById('human-list')! as HTMLUListElement


function saveHuman() {
  if (NameInputField.value.length < 5 || SurnameInputField.value.length < 5) {
    window.alert("Both first and last name should have more then 5 letters")
  }
  else {
    PlaySound("transition-base-121422.mp3")
    const newItem = document.createElement('li');
    
    newItem.textContent = NameInputField.value + " " + SurnameInputField.value;
    humanList.appendChild(newItem);
    NameInputField.value = ""
    SurnameInputField.value = ""
  }
}