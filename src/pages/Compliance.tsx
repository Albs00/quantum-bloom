import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Shield, FileCheck, Leaf, FlaskConical, Award, MapPin } from "lucide-react";

const Compliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal animation="fade-up">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Compliance & Certifications
            </h1>
            <p className="text-muted-foreground mb-8">
              Our commitment to quality, safety, and regulatory compliance
            </p>
          </ScrollReveal>

          {/* Trust Badges */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Shield, label: "EU Compliant" },
                { icon: FlaskConical, label: "Lab Tested" },
                { icon: Leaf, label: "Organic Hemp" },
                { icon: Award, label: "GMP Certified" },
              ].map((badge, index) => (
                <div key={index} className="bg-primary/10 rounded-2xl p-5 text-center">
                  <badge.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* EU Cosmetics Regulation */}
            <ScrollReveal animation="fade-up" delay={150}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <FileCheck className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-2xl text-foreground">EU Cosmetics Regulation Compliance</h2>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All GreenLab products are fully compliant with the <strong className="text-foreground">EU Cosmetics Regulation (EC) No 1223/2009</strong>, the primary legislation governing cosmetic products in the European Union.
                </p>

                <div className="space-y-4">
                  <div className="bg-background/50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">Product Information File (PIF)</h3>
                    <p className="text-sm text-muted-foreground">
                      We maintain comprehensive Product Information Files for all products, including safety assessments, product descriptions, manufacturing data, and proof of claimed effects.
                    </p>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">CPNP Notification</h3>
                    <p className="text-sm text-muted-foreground">
                      All products are registered in the EU Cosmetics Products Notification Portal (CPNP) before being placed on the market.
                    </p>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">Safety Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Each product undergoes a thorough safety assessment by qualified EU Safety Assessors before market release.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* CBD Specific Compliance */}
            <ScrollReveal animation="fade-up" delay={200}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-2xl text-foreground">CBD Compliance</h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>Our CBD ingredients meet all EU requirements:</p>
                  
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-foreground">THC Content:</strong> All products contain {"<"}0.2% THC, complying with EU hemp regulations</li>
                    <li><strong className="text-foreground">Source:</strong> CBD derived from EU-certified industrial hemp varieties (EU Common Catalogue)</li>
                    <li><strong className="text-foreground">Extraction:</strong> CO2 extraction method ensuring purity and safety</li>
                    <li><strong className="text-foreground">Novel Food:</strong> Our products are cosmetics, not food supplements, and are regulated accordingly</li>
                  </ul>

                  <div className="bg-primary/5 rounded-xl p-5 border border-primary/20 mt-6">
                    <h4 className="font-semibold text-foreground mb-2">EIHA Membership</h4>
                    <p className="text-sm">
                      GreenLab is a member of the European Industrial Hemp Association (EIHA), committed to the highest standards in hemp cultivation and CBD product manufacturing.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Netherlands Specific */}
            <ScrollReveal animation="fade-up" delay={250}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-2xl text-foreground">Netherlands & Dutch Market Compliance</h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    As a company registered in the Netherlands, we comply with Dutch national requirements in addition to EU regulations:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/50 rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">NVWA Compliance</h4>
                      <p className="text-sm">
                        Our products comply with the Netherlands Food and Consumer Product Safety Authority (NVWA) guidelines for cosmetic products.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">Dutch Opium Act</h4>
                      <p className="text-sm">
                        All products contain legally permissible CBD levels and are derived from authorized hemp varieties.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">Consumer Protection</h4>
                      <p className="text-sm">
                        We comply with Dutch consumer protection laws, including clear labeling and honest marketing practices.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">Chamber of Commerce</h4>
                      <p className="text-sm">
                        GreenLab B.V. is a registered company with the Dutch Chamber of Commerce (KvK).
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Quality & Testing */}
            <ScrollReveal animation="fade-up" delay={300}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <FlaskConical className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-2xl text-foreground">Quality Assurance & Testing</h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Every GreenLab product undergoes comprehensive third-party laboratory testing:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "Cannabinoid Profile", desc: "CBD, THC, and other cannabinoid levels verified" },
                      { title: "Heavy Metals", desc: "Tested for lead, mercury, cadmium, and arsenic" },
                      { title: "Pesticides", desc: "Screened for 200+ pesticide residues" },
                      { title: "Microbial Contaminants", desc: "Tested for bacteria, yeast, and mold" },
                      { title: "Solvents", desc: "Verified free of residual solvents" },
                      { title: "Stability Testing", desc: "Product stability verified over shelf life" },
                    ].map((test, index) => (
                      <div key={index} className="bg-background/50 rounded-xl p-4 flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">{test.title}</h4>
                          <p className="text-sm">{test.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">Certificate of Analysis (COA)</h4>
                    <p className="text-sm">
                      Third-party lab reports are available for all products. Request your product's COA at <span className="text-primary">quality@greenlab.com</span> or find them on individual product pages.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Manufacturing Standards */}
            <ScrollReveal animation="fade-up" delay={350}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-2xl text-foreground">Manufacturing Standards</h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>Our products are manufactured in facilities that meet the highest industry standards:</p>
                  
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-foreground">GMP Certified:</strong> Good Manufacturing Practice certification</li>
                    <li><strong className="text-foreground">ISO 22716:</strong> International standard for cosmetics GMP</li>
                    <li><strong className="text-foreground">EU Manufacturing:</strong> All products manufactured in EU-certified facilities</li>
                    <li><strong className="text-foreground">Quality Control:</strong> Rigorous in-process and final product quality checks</li>
                    <li><strong className="text-foreground">Traceability:</strong> Full batch traceability from raw materials to finished product</li>
                  </ul>
                </div>
              </section>
            </ScrollReveal>

            {/* Responsible Person */}
            <ScrollReveal animation="fade-up" delay={400}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">Responsible Person (EU)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In accordance with EU Cosmetics Regulation, the Responsible Person for GreenLab products within the EU is:
                </p>
                <div className="bg-background/50 rounded-xl p-5">
                  <p className="text-foreground font-semibold">GreenLab B.V.</p>
                  <p className="text-muted-foreground">Amsterdam, Netherlands</p>
                  <p className="text-muted-foreground">Email: <span className="text-primary">regulatory@greenlab.com</span></p>
                </div>
              </section>
            </ScrollReveal>

            {/* Contact for Compliance */}
            <ScrollReveal animation="fade-up" delay={450}>
              <section className="bg-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20 text-center">
                <h2 className="font-display text-2xl text-foreground mb-4">Compliance Inquiries</h2>
                <p className="text-muted-foreground mb-4">
                  For regulatory questions, documentation requests, or compliance inquiries, please contact our regulatory affairs team:
                </p>
                <a
                  href="mailto:regulatory@greenlab.com"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Regulatory Team
                </a>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Compliance;
