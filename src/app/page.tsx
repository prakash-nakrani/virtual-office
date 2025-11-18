'use client';

import { useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsDown,
  Star,
} from "lucide-react";
import Image from "next/image";
import BBB from "../assets/bbb.png";
import Hero from "../assets/hero.png";
import Google from "../assets/google.png";
import TrustPilot from "../assets/trustpilot.png";

const locationDetails = {
  state: "{state}",
  stateShort: "{STATE}",
  city: "{city}",
  addressLineOne: "200 E Robinson Street, Suite 1120",
  addressLineTwo: "{city} {state}32801",
  phone: "(407) 559 - 2000",
  rate: "$99/mo",
  tagline: "{city} Virtual Business Address & Live Receptionist Answering Service",
};

const reviewBadges = [
  { src: BBB, alt: "BBB" },
  { src: TrustPilot, alt: "Trustpilot" },
  { src: Google, alt: "Google" },
];

const includedFeatures = [
  "Prestigious Business Address",
  "Professional Live Call Answering",
  "Personalized Call Transferring",
  "Business Phone/Fax Number",
  "Professional Mail Receipt",
  "Voicemail/Fax Converted to Email",
  "Digital Mail Notifications by Mail X",
];

const heroImage = Hero;

export default function Home() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const mobileFeatures = showAllFeatures ? includedFeatures : includedFeatures.slice(0, 3);

  return (
    <main className="min-h-screen bg-body-background text-slate-900">
      <div className="mx-auto w-full px-4 lg:px-20">
        <header className="lg:flex block justify-between lg:py-3 py-2 lg:px-8 max-lg:space-y-2">
          <div className="space-y-2">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-muted font-semibold">
              <span>Locations</span>
              <span className="text-slate-300"><ChevronRight size={16} /></span>
              <span>{locationDetails.state}</span>
              <span className="text-slate-300"><ChevronRight size={16} /></span>
              <span className="font-semibold text-link">{locationDetails.city}</span>
            </nav>
            <h1 className="text-xl md:text-3xl font-medium text-slate-900 sm:text-4xl lg:text-5xl">
              Virtual office in <span className="text-sky-500">{locationDetails.city}</span>
            </h1>
            <p className="max-w-3xl md:text-base text-xs leading-relaxed text-slate-500 sm:text-lg">
              {locationDetails.tagline}
            </p>
          </div>
          <div className="flex items-center max-lg:justify-end lg:gap-8 gap-4 max-lg:p-1">
            {reviewBadges.map((badge, i) => (
              <Image key={i} src={badge.src} alt={badge.alt} className="lg:p-1 p-0 lg:h-auto h-6 w-auto" />
            ))}
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.10fr_0.9fr] lg:px-8 lg:mt-4">
          <section className="lg:flex flex-col grid grid-cols-[3fr_4fr] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="relative">
              <Image
                src={heroImage}
                alt="Central business district skyline"
                className="lg:h-100 h-full w-full object-cover"
              />
              <button className="hidden lg:block absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-control transition hover:bg-white">
                <ChevronLeft className="size-5" />
              </button>
              <button className="hidden lg:block absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-control transition hover:bg-white">
                <ChevronRight className="size-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 rounded-full bg-white/90 px-2 py-2">
                <span className="h-2 w-2 cursor-pointer rounded-full bg-accent-primary" />
                <span className="h-2 w-2 cursor-pointer rounded-full bg-accent-muted" />
                <span className="h-2 w-2 cursor-pointer rounded-full bg-accent-muted" />
              </div>
            </div>

            <div className="flex-1 lg:block hidden space-y-2 bg-cta px-8 py-3 text-white">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-3xl font-semibold leading-tight sm:text-4xl">
                  {locationDetails.city}, {locationDetails.stateShort}
                </p>
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-5 fill-current text-white" />
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-base font-medium text-white/95 leading-7">
                  {locationDetails.addressLineOne} <br />
                  {locationDetails.addressLineTwo} <br />
                  {locationDetails.phone}
                </div>
                <div className="text-right">
                  <p className="text-[48px] font-bold text-white">{locationDetails.rate}</p>
                </div>
              </div>

            </div>

            <div className="lg:hidden block bg-cta p-4 text-white">
              <p className="lg:text-3xl text-sm font-semibold leading-tight sm:text-4xl">
                {locationDetails.city}, {locationDetails.stateShort}
              </p>
              <div className="text-sm text-white/95 py-4">
                {locationDetails.addressLineOne} <br />
                {locationDetails.addressLineTwo} <br />
                {locationDetails.phone}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="lg:size-5 size-2 fill-current text-white" />
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-white">{locationDetails.rate}</p>
                </div>
              </div>
              <button
                className="mt-2 flex w-full items-center justify-center rounded-md border border-button-border bg-button-surface py-2 text-sm font-semibold text-control transition hover:opacity-90"
                style={{
                  boxShadow:
                    "0px 1px 2px 0px var(--color-shadow-surface), 0px -2px 0px 0px var(--color-shadow-surface) inset, 0px 0px 0px 1px var(--color-shadow-surface-strong) inset",
                }}
              >
                Select this location
              </button>
            </div>
          </section>

          <aside className="flex flex-col justify-between text-secondary text-[16px] lg:w-[360px] lg:shrink-0">
            <div>
              <p>
                When We Say <span className="font-semibold">All-inclusive,</span> <br />
                We Mean <span className="font-semibold">ALL-INCLUSIVE:</span>
              </p>
              <ul className="space-y-3 mt-4 lg:hidden">
                {mobileFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-4 text-[16px] text-slate-700 font-normal"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-icon-background text-cta">
                      <Check size={20} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3 mt-4 hidden lg:block">
                {includedFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-4 text-[16px] text-slate-700 font-normal"
                  >
                    <span className="flex h-6 w-6 lg:h-8 lg:w-8 items-center justify-center rounded-full bg-icon-background text-cta">
                      <Check className="size-6" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {!showAllFeatures && includedFeatures.length > 3 && (
                <button
                  onClick={() => setShowAllFeatures(true)}
                  className="mt-4 flex lg:hidden items-center gap-2 text-secondary-text hover:opacity-80 transition"
                >
                  <ChevronsDown className="size-6" />
                  <span>See All Features</span>
                </button>
              )}
            </div>

            <p className="lg:block hidden text-xl">
              All for only <span className="text-accent-primary font-bold">$99</span>/month
            </p>
            <button className="lg:block hidden w-full rounded-lg items-center justify-center bg-cta py-4 font-semibold text-[18px] text-white border-cta border cursor-pointer">
              Select This Location
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}
