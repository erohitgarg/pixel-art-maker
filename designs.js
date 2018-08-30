
// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Your code goes here!
const ht=parseInt($("#inputHeight").val()); // select and initialize height input
const wt=parseInt($("#inputWidth").val()); // select and initialize width input
let canvas = $('#pixelCanvas')[0];        // initialize table for creation

let x;
let y;
  if(y) {                   // to reset table if already exists
    for(let i=0;i<ht;i++)
    {
      x = canvas.insertRow(0);    // inserts new row
      for(let j=0;j<wt;j++) {
        y = x.insertCell(j);     // inserts new cell
        y.innerHTML="";
      }

    }
  }
  else {                     // reset table if already exist
    x=null;
    y=null;
    $("#pixelCanvas tr").remove();  // remove table
    canvas = $('#pixelCanvas')[0];
    for(let i=0;i<ht;i++)
    {
      x = canvas.insertRow(0);
      for(let j=0;j<wt;j++) {
        y = x.insertCell(j);
        y.innerHTML="";
      }
    }
  }
}

//After Submitting Table Size
$("#sizePicker").submit(function() {
  makeGrid();
  return false;    // prevents form values reset
});

// change the mouse to pointer on table hover
$("#pixelCanvas").hover(function() {
  $(this).css({"cursor":"pointer"});
});

// color the clicked grid to the selected color
$("#pixelCanvas").on('click', 'td',function() {
  let color = $('#colorPicker').val();   // select color and initialize
  $(this).css({'background-color':color});
});
