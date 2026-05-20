import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Home, 
  HeartPulse, 
  PiggyBank, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-4 md:px-8">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto bg-white/70 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-[2rem] px-6 md:px-10 h-20 flex items-center justify-between"
      >
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
            <img src="/logo.png" alt="Logo Protección Financiera" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-black uppercase tracking-[0.2em] text-brand-dark/60">
          {["Servicios", "Autónomos", "Familias", "Sobre mí"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-").replace("í", "i")}`} 
              className="hover:text-brand-orange transition-colors relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-brand-orange transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#diagnostico" className="bg-brand-dark text-white px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-orange hover:shadow-[0_10px_25px_rgba(255,102,0,0.3)] transition-all duration-500">
            Diagnóstico
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-dark w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 p-10 flex flex-col gap-8 font-black uppercase tracking-widest text-sm shadow-2xl"
        >
          {["Servicios", "Autónomos", "Familias", "Sobre mí", "Diagnóstico gratuito"].map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase().replace(" ", "-").replace("í", "i")}`} 
              onClick={() => setIsOpen(false)}
              className={item === "Diagnóstico gratuito" ? "text-brand-orange" : "text-brand-dark"}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 md:pt-[13rem] md:pb-40 overflow-hidden bg-[#FAFAFA]">
      {/* Editorial Gradients */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-brand-orange/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-brand-blue/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-[1px] bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-[10px]">Asesoría de Élite</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[6.5rem] font-serif leading-[0.92] tracking-tighter mb-10 text-brand-dark"
          >
            Protege tus ingresos, <br/>tu <span className="text-brand-orange italic font-light">vivienda</span> e hijos
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-brand-gray mb-14 max-w-xl leading-relaxed font-light"
          >
            Estrategia financiera humana y técnica para familias y autónomos que valoran la seguridad.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <a href="#diagnostico" className="px-12 py-6 bg-brand-orange text-white rounded-full font-black text-sm text-center shadow-[0_20px_50px_rgba(255,102,0,0.25)] hover:bg-brand-dark hover:shadow-[0_20px_50px_rgba(10,25,49,0.25)] transition-all hover:-translate-y-1 block uppercase tracking-[0.2em]">
              Solicitar diagnóstico
            </a>
            <a href="#servicios" className="px-12 py-6 bg-white border border-gray-100 text-brand-dark rounded-full font-black text-sm text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all block uppercase tracking-[0.2em]">
              Nuestras áreas
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap items-center gap-10 opacity-40 grayscale"
          >
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em]">
              <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
              <span>Sin letra pequeña</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em]">
              <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
              <span>Claridad absoluta</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <motion.div 
             animate={{ y: [0, -15, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden relative border border-gray-100 shadow-2xl"
          >
             <img 
               src="/input_file_0.png" 
               alt="Asesor Financiero" 
               className="w-full h-full object-contain transition-transform hover:scale-105 duration-1000"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
          </motion.div>
          
          {/* Stats Floating Card */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -right-4 top-1/2 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-orange-light rounded-full flex items-center justify-center text-brand-orange">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-brand-gray font-bold">Confianza</p>
                <p className="font-display font-bold text-brand-dark">+10 Años de experiencia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const AuthorityBar = () => {
  const items = [
    { icon: <ShieldCheck size={32} />, title: "Protección Financiera", desc: "Ingresos y futuro familiar" },
    { icon: <Home size={32} />, title: "Hipotecas", desc: "Viabilidad y mejores condiciones" },
    { icon: <HeartPulse size={32} />, title: "Salud Total", desc: "Acceso médico sin esperas" },
    { icon: <PiggyBank size={32} />, title: "Ahorro Activo", desc: "Jubilación y metas a medida" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4 group">
              <div className="text-brand-orange group-hover:scale-110 transition-transform duration-500 bg-brand-orange-light w-16 h-16 rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-black text-sm uppercase tracking-widest mb-1">{item.title}</h3>
                <p className="text-brand-gray text-xs font-medium uppercase tracking-wider opacity-60">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  return (
    <section id="problemas" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-brand-dark rounded-[3.5rem] overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay group-hover:bg-brand-orange/5 transition-colors duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000" 
                alt="Finanzas y preocupaciones" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute bottom-10 left-10 right-10 p-10 bg-white/10 backdrop-blur-3xl rounded-[2.5rem] border border-white/20">
                <p className="text-white font-serif italic text-2xl leading-relaxed">"La mayoría de las personas no planea fracasar, simplemente fracasa en planear."</p>
              </div>
            </div>
          </motion.div>

          <div>
            <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-[10px] mb-8 inline-block">El Desafío Actual</span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-dark mb-10 leading-[1.1] tracking-tighter">
              ¿Sabes realmente qué pasaría <span className="italic text-brand-orange font-light">si faltaras mañana?</span>
            </h2>
            <div className="space-y-12">
              {[
                { title: "Incertidumbre financiera", desc: "No tener claro si tus ahorros y seguros son suficientes para mantener el nivel de vida de tu familia." },
                { title: "Vulnerabilidad extrema", desc: "Depender únicamente de un ingreso que, si falla, arrastra consigo la estabilidad del hogar." },
                { title: "Falta de estrategia", desc: "Tomar decisiones financieras basadas en el miedo o en recomendaciones genéricas de bancos." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-brand-orange font-serif italic text-5xl opacity-20 shrink-0 tabular-nums">0{i + 1}</span>
                    <h3 className="text-[13px] font-black text-brand-dark uppercase tracking-[0.2em] border-l border-gray-200 pl-6">{item.title}</h3>
                  </div>
                  <div className="pl-20">
                    <p className="text-brand-gray text-lg font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MethodSection = () => {
  const steps = [
    { title: "1. Analizo tu situación", desc: "Ingresos, gastos, hipoteca, familia, seguros, ahorro y objetivos." },
    { title: "2. Detecto riesgos", desc: "Vemos qué puntos pueden afectar a tu estabilidad financiera real." },
    { title: "3. Ordenamos prioridades", desc: "No todo es urgente. Se decide qué proteger antes de cualquier acción." },
    { title: "4. Propongo soluciones", desc: "Soluciones a medida, solo si encajan con tu caso y aportan valor." },
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Primero diagnóstico. Después soluciones.</h2>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group p-10 rounded-[2rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
            >
              <span className="absolute -top-4 right-6 text-8xl font-black text-gray-200/40 group-hover:text-brand-orange/10 transition-colors uppercase italic pointer-events-none select-none">
                0{i+1}
              </span>
              <h3 className="font-bold text-2xl mb-5 relative z-10 text-brand-dark group-hover:text-brand-orange transition-colors">{step.title}</h3>
              <p className="text-brand-gray text-base leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 text-center"
        >
            <blockquote className="text-2xl md:text-4xl font-display font-medium text-brand-blue max-w-3xl mx-auto leading-relaxed">
              "No se trata de contratar más. <br className="hidden md:block" />
              <span className="text-brand-orange italic">Se trata de decidir mejor."</span>
            </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

const BentoServiceCard = ({ id, title, desc, items, icon: Icon, delay, className = "" }: { id?: string, title: string, desc: string, items: string[], icon: any, delay: number, className?: string }) => (
  <motion.div 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={`bg-white group relative overflow-hidden rounded-[2.5rem] border border-gray-100 p-8 md:p-10 transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] ${className}`}
  >
    <div className="relative z-10 flex flex-col h-full">
      <div className="w-14 h-14 bg-brand-orange-light rounded-2xl flex items-center justify-center text-brand-orange mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight group-hover:text-brand-orange transition-colors">{title}</h3>
      <p className="text-brand-gray text-lg mb-8 leading-relaxed font-light">{desc}</p>
      
      <div className="mt-auto space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-bold text-brand-dark">
            <CheckCircle2 size={16} className="text-brand-orange shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
    
    {/* Decorative background accent */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/10 transition-colors"></div>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-32 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-6 inline-block">Nuestra Pericia</span>
            <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] tracking-tight">Servicios de <br/><span className="text-brand-orange italic">protección inteligente</span></h2>
          </div>
          <p className="text-brand-gray text-lg max-w-sm mb-4 leading-relaxed font-light">
            Especializado en blindar tu patrimonio y asegurar que el futuro de tu familia esté siempre bajo control.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <BentoServiceCard 
            id="proteccion" 
            icon={ShieldCheck} 
            title="Protección Familiar" 
            desc="Blindaje de ingresos y estabilidad hogareña ante cualquier imprevisto severo." 
            items={["Seguro de vida", "Incapacidad total", "Protección hogar"]} 
            delay={0}
            className=""
          />
          <BentoServiceCard 
            id="hipotecas" 
            icon={Home} 
            title="Hipotecas" 
            desc="Análisis técnico para conseguir la mejor financiación del mercado." 
            items={["Viabilidad bancaria", "Mejora de condiciones"]} 
            delay={0.2}
            className=""
          />
          <BentoServiceCard 
            id="salud" 
            icon={HeartPulse} 
            title="Salud Premium" 
            desc="Acceso preferente a la mejor medicina privada sin esperas ni trabas." 
            items={["Seguro médico total", "Sin copagos", "Especialistas top"]} 
            delay={0.4}
            className=""
          />
          <BentoServiceCard 
            id="ahorro" 
            icon={PiggyBank} 
            title="Ahorro" 
            desc="Estrategias de inversión y ahorro para jubilación y objetivos a largo plazo." 
            items={["Fondos inversión", "Ahorro infantil", "Plan jubilación"]} 
            delay={0.6}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

const Audiences = () => {
  return (
    <>
      <section id="autonomos" className="py-32 bg-white scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
             <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" alt="Autónomos" className="rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] grayscale-[20%]" referrerPolicy="no-referrer" />
             <motion.div 
                animate={{ rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 bg-brand-orange p-10 rounded-3xl text-white shadow-2xl hidden lg:block max-w-sm"
              >
                <p className="font-bold text-2xl italic leading-tight">"Tu protección no puede <br/>depender solo de lo que facturas cada mes"</p>
             </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-brand-orange font-bold text-lg mb-6 inline-block">Freelancers & Autónomos</span>
            <h2 className="text-3xl md:text-7xl font-serif mb-8 leading-[1.1] tracking-tight italic">Si eres autónomo, <br /><span className="text-brand-orange not-italic">tú eres el motor</span></h2>
            <p className="text-brand-gray text-xl mb-10 leading-relaxed font-light">
              Si el motor se para, se para todo. Mi trabajo es asegurarme de que el engranaje financiero y vital de tu negocio siga girando con absoluta precisión.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                "Blindaje de ingresos ante bajas médicas",
                "Protección integral de incapacidad profesional",
                "Estrategia de jubilación real vs. mínima",
                "Seguridad absoluta para tu familia"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-4 text-brand-dark font-medium"
                >
                  <div className="w-6 h-6 bg-brand-orange-light rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-brand-orange" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <a href="#diagnostico" className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-dark transition-all inline-block shadow-lg shadow-brand-orange/20">
              Quiero mi diagnóstico gratuito
            </a>
          </motion.div>
        </div>
      </section>

      <section id="familias" className="py-32 bg-brand-orange-light/40 scroll-mt-20 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <span className="text-brand-blue font-bold text-lg mb-6 inline-block tracking-wide">Bienestar Familiar</span>
            <h2 className="text-3xl md:text-7xl font-serif mb-8 text-brand-blue leading-[1.1] tracking-tight">La familia es <br /><span className="text-brand-orange italic">tu primer legado</span></h2>
            <p className="text-brand-gray text-xl mb-10 leading-relaxed font-light max-w-lg">
              No se trata de miedo, se trata de amor y responsabilidad. Mi meta es que lo peor no rompa el estilo de vida de los que más quieres. Claridad, previsión y paz mental.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {["Control de hipoteca", "Protección imprevistos", "Salud sin esperas", "Futuro de los hijos"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-brand-blue font-bold">
                  <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href="#diagnostico" className="bg-brand-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block shadow-xl shadow-brand-blue/20">
              Revisar protección familiar
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2"
          >
            <img src="https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=800" alt="Familia" className="rounded-[3rem] shadow-2xl relative z-10" referrerPolicy="no-referrer" />
            <div className="absolute -inset-4 border-2 border-brand-orange/20 rounded-[3.5rem] -rotate-3 z-0"></div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const DiagnosisForm = () => {
  return (
    <section id="diagnostico" className="py-40 bg-brand-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-[10px] mb-8 inline-block">Comienza el Cambio</span>
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-12 leading-[0.92] tracking-tighter">
              Solicita tu <br /><span className="text-brand-orange italic font-light">diagnóstico</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl mb-16 leading-relaxed font-light">
              Es una conversación de claridad. Detectaremos fugas en tu protección actual y trazaremos un plan táctico para blindar tu futuro.
            </p>
            
            <div className="space-y-14">
              <div className="flex items-center gap-8 group">
                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-2xl">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">WhatsApp Directo</p>
                  <p className="text-white text-3xl font-light tracking-tight">+34 600 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-2xl">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Email Profesional</p>
                  <p className="text-white text-3xl font-light tracking-tight">hola@josecarloshidalgo.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white p-10 md:p-20 rounded-[4rem] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)] relative"
          >
            <form className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray ml-2">Nombre Completo</label>
                  <input type="text" placeholder="Ej. Juan Pérez" className="w-full bg-[#F5F5F7] border-none rounded-2xl p-6 text-brand-dark focus:ring-2 focus:ring-brand-orange outline-none transition-all placeholder:text-gray-300 font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray ml-2">WhatsApp</label>
                  <input type="tel" placeholder="+34 000 000 000" className="w-full bg-[#F5F5F7] border-none rounded-2xl p-6 text-brand-dark focus:ring-2 focus:ring-brand-orange outline-none transition-all placeholder:text-gray-300 font-medium" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray ml-2">Tu principal preocupación</label>
                <div className="relative">
                  <select className="w-full bg-[#F5F5F7] border-none rounded-2xl p-6 text-brand-dark focus:ring-2 focus:ring-brand-orange outline-none transition-all appearance-none cursor-pointer font-medium">
                    <option>Diagnóstico Integral (Recomendado)</option>
                    <option>Protección Familia y Vivienda</option>
                    <option>Estrategia para Autónomos</option>
                    <option>Ahorro e Inversión</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray ml-2">Mensaje (Opcional)</label>
                <textarea rows={3} placeholder="Cuéntame brevemente tu caso..." className="w-full bg-[#F5F5F7] border-none rounded-3xl p-6 text-brand-dark focus:ring-2 focus:ring-brand-orange outline-none transition-all placeholder:text-gray-300 resize-none font-medium"></textarea>
              </div>
              <button className="w-full py-8 bg-brand-dark text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:bg-brand-orange transition-all duration-700 hover:-translate-y-1">
                Solicitar Diagnóstico
              </button>
              <div className="flex items-center justify-center gap-2 grayscale opacity-30 mt-4 font-black text-[9px] uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-dark"></div>
                <span>Privacidad Asegurada</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "¿Qué coste tiene el diagnóstico?", a: "Absolutamente ninguno. Es una inversión de mi tiempo para entender si mi metodología puede aportarte el valor que buscas." },
    { q: "¿Qué ocurre tras la reunión?", a: "Saldrás con una hoja de ruta clara. Tú decides si quieres implementar las mejoras por tu cuenta o si deseas que te acompañe en el proceso." },
    { q: "¿Necesito preparar algo?", a: "Solo tus cifras aproximadas y tus dudas. Mi trabajo es simplificar la complejidad, no pedirte que hagas el trabajo técnico por mí." },
    { q: "¿La consulta es presencial?", a: "Operamos principalmente mediante videoconferencia de alta resolución, lo que nos permite una flexibilidad total y un análisis compartido de datos en tiempo real." },
  ];

  return (
    <section className="py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-[10px] mb-6 inline-block">Resolviendo Dudas</span>
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-brand-dark italic">Preguntas <span className="text-brand-orange not-italic">Frecuentes</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gray-50 rounded-[2.5rem] overflow-hidden [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-gray-200 transition-all duration-500"
            >
              <summary className="flex items-center justify-between p-10 cursor-pointer outline-none">
                <h3 className="font-serif italic text-2xl pr-8 text-brand-dark group-open:text-brand-orange transition-colors">{faq.q}</h3>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-orange group-open:bg-brand-orange group-open:text-white transition-all duration-500 group-open:rotate-180">
                  <ChevronDown size={20} />
                </div>
              </summary>
              <div className="px-10 pb-10 text-brand-gray text-lg leading-relaxed font-light">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};


const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-32 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
             <div className="relative inline-block w-full">
                <motion.div 
                  initial={{ scale: 0.8, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: -3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="absolute -inset-4 bg-brand-orange rounded-[3rem] -z-10 opacity-10"
                ></motion.div>
                <img src="https://images.unsplash.com/photo-1542744173-8e0ee26dfaf5?auto=format&fit=crop&q=80&w=800" alt="Consultoría financiera especializada" className="rounded-[3rem] w-full relative z-10 shadow-2xl grayscale-[15%]" referrerPolicy="no-referrer" />
             </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-6 inline-block">Consultoría con Valores</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-[1.1] tracking-tight">Humanizando las <br/><span className="text-brand-orange italic">decisiones financieras</span></h2>
            <p className="text-brand-gray text-2xl mb-8 leading-relaxed font-light">
              Mi enfoque es sencillo: antes de recomendar una solución, hay que entender bien el alma de cada situación.
            </p>
            <p className="text-brand-gray text-xl mb-12 leading-relaxed font-light">
              Analizo ingresos, cargas, riesgos y objetivos para que cada decisión tenga un sentido lógico y emocional. Mi meta es que protejas lo que más importa con criterio profesional y absoluta tranquilidad.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
               <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 rounded-3xl border border-gray-100"
               >
                  <p className="text-brand-orange font-bold text-3xl mb-2 italic tracking-tighter">Cercanía</p>
                  <p className="text-xs text-brand-gray uppercase font-black tracking-widest opacity-60">Atención 1 a 1</p>
               </motion.div>
               <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 rounded-3xl border border-gray-100"
               >
                  <p className="text-brand-blue font-bold text-3xl mb-2 italic tracking-tighter">Ética</p>
                  <p className="text-xs text-brand-gray uppercase font-black tracking-widest opacity-60">Claridad Total</p>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-40 bg-brand-dark text-white relative overflow-hidden">
       {/* High-end visual accents */}
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/2"></div>
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
       
       <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-9xl font-serif mb-16 leading-[0.88] tracking-tighter">
              El control <br/><span className="text-brand-orange italic font-light whitespace-nowrap">es el nuevo lujo</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-3xl mb-20 max-w-3xl mx-auto leading-relaxed font-light">
              Toma hoy la decisión que definirá la tranquilidad de tu familia en los próximos 20 años.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
               <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#diagnostico" 
                className="w-full sm:w-auto bg-brand-orange text-white px-16 py-8 rounded-full font-black text-xs hover:shadow-[0_20px_60px_rgba(255,102,0,0.4)] transition-all uppercase tracking-[0.4em] text-center"
               >
                  Quiero mi Diagnóstico
               </motion.a>
               <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/34647506040" 
                target="_blank" 
                className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border border-white/10 px-16 py-8 rounded-full font-black text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-4 uppercase tracking-[0.4em] text-center"
               >
                  WhatsApp
               </motion.a>
            </div>
          </motion.div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-40 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-24 items-start mb-32">
          <div className="col-span-2">
            <div className="flex items-center gap-5 mb-12">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                    <img src="/logo.png" alt="Logo" className="w-14 h-14 object-contain" referrerPolicy="no-referrer" />
                </div>
            </div>
            <p className="text-gray-400 text-xl max-w-sm leading-relaxed mb-12 font-light">
              Asesoramiento financiero de alta gama. Protegiendo el legado de los que más quieres con estrategia y claridad.
            </p>
            <div className="flex gap-6">
              {[Mail, Phone].map((Icon, i) => (
                  <motion.a 
                    key={i} 
                    whileHover={{ scale: 1.1, backgroundColor: "#FF6600", borderColor: "#FF6600", color: "#fff" }}
                    href="#" 
                    className="w-14 h-14 border border-white/10 rounded-2xl flex items-center justify-center text-white transition-all duration-500 bg-white/5"
                  >
                    <Icon size={24} />
                  </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-white uppercase tracking-[0.3em] text-[10px] mb-10">Navegación</h4>
            <ul className="space-y-6 text-gray-400 font-light text-lg">
              {["Servicios", "Autónomos", "Familias", "Sobre mí", "Contacto"].map(item => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-brand-orange transition-colors duration-300">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white uppercase tracking-[0.3em] text-[10px] mb-10">Legal</h4>
            <ul className="space-y-6 text-gray-400 font-light text-lg">
              {["Aviso Legal", "Privacidad", "Cookies", "Términos"].map(item => (
                <li key={item}><a href="#" className="hover:text-brand-orange transition-colors duration-300">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
          <p className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} La excelencia en previsión social.
          </p>
          <div className="flex items-center gap-3 text-[9px] font-black text-white/20 uppercase tracking-[0.4em] grayscale">
            <span>Hecho con</span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
            <span>Valencia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-orange/20 selection:text-brand-orange font-sans">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <AuthorityBar />
        <ProblemSection />
        <MethodSection />
        <ServicesSection />
        <Audiences />
        <AboutMe />
        <DiagnosisForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
