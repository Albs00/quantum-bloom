import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal animation="fade-up">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 2024
            </p>
          </ScrollReveal>

          <div className="prose prose-lg max-w-none space-y-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  GreenLab ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our products. We comply with the General Data Protection Regulation (GDPR) and other applicable EU data protection laws.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">2. Data Controller</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The data controller responsible for your personal data is:
                </p>
                <div className="bg-background/50 rounded-xl p-4 text-muted-foreground">
                  <p><strong className="text-foreground">GreenLab B.V.</strong></p>
                  <p>Amsterdam, Netherlands</p>
                  <p>Email: privacy@greenlab.com</p>
                  <p>KvK Registration: [Registration Number]</p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">3. Data We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly and automatically when using our services:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Personal Information:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Name and contact details (email, phone, address)</li>
                      <li>Payment information (processed securely via third-party providers)</li>
                      <li>Order history and preferences</li>
                      <li>Account credentials</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Automatically Collected Data:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>IP address and device information</li>
                      <li>Browser type and operating system</li>
                      <li>Pages visited and time spent</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={250}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">4. Legal Basis for Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under GDPR, we process your data based on:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Contract Performance:</strong> To fulfill orders and provide services</li>
                  <li><strong className="text-foreground">Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                  <li><strong className="text-foreground">Consent:</strong> For marketing communications (you can withdraw anytime)</li>
                  <li><strong className="text-foreground">Legal Obligation:</strong> To comply with tax and regulatory requirements</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">5. Your Rights (GDPR)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As an EU resident, you have the following rights:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Right of Access", desc: "Request a copy of your personal data" },
                    { title: "Right to Rectification", desc: "Correct inaccurate or incomplete data" },
                    { title: "Right to Erasure", desc: "Request deletion of your data" },
                    { title: "Right to Restriction", desc: "Limit how we use your data" },
                    { title: "Right to Portability", desc: "Receive your data in a portable format" },
                    { title: "Right to Object", desc: "Object to certain processing activities" },
                  ].map((right, index) => (
                    <div key={index} className="bg-background/50 rounded-xl p-4">
                      <h4 className="font-semibold text-foreground">{right.title}</h4>
                      <p className="text-sm text-muted-foreground">{right.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, contact us at <span className="text-primary">privacy@greenlab.com</span>. We will respond within 30 days.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={350}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Order data is retained for 7 years for tax purposes. Marketing preferences are kept until you withdraw consent.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">7. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure payment processing, and regular security audits.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={450}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">8. International Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your data may be transferred to and processed in countries outside the EEA. We ensure adequate protection through Standard Contractual Clauses (SCCs) or other approved mechanisms under GDPR.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={500}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">9. Contact & Complaints</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For privacy inquiries, contact our Data Protection Officer at <span className="text-primary">privacy@greenlab.com</span>. You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) or your local supervisory authority.
                </p>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
