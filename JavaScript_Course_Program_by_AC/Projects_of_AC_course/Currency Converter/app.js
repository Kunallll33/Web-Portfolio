const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";
 

const dropdown = document.querySelectorAll(".dropdown select");
console.log(dropdown);

for(let select of dropdown) {
    for (currCode in select){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
    }
}