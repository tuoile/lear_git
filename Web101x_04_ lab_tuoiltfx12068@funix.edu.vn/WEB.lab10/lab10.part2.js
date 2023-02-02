//1.Câu lệnh if-else 
function testElse(val) {
    let result = "";
    if (val > 5) {
      result = "Bigger than 5";
    }
    else {
      result = "5 or Smaller";
    }
    return result;
  }
 console.log(testElse(4));
 //2. Câu lệnh if- else if 
 function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  }
  else {return "Between 5 and 10";}
}
console.log(testElseIf(7));
//3. Thứ tự thực hiện các điều kiện 
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(4));
//4. Chuỗi câu lệnh if-else if 
function testSize(num) {
if (num < 5) {
  return "Tiny"
} else if (num < 10) {
  return "Small"
} else if (num < 15) {
 return "Medium"}
else if (num < 20) {
 return "Large"}
  else {return "Huge"}
}

console.log(testSize(7));
//5.Câu lệnh rẽ nhánh switch-case 
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
case 1:
answer = "alpha";  break;
case 2:
answer = "beta"; break;
case 3:
answer = "gamma"; break;
case 4:
answer = "delta"; break;}
  return answer;
}

console.log(caseInSwitch(1));
//6. Nhánh mặc định
function switchOfStuff(val) {
  let answer = "";
switch (val){
  case "a":
  answer="apple";break;
  case "b":
  answer="bird";break;
  case "c":
  answer="cat";break;
  default:
  answer="stuff";
  break;
}}
//7.Nhiều tùy chọn giống hệt nhau 
function sequentialSizes(val) {
  let answer = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid"; break;
  case 7:
  case 8:
  case 9:
    answer = "High"; break;
}}
//8. Thay thế chuỗi if-else if bằng switch-case 
function chainToSwitch(val) {
  let answer = "";

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  return answer;
}

console.log(chainToSwitch(7));
//----------------------
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {case "bob": 
    answer = "Marley"; break;
  case 42: 
    answer = "The Answer";break;
  case 1: 
    answer = "There is no #1";break;
  case 99:
    answer = "Missed me by this much!";break;
  case 7:  
    answer = "Ate Nine";break;}

  return answer;
}

console.log(chainToSwitch(7));