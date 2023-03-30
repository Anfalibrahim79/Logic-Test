/* 
1. Buatlah fungsi sebagai berikut :
    Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
    Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)

*/

console.log("Jawaban no-1");
function factorial(number) {
    if (number === 0) {
        return 1;
    }

    return number * factorial(number - 1);
}

console.log(factorial(4));
console.log(factorial(8));

/* 
2. Buatlah fungsi untuk reverse sebuah string
Apabila input = “abcde”, maka outputnya = “edcba”
Dilarang menggunakan function reverse, buatlah logika sendiri

*/
console.log("Jawaban no-2");
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

console.log(reverseString("abcde"))

/* 
3. Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”! 
Contoh: printDigitValue(‘9.86-A5.321’);
Hasil :
9865321
9000000
800000
60000
5000
300
20
1

*/
console.log("Jawaban no-3")
function cetakAngka(str) {
    try {
        let regex = /\d/g
        let matches = str.match(regex)
        if (matches) {
            let number = matches.join('')
            let numberCount = number.length;
            for (let i = 0; i <= numberCount - 1; i++) {
                let digit = parseInt(number.charAt(i))
                let multiply = Math.pow(10, numberCount - 1 - i)
                console.log(digit * multiply)
            }
        } else {
            console.log("Digit tidak ditemukan");
        }
    } catch (error) {
        console.log(error.message);
    }



}



cetakAngka("9.86 - A5.321");

/* 
4. Ketik kode untuk swap 2 integer variables tanpa VARIABLE TAMBAHAN 
Contoh : let a = 3, let b = 7 => hasilnya a = 7, b = 3
*/
console.log("Jawaban no-4")
let a = 3;
let b = 7;

[a, b] = [b, a]

console.log(a)
console.log(b)

/* 
5. Buatlah fungsi sebagai berikut :
int : 4, maka outputnya adalah : empat
int : 20, maka outputnya adalah : dua puluh
int : 39, maka outputnya adalah : tiga puluh sembilan
int : 104, maka outputnya adalah : silahkan masukkan bilangan 1-100

*/

console.log("Jawaban no-5")

function numbers(num) {
    const angka = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"]

    if (num < 12) {
        return angka[num]
    } else if (num < 20) {
        return `${angka[num % 10]} belas`
    } else if (num < 100) {
        return `${angka[Math.floor(num / 10)]} puluh ${angka[num % 10]}`
    } else if (num > 100) {
        return `silahkan masukan bilangan 1-100`
    } else {
        return `Number not Found`
    }
}

console.log(numbers(4));
console.log(numbers(20));
console.log(numbers(39));
console.log(numbers(104));

/* 
6. Apabila terdapat sebuah data : 
array data =  [1,4,7,9,12], 
int low = 2,
int high = 15,
maka akan menghasilkan ouput [4,7,9,12]


*/

console.log("Jawaban no-6");

let array = [1, 4, 7, 9, 12]
let low = 2;
let high = 15;
let newArray = []

for (let i of array) {
    if (i >= low && i <= high) {
        newArray.push(i)
    }
}

console.log(newArray);

/* 
7. Dari soal nomor 6, buatlah juga untuk menghasilkan output total ada berapa angka yg termasuk dari bagian low dan high
array data =  [1,4,7,9,12], 
int low = 2,
int high = 15,
maka akan menghasilkan ouput = 4

*/
console.log("Jawaban no-7");
console.log(newArray.length);

/* 
8.Apabila terdapat int = 15, maka akan mencetak output berikut :
1
2
Edu
4
Work
Edu
7
8
Edu
Work
11
Edu
13
14
EduWork

keterangan : string edu untuk kelipatan 3, string work untuk kelipatan 5, string eduwork untuk kelipatan 3 dan 5

*/
console.log("Jawaban no-8")

function eduwork(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("eduwork");
        } else if (i % 3 === 0) {
            console.log("edu");
        } else if (i % 5 === 0) {
            console.log("work");
        } else {
            console.log(i);
        }
    }
}

eduwork(15);

/* 
9.Buatlah fungsi untuk menentukan bilangan terkecil dan terbesar dari sebuah array
Contoh : array [4,2,6,88,3,11]
Maka outputnya adalah low : 2, high : 88
dilarang menggunakan built in function
*/
console.log("Jawaban no-9");
let filterArray = [4, 2, 6, 88, 3, 11];
let lowValue = filterArray[0];
let highValue = filterArray[0];

for(let i = 0; i <= filterArray.length - 1; i++){
    if(lowValue > filterArray[i]){
        lowValue = filterArray[i]
    }
    if (highValue < filterArray[i]) {
        highValue = filterArray[i]
    }
}

console.log(lowValue);
console.log(highValue);

/*
10. Buatlah fungsi untuk mengecek tahun kabisat
input : 2021
output : 2021 bukan tahun kabisat

input : 2024
output : 2024 adalah tahun kabisat

*/

console.log("Jawaban no-10");

function tahunKabisat(num){
    if(num  % 4 === 0){
        console.log(`${num} adalah tahun kabisat`)
    }else{
        console.log((`${num} bukan tahun kabisat`));
    }
}

tahunKabisat(2024)
tahunKabisat(2021)