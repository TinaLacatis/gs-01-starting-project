<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const eneteredValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = eneteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal);
