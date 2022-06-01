var button1;
var button2;
var deviceid1;
var deviceid2;


function fire1(){
   c2_callFunction("fire1")
}

function fire2(){
   c2_callFunction("fire2")
}


function set_deviceid1(){
deviceid1 = prompt('輸入Smart1ID','')


boardReady({board: 'Smart', device: deviceid1 , transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  button1 = getPullupButton(board, 4);
  button1.on('pressed', function () {
    fire1();
  });
});
}

function set_deviceid2(){
deviceid2 = prompt('輸入Smart2ID','')


boardReady({board: 'Smart', device: deviceid2 , transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  button2 = getPullupButton(board, 4);
  button2.on('pressed', function () {
    fire2();
  });
});
}