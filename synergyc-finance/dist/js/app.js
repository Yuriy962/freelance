import $ from "../../node_modules/jquery/dist/jquery.js";

// $(window).on('load', function () {
//   // Отправка формы
//   $("form").on("submit", function (e) {
//     e.preventDefault();
//     let form = $(this);
//     let formData = $(this).serialize();
//     return $.ajax({
//       type: "POST",
//       url: "../send.php",
//       data: formData,
//       success: function (e) {
//         e = JSON.parse(e);
//         console.log(e.result);
//         if ("success" === e.result) {
//           document.querySelector(".form__inputs").innerHTML =
//             "<span style='font-size: 24px; color: green;'>Great! Your request has send!</span>";
//         } else {
//           document.querySelector(".form__inputs").innerHTML =
//             "<span class='red' style='font-size: 24px; text-transform: none;'>Error! Your request hasn't send!</span>";
//         }
//          document.querySelectorAll("input[type='email']");
//         $("form").trigger("reset");
//       },
//     });
//   });
// });

$(window).on("load", function () {
  // Отправка формы
  $("form").on("submit", function (e) {
        e.preventDefault();
        document.querySelector(".form__inputs").innerHTML =
            "<span style='font-size: 24px; color: green;'>Great! Your request has send!</span>";
        document.querySelectorAll("input[type='email']").val('');
        $("form").trigger("reset");
  });
});

// Нужно указать дату, до которой будет идти обратный отсчёт
let date = new Date("Mar 15 2022 00:00:00");

// Функция обратного отсчёта
function counts() {
  let now = new Date(); // текущая дата
  let gap = date - now; // период между текущим днём и указанной датой

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000 ) % 60;

  if(gap < 0) {
    document.querySelector(".timer").innerHTML = '<span class="timer-endcount">Отсчёт окончен!</span>';
  } else{
    document.getElementById('days').textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
}
setInterval(counts, 1000);

// Валидация email

const EMAIL = document.querySelector("input[type='email']");
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const err = document.querySelector('.tooltip-err');

// сравнение введенного значения с регулярным выражением
function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}
// смена цвет инпута в зависимости от валидности текста
function updateInput() {
  if (validateEmail(EMAIL.value)) {
    EMAIL.classList.remove('invalid');
    EMAIL.classList.add('valid');
    err.style.display = 'none';
  } else if(!validateEmail(EMAIL.value)) {
    EMAIL.classList.remove('valid');
    EMAIL.classList.add('invalid');
    err.style.display = "flex";
  } else{
    EMAIL.classList.remove("valid");
    EMAIL.classList.remove("invalid");
  }
}

// валидация формы в реальном времени
EMAIL.addEventListener("input", updateInput);
// расфокусировка формы
EMAIL.addEventListener("blur", () =>{
  EMAIL.classList.remove("valid");
  EMAIL.classList.remove("invalid");
});