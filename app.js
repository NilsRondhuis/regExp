// Читай каждую строчку

// 1. Обьявление
// const regExp = /love/gmi;
// const regExpConstruct = new RegExp('love строка', 'gmi флаги');

// function checkSubstr(str, subStr) {
//     const regExpConstruct = new RegExp(subStr);
//     return regExpConstruct.test(str);
// }
// console.log(checkSubstr('i love you', 'love'));

// 2. Флаги
// i - не чувствительны к регистру
// console.log(/js/i.test('i write JS / js'));

// g - глобальный поиск
// console.log('I write js js'.match(/js/g));

// m - мультистрочный поиск
// const str = `1 курорт 
// 2 книга 
// 3 море`;
// console.log(str.match(/о/gm));

// 3. Методы
// 3.1 str.match(regexp)
// Возвращает []
// console.log('I write js'.match(/js/));

// 3.2 str.replace(regexp, '') 
// Замена
// console.log('I wrote js'.replace(/wrote/, 'write'));

// 3.3 regexp.test(str) - это метод регулярки
// возращает true or false
// console.log(/write/.test('i write js'));

// 4. Буквенные классы
// \d - любая цифра
// \w - латинская буква, цифра, _ , кирилический словарь не входит
// \s - пробел
// \b - граница слова (пробел, знаки, не продолжение)
// \D - любой символ кроме цифры(\d)
// \W - любой символ кроме \w 
// \S - любой символ кроме \s
// . - любой символ кроме \n

// 5. Якоря
// ^ - начало строки
// $ - конец строки

// 6. Пропуск специальных символов
// [ \ ^ $ () . | ? * + /  -- их нужно исп в рег через \^ \$

// 7. Наборы и диапазоны
// [sdr] - любой символ из скобок
// [0-9] - любая цифра от 0 до 9
// [A-Z] - любая буква 
// можно так [0-9A-Za-z]
// включаеться кирилица [а-яё] не входит рядом пишет
// [^0-9]
// console.log(/[а-я0-9]/.test('тікай в 2 село'));

// 8. Квантификатор
// {n} - точное кол-во 
// console.log(/\d{3}/.test('12333')); как мин 3 цифры
// {n1,n2} - точное от и до
// {n,} - больше либо === 

// 8.1 Сокращение квантификаторов
// + == {1,}
// ? == {0,1}
// * == {0,}

// 9. Жадность и лень
// console.log('I "write" or "know" JS'.match(/".+?"/g));

// 10. Групы захвата () не обязательно
// console.log(/(go)+/.test('go to home, go to weekend, go to turkey'));
// console.log('Sulimovsky Bohdan'.replace(/(\w+) (\w+)/, '$2 $1'));
// меняет по индексу

// 11. Или OR |
// console.log(/html|js|css/.test('i love js'));


// Примеры
// Все кроме пробелов
// const input = '  g   ';
// console.log(/\S/.test(input));

// Убрать пробелы из строки, но есть еще метод trim()
// const input = '   I write js!  ';
// console.log(
//     input.replace(/^\s+|\s+$/g, '')
// );

// Удалить пробелы внутри
// const input = 'I    write    js!';
// console.log(
//     input.replace(/\s+/g, ' ')
// );

// Проверка url 
// const checkUrl = 'https://webelart.com';
// console.log(/^http(s)?:\/\//g.test(checkUrl));
// пример с групой захвата то что в ней не обязательно
// и экранирование слешов (экранируют когда нужно ставить
// например . а не символ, будет так \.)
