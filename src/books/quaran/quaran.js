const url = "https://al-quran1.p.rapidapi.com/63/1-11";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "ce20aa9439msh03c3faa9301ab0ap1e23b2jsnc83b8e5d1223",
    "x-rapidapi-host": "al-quran1.p.rapidapi.com",
  },
};

let allChapt = document.getElementById("allChapters");
let langBtn = document.getElementById("changeLang");
let loaderElem = document.getElementById("spinner");

async function getQuaran() {
  allChapt.innerHTML = "";
  try {
    loaderElem.classList.remove("hidden");
    loaderElem.classList.add("flex");
    const response = await fetch(url, options);
    let result = await response.json();
    result = Object.values(result);
    result.forEach((elem, i) => {
      let divElem = document.createElement("div");
      divElem.innerHTML = `
         <h1 class="text-center text-3xl mt-3 text-blue-500 font-semibold underline">CHAPTER -
         ${i + 1}</h1>
                    <h2 class="text-xl font-semibold mt-8 text-blue-500">${
                      elem.content
                    }</h2>
                    <h3 class="text-xl py-2 text-blue-500"> "summary :
                    </h3>
                    <p class="text-slate-300">${elem.translation_eng}
                    </p>
        `;
      allChapt.append(divElem);
    });
  } catch (error) {
    console.error(error);
    allChapt.append("error in api");
  } finally {
    loaderElem.classList.remove("flex");
    loaderElem.classList.add("hidden");
  }
}
getQuaran();
