// === MENU HAMBURGUER ===
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// === SCROLL SUAVE ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === FUNDO HEADER ===
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'white';
        header.style.backdropFilter = 'none';
    }
});

// === ANIMAÇÕES ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

document.querySelectorAll('.about-item, .project-item, .event-card').forEach(el => {
    observer.observe(el);
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-bg-image');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// === ANIMAÇÕES DE HOVER ===
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// === HERO DIGITAÇÃO ===
document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.querySelector('.hero-text');
    setTimeout(() => {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 300);
});

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-text h2');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 30);
});

// === SCROLL INDICATOR ===
function createScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 70px;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(to right, #2563eb, #3b82f6);
        z-index: 1000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(scrollIndicator);
    
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / scrollHeight) * 100;
        scrollIndicator.style.width = scrolled + '%';
    });
}
createScrollIndicator();

// === IMAGENS ===
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    img.addEventListener('error', function() {
        this.style.opacity = '0.5';
        console.warn('Erro ao carregar imagem:', this.src);
    });
});

// === MODAL DE INSCRIÇÃO ===
const modal = document.getElementById("modalInscricao");
const fecharBtn = document.querySelector(".fechar");
const textoInstrucoes = document.getElementById("texto-instrucoes");
const botaoInscreverConfirmar = document.getElementById("botaoInscrever");

let idDoEventoSelecionado = null;
let idDoUsuario = localStorage.getItem("userId");

// CARREGA EVENTOS DA API
fetch("https://neptune-wq2t.onrender.com/eventos")
  .then(res => res.json())
  .then(eventos => {
    const container = document.querySelector('.events-grid');
    container.innerHTML = ''; // limpa os cards existentes
    eventos.forEach(evento => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <div class="event-image">
            <div class="image-placeholder"></div>
        </div>
        <div class="event-content">
            <h3>${evento.nome}</h3>
            <div class="event-date">
                <span class="date-day">${evento.data?.slice(8, 10) || '??'} ${evento.data?.slice(5, 7) || '??'}</span>
                <p>horário: ${evento.horario || '00:00 às 00:00'}</p>
            </div>
            <button 
              class="botao-inscrever" 
              data-evento="${evento.nome}" 
              data-event-id="${evento.id}"
            >
              Inscrever-se
            </button>
        </div>`;
      container.appendChild(card);
    });

    // Ativa os botões depois de renderizar
    document.querySelectorAll('.botao-inscrever').forEach(botao => {
      botao.addEventListener('click', () => {
        const evento = botao.dataset.evento;
        const agora = new Date();
        const dia = String(agora.getDate()).padStart(2, '0');
        const mes = String(agora.getMonth() + 1).padStart(2, '0');
        const hora = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const horario = `${dia}/${mes} - ${hora}h${minutos}`;

        idDoEventoSelecionado = botao.dataset.eventId;

        textoInstrucoes.innerHTML = `
        <strong>${horario}</strong>, você está na etapa de inscrição, irei lhe passar algumas instruções.<br><br>
        1 - Se certifique que está comprometida a participar do curso, tanto em sua temática, datas e horários.<br>
        2 - Caso você queira participar, clique no botão inscrever-se.<br>
        3 - Em seguida, vá no número do WhatsApp abaixo e envie uma mensagem escrita com: <strong>"ativar inscrição em ${evento}"</strong><br>
        4 - Após essas etapas, você se encontra inscrito no curso.`;

        modal.style.display = 'block';
      });
    });
  })
  .catch(err => {
    console.error("Erro ao carregar eventos da API:", err);
  });

// ENVIO DA INSCRIÇÃO
botaoInscreverConfirmar.addEventListener("click", () => {
  if (!idDoEventoSelecionado || !idDoUsuario) {
    alert("Erro ao capturar IDs de inscrição.");
    return;
  }

  fetch(`https://neptune-wq2t.onrender.com/subscribe/events?eventId=${idDoEventoSelecionado}&userId=${idDoUsuario}`, {
    method: "POST"
  })
    .then(res => {
      if (!res.ok) throw new Error("Erro ao realizar inscrição.");
      return res.json();
    })
    .then(() => {
      alert("Inscrição realizada com sucesso!");
      modal.style.display = "none";
    })
    .catch(err => {
      console.error(err);
      alert("Houve um erro na inscrição. Tente novamente.");
    });
});

// FECHAR MODAL
fecharBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
