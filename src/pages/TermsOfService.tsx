import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal animation="fade-up">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 2024
            </p>
          </ScrollReveal>

          <div className="prose prose-lg max-w-none space-y-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the GreenLab website and purchasing our products, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">2. Company Information</h2>
                <div className="bg-background/50 rounded-xl p-4 text-muted-foreground">
                  <p><strong className="text-foreground">GreenLab B.V.</strong></p>
                  <p>Registered in Amsterdam, Netherlands</p>
                  <p>Chamber of Commerce (KvK): [Registration Number]</p>
                  <p>VAT Number: NL[Number]B01</p>
                  <p>Email: info@greenlab.com</p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">3. Products & Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  GreenLab offers CBD-infused cosmetic and wellness products. Our products:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Are intended for external use only unless otherwise specified</li>
                  <li>Contain CBD derived from legally cultivated hemp (THC {"<"} 0.2%)</li>
                  <li>Are cosmetic products, not medicines or food supplements</li>
                  <li>Should not be used as a substitute for medical treatment</li>
                  <li>Must be kept out of reach of children</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={250}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">4. Age Requirement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You must be at least 18 years old to purchase products from GreenLab. By placing an order, you confirm that you meet this age requirement. We reserve the right to request age verification.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">5. Orders & Payment</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Order Acceptance:</strong> All orders are subject to acceptance. We reserve the right to refuse or cancel any order for any reason.
                  </p>
                  <p>
                    <strong className="text-foreground">Pricing:</strong> All prices are in EUR and include VAT where applicable. Prices may change without notice, but this will not affect orders already placed.
                  </p>
                  <p>
                    <strong className="text-foreground">Payment:</strong> We accept major credit cards, PayPal, and iDEAL. Payment is processed securely through our payment providers.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={350}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">6. Shipping & Delivery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We ship to EU countries where our products are legally permitted. Delivery times and costs vary by destination. Risk of loss passes to you upon delivery. Please see our Shipping Policy for full details.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">7. Right of Withdrawal</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under EU Consumer Rights Directive, you have 14 days from receipt to withdraw from your purchase without giving any reason. To exercise this right:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Contact us at returns@greenlab.com</li>
                  <li>Return products in original, unopened condition</li>
                  <li>We will refund within 14 days of receiving returned goods</li>
                  <li>Opened cosmetic products cannot be returned for hygiene reasons</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={450}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">8. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of GreenLab or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={500}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, GreenLab shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products or services. Our total liability shall not exceed the amount you paid for the product in question.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={550}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by Dutch law. Any disputes shall be submitted to the competent court in Amsterdam, Netherlands, without prejudice to your right as a consumer to bring proceedings in your country of residence.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={600}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">11. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, please contact us at <span className="text-primary">legal@greenlab.com</span>.
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

export default TermsOfService;
