class Board{
  constructor(rows, columns){
    this.rows = rows
    this.columns = columns
    this.height = window.innerHeight/2
    this.width = this.height
    this.tiles = []
  }
  setup_Tiles(){
    var NUM_COLS = this.columns;
    var NUM_ROWS = this.rows;
    var padding_left = 10;
    var padding_top = 10;
    var margin_right = 10;
    
    var cardSize = (this.width - padding_left  - margin_right*this.columns)/this.columns

    for (var i = 0; i < NUM_COLS; i++) {
      for (var j = 0; j < NUM_ROWS; j++) {
        var tileX = i * (cardSize + margin_right) + padding_left;
        var tileY = j * (cardSize + margin_right) + padding_top;
        var tile = new Tile(tileX, tileY);
        tile.size = cardSize;
        this.tiles.push(tile);
      }
    } 
  }
  draw_Tiles(){
    for (var i = 0; i < this.tiles.length; i++) {
      var tile = this.tiles[i]
      tile.draw();
    }
  }


}

class Tile{

  constructor(x, y){
    this.x = x
    this.y = y
    this.size = 125
    this.value = "X"
    this.isFaceUp = false
    this.isBlock = false
    this.index_tile = 0
  }

  draw(){
    fill(255);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);

    fill(0)
    textSize(70)
    text(this.value, 
         this.x + this.size*0.25, 
         this.y + this.size*0.75)

  }

  isClicked(x, y){
    if( x > this.x &&  x < (this.x + this.size) )
      if( y > this.y && y <(this.y + this.size) )
        return true

    return false
  }

}



// Main
function setup(){
  frameRate(1)
  
  board = new Board(3,3)
 
  createCanvas(board.width, board.height);
  fill( 255 )
  rect(0, 0, width, height)

  board.setup_Tiles()
  board.draw_Tiles()

}

function draw(){
 
}


// Events


  

