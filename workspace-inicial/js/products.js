const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
let arrayDeAutos = [];

function mostrarListaDeAutos() {
  let htmlContentToAppend = "";

  for (let i = 0; i < arrayDeAutos.length; i++) {
    let auto = arrayDeAutos[i];

    htmlContentToAppend += `
    <div  class="list-group-item ">
            <div class="row">
                <div class="col-3">
                    <img src="${auto.image}" alt="${
      auto.description
    }" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${auto.name}-${auto.cost}${" "}${
      auto.currency
    }</h4>
                        <small class="text-muted">${
                          auto.soldCount
                        } vendidos</small>
                    </div>
                    <p class="mb-1">${auto.description}</p>
                </div>
            </div>
        </div>`;
    document.getElementById("autos").innerHTML = htmlContentToAppend;
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      arrayDeAutos = resultObj.data.products;
      mostrarListaDeAutos();
    }
  });
});
