const btn = document.querySelector("button");

const inputEl = document.querySelector("input");
const lenghtEl = document.querySelector(".Length");
const valumeEl = document.querySelector(".Valume");
const massEl = document.querySelector(".mass");

btn.addEventListener("click", function () {
  lenghtEl.innerHTML = `
  <p>
  <span class="meter-unit">${inputEl.value}</span> Meters =
  <span class="feet-unit">${inputEl.value * 3.28}</span> feet |
  <span class="feet-unit">${inputEl.value}</span> feet =
  <span class="meter-unit">${inputEl.value / 3.28}</span>
</p>
  `;

  valumeEl.innerHTML = `
  <p>
  <span class="meter-unit">${inputEl.value}</span> Litters =
  <span class="feet-unit">${inputEl.value / 3.785}</span> Gallons |
  <span class="feet-unit">${inputEl.value}</span> Gallons =
  <span class="meter-unit">${inputEl.value * 3.28}</span> litters
</p>
  `;

  massEl.innerHTML = `
<p>
<span class="meter-unit">${inputEl.value}</span> Kilo =
<span class="feet-unit">${inputEl.value * 2.2}</span> Pound |
<span class="feet-unit">${inputEl.value}</span> Pound =
<span class="meter-unit">${inputEl.value / 2.2}</span> Kilo
</p>
`;
});
