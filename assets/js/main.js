function clearCanvas(x){
    const canvas = document.getElementById("fire");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(x, 0, canvas.width, canvas.height);
}

window.onload = function(){
  const canvas = document.getElementById("fire");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";  
  function cartToScreen(px, py) {
    return [px, -py + 50];
  };
    var coords = cartToScreen(50,50);
    // draws 50 pixels from the bottoom instead of 50 pixels from the top
    ctx.fillText("lalala", coords[0], coords[1]);
  document.body.onkeydown = function(e){
  		let DD = 1;
      
  		switch(e.keyCode) {
            case 39:
                var RM = Number(document.getElementById("x").innerHTML) + DD;
                document.getElementById("x").innerHTML = RM;
                movement(1,RM);
                break;   
            case 37:
                var LM = Number(document.getElementById("x").innerHTML) - DD;
                document.getElementById("x").innerHTML = LM;
                movement(1,LM);
                break;
            case 38:
                var UM = Number(document.getElementById("y").innerHTML) - DD;
                document.getElementById("y").innerHTML = UM;
                movement(2, UM);
                break;
            case 40:
                var DM = Number(document.getElementById("y").innerHTML) + DD;
                document.getElementById("y").innerHTML = DM;
                movement(2, DM);
                break;
        }
    } 
 
  function movement(s,v){
    switch (s) {
      case 1:
        var xy = Number(document.getElementById("y").innerHTML);    
        ctx.fillRect(v,xy,1,1);
        document.getElementById("x").innerHTML = v;
        console.log("Selection 1, values are - v: " + v + " and xy: " + xy);
        break;
      case 2:
      	var yx = document.getElementById("x").innerHTML;
        ctx.fillRect(yx,v,1,1);
        document.getElementById("y").innerHTML = v;
        console.log("Selection 2, values are - v: " + v + " and yx: " + yx);
        break;
    }
  } 

  function isPos(n) {
    return 0 === n % (!isNaN(parseFloat(n)) && 0 <= ~~n);
    }
   const drawLine = function (V, H){
    //arguments.length > 0 ? numAdd : null -- is there a value passed?
    let delay = 10;
    if(isPos(V)) {
        var x;
        for(let x = 0; x < V; x++){
          setTimeout( function timer(){
            var yx = document.getElementById("x").innerHTML;
            ctx.fillRect(yx,x,1,1);
            document.getElementById("y").innerHTML = x;
          }, x * delay);
        }
    } 
    else {
        for(let x = 0; x > V; x--){
          setTimeout( function timer(){
            var yx = document.getElementById("x").innerHTML;
            ctx.fillRect(yx,x,1,1);
            document.getElementById("y").innerHTML = x;
          }, x * delay);
        }
    }

    if(isPos(H)){
        var x;
        for(let x = 0; x < H; x++){
            setTimeout( function timer(){
              var xy = Number(document.getElementById("y").innerHTML);    
              ctx.fillRect(x,xy,1,1);
              document.getElementById("x").innerHTML = x;
            }, x * delay);
        }
    }
    else {
        for(let x = 0; x < H; x--){
            setTimeout( function timer(){
              var xy = Number(document.getElementById("y").innerHTML);    
              ctx.fillRect(x,xy,1,1);
              document.getElementById("x").innerHTML = x;
            }, x * delay);
            
        }
    }
    return true;
}
drawLine(50,50);







}
