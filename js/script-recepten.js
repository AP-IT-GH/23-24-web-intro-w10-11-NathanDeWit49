fetch('https://api.sampleapis.com/coffee/hot/?results=20')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    let html = '<div class="accordion accordion-flush" id="accordionExample">';
    for (let i = 0; i < json.length - 2; i++) {
      const recipe = json[i];
      html += `<div class="accordion-item">

            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-uppercase fs-6 fw-bolder pt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                ${recipe.title}
                </button>
              </h2>

              <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <img src="${recipe.image}" class="float-start img-small" alt="${recipe.title}"><span class="h6 mt-2">ingrediënten</span>:${recipe.ingredients}<hr><span class="h6  mt-2">bereiding</span>:${recipe.description}</div>
            </div>
      </div>`;
    }
    html += '</div>';
    document.getElementById("recepten").innerHTML = html;
  });