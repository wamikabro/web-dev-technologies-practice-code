const btn = document.querySelector("#btn");
const code = document.querySelector("#code");
const search = document.querySelector("#search");

btn.addEventListener("click", async () => {
  code.innerText = "Loading";

  const response = await fetch(
    "/get?search=" + encodeURIComponent(search.value)
  );

  const json = await response.json();

  code.innerText = "\n" + JSON.stringify(json, null, 4);
});
