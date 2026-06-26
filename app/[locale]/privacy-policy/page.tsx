import { PageHeader } from "@/components/ui/PageHeader";
import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({ title: "Privacy Policy", locale });
}

export default async function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
      />
      <section className="section-py-sm">
        <div className="container-tight">
          <div className="flex flex-col gap-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">1. Information We Collect</h2>
              <p>When you contact us through our website, we collect information you voluntarily provide, including your name, email address, phone number, and message content. We do not collect any information automatically beyond standard web server logs.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">2. How We Use Your Information</h2>
              <p>We use the information you provide solely to respond to your inquiries, provide requested services, and improve our offerings. We do not sell, trade, or transfer your personal information to third parties without your consent.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">3. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Contact form submissions are processed through EmailJS, which has its own privacy policy and security measures.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">4. Cookies</h2>
              <p>Our website uses minimal cookies necessary for proper functionality, including theme preferences (dark/light mode) and language selection. We do not use tracking cookies or advertising cookies.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">5. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">6. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of your personal information that we hold. To exercise these rights, please contact us at{siteConfig.email ? ` ${siteConfig.email}` : " the contact information provided on our website"}.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date.</p>
            </section>
            <section>
              <h2 className="text-foreground font-display font-bold text-xl mb-3">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us through our{" "}
                <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
