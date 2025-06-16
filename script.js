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
        // Add subtle click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to hero text
    const heroText = document.querySelector('.hero-text');
    const heroFigure = document.querySelector('.hero-figure');
    
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

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.addEventListener('error', function() {
        this.style.opacity = '0.5';
        console.warn('Failed to load image:', this.src);
    });
});

const modal = document.getElementById("modalInscricao");
const fecharBtn = document.querySelector(".fechar");
const textoInstrucoes = document.getElementById("texto-instrucoes");

// Abre modal ao clicar em qualquer evento
document.querySelectorAll('.botao-inscrever').forEach(botao => {
    botao.addEventListener('click', () => {
      const evento = botao.dataset.evento;
      const agora = new Date();
      const dia = String(agora.getDate()).padStart(2, '0');
      const mes = String(agora.getMonth() + 1).padStart(2, '0');
      const hora = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      const horario = `${dia}/${mes} - ${hora}h${minutos}`;

  
      const modal = document.getElementById('modalInscricao');
      const texto = document.getElementById('texto-instrucoes');
  
      texto.innerHTML = `
      <strong>${horario}</strong>, você está na etapa de inscrição, irei lhe passar algumas instruções.<br><br>
      1 - Se certifique que está comprometida a participar do curso, tanto em sua temática, datas e horários.<br>
      2 - Caso você queira participar, clique no botão inscrever-se.<br>
      3 - Em seguida, vá no número do WhatsApp abaixo e envie uma mensagem escrita com: <strong>"ativar inscrição em ${evento}"</strong><br>
      4 - Após essas etapas, você se encontra inscrito no curso.
    `;

    modal.style.display = 'block';
  });
});
  
fecharBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
