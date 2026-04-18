const music = document.getElementById('music');
const playPauseBtn = document.getElementById('playPauseBtn');
const musicStatus = document.getElementById('musicStatus');

let isPlaying = true;

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    musicStatus.textContent = 'Pausado';
  } else {
    music.play();
    musicStatus.textContent = 'Tocando agora';
  }
  isPlaying = !isPlaying;
});

window.addEventListener('load', () => {
  const tryPlay = () => {
    music.play().catch(() => {});
  };
  tryPlay();
});

window.onload = function () {
  const tabs = document.querySelectorAll('.tab');
  const underline = document.querySelector('.tab-underline');
  const abasContainer = document.querySelector('.tabs');
  const painelLogin = document.querySelector('.painel-login');

  const camposInput = painelLogin.querySelectorAll('.input-icon');
  const campoRepetirSenha = document.getElementById('campoRepetirSenha');
  const campoEmail = document.getElementById('campoEmail');
  const campoMensagem = document.getElementById('campoMensagem');
  const botaoLogar = painelLogin.querySelector('.btn-logar');

  function setUnderline(el) {
    underline.style.width = `${el.offsetWidth}px`;
    underline.style.left = `${el.offsetLeft}px`;
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      setUnderline(tab);

      const target = tab.getAttribute('data-target');

      painelLogin.classList.remove('animar-entrada');
      void painelLogin.offsetWidth; 
      painelLogin.classList.add('animar-entrada');

      if (target === 'login') {
        camposInput.forEach((el) => el.style.display = 'block');
        campoRepetirSenha.style.display = 'none';
        campoEmail.style.display = 'none';
        campoMensagem.style.display = 'none';
        botaoLogar.innerHTML = 'ENTRAR <span class="seta"></span>';
        atualizarTitulo("LOGIN");
      }

      else if (target === 'registrar') {
        camposInput.forEach((el) => el.style.display = 'block');
        campoRepetirSenha.style.display = 'block';
        campoEmail.style.display = 'none';
        campoMensagem.style.display = 'none';
        botaoLogar.innerHTML = 'REGISTRAR <span class="seta"></span>';
        atualizarTitulo("REGISTRO");
      }

      else if (target === 'recuperar') {
        camposInput.forEach((el) => el.style.display = 'none');
        campoRepetirSenha.style.display = 'none';
        campoEmail.style.display = 'block';
        campoMensagem.style.display = 'block';
        botaoLogar.innerHTML = 'ENVIAR <span class="seta"></span>';
        atualizarTitulo("RECUPERAÇÃO");
      }
    });
  });

  abasContainer.style.display = 'flex';

  const activeTab = document.querySelector('.tab.active');
  if (activeTab) {
    setUnderline(activeTab);
    const target = activeTab.getAttribute('data-target');

    if (target === 'login') {
      camposInput.forEach((el) => el.style.display = 'block');
      campoRepetirSenha.style.display = 'none';
      campoEmail.style.display = 'none';
      campoMensagem.style.display = 'none';
      botaoLogar.innerHTML = 'ENTRAR <span class="seta"></span>';
      atualizarTitulo("LOGIN");
    }

    else if (target === 'registrar') {
      camposInput.forEach((el) => el.style.display = 'block');
      campoRepetirSenha.style.display = 'block';
      campoEmail.style.display = 'none';
      campoMensagem.style.display = 'none';
      botaoLogar.innerHTML = 'REGISTRAR <span class="seta"></span>';
      atualizarTitulo("REGISTRO");
    }

    else if (target === 'recuperar') {
      camposInput.forEach((el) => el.style.display = 'none');
      campoRepetirSenha.style.display = 'none';
      campoEmail.style.display = 'block';
      campoMensagem.style.display = 'block';
      botaoLogar.innerHTML = 'ENVIAR <span class="seta"></span>';
      atualizarTitulo("RECUPERAÇÃO");
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.userSelect = 'none'; 

  const imagens = document.querySelectorAll('img'); 
  imagens.forEach(img => {
    img.setAttribute('draggable', 'false');
  });

  const urlParams = new URLSearchParams(window.location.search);
  const playerName = urlParams.get('name');

  if (playerName) {
    const inputUsuario = document.querySelector('input[placeholder="Usuário"]');
    
    if (inputUsuario) {
      inputUsuario.value = playerName; 
      inputUsuario.setAttribute('readonly', true); 
      
      inputUsuario.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
      inputUsuario.style.color = "#888";
      inputUsuario.style.cursor = "not-allowed";
    }
  }
});

const btnLogar = document.querySelector('.btn-logar');

btnLogar.addEventListener('click', () => {

  const abaAtiva = document.querySelector('.tab.active').dataset.target;

  const usuario = document.querySelector('input[placeholder="Usuário"]')?.value || "";
  const senha = document.querySelector('input[placeholder="Senha"]')?.value || "";
  const repetir = document.querySelector('input[placeholder="Repetir Senha"]')?.value || "";

  if (abaAtiva === "registrar") {

    if (!usuario || !senha || !repetir) {
      alert("Preencha todos os campos!");
      return;
    }

    if (senha !== repetir) {
      alert("As senhas não coincidem!");
      return;
    }

    if (typeof geckoju !== "undefined") {
      geckoju.send("register " + usuario + " " + senha);
    }

  } else if (abaAtiva === "login") {

    if (!usuario || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    if (typeof geckoju !== "undefined") {
      geckoju.send("login " + usuario + " " + senha);
    }

  }
});

function ajustarEscalaMobile() {
    const larguraBase = 1920; 
    const alturaBase = 1080;  

    const larguraAtual = window.innerWidth;
    const alturaAtual = window.innerHeight;

    const escalaX = larguraAtual / larguraBase;
    const escalaY = alturaAtual / alturaBase;

    const escalaFinal = Math.min(escalaX, escalaY) * 1.2;;

    document.body.style.transform = `scale(${escalaFinal})`;
    document.body.style.transformOrigin = "top left";
    document.body.style.width = larguraBase + "px";
    document.body.style.height = alturaBase + "px";
}

window.addEventListener("load", ajustarEscalaMobile);
window.addEventListener("resize", ajustarEscalaMobile);

function estilizarInputs() {
  const inputs = document.querySelectorAll('.input-icon input');
  const botao = document.querySelector('.btn-logar');

  if (!botao) return;

  const larguraBotao = botao.offsetWidth + "px";
  const alturaBotao = botao.offsetHeight + "px";

  inputs.forEach(input => {
    input.style.width = larguraBotao; 
    input.style.height = alturaBotao; 
    input.style.borderRadius = "12px";
    input.style.background = "rgba(0, 0, 0, 0.45)";
    input.style.backdropFilter = "blur(6px)";
    input.style.border = "1px solid rgba(255,255,255,0.08)";
    input.style.transition = "0.3s ease";
    input.style.padding = "0 20px";
    input.style.boxSizing = "border-box";
  });
}

window.addEventListener("load", estilizarInputs);
window.addEventListener("resize", estilizarInputs);

const tituloLogin = document.querySelector('.titulo-login h2');
if (tituloLogin) {
  tituloLogin.style.fontFamily = "Fido";
  tituloLogin.style.letterSpacing = "1px";
}

function estilizarBotao() {
  const botoes = document.querySelectorAll('.btn-logar');

  botoes.forEach(btn => {
    btn.style.background = "#0D94E8";
    btn.style.borderRadius = "12px";
    btn.style.padding = "16px 50px"; 
    btn.style.fontFamily = "Fido";
    btn.style.fontSize = "22px"; 
    btn.style.fontWeight = "normal";
    btn.style.transition = "0.3s ease";

    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center"; 
    btn.style.textAlign = "center"; 
  });
}

estilizarBotao();

document.addEventListener("mouseover", function(e){
  if(e.target.classList.contains("btn-logar")){
    e.target.style.background = "#0D94E8";
  }
});

document.addEventListener("mouseout", function(e){
  if(e.target.classList.contains("btn-logar")){
    e.target.style.background = "#0D94E8";
  }
});


function estilizarBotoesMusica() {
  const botoesMusica = document.querySelectorAll('.music-icon');

  botoesMusica.forEach(btn => {
    btn.style.borderRadius = "12px"; 
    btn.style.background = "rgba(0, 0, 0, 0.45)";
    btn.style.backdropFilter = "blur(6px)";
    btn.style.border = "1px solid rgba(255,255,255,0.08)";
    btn.style.transition = "0.3s ease";
  });
}

estilizarBotoesMusica();

function deixarIconesLaranja() {
  const icones = document.querySelectorAll('.icon-calendario, .icon-megafone');

  icones.forEach(icon => {
    icon.style.filter = "brightness(0) saturate(100%) invert(54%) sepia(97%) saturate(1500%) hue-rotate(0deg) brightness(100%) contrast(105%)";
  });
}

deixarIconesLaranja();

function criarFundoNovidades() {
  const section = document.querySelector('.novidades-section');

  if (!section) return;

  const fundo = document.createElement("div");

  fundo.style.position = "absolute";
  fundo.style.top = section.offsetTop - 20 + "px";
  fundo.style.left = "0";
  fundo.style.width = "430px"; 
  fundo.style.height = section.offsetHeight + 40 + "px";
  fundo.style.background = "rgba(65, 253, 40, 0)";
  fundo.style.borderRadius = "20px";
  fundo.style.zIndex = "-1";

  document.body.appendChild(fundo);
}

window.addEventListener("load", criarFundoNovidades);

function atualizarTitulo(texto) {
  const titulo = document.querySelector('.titulo-login h2');
  if (titulo) {
    titulo.innerText = texto;
  }
}

function removerNovidadesAntigas() {
  const antiga = document.querySelector('.novidades-section');
  if (antiga) {
    antiga.remove(); 
  }
}

window.addEventListener("load", () => {

  const antiga = document.querySelector('.novidades-section');
  if (!antiga) return;

  antiga.innerHTML = "";

  antiga.style.position = "absolute";
  antiga.style.left = "5px";
  antiga.style.top = "36%";
  antiga.style.transform = "translateY(-50%)";
  antiga.style.width = "420px";
  antiga.style.height = "auto";
  antiga.style.background = "#0D94E8";
  antiga.style.padding = "35px 30px";
  antiga.style.borderRadius = "10px";
  antiga.style.display = "flex";
  antiga.style.flexDirection = "column";
  antiga.style.gap = "25px";
  antiga.style.boxSizing = "border-box";
  antiga.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";

  const novidades = [
    { titulo: "UPDATE", texto: "Tela de Login" },
    { titulo: "UPDATE", texto: "Novo HUD" },
    { titulo: "UPDATE", texto: "Novos empregos" }
  ];

  novidades.forEach(item => {

    const card = document.createElement("div");

    card.style.display = "flex";
    card.style.alignItems = "center";
    card.style.background = "rgba(0, 0, 0, 0.20)";
    card.style.padding = "18px";
    card.style.borderRadius = "6px";
    card.style.gap = "15px";

    const iconBox = document.createElement("div");
    iconBox.style.width = "55px";
    iconBox.style.height = "55px";
    iconBox.style.background = "rgba(0, 0, 0, 0.31)";
    iconBox.style.display = "flex";
    iconBox.style.alignItems = "center";
    iconBox.style.justifyContent = "center";
    iconBox.style.borderRadius = "4px";
    iconBox.style.flexShrink = "0";

    const icon = document.createElement("img");
    icon.src = "imgs/megafone.png";
    icon.style.width = "28px";
    icon.style.height = "28px";
    icon.style.objectFit = "contain";

    iconBox.appendChild(icon);

    const textContainer = document.createElement("div");

    const titulo = document.createElement("div");
    titulo.innerText = item.titulo;
    titulo.style.fontWeight = "bold";
    titulo.style.fontSize = "14px";
    titulo.style.color = "#ffffff";
    titulo.style.letterSpacing = "1px";

    const descricao = document.createElement("div");
    descricao.innerText = item.texto;
    descricao.style.fontSize = "13px";
    descricao.style.color = "#eaffea";
    descricao.style.marginTop = "3px";

    textContainer.appendChild(titulo);
    textContainer.appendChild(descricao);

    card.appendChild(iconBox);
    card.appendChild(textContainer);

    antiga.appendChild(card);
  });

});