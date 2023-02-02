//1. Sử dụng câu lệnh if
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue){return "Yes, that was true";}
  return "No, that was false"; }
  
  console.log(trueOrFalse(true))
//2.Phép so sánh với toán tử == 
function testEqual(val) {
    if (val==12) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(testEqual(10));
  //3. Phép so sánh với toán tử === 
function testStrict(val) {
    if (val===7) {
      return "Equal";
    }
    return "Not Equal";
  }
console.log(testStrict(10));
//4. Phép so sánh với toán tử != 
function testNotEqual(val) {
    if (val !=99) { 
      return "Not Equal";
    }
    return "Equal";
  } 
console.log(testNotEqual(10));
//5. Phép so sánh với toán tử !== 
function testStrictNotEqual(val) {
    if (val !==17) {
      return "Not Equal";
    }
    return "Equal";
  }
console.log(testStrictNotEqual(10));
//6.Phép so sánh với toán tử > 
function testGreaterThan(val) {
    if (val >100) {  // Change this line
      return "Over 100";
    }
  
    if (val >10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
 console.log(testGreaterThan(10));
//7.Phép so sánh với toán tử >= 
function testGreaterOrEqual(val) {
    if (val >=20) { return "20 or Over";}
    if (val >=10) {return "10 or Over";}
  return "Less than 10";
  }
 console.log(testGreaterOrEqual(10));
//8. Phép so sánh với toán tử < 
function testLessThan(val) {
    if (val <25) {
      return "Under 25";
    }
 if (val <55) { return "Under 55"; }
  return "55 or Over";
  }
  console.log (testLessThan(10));
//9. Phép so sánh với toán tử <= 
function testLessOrEqual(val) {
    if (val <=12) {
      return "Smaller Than or Equal to 12";
    }
  
    if (val <=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  console.log(testLessOrEqual(10));
//10.Toán tử And 
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val>=25 && val<=50) {
        return "Yes";
      
    }
  
    // Only change code above this line
    return "No";
  }
  testLogicalAnd(10);
//11. Toán tử Or 
function testLogicalOr(val) {
  if (val <10 || val >20) {return "Outside";}
  
  return "Inside";
  }
  
  
  a = testLogicalOr(15);
  console.log(a)