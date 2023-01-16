//В строке заглавные буквы имеют меньший "вес"
alert("A" < "a") //true

//Пустая строка и строка с 0 равна числовому 0
alert("" == 0) //true
alert("0" == 0) //true
alert(" " == 0) //true
//но
alert(" " == "") //false (тк строка с пробелом уже не "пустая")
alert("1e3" == 1000) // true автоматический перевод строки к числу при сравнении распазнает експоненциальную запись числа

//сравнение с false
alert("" == false) //true
alert("0" == false) //false
alert(" " == false) //false
alert(0 == false) //true
alert(1 == false) //false c любым числом отличным от 0
alert({} == false) //false (в отличие от строк объекты, даже пустые, никогда не равны false)

//сравнение с true
alert("" == true) //false
alert("0" == true) //false
//но
alert("1" == true) //true
alert(" " == true) //false
alert(1 == true) //true
alert(0 == true) //false с любым числом отличным от 1
alert({} == true) //true

//сравнение с undefined и null
alert(null == undefined) //true всех остальных случаях нестрогое равенство с undefined и null будет выдавать false
//но 
alert(null === undefined) //false
alert(null >= 0) //true особый случай JS
alert(undefined >= 0) //false

//NaN не равно не чему, даже самому себе
alert(NaN === NaN) //false
alert(NaN == NaN) //false
alert(NaN == 0) //false
alert(NaN == "0") //false
alert(NaN == true) //false

//сравнение объектов
alert({} == {}) //два обекта никогда не равны если не ссылаются на одни и теже данные, даже если в данных совпадают значения или объекты или массивы пустые.
a = {}
b = a
alert(a == b) //true

//при сравнении обектов с другими типами данных обекты приводятся сначала к строке с перечислением всех свойств и значений через запятую, а затем если это нужно к числу
alert({} == 0) //true
alert({} == "") //true
alert({} == false) //true
alert([1, 2] == "1,2") //true но в сравнении с числами обекто и массивов будет почти всегда false, так как при переводе доходя до буквенных значений или "," строка приводится к NaN.
//и тд                               

