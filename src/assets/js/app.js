$.getJSON("./data/data.json", (data) => {
  let totalScore = 0;
  let i = 0;
  $.each(data, (indexInArray, valueOfElement) => {
    $(".rows").append(
      ` <div class="container__summary__rows d-f jc-sb ai-c " style="background-color:${valueOfElement.bgcolor}">
        <div class="logo d-f">
          <img
            src="./src/assets/images/icon-${valueOfElement.category}.svg"
            alt="${valueOfElement.category}"
          />
          <p style="color:${valueOfElement.color}" >${valueOfElement.category}</p>
        </div>
        <div class="marks"> <span style="color:hsl(224, 30%, 27%)">${valueOfElement.score}</span>/100</div>
      </div>    `
    );
    i++;
    totalScore = totalScore + valueOfElement.score;
  });
  // Math.floor(totalScore/(i*100)*100)
  $(".percent").text(Math.floor((totalScore / (i * 100)) * 100));
});
