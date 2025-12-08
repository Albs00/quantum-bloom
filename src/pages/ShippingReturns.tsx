import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Truck, Package, RotateCcw, Clock, MapPin, CreditCard } from "lucide-react";

const ShippingReturns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal animation="fade-up">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Shipping & Returns
            </h1>
            <p className="text-muted-foreground mb-8">
              Everything you need to know about delivery and returns
            </p>
          </ScrollReveal>

          {/* Quick Info Cards */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <Truck className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over €50</p>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">2-5 Business Days</h3>
                <p className="text-sm text-muted-foreground">EU delivery time</p>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <RotateCcw className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">14-Day Returns</h3>
                <p className="text-sm text-muted-foreground">Unopened products</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Shipping Section */}
            <ScrollReveal animation="fade-up" delay={150}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-2xl text-foreground">Shipping Information</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Shipping Rates</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-2 text-foreground">Destination</th>
                            <th className="text-left py-3 px-2 text-foreground">Standard</th>
                            <th className="text-left py-3 px-2 text-foreground">Express</th>
                            <th className="text-left py-3 px-2 text-foreground">Free Threshold</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2">Netherlands</td>
                            <td className="py-3 px-2">€4.95</td>
                            <td className="py-3 px-2">€9.95</td>
                            <td className="py-3 px-2">€50+</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2">Germany, Belgium, Luxembourg</td>
                            <td className="py-3 px-2">€6.95</td>
                            <td className="py-3 px-2">€12.95</td>
                            <td className="py-3 px-2">€75+</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2">France, Austria, Italy</td>
                            <td className="py-3 px-2">€8.95</td>
                            <td className="py-3 px-2">€14.95</td>
                            <td className="py-3 px-2">€100+</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2">Rest of EU</td>
                            <td className="py-3 px-2">€12.95</td>
                            <td className="py-3 px-2">€19.95</td>
                            <td className="py-3 px-2">€150+</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Delivery Times</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong className="text-foreground">Netherlands:</strong> 1-2 business days</li>
                      <li><strong className="text-foreground">Germany, Belgium, Luxembourg:</strong> 2-3 business days</li>
                      <li><strong className="text-foreground">Rest of EU:</strong> 3-5 business days</li>
                      <li><strong className="text-foreground">Express:</strong> 1-2 business days (all EU destinations)</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3">
                      Orders placed before 14:00 CET on business days are shipped the same day.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-2xl text-foreground">Shipping Restrictions</h2>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We currently ship to EU countries where CBD cosmetic products are legally permitted. Due to varying regulations, we cannot ship to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Countries outside the European Union</li>
                  <li>Slovakia (due to CBD regulations)</li>
                  <li>P.O. boxes or parcel lockers in certain regions</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Please ensure your delivery address is complete and accurate. We are not responsible for delays or non-delivery due to incorrect addresses.
                </p>
              </section>
            </ScrollReveal>

            {/* Returns Section */}
            <ScrollReveal animation="fade-up" delay={250}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <RotateCcw className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-2xl text-foreground">Returns Policy</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-2">14-Day Right of Withdrawal</h3>
                    <p className="text-muted-foreground text-sm">
                      Under EU Consumer Rights Directive, you have 14 days from the date of delivery to return your order without giving any reason.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Return Conditions</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Products must be unopened and in original packaging</li>
                      <li>Return within 14 days of delivery</li>
                      <li>Include order number with your return</li>
                      <li>Opened cosmetic products cannot be returned for hygiene reasons</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">How to Return</h3>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                      <li>Email us at <span className="text-primary">returns@greenlab.com</span> with your order number</li>
                      <li>We will send you a return authorization and shipping label</li>
                      <li>Pack items securely in original packaging</li>
                      <li>Drop off at your nearest postal point</li>
                    </ol>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-2xl text-foreground">Refunds</h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Once we receive and inspect your return, we will process your refund within 5 business days. Refunds are issued to the original payment method.
                  </p>
                  <div className="bg-background/50 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Refund Timeline</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Processing: 1-5 business days after receiving return</li>
                      <li>• Credit/Debit cards: 5-10 business days</li>
                      <li>• PayPal: 1-3 business days</li>
                      <li>• Bank transfer: 3-5 business days</li>
                    </ul>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={350}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">Damaged or Defective Items</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you receive a damaged or defective product, please contact us within 48 hours of delivery with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Your order number</li>
                  <li>Photos of the damaged item and packaging</li>
                  <li>Description of the issue</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We will arrange a free return and send a replacement or full refund at no additional cost.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For shipping or return inquiries, please contact our customer service team:
                </p>
                <div className="mt-4 bg-background/50 rounded-xl p-4">
                  <p className="text-muted-foreground">
                    Email: <span className="text-primary">support@greenlab.com</span><br />
                    Hours: Monday - Friday, 9:00 - 17:00 CET
                  </p>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingReturns;
