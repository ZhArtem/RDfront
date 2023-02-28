function dropdown1() {
    const drop = document.getElementById("myDropdown1");
    drop.classList.toggle("show");
    const img = drop.parentElement.querySelector('.dropbtn img');
    img.classList.toggle("rotate");
}

function dropdown2() {
    const drop = document.getElementById("myDropdown2");
    drop.classList.toggle("show");
    const img = drop.parentElement.querySelector('.dropbtn img');
    img.classList.toggle("rotate");
}

function dropdown3() {
    const drop = document.getElementById("myDropdown3");
    drop.classList.toggle("show");
    const img = drop.parentElement.querySelector('.dropbtn img');
    img.classList.toggle("rotate");
}


// let dropbtn = document.querySelector('.dropbtn');
// dropbtn.addEventListener('click', () => {
//     let d = dropbtn.parentElement;
//     console.log(d)
//     d.querySelector('dropdown-content').classList.toggle("show");
// })



// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }



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
                <input type="checkbox" class="custom-checkbox" name="ingredient${i}${j}" id="ingredient${i}${j}" form="search-form">
                <label for="ingredient${i}${j}">${ingredients[i][j]}</label>
            </li>
        `
        ingreds += ingred;
    }
    ingredientsListNodes[i].insertAdjacentHTML('afterbegin', ingreds);
}



const cuisines = [
    ['Австрийская', 'Американская', 'Арабская', 'Белорусская', 'Британская', 'Греческая', 'Грузинская'],
    ['Европейская', 'Испанская', 'Итальянская', 'Китайская', 'Мексиканская', 'Паназиатская', 'Русская'],
    ['Средиземноморская', 'Турецкая', 'Тайская', 'Узбекская', 'Украинская', 'Французская', 'Японская']
];



const cuisinesListNodes = document.querySelectorAll('.cuisines-list');
for (let i = 0; i < cuisinesListNodes.length; i++) {
    let cuisinesUl = '';
    for (let j = 0; j < cuisines[i].length; j++) {
        let cuisine = `
            <li class="cuisine">
                <input type="checkbox" class="custom-checkbox" name="cuisine${i}${j}" id="cuisine${i}${j}" form="search-form" value=${cuisines[i][j]}>
                <label for="cuisine${i}${j}">${cuisines[i][j]}</label>
            </li>
        `
        cuisinesUl += cuisine;
    }
    cuisinesListNodes[i].insertAdjacentHTML('afterbegin', cuisinesUl);
}


const categories = [
    ['Выпечка и десерты', 'Завтраки', 'Закуски', 'Напитки', 'Основные блюда', 'Паста и пицца', 'Ризотто'],
    ['Салаты', 'Соусы и маринады', 'Супы', 'Сэндвичи'],
];

const categoriesListNodes = document.querySelectorAll('.categories-list');
for (let i = 0; i < categoriesListNodes.length; i++) {
    let categoriesUl = '';
    for (let j = 0; j < categories[i].length; j++) {
        let category = `
            <li class="category">
                <input type="checkbox" class="custom-checkbox" name="category${i}${j}" id="category${i}${j}" form="search-form">
                <label for="category${i}${j}">${categories[i][j]}</label>
            </li>
        `
        categoriesUl += category;
    }
    categoriesListNodes[i].insertAdjacentHTML('afterbegin', categoriesUl);
}