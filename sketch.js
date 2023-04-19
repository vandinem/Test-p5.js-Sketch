function setup() {
  
  createCanvas( 400, 400) ;
  
  background( 0 );
  
}

function draw() {
  
  // Reset 0, 0 to the center of the canvas
  translate( width / 2, height / 2 );
  
  // let v = createVector( 100, 0 );
  let v = p5.Vector.random2D();
  v.mult( random( 50, 100 ) );
  
  strokeWeight( 4 );
  stroke( 255, 50 );
  
  line( 0, 0, v.x, v.y );
  
}