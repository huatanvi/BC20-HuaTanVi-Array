/**
 * Thêm số vào mảng
 */
var arrNum = [];

function addElementArray() {
    var num = Number(document.querySelector(".inputNumber").value);

    arrNum.push(num);

    document.querySelector("#txtAdd").innerHTML = arrNum
}
document.querySelector("#btnAdd").onclick = addElementArray;


/**
 * Tổng số dương
 */

function calcSum() {
    var sum = 0;

    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            sum += arrNum[i]
        }
    }
    document.querySelector("#txtResult").innerHTML = "Tổng số dương " + sum;
}
document.querySelector("#btnSum").onclick = calcSum;

/**
 * Đếm số dương
 */
function countNum() {
    var count = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            count++
        }
    }
    document.querySelector("#txtResult").innerHTML = "Số lượng số dương " + count;
}
document.querySelector("#btnCount").onclick = countNum;

/**
 * tìm số nhỏ nhất
 */

function timSNN() {
    var min = arrNum[0];

    for (var i = 0; i < arrNum.length; i++) {
        if (min > arrNum[i]) {
            min = arrNum[i];
        }
    }
    document.querySelector("#txtResult").innerHTML = "Số nhỏ nhất: " + min;
}
document.querySelector("#btnMin").onclick = timSNN;

/**
 * Tìm số dương nhỏ nhất
 */

var soDuong = []
function timSoDuong() {
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            soDuong.push(arrNum[i])
        }
    }
    var small = soDuong[0]
    if (small > soDuong[i]) {
        small = soDuong[i];
    }
    document.querySelector("#txtResult").innerHTML = "Số nhỏ dương nhất: " + small;
}
document.querySelector("#btnSmall").onclick = timSoDuong;


/**
 * Tìm số chẵn cuối cùng 
 */
var even = []

function timSoChan() {
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            even.push(arrNum[i])
        }
    }
    var rs = even[even.length - 1]
    document.querySelector("#txtResult").innerHTML = "Số chẵn cuối cùng: " + rs;
}
document.querySelector("#btnEven").onclick = timSoChan;


/**
 * Đổi chỗ
 */


function arrMove() {
    var num1 = parseInt(document.getElementById("inputNumber1").value) ;
    var num2 =  parseInt(document.getElementById("inputNumber2").value) ;
    console.log(num1,num2)
    var temp = arrNum[num1]
    arrNum[num1] = arrNum[num2]
    arrNum[num2] = temp

    document.querySelector("#txtResult").innerHTML = "Mảng sau khi đổi: " + arrNum;
}
document.querySelector("#btnMove").onclick = arrMove;


/**
 * sắp xếp mảng tăng
 */

function sapXepTang(){
    var newArr = [];
    for(var i =0; i < arrNum.length; i++ ){
        newArr.push(arrNum[i]);
    }
     for(var i= 0; i < newArr.length;i++){
         for(var j = 0; j <newArr.length-1;j++){
             if(newArr[j]>newArr[j+1]){
                 var temp = newArr[j]
                 newArr[j] = newArr[j+1]
                 newArr[j+1] = temp
             }
         }
     }
     console.log(newArr)
     document.querySelector("#txtResult").innerHTML = "Số tăng dần: " + newArr;
}
document.querySelector("#btnTang").onclick = sapXepTang;


/**
 * Đếm số nguyên
 */

function demSoNguyen(){
    dem = 0
    for(var i =0; i< arrNum.length;i++){
       
        if(arrNum[i]>0 && Number.isInteger(arrNum[i])){
            
            dem++
        }
    }
    document.querySelector("#txtResult").innerHTML = "Có: " + dem + " số nguyên";
}
 document.querySelector("#btnNum").onclick = demSoNguyen;


/**
 * so sánh số âm số dương
 */