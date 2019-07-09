var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var IsKeyRight;
var IsKeyLeft;
var IsKeyJump;

var keymap = {};
onkeydown = onkeyup = function(e)
{
  e = e || event; // to deal with IE
  keymap[e.keyCode] = e.type == 'keydown';
  IsKeyRight = Boolean(keymap[68]); // D
  IsKeyLeft = Boolean(keymap[65]); // A
  IsKeyJump = Boolean(keymap[32]); // SPACE
}
