var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var drawing = false;
var rainbowColor = 0;
var CustomColor = document.getElementById("CustomColor");
var CustomSize = document.getElementById("CustomSize");

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var newsquare = document.createElementNS(namespace, "rect")
  newsquare.setAttribute("x", x)
   newsquare.setAttribute("y", y)
   newsquare.setAttribute("width", size)
   newsquare.setAttribute("height", size)
   newsquare.setAttribute("fill", color)
   screen.appendChild(newsquare)
}

function drawCircle(x,y,r,color) {
  var newcircle = document.createElementNS(namespace, "circle")
  newcircle.setAttribute("cx", x)
  newcircle.setAttribute("cy", y)
  newcircle.setAttribute("r", r)
  newcircle.setAttribute("fill", color)
  screen.appendChild(newcircle);
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  var pt = transformPoint(e, screen)
  drawing = true


})

document.addEventListener("mouseup", function(e) {
  var pt = transformPoint(e, screen)
   drawing = false
})

document.addEventListener("mousemove", function(e) {
  var colorSelect = (document.getElementById("colorSelect").value)
  var shapeSelect = (document.getElementById("shapeSelect").value)
  var sizeSelect = (document.getElementById("sizeSelect").value)
var pt =transformPoint(e)
var xpos = pt.x
var ypos = pt.y


if (shapeSelect == "square" && drawing == true){
  drawSquare(pt.x, pt.y, sizeSelect, colorSelect)
}
else if (shapeSelect == "circle" && drawing == true){
  drawCircle(pt.x, pt.y, sizeSelect, colorSelect)
}

})
