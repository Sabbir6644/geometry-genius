function inputValue(inputId) {
     const inputFild = document.getElementById(inputId);
     const inputValueString = inputFild.value;
     const value = parseFloat(inputValueString);
     inputFild.value = '';
     return value;
}
// Area Output
function areaOutput(areaId, areaValue) {
     const areaLocation = document.getElementById(areaId);
     if(isNaN(areaValue)){
          alert('Please Provide input value in number');
          return;
     }
     areaLocation.innerText = areaValue;
}
// Area set
function setArea(areaType, area) {
     if(isNaN(area)){
          return;
     }
     const calculationArea = document.getElementById('calculation-area');
     const count = calculationArea.childElementCount;
     const p = document.createElement('p');
     p.classList.add('my-4');
     p.innerHTML = ` ${count + 1}.
    ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success btn-sm">Convert</button>`;
    if(calculationArea.children.length > 9){
     alert('You Can not calculate more ')
     return;
}
    calculationArea.appendChild(p);
}

// Triangle Calcutation
function triangleCalulation(base, height) {
     const baseValue = inputValue(base);
     const heightValue = inputValue(height);
     const area = 0.5 * baseValue * heightValue;
     areaOutput('triangle-area', area);
     setArea('Triangle', area);
}
// Rectangle Calcutation
function rectangleCalulation(width, length) {
     const widthValue = inputValue(width);
     const lengthValue = inputValue(length);
     const area = widthValue * lengthValue;
     areaOutput('rectangle-area', area);
     setArea('Rectangle', area);
}
// Rectangle Calcutation
function rectangleCalulation(width, length) {
     const widthValue = inputValue(width);
     const lengthValue = inputValue(length);
     const area = widthValue * lengthValue;
     areaOutput('rectangle-area', area);
     setArea('Rectangle', area);
}
// Parallelogram Calulation
function parallelogramCalulation(width, length) {
     const widthValue = inputValue(width);
     const lengthValue = inputValue(length);
     const area = widthValue * lengthValue;
     areaOutput('parallelogram-area', area);
     setArea('Parallelogram', area);
}


// console.log('Javascript');