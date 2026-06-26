import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({ title: "Terms of Service", locale });
}

export default async function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        subtitle={`Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
      />
      <section className="section-py-sm">
        <div className="container-tight">
          <div className="flex flex-col gap-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the {siteConfig.name} website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">2. Services</h2>
              <p>{siteConfig.name} provides web development, UI/UX design, and related digital services. All services are subject to a separate agreement or contract between {siteConfig.name} and the client. Information on this website is for general purposes only.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">3. Intellectual Property</h2>
              <p>All content on this website, including but not limited to text, graphics, logos, and images, is the property of {siteConfig.name} and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our explicit written permission.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">4. Client Work</h2>
              <p>Portfolio items displayed on this website represent completed client projects. We display these with client permission. If you are a client and wish to have your project removed, please contact us.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">5. Downloads & Tutorials</h2>
              <p>Tutorial materials and downloadable resources provided on this website are for educational purposes. You may use them for personal or commercial projects. Redistribution or reselling of our materials without permission is prohibited.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">6. Limitation of Liability</h2>
              <p>{siteConfig.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services. Our liability is limited to the amount paid for the specific service in question.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">7. Governing Law</h2>
              <p>These Terms of Service shall be governed by the laws of Libya. Any disputes shall be resolved through good-faith negotiation before pursuing legal remedies.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">8. Contact</h2>
              <p>For questions about these Terms, please contact us through our{" "}
                <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
