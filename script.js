let booksCard = document.getElementById("booksCard");

fetch("./books.json")
  .then((data) => data.json())
  .then((res) => {
    let booksHTML = "";
    res.forEach((elem) => {
      let div = document.createElement("div");
      booksHTML += `   
<div class="border-2 border-blue-500 rounded-lg w-80 py-4">
                <h1 class="text-center text-xl font-semibold text-blue-500 pb-3">${elem.title}</h1>
                <img src="${elem.image.src}"
                    alt="${elem.image.alt}" class="w-full h-56 object-cover">
                <p class="px-2 text-lg text-slate-300 font-light pt-3">${elem.description}</p>
                <div class="text-center pt-3 pb-3">
                    <a href="${elem.button.link}">
                        <button
                            class="border border-blue-500 px-3 py-2 rounded-lg hover:bg-blue-500 hover:text-white font-normal">Read
                            book</button>
                    </a>
                </div>
            </div>
     `;
      booksCard.innerHTML = booksHTML;
    });
  });
