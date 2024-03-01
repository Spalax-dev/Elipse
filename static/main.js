document.addEventListener("DOMContentLoaded", function() {

      // Dibujar una elipse centrada en el plano cartesiano
    const number = document.getElementById("number");
    number.addEventListener("input", (a) => {
        const eme = document.getElementById("eme");
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        let size = 7;
        let width = canvas.width;
        let height = canvas.height;

        ctx.reset();
        plano(ctx, size, width, height);

        let m = a.srcElement.valueAsNumber;
        eme.textContent = m;

        let r_equal = 1 - (m**2)/16;
        totalx = Math.sqrt(r_equal*9);
        totaly = Math.sqrt(r_equal*4);

        let centerX = width / 2;
        let centerY = height / 2;

        let radiusX = totalx * (width / size); // radio horizontal
        let radiusY = totaly * (width / size); // radio vertical

        console.log(radiusX)

        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        ctx.strokeStyle = '#334533';
        ctx.fillStyle = "#33453370";
        ctx.fill()
        ctx.stroke();


    } ) 
});

function plano(ctx, size, width, height) {
  // Dibujar los ejes X e Y
  ctx.beginPath();
  ctx.moveTo(0, height / 2);
  ctx.lineTo(width, height / 2);
  ctx.moveTo(width / 2, 0);
  ctx.lineTo(width / 2, height);
  ctx.fillText("x", 10, (width/2)-3);  
  ctx.fillText("y", (width/2)+3, 10);
  ctx.strokeStyle = 'black';
  ctx.stroke();
  // Dibujar los interceptos de los ejes del plano
  let mid = width / 2;
  let u = width / size;

  for (x=1; x < 10; x++) {  
     ctx.beginPath();
     ctx.moveTo(mid+u*x, mid);
     ctx.lineTo(mid+u*x, mid-5);
     ctx.lineTo(mid+u*x, mid+5);
     ctx.fillText(x, mid+u*x-3, mid-8);
     ctx.closePath();
     ctx.stroke();
    }
  for (x=1; x < 10; x++) {  
     ctx.beginPath();
     ctx.moveTo(mid-u*x, mid);
     ctx.lineTo(mid-u*x, mid-5);
     ctx.lineTo(mid-u*x, mid+5);
     ctx.fillText(-x, mid-u*x-3, mid+16);
     ctx.closePath();
     ctx.stroke();
  }
  for (x=1; x < 10; x++) {  
     ctx.beginPath();
     ctx.moveTo(mid, mid+u*x);
     ctx.lineTo(mid-5, mid+u*x);
     ctx.lineTo(mid+5, mid+u*x);
     ctx.fillText(-x, mid-16, mid+u*x+3);
     ctx.closePath();
     ctx.stroke();
  }
  for (x=1; x < 10; x++) {  
     ctx.beginPath();
     ctx.moveTo(mid, mid-u*x);
     ctx.lineTo(mid-5, mid-u*x);
     ctx.lineTo(mid+5, mid-u*x);
     ctx.fillText(x, mid+8, mid-u*x+3);
     ctx.closePath();
     ctx.stroke();
  }
}
