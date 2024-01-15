const input = document.querySelector("input");
const cont = document.getElementById("cont");
const form = document.querySelector("form");
const mytask = document.getElementById("mytask");
const button = document.getElementById("button");

console.log(cont);

cont.addEventListener("click", (event) => {
  switch (event.target.className) {
    case "fa-solid fa-trash-can gufi":
      event.target.parentElement.parentElement.remove();
      break;

    case "fa-solid fa-face-angry":
      event.target.classList.add("dNone");
      const heart = `<span id="heart"><i id="" class="fa-solid fa-heart"></i></span>`;
      let finishClass =
        event.target.parentElement.parentElement.parentElement.getElementsByClassName(
          "finishClass"
        )[0];
      finishClass.classList.add("finish");
      event.target.parentElement.parentElement.innerHTML += heart;
      break;

    case "fa-solid fa-heart":
      event.target.parentElement.parentElement.parentElement
        .getElementsByClassName("finishClass")[0]
        .classList.remove("finish");
      event.target.classList.add("dNone");
      let faceAngry =
        event.target.parentElement.parentElement.parentElement.getElementsByClassName(
          "fa-face-angry"
        )[0];
      faceAngry.classList.remove("dNone");
      break;

    case "fa-solid fa-star":
      event.target.classList.add("orange");
      cont.prepend(event.target.parentElement.parentElement);
      break;

    case "fa-solid fa-star orange":
      event.target.classList.remove("orange");
      break;

    default:
      break;
  }
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  const taskk = ` 
        <div class="task" id="mytask">
            <span class="starIcon"><i class="fa-solid fa-star"></i></span>
                <p class="finishClass">${input.value}</p>
                <div class="icon">
                    <span class="fa-solid fa-trash-can gufi"></span>
                    <span  ><i class="fa-solid fa-face-angry"></i></span>
                </div>
            </div> 
             
            `;

  cont.innerHTML += taskk;
  input.value = "";
});
