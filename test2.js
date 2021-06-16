<script id="jsbin-javascript">
(async function () {

var user_control;
var rgbled;
var green_control;

var input, output;
green_control = 5;

$(function(){
    var $select = $(".10-99");
    
        $select.append($('<option></option>').val(2).text(2))
        $select.append($('<option></option>').val(9).text(9))
        $select.append($('<option></option>').val(15).text(15))
        $select.append($('<option></option>').val(35).text(35))
        $select.append($('<option></option>').val(50).text(50))
        $select.append($('<option></option>').val(90).text(90))
        $select.append($('<option></option>').val(99).text(99))
    
});
    
    
/*function process() {
	
	input = (document.getElementById('input').value);
  
	//Here comes the code
  
	output = input;
  
	//That's all, folks!
	document.getElementById('output').innerHTML = output;
	user_control = output;
}*/

boardReady({device: 'o8XX'}, async function (board) {

  board.systemReset();
  board.samplingInterval = 20;
  rgbled = getRGBLed(board, 10, 9, 6);
  
 // document.getElementById("send").addEventListener("click",async function(){
    $("#getnum").change(function(){input = $("#getnum").val();user_control = input;
    green_control = user_control;
	output = input;
   document.getElementById('output').innerHTML = "現在(下一輪)綠燈的秒數為: " + output;});
     

        //(document.getElementById('input').value);
	
 // });
   while (green_control > 0) {
      rgbled.setColor('#33cc00');
      await delay(green_control);
      rgbled.setColor('#000000');
	  await delay(0.5);
      rgbled.setColor('#ffcc00');
      await delay(0.5);
      rgbled.setColor('#000000');
      await delay(0.5);
      rgbled.setColor('#ffcc00');
      await delay(0.5);
      rgbled.setColor('#000000');
      await delay(0.5);
      rgbled.setColor('#ffcc00');
      await delay(0.5);
      rgbled.setColor('#cc0000');
      await delay(5);
    }
  
});            
}());
</script>
