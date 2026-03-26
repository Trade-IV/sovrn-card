"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Mail,
  Globe,
  Download,
  MapPin,
  Shield,
  ArrowUpRight,
} from "lucide-react";

// Brand icons (not available in lucide)
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
    </svg>
  );
}

const PROFILE = {
  name: "Ruben Martinez IV",
  title: "Founder & CEO",
  company: "SOVRN",
  tagline: "Building AI Solutions for Businesses looking to grow",
  phone: "+18153450286",
  phoneDisplay: "(815) 345-0286",
  email: "iv.co4444@gmail.com",
  website: "https://sovrnhq.com",
  websiteDisplay: "sovrnhq.com",
  location: "Austin, Texas",
  linkedin: "https://www.linkedin.com/in/ruben-martinez-iv-413025226/",
  instagram: "https://www.instagram.com/s.o.v.r.n",
};

const ease = [0.25, 0.4, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease },
  }),
};

function SocialButton({
  href,
  icon: Icon,
  label,
  i,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  i: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      custom={i}
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="group flex flex-col items-center gap-2"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-2 border border-border transition-all duration-300 group-hover:border-accent group-hover:glow">
        <Icon className="h-5 w-5 text-muted transition-colors duration-300 group-hover:text-accent" />
      </div>
      <span className="text-[11px] text-muted/60 transition-colors group-hover:text-muted">
        {label}
      </span>
    </motion.a>
  );
}

function ActionButton({
  href,
  icon: Icon,
  label,
  subtitle,
  i,
  primary,
  onClick,
}: {
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  subtitle: string;
  i: number;
  primary?: boolean;
  onClick?: () => void;
}) {
  const className = primary
    ? "group flex items-center gap-4 rounded-2xl bg-accent/10 border border-accent/20 p-4 transition-all duration-300 hover:bg-accent/15 hover:border-accent/40 hover:glow active:scale-[0.98]"
    : "group flex items-center gap-4 rounded-2xl bg-surface-2 border border-border p-4 transition-all duration-300 hover:border-accent/30 hover:bg-surface-2/80 active:scale-[0.98]";

  const content = (
    <>
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          primary ? "bg-accent/20" : "bg-background"
        } transition-colors`}
      >
        <Icon
          className={`h-5 w-5 ${
            primary ? "text-accent" : "text-muted"
          } transition-colors group-hover:text-accent`}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted truncate">{subtitle}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted/40 transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  if (onClick) {
    return (
      <motion.button
        custom={i}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={className}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      custom={i}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {content}
    </motion.a>
  );
}

export default function Card() {
  const handleSaveContact = () => {
    window.location.href = "/api/contact";
  };

  return (
    <div className="flex min-h-dvh flex-col items-center justify-start px-4 py-10 sm:justify-center sm:py-16">
      {/* Card container */}
      <div className="w-full max-w-[420px]">
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative mb-6"
          >
            {/* Glow ring behind avatar */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl scale-150" />
            <div className="relative h-32 w-32 rounded-full gradient-border bg-surface flex items-center justify-center overflow-hidden">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a]">
                <Image
                  src="/shield.png"
                  alt="SOVRN"
                  width={110}
                  height={110}
                  className="object-contain brightness-150 drop-shadow-[0_0_12px_rgba(200,200,220,0.4)]"
                  priority
                />
              </div>
            </div>
            {/* Verified badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.3, ease: "backOut" }}
              className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/30"
            >
              <Shield className="h-4 w-4 text-white" />
            </motion.div>
          </motion.div>

          {/* Name & title */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-2xl font-bold tracking-tight"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-1.5 flex items-center gap-2"
          >
            <span className="text-sm font-medium text-accent">{PROFILE.title}</span>
            <span className="text-muted/30">at</span>
            <span className="text-sm font-semibold text-foreground">{PROFILE.company}</span>
          </motion.div>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-3 text-sm text-muted max-w-[280px] leading-relaxed"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-3 flex items-center gap-1.5 text-xs text-muted/50"
          >
            <MapPin className="h-3 w-3" />
            {PROFILE.location}
          </motion.div>
        </div>

        {/* Social icons row */}
        <div className="flex justify-center gap-5 mb-8">
          <SocialButton href={PROFILE.linkedin} icon={LinkedinIcon} label="LinkedIn" i={5} />
          <SocialButton href={PROFILE.instagram} icon={InstagramIcon} label="Instagram" i={6} />
          <SocialButton href={PROFILE.website} icon={Shield} label="Website" i={7} />
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"
        />

        {/* Action buttons */}
        <div className="flex flex-col gap-3 mb-8">
          <ActionButton
            i={8}
            icon={Download}
            label="Save Contact"
            subtitle="Add to your phone contacts"
            primary
            onClick={handleSaveContact}
          />
          <ActionButton
            i={9}
            href={`tel:${PROFILE.phone}`}
            icon={Phone}
            label="Call"
            subtitle={PROFILE.phoneDisplay}
          />
          <ActionButton
            i={10}
            href={`mailto:${PROFILE.email}`}
            icon={Mail}
            label="Email"
            subtitle={PROFILE.email}
          />
          <ActionButton
            i={11}
            href={PROFILE.website}
            icon={Globe}
            label="Website"
            subtitle={PROFILE.websiteDisplay}
          />
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center pb-6"
        >
          <div className="flex items-center justify-center gap-2 text-[11px] text-muted/30">
            <Shield className="h-3 w-3" />
            <span>SOVRN</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
