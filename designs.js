// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Your code goes here!
const ht=parseInt($("#inputHeight").val()); // select height input
const wt=parseInt($("#inputWidth").val()); // select width input
//alert(ht+wt); //tocheck .. @@@@DeleteLater
let canvas = $('#pixelCanvas')[0];
//canvas.append('<tr><td> </td></tr>');
let x;
let y;

if(y) {
  for(let i=0;i<ht;i++)
  {
    x = canvas.insertRow(0);
    for(let j=0;j<wt;j++) {
      y = x.insertCell(j);
      y.innerHTML="";
    }

  }
}
else {
  x=null;
  y=null;
  $("#pixelCanvas tr").remove();
  let canvas = $('#pixelCanvas')[0];
  for(let i=0;i<ht;i++)
  {
    x = canvas.insertRow(0);
    for(let j=0;j<wt;j++) {
      y = x.insertCell(j);
      y.innerHTML="";
    }

  }
}


/*let y = x.insertCell(0);
let z = x.insertCell(1);
y.innerHTML= "";
z.innerHTML = "";*/
}
$("#sizePicker").submit(function() {
  makeGrid();
  return false;
});
