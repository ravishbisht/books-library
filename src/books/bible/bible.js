let allChapt = document.getElementById("allChapters");
let loaderElem = document.getElementById("spinner");

async function getQuaran() {
  allChapt.innerHTML = "";
  try {
    loaderElem.classList.remove("hidden");
    loaderElem.classList.add("flex");
    let result = [];
    for (let i = 1; i <= 4; i++) {
      let response = await fetch(
        `https://ajith-holy-bible.p.rapidapi.com/GetChapter?Book=Luke&chapter=${i}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "ce20aa9439msh03c3faa9301ab0ap1e23b2jsnc83b8e5d1223",
            "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
          },
        }
      );
      result.push(await response.json());
    }

    result.forEach((elem)=>{


        let divElem = document.createElement("div");
        divElem.innerHTML = `
             <h1 class="text-center text-3xl mt-8 text-blue-500 font-semibold underline">
              CHAPTER - ${elem.Chapter}</h1>
                     
                        <h3 class="text-xl py-2 text-blue-500">
                         summary :
                        </h3>
                        <p class="text-slate-300 px-4">${elem.Output}
                        </p>
            `;
        allChapt.append(divElem);

    })


  } catch (error) {
    console.error(error);
    allChapt.append("error in api");
  } finally {
    loaderElem.classList.remove("flex");
    loaderElem.classList.add("hidden");
  }
}
getQuaran();
