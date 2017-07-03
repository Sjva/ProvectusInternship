/**
 *
 Допустим есть массив строк. Все строки содержар одинаковые символы, кроме одной строки.
 Надо написать функцию, которая будет принимать этот массив и находить это слово.
 Строки могут содержать пробелы, их нужно игнорировать, только non-spaces символы имеют значение. Гарантировано, что массив будет содержать больше 3 строк
 Примр:
 findUniq([ 'abc', 'acb', 'bac', 'test', 'bca', 'cab', 'cba' ]) === 'test'

 */

var uniqueString = function (stringArray) {
    if (stringArray.length < 3) {
        throw "Array must consist of 3 or more elements."
    }

    var iterations = stringArray.length - 1;
    var uniqueIndex = null;
    var current = "";
    var next = "";

    for (var i = 0; i < iterations; i++) {
        current = stringArray[i].replace(/ /g,'').split('').sort().join('');
        next = stringArray[i + 1].replace(/ /g,'').split('').sort().join('');

        if (current !== next) {
            if (i === 0 && current !== stringArray[i + 2].replace(/ /g,'').split('').sort().join('')) {
                uniqueIndex = i;
            }
            else {
                uniqueIndex = i + 1;
            }
            break;
        }
    }
    return stringArray[uniqueIndex];
};

alert(uniqueString(['abc', 'acb', 'bac', 'test', 'bca', 'cab', 'cba']) === 'test'); // в середине
alert(uniqueString(['test', 'abc', 'acb', 'bac', 'bca', 'cab', 'cba']) === 'test'); // на первом месте
alert(uniqueString(['abc', 'test', 'acb', 'bac', 'bca', 'cab', 'cba']) === 'test'); // на втором месте
alert(uniqueString(['abc', 'acb', 'bac', 'bca', 'cab', 'cba', 'test']) === 'test'); // в конце
alert(uniqueString(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']) === 'test'); // нет уникальной строки
alert(uniqueString(['abc', 'acb']) === 'test'); // меньше трех элементов
