'use client';

import { useState, useEffect } from 'react';
import { ChefHat, Timer, Zap, Globe, ArrowRight, CheckCircle2 } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const DB_ID = "086395e5-946e-48a5-8664-880c86720d43";

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/count')
      .then(res => res.json())
      .then(data => setCount(data.count + 128))
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch(`/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-background grid-bg selection:bg-accent/30">
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-muted">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent flex items-center justify-center rounded shadow-glow">
            <ChefHat size={18} className="text-background" />
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter uppercase">Vesta Spices</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-foreground/60">
          <a href="#concept" className="hover:text-accent transition-colors">The Concept</a>
          <a href="#kits" className="hover:text-accent transition-colors">The Kits</a>
          <a href="#waitlist" className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-accent hover:bg-accent/20 transition-all">Join Waitlist</a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded text-accent font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
            Phase 01: Pre-Launch
          </div>
          <h1 className="font-mono text-5xl md:text-7xl font-bold leading-tight mb-8">
            GLOBAL FLAVORS.<br />
            <span className="text-accent">TUESDAY NIGHT</span><br />
            EFFORT.
          </h1>
          <p className="text-lg text-foreground/70 mb-10 max-w-lg leading-relaxed">
            Stop buying $12 spice jars for one recipe. Vesta delivers high-barrier, pre-portioned spice kits designed for your busiest weeknights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="group">
              Secure Early Access <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-3 px-6 py-4 bg-muted/50 rounded border border-muted font-mono text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {count ? `${count} cooks on the list` : 'Joining the kitchen...'}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-accent/20 blur-[100px] -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000" 
            alt="Vesta Spices Sachet" 
            className="rounded-lg border border-muted shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-8 -left-8 p-6 bg-muted border border-accent/30 rounded-lg backdrop-blur-xl max-w-[200px]">
            <p className="font-mono text-[10px] uppercase text-accent mb-2 tracking-widest">Tech Spec</p>
            <p className="text-xs font-light text-foreground/80">Metallized compostable film. 12-month volatile oil retention.</p>
          </div>
        </div>
      </section>

      <section id="concept" className="bg-muted/30 py-24 border-y border-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { icon: Timer, title: "Zero Prep", desc: "No more grinding, measuring, or hunting for rare peppercorns. Tear, pour, cook." },
            { icon: Zap, title: "Peak Freshness", desc: "Ground and sealed within 72h of shipping. The difference between 'dust' and 'flavor'." },
            { icon: Globe, title: "Authentic Sourcing", desc: "Grade-A Da Hong Pao from Szechuan, true cinnamon from Sri Lanka. No fillers." }
          ].map((f, i) => (
            <div key={i} className="space-y-4 group">
              <f.icon className="text-accent group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-mono text-xl font-bold uppercase tracking-tight">{f.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kits" className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="font-mono text-3xl font-bold uppercase mb-16 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-accent" />
          The Launch Trio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              name: "Szechuan Mapo Tofu", 
              spices: ["Da Hong Pao Peppercorns", "Fermented Chili"], 
              img: "https://images.unsplash.com/photo-1541696490-8744a5db7f7d?auto=format&fit=crop&q=80&w=600" 
            },
            { 
              name: "Moroccan Lamb Tagine", 
              spices: ["Ras el Hanout", "True Cinnamon"], 
              img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=600" 
            },
            { 
              name: "Thai Green Curry", 
              spices: ["Galangal", "Kaffir Lime", "Lemongrass"], 
              img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=600" 
            }
          ].map((kit, i) => (
            <Card key={i} className="group">
              <div className="h-48 overflow-hidden">
                <img src={kit.img} alt={kit.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="font-mono font-bold text-lg mb-4">{kit.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {kit.spices.map((s, j) => (
                    <span key={j} className="text-[10px] font-mono border border-foreground/10 px-2 py-1 rounded text-foreground/50 uppercase tracking-widest">{s}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="waitlist" className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="bg-muted p-12 rounded-2xl border border-accent/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 rotate-90 origin-top-right">VESTA_PROTOCOL_V1</div>
          <h2 className="font-mono text-4xl font-bold uppercase mb-4 tracking-tighter">Enter the Kitchen</h2>
          <p className="text-foreground/60 mb-10">We launch August 2026. Early supporters get free shipping for life and the exclusive 'Starter Trio' box for $10.</p>
          
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle2 size={48} className="text-accent animate-bounce" />
              <p className="font-mono text-xl font-bold text-accent">ACCESS GRANTED</p>
              <p className="text-foreground/60 text-sm">Check your inbox for the welcome transmission.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                required 
                placeholder="EMAIL_ADDRESS" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'TRANSMITTING...' : 'INITIALIZE ENROLLMENT'}
              </Button>
              {status === 'error' && <p className="text-red-500 text-xs font-mono mt-4">ENROLLMENT_ERROR: Please try again.</p>}
            </form>
          )}
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
        <p>© 2026 VESTA SPICES LABORATORY</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-accent">Privacy</a>
          <a href="#" className="hover:text-accent">Terms</a>
          <a href="#" className="hover:text-accent">Supply Chain</a>
        </div>
      </footer>
    </main>
  );
}