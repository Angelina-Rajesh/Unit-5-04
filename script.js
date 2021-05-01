//Change image
document.getElementById('Image').addEventListener ('click', image)
//Change text
document.getElementById('Text').addEventListener ('click', text)
//Hide text
document.getElementById('Hide').addEventListener ('click', hide)
//Show text
document.getElementById('Show').addEventListener ('click', show)
//Change background
document.getElementById('Background').addEventListener ('click', background)
//Define button function to change picture
function image () {
  document.getElementById('panda').src ='Penguins.jpg'
}
//Define button function to change text
function text () {
  document.getElementById('text').innerHTML = 'What do you like better, Pandas or Penguins?'
}
//Define button function to hide text
function hide () {
  document.getElementById('text').style.display = 'none'
}
//Define button function show text
function show () {
  document.getElementById('text').style.display = 'block'
}
//Define button function change background colour
function background () {
  document.body.style.backgroundColor = 'HoneyDew'
}