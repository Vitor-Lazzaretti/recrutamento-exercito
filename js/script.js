function getInputsValue(array) {
    let values = [];
    array.forEach(element => {
        let input = document.getElementById(element).value;
        if (!input) {
            alert("Preencha todos os dados!");
            throw new Error();
        }
        values.push(input);
    });
    return values;
}

function isCheckedInputs(array) {
    let values = [];
    array.forEach(element => {
        values.push(document.getElementById(element).checked);
    });
    return values;
}

function validateItems() {
    const [name, email, age, weight] = getInputsValue(['name', 'email', 'age', 'weight']);
    const [wfRadio1, wfRadio2, wbRadio1, wbRadio2] = isCheckedInputs(['wf-radio-1', 'wf-radio-2', 'wb-radio-1', 'wb-radio-2']);
    let aprooved = false;
    if (age >= 16 && age <= 69 && weight > 50 && wfRadio1 && wbRadio2 && !wfRadio2 && !wbRadio1) {
        aprooved = true;
    }
    let tableValue = document.getElementById("tbody");
    tableValue.innerHTML = tableValue.innerHTML + `
        <tr>
           <td>${name}</td>
           <td>${age} anos</td>
           <td>${weight} kg</td>
           <td>${wfRadio1 ? '<img src="img/check.png"/>' : '<img src="img/red.png"/>'}</td>
           <td>${wbRadio2 ? '<img src="img/check.png"/>' : '<img src="img/red.png"/>'}</td>
           <td>${aprooved ? '<img src="img/check.png"/>': '<img src="img/red.png"/>'} </td>
        </tr>
    `;

    alert(aprooved ? 'Aprovado': 'Reprovado');
}