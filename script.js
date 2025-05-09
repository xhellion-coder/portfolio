/* Store the element in el */
let el = document.querySelectorAll('#tilt')

el.forEach((model, id)=> {
    /* Get the height and width of the element */
const height = model.clientHeight
const width = model.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
model.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 20 * ((xVal - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  model.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
model.addEventListener('mouseout', function() {
  model.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
model.addEventListener('mousedown', function() {
  model.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
model.addEventListener('mouseup', function() {
  model.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})
})