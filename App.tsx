
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight,
  Plus,
  Monitor,
  Printer,
  Compass
} from 'lucide-react';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Lead capture simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
    }, 1000);
  };

  const Logo = ({ className = "h-4 w-auto" }: { className?: string }) => (
    <img 
      src="https://raw.githubusercontent.com/ben-itp/assets/main/logo-white.png" 
      alt="Stephen Kelman Logo" 
      className={`${className} brightness-200`}
      style={{ filter: 'invert(1) brightness(2)' }}
    />
  );

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex flex-col antialiased overflow-x-hidden">
      {/* Structural Top Nav */}
      <header className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6 border-b border-white/10 bg-[#0e0e0e]/90 backdrop-blur-md">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 md:space-x-8">
            <Logo className="h-3.5 md:h-4 w-auto object-contain" />
            <span className="hidden sm:block text-[9px] md:text-[10px] uppercase tracking-widest text-[#8c8c8c] font-medium border-l border-white/10 pl-4 md:pl-8">
              A4 Annual Report / V1.0
            </span>
          </div>
          <div className="text-xs md:text-sm font-medium tracking-tighter text-[#f2f2f2]">
            {time} — GMT
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24 md:pt-32">
        {/* Massive Hero Block */}
        <section className="px-4 md:px-6 border-b border-white/5 pb-16 md:pb-24">
          <div className="max-w-[1800px] mx-auto">
            <div className="mb-8 md:mb-12 flex justify-between items-start">
               <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#8c8c8c]">Direct Access Acquisition</span>
               <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white">Affinity Designer Exclusive</span>
            </div>
            
            <h1 className="text-[14vw] md:text-[11vw] leading-[0.9] md:leading-[0.85] font-bold tracking-tighter uppercase mb-12 md:mb-20 animate-reveal">
              A4 Annual <br />
              <span className="text-[#8c8c8c]">Report Template</span>
            </h1>

            <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-end">
              <div className="lg:col-span-4 flex flex-col space-y-6 md:space-y-8">
                <p className="text-lg md:text-xl leading-snug text-[#f2f2f2] font-medium max-w-sm">
                  Professional 24-page brochure template for Affinity Designer. Optimized for corporate transparency and minimal aesthetics.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[9px] md:text-[10px] uppercase tracking-widest text-[#8c8c8c]">
                  <span>24 Pages</span>
                  <span className="opacity-30">/</span>
                  <span>A4 Portrait</span>
                  <span className="opacity-30">/</span>
                  <span>300 DPI CMYK</span>
                  <span className="opacity-30">/</span>
                  <span>Print Ready</span>
                </div>
              </div>

              <div className="lg:col-span-8 w-full">
                {!isSuccess ? (
                  <div className="space-y-4">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40">Enter Email for the Template</span>
                    <form onSubmit={handleSubmit} className="relative border-b border-white/20 pb-4 flex items-center group">
                      <input 
                        type="email" 
                        required
                        placeholder="your@email.com" 
                        className="flex-grow bg-transparent text-2xl sm:text-3xl md:text-5xl font-medium tracking-tighter outline-none placeholder:text-white/10 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button 
                        disabled={isSubmitting}
                        className="ml-4 p-3 md:p-4 bg-white text-black rounded-full hover:scale-110 transition-transform disabled:opacity-50 shrink-0"
                        title="Submit"
                      >
                        <ArrowRight className="w-6 h-6 md:w-10 md:h-10" />
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="min-h-[60px] md:h-[100px] flex items-center">
                    <span className="text-xl md:text-3xl font-medium tracking-tighter text-white uppercase italic">Registration Complete. Check your inbox.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Product Imagery - Scrollable on mobile for better space usage */}
        <section className="px-4 md:px-6 py-16 md:py-24 border-b border-white/5 overflow-hidden">
          <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-px md:bg-white/5">
            <div className="bg-[#0e0e0e] md:pr-12 pb-4 md:pb-12">
               <div className="aspect-[4/5] md:aspect-norgram overflow-hidden bg-[#1a1a1a]">
                  <img 
                    src="https://api.screenshotone.com/take?url=https%3A%2F%2Fraw.githubusercontent.com%2Fben-itp%2Fassets%2Fmain%2Ftemplate_preview.png&access_key=YOUR_ACCESS_KEY&full_page=true" 
                    className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-all duration-700 hover:scale-105" 
                    alt="Template Interior Detail" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://public-files.gumroad.com/83p1p66v75g7p4f8373on2u00f5k";
                    }}
                  />
               </div>
               <div className="mt-6 flex justify-between items-baseline">
                  <span className="text-sm font-semibold uppercase italic">Cover System</span>
                  <span className="text-[9px] text-[#8c8c8c] uppercase tracking-widest">Type-Focused</span>
               </div>
            </div>
            <div className="bg-[#0e0e0e] md:px-12 pb-4 md:pb-12">
               <div className="aspect-[4/5] md:aspect-norgram overflow-hidden bg-[#1a1a1a]">
                  <img 
                    src="https://public-files.gumroad.com/s4f0u7f340n0w7b1m3a7776f8n7b" 
                    className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-all duration-700 hover:scale-105" 
                    alt="Interior Template Layout" 
                  />
               </div>
               <div className="mt-6 flex justify-between items-baseline">
                  <span className="text-sm font-semibold uppercase italic">Grid Logic</span>
                  <span className="text-[9px] text-[#8c8c8c] uppercase tracking-widest">A4 Structure</span>
               </div>
            </div>
            <div className="bg-[#0e0e0e] md:pl-12 pb-4 md:pb-12">
               <div className="aspect-[4/5] md:aspect-norgram overflow-hidden bg-[#1a1a1a]">
                  <img 
                    src="https://public-files.gumroad.com/variants/l0q72w2o7z19965y8f16l0w2b4v5/308f2389a9f23758b9f05a96495b46e336d39103e5c94c92a5d2438b4c062c3f" 
                    className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-all duration-700 hover:scale-105" 
                    alt="Template Content Spread" 
                  />
               </div>
               <div className="mt-6 flex justify-between items-baseline">
                  <span className="text-sm font-semibold uppercase italic">Minimalist Forms</span>
                  <span className="text-[9px] text-[#8c8c8c] uppercase tracking-widest">Data Visualization</span>
               </div>
            </div>
          </div>
        </section>

        {/* Technical Rows */}
        <section className="px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
               <h2 className="text-sm font-bold uppercase tracking-tighter mb-8 md:mb-12">Specifications</h2>
               <div className="md:sticky md:top-32 text-[9px] md:text-[10px] uppercase tracking-widest text-[#8c8c8c] space-y-2">
                 <p>File type: .afdesign</p>
                 <p>Version: V2.0+</p>
                 <p>Size: 32MB Compressed</p>
               </div>
            </div>
            <div className="lg:col-span-8 divide-y divide-white/5">
              <Row icon={<Monitor className="w-5 h-5" />} title="Non-Destructive Editing" content="Every layer is named and organized. Utilizing Affinity's native Symbols for footer and header management." />
              <Row icon={<Printer className="w-5 h-5" />} title="Print Optimization" content="Pre-defined 3mm bleed, CMYK color space, and baseline grid alignment for professional print results." />
              <Row icon={<Plus className="w-5 h-5" />} title="24 Unique Pages" content="From executive summaries to financial tables. A complete toolkit for corporate storytelling." />
              <Row icon={<Compass className="w-5 h-5" />} title="Modern Typography" content="Calculated font scaling and leading to ensure maximum readability in high-stakes documents." />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-4 md:px-6 py-24 md:py-48 bg-[#f2f2f2] text-black">
          <div className="max-w-[1800px] mx-auto">
            <div className="mb-12 md:mb-20">
               <Logo className="h-5 md:h-6 w-auto grayscale invert-0 brightness-0" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
              <h2 className="text-[12vw] md:text-[9vw] leading-[0.9] md:leading-[0.85] font-bold tracking-tighter uppercase max-w-4xl">
                Ready to <br />
                <span className="italic">Transform.</span>
              </h2>
              <div className="mt-10 md:mt-0 flex flex-col items-start md:items-end space-y-6 w-full md:w-auto">
                <p className="text-left md:text-right text-xs md:text-sm font-medium uppercase tracking-tight max-w-xs">
                  Join the exclusive list to receive the A4 Annual Report template directly in your inbox.
                </p>
                <button 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="flex items-center justify-between md:justify-start space-x-4 bg-black text-[#f2f2f2] px-8 md:px-12 py-5 md:py-6 rounded-full group transition-all shadow-xl w-full md:w-auto"
                >
                  <span className="text-base md:text-lg font-bold uppercase tracking-tight">Access Template</span>
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 md:px-6 py-8 md:py-12 border-t border-white/10 bg-[#0e0e0e]">
        <div className="max-w-[1800px] mx-auto flex justify-start items-center">
           <Logo className="h-3.5 md:h-4 w-auto opacity-30 grayscale" />
        </div>
      </footer>
    </div>
  );
};

interface RowProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const Row: React.FC<RowProps> = ({ icon, title, content }) => (
  <div className="py-10 md:py-12 grid md:grid-cols-2 gap-6 md:gap-8 group cursor-default">
    <div className="flex items-center space-x-4 md:space-x-6">
      <div className="text-white/20 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-medium tracking-tight uppercase">{title}</h3>
    </div>
    <p className="text-[#8c8c8c] text-sm leading-relaxed max-w-sm">
      {content}
    </p>
  </div>
);

export default App;
