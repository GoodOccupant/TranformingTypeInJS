//преобразование из строки в число

let a = '123'
alert('тип а: ' + typeof(a) + ', a=' + a) //строка

b = Number(a)
alert('тип b: ' + typeof(b) + ', b=' + b) //число

c = +a
alert('тип c: ' + typeof(c) + ', c=' + c) //число

d = a/1
alert('тип d: ' + typeof(d) + ', d=' + d) //число

e = a*1
alert('тип e: ' + typeof(e) + ', e=' + e) //число

f = ~~a
alert('тип f: ' + typeof(f) + ', f=' + f) //число

g = a | 0
alert('тип g: ' + typeof(g) + ', g=' + g) //число

a1 = '123.456asd'
alert('тип а1: ' + typeof(a1) + ', a1=' + a1) //строка

h = parseInt(a1)
alert('тип h: ' + typeof(h) + ', h=' + h) //целое число

j = parseFloat(a1)
alert('тип о: ' + typeof(j) + ', j=' + j) //число c точкой

//преобразование из числа в строку

let num = Number(123.456)
alert('тип num: ' + typeof(num) + ', num=' + num) //число

str = '' + num
alert('тип str: ' + typeof(str) + ', str=' + str) //строка

str1 = String(num)
alert('тип str1: ' + typeof(str1) + ', str1=' + str1) //строка

str2 = num.toString()
alert('тип str2: ' + typeof(str2) + ', str2=' + str2) //строка

str3 = num.toFixed()
alert('тип str3: ' + typeof(str3) + ', str3=' + str3) //строка

str4 = num.toPrecision()
alert('тип str4: ' + typeof(str4) + ', str4=' + str4) //строка

//преобразование в Булевое значение

bo1 = Boolean(a)
bo2 = Boolean(num)
alert('тип bo1: ' + typeof(bo1) + ', bo1=' + bo1 + ';  тип bo2: ' + typeof(bo2) + ', bo2=' + bo2 ) //Булевые значения

bo3 = !!a
bo4 = !!num
alert('тип bo3: ' + typeof(bo3) + ', bo3=' + bo3 + ';  тип bo4: ' + typeof(bo4) + ', bo4=' + bo4 ) //Булевые значения

//преобразование объекта в массив и обратно

let obj = {
    'key1' : 1,
    'key2' : 2,
    'key3' : 3,
}

mas = Object.keys(obj) //[key1, key2, key3]

mas1 = Object.values(obj) //[1, 2, 3]

mas2 = Object.entries(obj) //[[key1, 1], [key2, 2], [key3, 3]]

obj1 = Object.fromEntries(mas2)  //{'key1': 1, 'key2': 2, 'key3': 3}
