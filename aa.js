// console.log("Hello World")

// alert("aaa");
// hoisting

// Zmienne w javascript: var, cont, let

// var, cont, let

// var nazwaZmiennej = "Jan";  //juz sie nie uzywa var
// console.log(nazwaZmiennej);

// let userName = "John";
// userName="Dawid";
// console.log(userName);

// const city="Katowice";
// // city="Sosnowiec";   //Nie da sie już zmienic wartości w const.
// console.log(city);

// typy danych pomagaja jezykowi programowania okreslic co moze zrobic z ich wartoscia. czy moze cos pomnozyc, dodac, odjac itp.
//js jezyk słabo i dynamicznie typowany
// string - ciag znakow

// const city="Katowice";
// console.log(city.toUpperCase());

// const userName = "John";
// const city = "Londyn";
// const age = 20;

// const result = "To jest " + userName + ". Mieszka w" + city;
// console.log(result);  //konkatencja - połączenie stringów ze soba

// //Konkatenacja z template stringiem

// // const result2 = `To jest ${userName}. Mieszka w ${city} i ma ${age} lat`;
// // console.log(result2);

// //Number

// // const num = 18;
// // const num2 = 10;
// // // +, -, *, /
// // // console.log(num + num2);
// // const result3 = num + num2;
// // console.group(result3.toFixed())

// // const num = "20";
// // const num2 = "3";

// // const result = Number(num) + String(num2);
// // const result2 = parseInt(num) + parseInt(num2);    nw

// // console.log(result);

// // Obiekt DOM - dokument object modal - pobieranie elementow, n=manipulacja elementami

// // const title = document.getElementById("Title");
// // const button = document.querySelector(".btn");

// // console.log(button);

// // console.log(title);

// // title.textContent = "Witaj Świecie";
// // // title.style.color = "green";
// // // title.style.fontSize = "3rem";

// // title.classList.add("show");
// // title.classList.remove("show");

// // const btn = document.createElement("button");
// // btn .textContent = "Kliknij";
// // btn.style.backgroundColor = "green";
// // document.body.appendChild(btn);

// const tasksBox = document.getElementById('TasksBox');

// // const task = document.createElement("article");
// // task.classList.add("taskCard");

// // const title = document.createElement("h3");
// // title.textContent = "Zrobić zakupy";

// // const description = document.createElement("p");
// // description.textContent = "Produkty do obiadu i mydło";

// // task.appendChild(title);
// // task.appendChild(description);

// // tasksBox.appendChild(task);




// // tasksBox.innerHTML = `
// //     <div class="taskCard"> 
// //         <h3>Zrobić zakupy</h3>
// //         <p>Produkty na obiad</p>
// //     </div>`
// //     ;



// const tasksBox = document.getElementById('TasksBox');





//     const createCard = (titleText, descText) => {
//         console.log("Jan w funkcji");
//         const task = document.createElement("article");
//         task.classList.add("taskCard");

//         const title = document.createElement("h3");
//         title.textContent = titleText;

//         const description = document.createElement("p");
//         description.textContent = descText;

//         task.appendChild(title);
//         task.appendChild(description);

//         tasksBox.appendChild(task);
//     }
//     createCard("Zakupy", "Produkty na obiad");
//     createCard("Lekcje", "Kartkówka z przyrody");
//     createCard("Nauka JS", "Funkcje i zmienne");



// // const showInfo = () => console.log("Kliknięto");

// // const clickBtn = document.getElementById("Btn");
// // clickBtn.addEventListener("click", createCard);









// // window.addEventListener("resize", showInfo);

// // window > document > nasza strona 










//     const addNums = (a,h) => {
//         const result = a*h/2;
//         console.log(result);
//     }
//     addNums(8,4);
//     addNums(12,6);


//     const userInfo = (user) => {  //funkcja strzałkowa
//         console.log(`To jest ${user}`);
//     }
//     userInfo("Dawid");
//     userInfo("Jan")
