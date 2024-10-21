const url =
  "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "ce20aa9439msh03c3faa9301ab0ap1e23b2jsnc83b8e5d1223",
    "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
  },
};

let allChapt = document.getElementById("allChapters");
let isLangEnglish = true;
let langBtn = document.getElementById("changeLang");
let loaderElem = document.getElementById("spinner");

langBtn.addEventListener("click", () => {
  if (isLangEnglish) {
    isLangEnglish = false;
    langBtn.innerText = "Translate to English";
    getBhagwatGeete(isLangEnglish);
  } else {
    isLangEnglish = true;
    langBtn.innerText = "Translate to Hindi";
    getBhagwatGeete(isLangEnglish);
  }
});

async function getBhagwatGeete(value) {
  allChapt.innerHTML = "";
  try {
    loaderElem.classList.remove("hidden")
    loaderElem.classList.add("flex")
    const response = await fetch(url, options);
    const result = await response.json();
    result.forEach((elem) => {
      let divElem = document.createElement("div");
      divElem.innerHTML = `
         <h1 class="text-center text-3xl mt-3 text-blue-500 font-semibold underline">${
           value ? "CHAPTER -" : "अध्याय -"
         }${elem.chapter_number}</h1>
                    <h2 class="text-xl font-semibold mt-8 text-blue-500">${
                      value ? elem.name_translated : elem.name
                    }</h2>
                    <h3 class="text-xl py-2 text-blue-500">${
                      value ? "summary :" : "सारांश :"
                    }</h3>
                    <p class="text-slate-300">${
                      value ? elem.chapter_summary : elem.chapter_summary_hindi
                    }
                    </p>
        `;
      allChapt.append(divElem);
    });
  } catch (error) {
    console.error(error);
    allChapt.append("error in api");
  } finally {
    loaderElem.classList.remove("flex")
    loaderElem.classList.add("hidden")
  }
}
getBhagwatGeete(isLangEnglish);
