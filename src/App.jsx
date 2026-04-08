import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Training from './components/Training';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      {/* ... (background code remains unchanged) ... */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full overflow-hidden">
        {/* ... (orbs and gradients remain unchanged) ... */}
        {/* Top-left — purple anchor */}
        <div className="absolute top-[-15%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[130px]" />

        {/* Top-right — pink flare (new) */}
        <div className="absolute top-[-8%] right-[-8%] h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

        {/* Mid-right — indigo depth */}
        <div className="absolute top-[30%] right-[-5%] h-[450px] w-[450px] rounded-full bg-purple-500/15 blur-[110px]" />

        {/* Mid-left — rose bridge between top-left purple and bottom pink */}
        <div className="absolute top-[40%] left-[-5%] h-[380px] w-[380px] rounded-full bg-pink-500/10 blur-[100px]" />

        {/* Center — vibrant pink glow (User Requested) */}
        <div className="absolute top-[25%] left-[30%] h-[400px] w-[400px] rounded-full bg-pink-500/15 blur-[120px]" />

        {/* Bottom-left — blue base */}
        <div className="absolute bottom-[-10%] left-[15%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[140px]" />

        {/* Bottom-center — pink outro glow (new) */}
        <div className="absolute bottom-[-5%] right-[20%] h-[450px] w-[450px] rounded-full bg-pink-400/12 blur-[120px]" />

        {/* Global Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Subtle center vignette to ground everything */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(192,38,211,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_110%,rgba(236,72,153,0.06),transparent)]" />

        {/* Noise grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Training />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;