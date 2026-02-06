"use client";
import Link from 'next/link';
import Section from '../../components/Section';
import { ArrowRight } from 'lucide-react';

export default function MarketsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Section
        title="Markets"
        subtitle="Unsere Drohnenabwehr adressiert zivile und militaerische Einsatzfelder, in denen schnelle Lageerkennung und robuste Abwehr entscheidend sind."
      >
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div id="civil" className="bg-card rounded-2xl p-8 shadow-md border border-card/60">
            <div className="text-xs tracking-widest uppercase text-textSecondary mb-2">Civilian Defence</div>
            <h3 className="text-2xl font-semibold mb-3">Zivile Schutzszenarien</h3>
            <p className="text-textSecondary mb-4">
              Fest installierte Systeme, die ab Bodennaehe den Luftraum weitraeumig ueberwachen - Tag &amp; Nacht verfuegbar.
            </p>
            <ul className="text-sm text-textSecondary grid gap-2">
              <li>24/7/365 online mit automatisierter Alarmierung.</li>
              <li>Edge Compute fuer CV-Systeme und Datenschutz by design.</li>
              <li>Soft-Kill (non-ballistic) fuer kritische Infrastrukturen.</li>
              <li>Skalierbare Sensor-Arrays fuer Flughaefen, Energieanlagen, urbane Zonen.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/services" className="inline-flex items-center gap-2 text-accent1 font-semibold">
                Services ansehen <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-textSecondary font-semibold">
                Projekt anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div id="defense" className="bg-card rounded-2xl p-8 shadow-md border border-card/60">
            <div className="text-xs tracking-widest uppercase text-textSecondary mb-2">Military Defense</div>
            <h3 className="text-2xl font-semibold mb-3">Militaerische Schutzszenarien</h3>
            <p className="text-textSecondary mb-4">
              Robuste Systeme fuer stationaere und mobile Schutz-Szenarien - von Perimeter-Sicherung bis taktischem Einsatz.
            </p>
            <ul className="text-sm text-textSecondary grid gap-2">
              <li>Fest installierte Systeme fuer kritische Standorte.</li>
              <li>Lightweight Systeme auf Drohnen fuer flexible Einsaetze.</li>
              <li>Tragbare Nodes fuer abgesessene Kraefte.</li>
              <li>Connected Nodes fuer C2 und verteiltes Lagebild.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/services" className="inline-flex items-center gap-2 text-accent1 font-semibold">
                Services ansehen <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-textSecondary font-semibold">
                Projekt anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
