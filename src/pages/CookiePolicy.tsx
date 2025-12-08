import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal animation="fade-up">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 2024
            </p>
          </ScrollReveal>

          <div className="prose prose-lg max-w-none space-y-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">1. What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and enabling certain features.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">2. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="bg-background/50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-3 h-3 bg-primary rounded-full"></span>
                      Essential Cookies
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Required for the website to function. Cannot be disabled.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Session management and authentication</li>
                      <li>• Shopping cart functionality</li>
                      <li>• Security and fraud prevention</li>
                    </ul>
                  </div>

                  <div className="bg-background/50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-3 h-3 bg-accent rounded-full"></span>
                      Functional Cookies
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Enhance your experience by remembering preferences.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Language and region preferences</li>
                      <li>• Recently viewed products</li>
                      <li>• User interface customizations</li>
                    </ul>
                  </div>

                  <div className="bg-background/50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-3 h-3 bg-secondary rounded-full"></span>
                      Analytics Cookies
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Help us understand how visitors interact with our website.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Page views and navigation patterns</li>
                      <li>• Traffic sources and referrals</li>
                      <li>• Site performance metrics</li>
                    </ul>
                  </div>

                  <div className="bg-background/50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-3 h-3 bg-muted-foreground rounded-full"></span>
                      Marketing Cookies
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Used to deliver relevant advertisements.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Personalized ad targeting</li>
                      <li>• Campaign effectiveness measurement</li>
                      <li>• Social media integration</li>
                    </ul>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">3. Cookie List</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 text-foreground">Cookie Name</th>
                        <th className="text-left py-3 px-2 text-foreground">Purpose</th>
                        <th className="text-left py-3 px-2 text-foreground">Duration</th>
                        <th className="text-left py-3 px-2 text-foreground">Type</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-2">_session</td>
                        <td className="py-3 px-2">User session management</td>
                        <td className="py-3 px-2">Session</td>
                        <td className="py-3 px-2">Essential</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-2">cart_token</td>
                        <td className="py-3 px-2">Shopping cart contents</td>
                        <td className="py-3 px-2">14 days</td>
                        <td className="py-3 px-2">Essential</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-2">cookie_consent</td>
                        <td className="py-3 px-2">Stores your cookie preferences</td>
                        <td className="py-3 px-2">1 year</td>
                        <td className="py-3 px-2">Essential</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-2">_ga</td>
                        <td className="py-3 px-2">Google Analytics visitor ID</td>
                        <td className="py-3 px-2">2 years</td>
                        <td className="py-3 px-2">Analytics</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-2">_fbp</td>
                        <td className="py-3 px-2">Facebook pixel tracking</td>
                        <td className="py-3 px-2">3 months</td>
                        <td className="py-3 px-2">Marketing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={250}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">4. Managing Your Preferences</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can manage your cookie preferences at any time:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Cookie Banner:</strong> Use our cookie consent banner to accept or reject non-essential cookies</li>
                  <li><strong className="text-foreground">Browser Settings:</strong> Most browsers allow you to block or delete cookies in their settings</li>
                  <li><strong className="text-foreground">Opt-Out Links:</strong> Use industry opt-out tools like <span className="text-primary">youronlinechoices.eu</span></li>
                </ul>
                <p className="text-muted-foreground mt-4 text-sm">
                  Note: Disabling certain cookies may affect website functionality.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">5. Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Some cookies are placed by third-party services on our website:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Google Analytics", purpose: "Website analytics and performance" },
                    { name: "Shopify", purpose: "E-commerce functionality" },
                    { name: "Facebook Pixel", purpose: "Advertising and remarketing" },
                    { name: "Stripe", purpose: "Secure payment processing" },
                  ].map((service, index) => (
                    <div key={index} className="bg-background/50 rounded-xl p-4">
                      <h4 className="font-semibold text-foreground">{service.name}</h4>
                      <p className="text-sm text-muted-foreground">{service.purpose}</p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={350}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">6. Updates to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy periodically. Changes will be posted on this page with an updated revision date. We encourage you to review this policy regularly.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about our use of cookies, please contact us at <span className="text-primary">privacy@greenlab.com</span>.
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

export default CookiePolicy;
