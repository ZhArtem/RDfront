const ingredients = [
    ['Говядина', 'Свинина', 'Баранина', 'Курица', 'Индейка', 'Рыба', 'Морепродукты'],
    ['Грибы', 'Огурцы', 'Помидоры', 'Капуста', 'Морковь', 'Баклажан', 'Кабачок'],
    ['Картофель', 'Рис', 'Макароны', 'Яйца', 'Молоко', 'Сыр', 'Сметана']
];

const ingredientsListNodes = document.querySelectorAll('.ingredients-list');
for (let i = 0; i < ingredientsListNodes.length; i++) {
    let ingreds = '';
    for (let j = 0; j < ingredients[i].length; j++) {
        let ingred = `
            <li class="ingredient">
                <input type="checkbox" class="custom-checkbox" name="ingredient${i}${j}" id="ingredient${i}${j}" onclick="return checkboxLimit()" form="search-form">
                <label for="ingredient${i}${j}">${ingredients[i][j]}</label>
            </li>
        `
        ingreds += ingred;
    }
    ingredientsListNodes[i].insertAdjacentHTML('afterbegin', ingreds);
}


// ==============================================================

function checkboxLimit() {
    const LIMIT_CHECKBOX = 3;
    let checkboxes = document.querySelectorAll(".custom-checkbox");
    let counter = 0
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            counter++
        }
    }
    const error = document.querySelector(".error")
    if (counter > LIMIT_CHECKBOX) {
        // alert(`Выберете не более ${LIMIT_CHECKBOX} ингредиентов`);
        error.textContent = `Выберете не более ${LIMIT_CHECKBOX} ингредиентов!!!`
        return false
    } else {
        error.textContent = '';
    }
}
