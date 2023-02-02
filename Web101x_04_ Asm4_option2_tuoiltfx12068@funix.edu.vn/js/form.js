// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()








function showError(key,mess){
    document.getElementById(key + '_error').innerHTML = mess;
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