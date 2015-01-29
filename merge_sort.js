/*
  Merge sort algorithm sorts an array for O(n*log(n)) time.

  @author Evgeniy Kuznetsov
  @date 30.1.2015 1:47
 */

// @param {Array.<Integer>} a
// @return {Array.<Integer>} Sorted version of a given array
function mergeSort(a){

  // Get split point for a given length of an array
  // @param {Integer} n Length of an array
  // @return {Integer}
  var getSplitPoint = function(n){
    return Math.floor(n/2);
  };

  // Merge two sorted arrays into one
  // @param {Array.<Integer>} a
  // @return {Array.<Integer>}
  var merge = function(f,s){
    var i=0,
        j=0,
        tlength = f.length + s.length,
        result = [];

    var chooseF = function(){
      result.push(f[i]);
      i++;
    };

    var chooseS = function(){
      result.push(s[j]);
      j++;
    }

    for(var k=0;k<tlength;k++){

      if(!isNaN(f[i]) && !isNaN(s[j])){
        f[i]<s[j] ? chooseF() : chooseS();
      }else if(!isNaN(f[i])){
        chooseF();
      }else{
        chooseS();
      }

    }

    return result;
  }

  // Main recursion loop
  // @param {Array.<Integer>} a
  // @return {Integer}
  var sort = function(a){
    if(a.length<2){
      return a;

    }else{

      var splitPoint = getSplitPoint(a.length);
      var fpart = sort(a.slice(0, splitPoint));
      var spart = sort(a.slice(splitPoint, a.length));

      return merge(fpart, spart);
    }
  }

  return sort(a);
}



var test = [];

test = [];
console.log("Case 1:", mergeSort(test).toString()==[].toString());

test = [1,2];
console.log("Case 2:", mergeSort(test).toString()==[1,2].toString(), mergeSort(test));

test = [2,1];
console.log("Case 3:", mergeSort(test).toString()==[1,2].toString(), mergeSort(test));

test = [1,2,3];
console.log("Case 4:", mergeSort(test).toString()==[1,2,3].toString(), mergeSort(test));

test = [3,2,1];
console.log("Case 5:", mergeSort(test).toString()==[1,2,3].toString(), mergeSort(test));

test = [3,1,2];
console.log("Case 6:", mergeSort(test).toString()==[1,2,3].toString(), mergeSort(test));

test = [5,8,9,0,-1,3,2,4];
console.log("Case 7:", mergeSort(test).toString()==[-1,0,2,3,4,5,8,9].toString(), mergeSort(test));