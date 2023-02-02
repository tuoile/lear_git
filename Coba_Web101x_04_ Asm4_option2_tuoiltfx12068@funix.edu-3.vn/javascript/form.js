function showError(key,mess){
    document.getElementById(key + '_error').innerHTML = mess;
}

function validateForm() {
  var flag =true;
  var username=document.getElementById("name").value;
    
    if (username == ""){flag=false, showError('name', 'Hãy điền tên của bạn.'),
                              showError('totalMoney',"Hãy lựa chọn thông tin đặt sân");}
    
     var tel=document.getElementById("tel").value;

    if (tel=="") {flag=false, showError('tel','Hãy điền số điện thoại của bạn.'),
              showError('totalMoney',"Hãy lựa chọn thông tin đặt sân");}

    var hours=document.getElementById("hours").value;
    if (hours =="") {flag=false, showError('hours','Hãy điền số giờ muốn đặt sân.'),
              showError('totalMoney',"Hãy lựa chọn thông tin đặt sân");}
    
    var numberPlayer=document.getElementById("numberPlayer").value;
    if (numberPlayer=="") {flag=false, showError('numberPlayer','Hãy nhập số người chơi.'),
                          showError('totalMoney',"Hãy lựa chọn thông tin đặt sân");}
    
   var team=document.getElementById("team").value;
    if (team=="") {flag=false, showError('team','Hãy nhập số đội chơi.'),
    showError('totalMoney',"Hãy lựa chọn thông tin đặt sân");}

    var mySelect=document.getElementById("mySelect").value;
    if (mySelect==""){flag=false, showError('mySelect', 'Hãy chọn khung giờ.'),
    showError('totalMoney',"Hãy lựa chọn thông tin đặt sân");}

    var radios = document.querySelector('input[name="period"]:checked');    
    if (radios !=null) {
      showError('radioButtons', ''),
      showError('totalMoney',"");}
else {showError('radioButtons', 'Bạn có muốn đặt định kỳ?'),
          showError('totalMoney',"Hãy lựa chọn thông tin đặt sân");}


          return flag;
        }

 
 function myName() {
  var flag =true;
  var username=document.getElementById("name").value;
  var letters = /^[a-zA-Z\s]*$/;
  if(username.match(letters)){flag;showError("name","");}
  else if (username==""){flag;showError("name","");}
  else {flag=false,showError("name","Tên chỉ bao gồm ký tự chữ.");}
  if (username.length>50){flag=false,showError("name","Tên không dài quá 50 ký tự");}
  return flag;}

function myTel(){
  var flag =true;
  var tel=document.getElementById("tel").value;
  var numbers=/^[0-9]*$/
  if(tel.match(numbers)){flag;showError("tel","");}
    else if (tel==""){flag;showError("tel","");}
     else {flag=false,showError("tel","Số điện thoại chỉ bao gồm ký tự số.");}
     if (tel.length>50){flag=false,showError("tel","số điện thoại không dài quá 50 ký tự");}
     return flag;
}

function myHours(){
  var flag =true;
  var hours=document.getElementById("hours").value;
  if (hours<=0) {flag=false,showError("hours","Chỉ được phép nhập số nguyên dương.");}
  if (hours>0) {flag=false,showError("hours","");}
  return flag;
}

function myNumberPlayer(){
  var flag =true;
    var numberPlayer=document.getElementById("numberPlayer").value;
    if (numberPlayer<=0){flag=false,showError("numberPlayer","Chỉ được phép nhập số nguyên dương.");}
    if (numberPlayer>0){flag=false,showError("numberPlayer","");}
    return flag; }
function myTeam (){
  var flag =true;
  var team=document.getElementById("team").value;
  if (team>0) {flag=false, showError('team','');}
  if (team<=0) {flag=false, showError('team','Chỉ được nhập số nguyên dương.');}

  return flag;
}
function chon(){
  var flag =true;
  var chon=document.getElementById("mySelect").value;
  if (chon!=""){flag=false, showError('mySelect', '');}

    return flag;
}

function getResults() {
  var radios = document.getElementsByName("period");

  for (var i = 0; i < radios.length; i++) {       
      if (radios[i].checked) {
        showError('radioButtons', ''),
        showError('totalMoney',"");}
      }}


      function  countMoney(){
        var flag =true;
        var x=document.getElementById("mySelect").value;
        var y=document.getElementById("hours").value;
        var z = (x*y) ;
      
        Number.prototype.format = function(){
          return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
       };
       
       document.getElementById("moneyPitch").innerHTML=(z.format()+" "+"VND");
       
      
      
      
      var team=document.getElementById("team").value;
      var service = document.getElementsByName("service");
      
      
      for (var i = 0; i < service.length; i++)        
      if (service[i].checked&&i=="1") {flag,
      document.getElementById("rentUniform").innerHTML=(service[i].value*team).format()+" "+"VND";
      break;}
      
      else {flag=false; document.getElementById("rentUniform").innerHTML=0+" "+"VND";
      document.getElementById("totalMoney").innerHTML=z.format()+" "+"VND";
      }
      
      for (var p = 0; p < service.length; p++)   
      if (service[p].checked&&p=="2") {flag,
      document.getElementById("referee").innerHTML=(service[p].value*y).format()+" "+"VND";
      break;}
       
      else {flag=false;document.getElementById("referee").innerHTML=0+" "+"VND";
      document.getElementById("totalMoney").innerHTML=z.format()+" "+"VND";
      }
      

      
      var b=(service[i].value*team);
      var c=(service[p].value*y);
      if (service[i].checked&&i=="1"&&service[p].checked&&p=="2"){
      document.getElementById("totalMoney").innerHTML=(z+b+c).format()+" "+"VND";}
      else {flag=false; document.getElementById("rentUniform").innerHTML=0+" "+"VND";
      flag=false;document.getElementById("referee").innerHTML=0+" "+"VND";
      document.getElementById("totalMoney").innerHTML=z.format()+" "+"VND";
      }
      
      return flag;}