let services = [
  {
    title: "Підготовка ділянки та планування",
    text: [
      "Очищення будівельного майданчика",
      "Проведення геодезичних і геологічних досліджень",
      "Розробка та затвердження проекту будинку",
    ],
    imgURL: "../static/assets/services/ser-1.jpg",
    color: "16, 205, 19,",
  },

  {
    title: "Інженерні комунікації",
    text: [
      "Проведення електромонтажних робіт",
      "Установка системи водопостачання та каналізації",
      "Монтаж системи опалення та вентиляції",
    ],
    imgURL: "../static/assets/services/ser-2.jpg",
    color: "27, 137, 255,",
  },

  {
    title: "Фундаментні роботи",
    text: [
      "Розмітка фундаменту",
      "Риття котловану",
      "Заливка або укладання фундаменту",
    ],
    imgURL: "../static/assets/services/ser-3.jpg",
    color: "205, 16, 60,",
  },

  {
    title: "Внутрішні оздоблювальні роботи",
    text: [
      "Штукатурка та шпаклювання стін",
      "Укладка підлогового покриття",
      "Малярні роботи та укладання плитки",
    ],
    imgURL: "../static/assets/services/ser-4.jpg",
    color: "209, 198, 135,",
  },

  {
    title: "Зведення стін та перекриттів",
    text: [
      "Монтаж зовнішніх стін",
      "Установка внутрішніх перегородок",
      "Монтаж міжповерхових перекриттів",
    ],
    imgURL: "../static/assets/services/ser-5.jpg",
    color: "211, 136, 31,",
  },

  {
    title: "Оздоблення зовнішнього фасаду",
    text: ["Установка зовнішнього утеплення", "Малярні роботи"],
    imgURL: "../static/assets/services/ser-6.jpg",
    color: "255, 119, 153,",
  },

  {
    title: "Монтаж даху",
    text: [
      "Установка кроквяної системи",
      "Укладка покрівельного матеріалу",
      "Встановлення водостоків та інших елементів покрівлі",
    ],
    imgURL: "../static/assets/services/ser-7.jpg",
    color: "236, 146, 0,",
  },

  {
    title: "Благоустрій території",
    text: [
      "Укладка тротуарної плитки або асфальтування",
      "Озеленення території",
      "Установка огорожі та воріт",
    ],
    imgURL: "../static/assets/services/ser-8.jpg",
    color: "61, 247, 169,",
  },

  {
    title: "Установка вікон та дверей",
    text: [
      "Монтаж віконних рам та склопакетів",
      "Встановлення зовнішніх та внутрішніх дверей",
    ],
    imgURL: "../static/assets/services/ser-9.jpg",
    color: "135, 207, 255,",
  },

  {
    title: "Фінальні перевірки та здача об’єкту",
    text: [
      "Перевірка усіх систем тп комунікацій",
      "Отримання сертифікатів відповідності та дозволів",
      "Передача ключів замовнику",
    ],
    imgURL: "../static/assets/services/ser-10.jpg",
    color: "206, 60, 255,",
  },
];

function renderBoard() {
  let servicesSection = document.querySelector("#services");

  services.forEach((service, index) => {
    let card = getCard(service);
    servicesSection.append(card);

    if (index % 2 === 0) {
      card.classList.add("movable-right");
    } else {
      card.classList.add("movable-left");
    }
  });
}

const getList = (data) => {
  let list = document.createElement("ul");

  data.text.map((text) => {
    let li = document.createElement("li");
    li.innerHTML = text;
    list.append(li);
  });

  return list;
};

const getCard = (data) => {
  let article = document.createElement("article");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let list = getList(data);

  h1.innerHTML = data.title;

  div.append(h1);
  div.append(list);

  article.className = "service-card";
  div.style.backgroundColor = `rgba(${data.color} 0.6)`;

  article.append(div);
  article.style.backgroundImage = `url('${data.imgURL}')`;

  return article;
};

renderBoard();
