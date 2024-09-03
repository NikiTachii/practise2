'use strict';
let name = prompt('Введите ваше имя', 'user');
let surname = prompt('Введите вашу Фамилию', 'surname');
let lastname = prompt('Введите ваше Отчество', 'lastname');
alert(`Ваше ФИО ${name} ${surname} ${lastname}`);
let isTrue = confirm(`Верны ли ваши данные? ${name} ${lastname} ${surname}`);
alert(isTrue);