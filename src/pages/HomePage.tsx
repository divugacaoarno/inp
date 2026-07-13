import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiClock, FiShield, FiTrendingUp, FiUsers, FiMenu, FiX } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './HomePage.module.css';

const services = [
  { title: 'Instalação de Drywall', description: 'Paredes, divisórias, sancas, forros e muito mais.', icon: FiTrendingUp },
  { title: 'Forro de Drywall', description: 'Forros lisos, rebaixados e com iluminação.', icon: FiShield },
  { title: 'Divisórias', description: 'Divisórias leves e resistentes para dividir ambientes com praticidade.', icon: FiUsers },
  { title: 'Reparos e Manutenção', description: 'Correção de rachaduras, furos e infiltrações em drywall.', icon: FiCheck },
  { title: 'Acabamento Nível 5', description: 'Acabamento premium com nível máximo de qualidade para pintura final.', icon: FiShield },
  { title: 'Remoção de Textura', description: 'Remoção de texturas antigas e preparação de superfícies para pintura.', icon: FiClock },
];

const stats = [
  { title: '+100 Ambientes Transformados', icon: FiUsers },
  { title: 'Orçamento em até 5 minutos', icon: FiClock },
  { title: 'Acabamento Profissional', icon: FiShield },
  { title: 'Garantia do Serviço', icon: FiCheck },
];

const whyItems = [
  { title: 'Compromisso com prazo', description: 'Respeito aos prazos acertados e entrega rápida.', icon: FiClock },
  { title: 'Transparência total', description: 'Orçamento claro, sem surpresas e com preços justos.', icon: FiTrendingUp },
  { title: 'Atendimento humanizado', description: 'Suporte atento e alinhado às necessidades do cliente.', icon: FiUsers },
  { title: 'Garantia por escrito', description: 'Garantia formal para sua segurança e tranquilidade.', icon: FiShield },
];

const faq = [
  { question: 'Quanto tempo leva para instalar drywall?', answer: 'O tempo depende do projeto e da metragem, mas entregamos com agilidade e qualidade.' },
  { question: 'Qual a diferença entre drywall e alvenaria?', answer: 'Drywall é mais rápido, limpo e permite acabamento de alta qualidade em prazos menores.' },
  { question: 'O drywall pode molhar?', answer: 'Drywall pode ser afetado por umidade, mas usamos técnicas adequadas para ambientes secos e protegidos.' },
  { question: 'O drywall é resistente?', answer: 'Sim, quando instalado corretamente ele é forte, durável e ideal para obras modernas.' },
  { question: 'Vocês fazem orçamento sem compromisso?', answer: 'Sim, o orçamento é gratuito e você só aprova se fizer sentido para você.' },
  { question: 'Vocês atendem em todo o Rio de Janeiro?', answer: 'Atendemos Rio de Janeiro e Grande Rio com prioridade para obras residenciais e comerciais.' },
];

const beforeAfterSlides = [
  { before: '/antes.1.jpeg', after: '/depois.1.jpeg', label: 'Projeto 1' },
  { before: '/antes.2.jpeg', after: '/depois.2.jpeg', label: 'Projeto 2' },
];

function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className={styles.page}>
      <Helmet>
        <title>Drywall ISC - Rio de Janeiro e Grande Rio</title>
        <meta name="description" content="Drywall ISC entrega acabamento impecável em poucos dias, sem sujeira e sem dor de cabeça. Orçamento gratuito pelo WhatsApp." />
      </Helmet>

      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logoWrapper}>
            <img src="/dryisc.logo-Photoroom.png" alt="Logo Drywall ISC" className={styles.logo} />
          </div>
          
          {/* Desktop Nav Links */}
          <nav className={styles.navLinks}>
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#projetos">Projetos</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="#contato">Contato</a>
          </nav>
          
          <div className={styles.navbarRight}>
            {/* Mobile Hamburger Button */}
            <button 
              className={styles.mobileMenuBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <a href="https://wa.me/5521985250808" target="_blank" rel="noreferrer" className={styles.navCta}>
              <AiOutlineWhatsApp size={18} />
              <span className={styles.navCtaText}>FALAR NO WHATSAPP</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={styles.mobileNavLinks}
            >
              <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
              <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
              <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)}>Sobre Nós</a>
              <a href="#projetos" onClick={() => setIsMobileMenuOpen(false)}>Projetos</a>
              <a href="#duvidas" onClick={() => setIsMobileMenuOpen(false)}>Dúvidas</a>
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={styles.heroContent}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className={styles.heroText}>
            <p className={styles.heroTag}>Sua obra está parada ou demorando demais?</p>
            <h1>
              Drywall com acabamento impecável <span className={styles.heroHighlight}>em poucos dias</span> — sem sujeira e <span className={styles.heroHighlight}>sem dor de cabeça</span>.
            </h1>
            <p className={styles.heroSubtitle}>Descubra no vídeo ao lado por que cada vez mais clientes estão trocando a alvenaria pelo drywall e economizando tempo na obra.</p>
            <ul className={styles.heroList}>
              <li>Orçamento gratuito</li>
              <li>Atendimento imediato pelo WhatsApp</li>
              <li>Instalação rápida e acabamento profissional</li>
              <li>Você só aprova o orçamento se fizer sentido para você</li>
            </ul>
            <a href="https://wa.me/5521985250808" target="_blank" rel="noreferrer" className={styles.primaryButton}>QUERO MEU ORÇAMENTO GRÁTIS NO WHATSAPP</a>
            <div className={styles.heroSupport}> 
              <span>⚡ Resposta em até 5 minutos</span>
              <span>🛡️ Sem compromisso</span>
              <span>📱 Atendimento rápido</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className={styles.heroMedia}>
            <div className={styles.videoCard}>
              <video
                className={styles.heroVideo}
                src="/drywal.video.mp4"
                playsInline
                muted
                loop
                autoPlay
                controls
                preload="metadata"
              />
              
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.statsBar}>
        <div className={styles.statsGrid}>
          {stats.map((item) => (
            <motion.div whileHover={{ y: -4 }} className={styles.statCard} key={item.title}>
              <item.icon size={22} />
              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.projects} id="projetos">
        <div className={styles.sectionHeader}>
          <h2>Antes e Depois</h2>
        </div>
        <div className={styles.projectSlider}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            className={styles.swiperContainer}
          >
            {beforeAfterSlides.map((slide) => (
              <SwiperSlide key={slide.before}>
                <div className={styles.beforeAfterWrapper}>
                  <div className={styles.beforePanel}>
                    <span>ANTES</span>
                    <img src={slide.before} alt={`${slide.label} Antes`} />
                  </div>
                  <div className={styles.afterPanel}>
                    <span>DEPOIS</span>
                    <img src={slide.after} alt={`${slide.label} Depois`} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <a href="https://wa.me/5521985250808" target="_blank" rel="noreferrer" className={styles.secondaryButton}>VER MAIS PROJETOS</a>
      </section>

      <section className={styles.services} id="servicos">
        <div className={styles.sectionHeader}>
          <h2>Nossos Serviços</h2>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <motion.article whileHover={{ y: -8 }} transition={{ duration: 0.2 }} className={styles.serviceCard} key={service.title}>
              <service.icon size={24} className={styles.serviceIcon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={styles.howItWorks}>
        <div className={styles.sectionHeader}>
          <h2>Como funciona nosso serviço</h2>
        </div>
        <div className={styles.stepsGrid}>
          {['Você chama no WhatsApp', 'Entendemos sua necessidade', 'Enviamos o orçamento', 'Agendamos', 'Sua obra pronta'].map((step, index) => (
            <motion.div whileHover={{ scale: 1.02 }} className={styles.stepCard} key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.highlightSection} id="sobre">
        <div className={styles.highlightContent}>
          <div>
            <small>Mais que drywall.</small>
            <h2>Entregamos tranquilidade.</h2>
            <p>Trabalhamos com dedicação para entregar o melhor acabamento, dentro do prazo e com total respeito ao seu ambiente.</p>
          </div>
          <div className={styles.highlightItems}>
            <div><FiCheck size={20} /><p>Limpeza total da obra</p></div>
            <div><FiShield size={20} /><p>Materiais de alta qualidade</p></div>
            <div><FiUsers size={20} /><p>Profissionais experientes</p></div>
            <div><FiClock size={20} /><p>Garantia por escrito</p></div>
          </div>
        </div>
      </section>

      <section className={styles.whyChoose}>
        <div className={styles.sectionHeader}>
          <h2>Por que nossos clientes escolhem a gente?</h2>
        </div>
        <div className={styles.whyGrid}>
          {whyItems.map((item) => (
            <motion.article whileHover={{ y: -6 }} className={styles.whyCard} key={item.title}>
              <item.icon size={24} className={styles.whyIcon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={styles.faqSection} id="duvidas">
        <div className={styles.sectionHeader}>
          <h2>Dúvidas Frequentes</h2>
        </div>
        <div className={styles.faqGrid}>
          {faq.map((item) => (
            <details key={item.question} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.ctaFinal} id="contato">
        <div>
          <h2>Pronto para transformar seu ambiente?</h2>
          <p>Receba seu orçamento gratuito pelo WhatsApp.</p>
        </div>
        <a href="https://wa.me/5521985250808" target="_blank" rel="noreferrer" className={styles.primaryButton}>FALAR NO WHATSAPP</a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <img src="/dryisc.logo-Photoroom.png" alt="Drywall ISC" />
          <div>
            <p>Rio de Janeiro</p>
            <p>Telefone: (21) 98525-0808</p>
            <a href="https://wa.me/5521985250808" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>Links rápidos</p>
          <small>© 2026 Drywall ISC. Todos os direitos reservados.</small>
        </div>
      </footer>
    </main>
  );
}

export default HomePage;
