const loadText = document.querySelector(".loading-text"); //classe
const bg = document.querySelector(".bg");
const disable = document.querySelector(".modal");
const seeImg = document.querySelector(".container");
const image = document.querySelector(".bg");
const loading = document.querySelector(".loading-text");

disable.addEventListener("click", function () {
  document.body.removeChild(disable);
});

function onClose() {
  document.body.removeChild(loading);
}

function onOpen() {
  image.classList.add("active"); //adiciona a classe 'active' no .container, modificando a propriedade inicial display: none para display: flex, exibindo assim a janela na página.
}

seeImg.addEventListener("click", function () {
  document.body.removeChild(seeImg);

  let load = 0;

  let int = setInterval(blurring, 30);
  //o método setInterval() nos permite executar uma função repetidamente em um espaço de tempo definido

  function blurring() {
    load++;

    if (load > 99) {
      clearInterval(int); //a função "clearInterval()" não limpa a variável, apenas impede a execução do código que está dentro dela.
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0); //vai ofuscando a porcentagem na tela ate desaparecer
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; //efeito de blur na img
  }

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
});
//quando você clicar no botão, o mesmo será deletado
