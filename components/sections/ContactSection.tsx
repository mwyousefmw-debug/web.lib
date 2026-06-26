"use client";

import { useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  Send, Mail, Phone, MessageSquare, MapPin,
  Clock, CheckCircle, AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { GlowCard } from "@/components/ui/GlowCard";
import { staggerContainer, fadeUp, fadeRight } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "sending" | "success" | "error";

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

export function ContactSection() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      await emailjs.send(
        siteConfig.emailjs.serviceId,
        siteConfig.emailjs.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          service: formData.service,
          message: formData.message,
        },
        siteConfig.emailjs.publicKey
      );
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  // Resolve address: show full address if set, fall back to city/country
  const addressValue =
    locale === "ar"
      ? siteConfig.addressAr || siteConfig.locationAr
      : siteConfig.address || siteConfig.location;

  const contactInfo: ContactInfo[] = [
    ...(siteConfig.email
      ? [{ icon: Mail as ContactInfo["icon"], label: t("info.email"), value: siteConfig.email, href: `mailto:${siteConfig.email}` }]
      : []),
    ...(siteConfig.phone
      ? [{ icon: Phone as ContactInfo["icon"], label: t("info.phone"), value: siteConfig.phone, href: `tel:${siteConfig.phone}` }]
      : []),
    ...(siteConfig.whatsapp
      ? [{ icon: MessageSquare as ContactInfo["icon"], label: t("info.whatsapp"), value: siteConfig.whatsapp, href: `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}` }]
      : []),
    { icon: MapPin as ContactInfo["icon"], label: t("info.address"), value: addressValue },
    { icon: Clock as ContactInfo["icon"], label: t("info.hours"), value: t("info.hoursValue") },
  ];

  return (
    <section className="section-py">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                {t("info.title")}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("info.responseTime")}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            <GlowCard className="p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <p className="font-display font-bold text-lg text-foreground">
                    {t("form.success")}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-sm text-primary hover:underline"
                  >
                    {t("form.sendAnother")}
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-medium text-muted-foreground">
                        {t("form.name")} *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t("form.namePlaceholder")}
                        className="px-4 py-2.5 rounded-xl border border-border/50 bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:bg-muted/50 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-medium text-muted-foreground">
                        {t("form.email")} *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t("form.emailPlaceholder")}
                        className="px-4 py-2.5 rounded-xl border border-border/50 bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:bg-muted/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-medium text-muted-foreground">
                        {t("form.phone")}
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t("form.phonePlaceholder")}
                        className="px-4 py-2.5 rounded-xl border border-border/50 bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:bg-muted/50 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-service" className="text-xs font-medium text-muted-foreground">
                        {t("form.service")}
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="px-4 py-2.5 rounded-xl border border-border/50 bg-muted/30 text-sm text-foreground focus:outline-none focus:border-primary/40 transition-all"
                      >
                        <option value="">{t("form.selectService")}</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {locale === "ar" ? s.titleAr : s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-medium text-muted-foreground">
                      {t("form.subject")} *
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={t("form.subjectPlaceholder")}
                      className="px-4 py-2.5 rounded-xl border border-border/50 bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:bg-muted/50 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-medium text-muted-foreground">
                      {t("form.message")} *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={t("form.messagePlaceholder")}
                      className="px-4 py-2.5 rounded-xl border border-border/50 bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:bg-muted/50 transition-all resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {t("form.error")}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={cn(
                      "flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200",
                      status === "sending"
                        ? "bg-primary/50 text-black/50 cursor-not-allowed"
                        : "bg-primary text-black hover:bg-primary/90 hover:shadow-glow-sm"
                    )}
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                        {t("form.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t("form.send")}
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
