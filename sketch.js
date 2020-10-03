class Board{
  constructor(rows, columns){
    this.rows = rows
    this.columns = columns
    this.height = window.innerHeight*0.75
    this.width = this.height
    this.tiles = []
    this.playerSign = 'X'
    this.status = "Turn Player " + this.playerSign
    this.endGame = false
  }
  setup_Tiles(){
    var NUM_COLS = this.columns;
    var NUM_ROWS = this.rows;
    var padding_left = 30;
    var padding_top = 30;
    var margin_right = 10;
    
    var cardSize = (this.width - padding_left*2  - margin_right*this.columns)/this.columns

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
  draw_Messages(){
    textSize( this.height * 0.04 )
    text('Status:  '+ this.status, 
          this.width * 0.10,
          this.height * 0.98)
  }

  check_state_game(){

  if( this.endGame == false){
    if( this.are_there_winning_columns() == true ){
      this.swap_player()
      this.status = 'Player ' +this.playerSign +' Wins by Column'
      this.block_all_tiles()
      this.endGame = true
    }
    
    if( this.are_there_winning_rows() == true ){
      this.swap_player()
      this.status = 'Player ' +this.playerSign +' Wins by Row'
      this.block_all_tiles()
      this.endGame = true
    }
    
    if( this.are_there_winning_diagonals() == true ){
      this.swap_player()
      this.status = 'Player ' +this.playerSign +' Wins by Diagonal'
      this.block_all_tiles()
      this.endGame = true
    }
  }

    // else if( this.are_all_tiles_used() == true ){
    //   this.status = 'Draw'
    // }



  }

  are_all_tiles_used(){
    for(var tile of this.tiles){
      if(tile.isBlock == false)
        return false
    }
    return true

  }

  block_all_tiles(){
    for(var tile of this.tiles)
      tile.isBlock = true
  }

  are_there_winning_columns(){

      var tiles = this.tiles
      
      if(tiles[0].value == tiles[1].value){ 
        if( tiles[1].value == tiles[2].value) 
          if(tiles[0].value != '')
            return true
      }
      if(tiles[3].value == tiles[4].value){ 
        if( tiles[4].value == tiles[5].value ){
          if(tiles[3].value != ''){
            return true
          }
        }
      }
      if(tiles[6].value == tiles[7].value){ 
        if( tiles[7].value == tiles[8].value )
          if(tiles[6].value != '')
           return true
      }
     
     

    return false

  }

  are_there_winning_rows(){

    var tiles = this.tiles
    
    if(tiles[0].value == tiles[3].value){ 
      if( tiles[3].value == tiles[6].value) 
        if(tiles[0].value != '')
          return true
    }
    if(tiles[1].value == tiles[4].value){ 
      if( tiles[4].value == tiles[7].value ){
        if(tiles[1].value != ''){
          return true
        }
      }
    }
    if(tiles[2].value == tiles[5].value){ 
      if( tiles[5].value == tiles[8].value )
        if(tiles[2].value != '')
         return true
    }
   
   

  return false

  }

  are_there_winning_diagonals(){

    var tiles = this.tiles
    
    if(tiles[0].value == tiles[4].value){ 
      if( tiles[4].value == tiles[8].value) 
        if(tiles[0].value != '')
          return true
    }
    if(tiles[2].value == tiles[4].value){ 
      if( tiles[4].value == tiles[6].value ){
        if(tiles[2].value != ''){
          return true
        }
      }
    }
   
   
   

  return false

  }

  swap_player(){
    if( this.playerSign == 'X')
      this.playerSign = 'O'
    else
      this.playerSign = 'X'
  }

}

class Tile{

  constructor(x, y){
    this.x = x
    this.y = y
    this.size = 125
    this.value = ""
    this.isFaceUp = false
    this.isBlock = false
    this.index_tile = 0
  }

  draw(){
    fill(255);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);

    fill(0)
    textSize(this.size*0.75)
    text(this.value, 
         this.x + this.size*0.23, 
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
  frameRate(5)
  
  board = new Board(3,3)
 
  createCanvas(board.width, board.height);
  fill( 255 )
  rect(0, 0, width, height)

  board.setup_Tiles()
  board.draw_Tiles()
  board.draw_Messages()

}

function draw(){
  background(255)
  fill(255)
  rect(0, 0, width, height )


  board.draw_Tiles()
  board.draw_Messages()

  board.check_state_game()
}


// Events
mouseClicked = function(){
  tiles = board.tiles
  
  console.log(tiles[0].value != '')


  for(tile of board.tiles ){
    if(tile.isClicked(mouseX, mouseY) == true){

        if( tile.isBlock == false){  
            tile.value = board.playerSign
            
            board.swap_player()

            tile.isBlock = true; 
            board.status = "Turn Player " + board.playerSign

        }
      }
      
  }



}

