// const { group } = require("console");

// var Group = [
//   {
//     id: Math.floor(Math.random() * 100),
//     name: "Eli",
//     surname: "Nuriyev",
//     age: 23,
//     group: "Front-End",
//     score: 88,
//   },
//   {
//     id: Math.floor(Math.random() * 100),
//     name: "Veli",
//     surname: "Nuriyev",
//     age: 23,
//     group: "Front-End",
//     score: 88,
//   },
//   {
//     id: Math.floor(Math.random() * 100),
//     name: "Pirveli",
//     surname: "Nuriyev",
//     age: 23,
//     group: "Front-End",
//     score: 88,
//   },
//   {
//     id: Math.floor(Math.random() * 100),
//     name: " Makidon",
//     surname: "Nuriyev",
//     age: 23,
//     group: "Front-End",
//     score: 88,
//   },
//   {
//     id: Math.floor(Math.random() * 100),
//     name: "5",
//     surname: "Nuriyev",
//     age: 23,
//     group: "Front-End",
//     score: 90,
//   },
//   {
//     id: Math.floor(Math.random() * 100),
//     name: "İbrahim",
//     surname: "Nuriyev",
//     age: 23,
//     group: "Front-End",
//     score: 95,
//   },
// ];

// Group.forEach((el, id) => {
//   if (el.score > 90) {
//     document.body.append(el.name);
//   }
//   else {
//     console.log("ok");
//   }
// });

// for (let index = 0; index < group.length; index++) {

// }

// const bg = document.querySelector(".card");
// const imgColor = document.querySelector("img");
// const textColor = document.querySelector("p");
// const btnColor = document.querySelector(".btn");

// imgColor.addEventListener("click",(e)=>{
//     bg.style.backgroundColor="blue"
//     e.stopPropagation();
// })

// textColor.addEventListener("click",(e)=>{
//     bg.style.backgroundColor="green"
//     e.stopPropagation();
// })

// btnColor.addEventListener("click",()=>{
//     bg.style.backgroundColor="gold"
// })

// bg.addEventListener("click",(e)=>{
//     e.stopPropagation();

//     console.log(e);
//     bg.style.backgroundColor="red"
// })

// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }

// const num=[-1,55,44,77,-12,68,-111]
//  console.log(num.sort((a,b)=>b-a));

// var KartNumber = [
//   { id: 1, Sifre: Number(1122334455667788) },
//   { id: 2, Sifre: Number(2211223344556677) },
//   { id: 3, Sifre: Number(3344334455667788) },
// ];

// const getid = document.getElementById("btnn");
// btnn.addEventListener("click", zipcode);
// function zipcode(e) {
//   e.preventDefault();

//   const inputvalue = document.getElementById("text").value;
//   if (inputvalue.trim() === "" || inputvalue === undefined) {
//     Toastify({
//         text: "error",
//         className: "info",
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         }
//       }).showToast();

//   }
// }

// for (const cardinfo of KartNumber) {
//     Toastify({
//         text: "succes",
//         className: "info",
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         }
//       }).showToast();
//     }

// function flipInt(n) {
//   var digit,
//     result = 0;

//   while (n) {
//     digit = n % 10;
//     result = result * 10 + digit;
//     n = (n / 10) | 0;
//   }

//   return result;
// }

// alert("Reversed number: " + flipInt(+prompt("Enter a value")));

//  var a = prompt("Enter a value");
//     var b, sum = 0;
//     var z = a;
//     while(a > 0)
//     {
//       b = a % 10;
//       sum = sum * 10 + b;
//       a = parseInt(a / 10);
//     }
//     alert(sum);

// const person = [
//   {
//     id: 1,
//     name: "Ulvi",
//     surnmane: "nuriyev",
//   },
//   {
//     id: 2,
//     name: "151",
//     surnmane: "nuriyev",
//   },
//   {
//     id: 3,
//     name: "Ulvi",
//     surnmane: "nuriyev",
//   },
// ];

// console.log(person);

// // document.write(`<ul>${person.map((name)=> `<li>${name}</li>`).join('')}</ul>`)

// document.write(`
// 	<table border="1">
// 		${person
//     .map(
//       (row) => `
// 			<tr>
// 				${Object.values(row)
//           .map((value) => `<td>${value}</td>`)
//           .join("")}
// 			</tr>
// 		`
//     )
//     .join("")}
// 	</table>
// `);

///////////////////////// alinmayan

// const Button = document.getElementById("filter");
// const tabBtns = document.querySelectorAll(".tab_btn");
// const Contents = document.querySelectorAll(".content");

// if (Button) {
//   Button.addEventListener("click", (e) => {
//     const id = e.target.data.id;
//     if (id) {
//       tabBtns.forEach((btn) => {
//         btn.classList.remove("active");
//       });

//       e.target.classList.add("active");

//       Contents.forEach((Content) => {
//         Content.classList.remove("active");
//       });
//       const element = document.getElementById(id);
//       element.classList.add("active");
//     }
//   });
// }

/////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((responseJson) => {
    responseJson.slice(0, 100).forEach((item) => {
      let lidom = document.createElement("li");
      lidom.innerHTML = item.name;
      userListDom.appendChild(lidom);
    });
  });
let userListDom = document.querySelector(".userlist");
const search = (e) => {
  e.preventDefault();
  const searchBox = document.getElementById("site_search").value.toUpperCase();
  const userList = document.querySelectorAll(".userlist li");
  userList.forEach((el) => {
    let textvalue = el.textContent;
    if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  });
};

const btnS = document.getElementById("btn");
btnS.addEventListener("click", search);

