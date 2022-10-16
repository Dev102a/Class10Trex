var marks = [30,2,46,82,71]
console.log (marks)
console.log(marks.length)
console.log (marks[0])
function average(){
var sum = marks[0]+ marks[1]+ marks[2]+ marks[3]+ marks[4]
var avg = sum/marks.length
console.log (avg)
}
average()
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}