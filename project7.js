var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawsquare(x, y, size, color) {
  var newsquare = document.createElementNS(namespace, "square")
  newsquare.setAttribute("x", xpos)
   newsquare.setAttribute("y", ypos)
   newsquare.setAttribute("width", width)
   newsquare.setAttribute("height", height)
   newsquare.setAttribute("fill", color)
   canvas.appendChild(newsquare)
}

function drawCircle(color,r,x,y) {
  var newcircle = document.createElementNS(namespace, "circle")
  newcircle.setAttribute("cx", x)
  newcircle.setAttribute("cy", y)
  newcircle.setAttribute("r", r)
  newcircle.setAttribute("fill", color)
  screen.appendChild(newcircle);
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})
