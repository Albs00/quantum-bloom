import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "About CBD & Products",
      faqs: [
        {
          question: "What is CBD?",
          answer: "CBD (cannabidiol) is a naturally occurring compound found in the hemp plant. Unlike THC, CBD is non-psychoactive, meaning it won't get you 'high'. Our CBD is extracted from legally cultivated European hemp and contains less than 0.2% THC, in full compliance with EU regulations."
        },
        {
          question: "Are your products safe to use?",
          answer: "Yes, all GreenLab products undergo rigorous third-party lab testing for purity, potency, and safety. We test for pesticides, heavy metals, and microbial contaminants. Our products are formulated by cosmetic scientists and manufactured in EU-certified facilities."
        },
        {
          question: "Will CBD products show up on a drug test?",
          answer: "Our products contain less than 0.2% THC (the legal EU limit), which is generally considered too low to trigger a positive drug test. However, if you are subject to regular testing, we recommend consulting with your employer or testing authority."
        },
        {
          question: "Are your products suitable for all skin types?",
          answer: "Our products are formulated to be gentle and suitable for most skin types, including sensitive skin. However, we always recommend doing a patch test before first use. If you have specific skin conditions or allergies, please consult our ingredient lists or contact us."
        },
        {
          question: "Are GreenLab products vegan and cruelty-free?",
          answer: "Yes! All our products are 100% cruelty-free and never tested on animals. Most of our products are also vegan-friendly. Check individual product pages for specific vegan certifications."
        },
      ]
    },
    {
      title: "Orders & Payment",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept Visa, Mastercard, American Express, PayPal, iDEAL (Netherlands), Bancontact (Belgium), and SOFORT (Germany). All payments are processed securely through encrypted payment gateways."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "Orders can be modified or cancelled within 1 hour of placement. After this window, orders enter our fulfillment process. Contact us immediately at support@greenlab.com if you need to make changes."
        },
        {
          question: "Do you offer gift cards?",
          answer: "Yes! Digital gift cards are available in €25, €50, €75, and €100 denominations. They are delivered via email and never expire."
        },
        {
          question: "Is there a minimum order value?",
          answer: "There is no minimum order value. However, orders over €50 qualify for free standard shipping within the Netherlands, with varying thresholds for other EU countries."
        },
      ]
    },
    {
      title: "Shipping & Delivery",
      faqs: [
        {
          question: "Where do you ship to?",
          answer: "We ship to most EU countries where CBD cosmetic products are legally permitted. This includes Netherlands, Germany, Belgium, France, Italy, Spain, Austria, and more. We currently cannot ship outside the EU."
        },
        {
          question: "How long will delivery take?",
          answer: "Netherlands: 1-2 business days. Germany, Belgium, Luxembourg: 2-3 business days. Rest of EU: 3-5 business days. Express shipping is available for 1-2 day delivery across all EU destinations."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive an email with a tracking number and link. You can also track your order by logging into your account or contacting our support team."
        },
        {
          question: "What if my package is lost or damaged?",
          answer: "Please contact us within 48 hours of the expected delivery date for lost packages, or immediately upon receiving a damaged package. Include photos of any damage. We will arrange a replacement or refund at no additional cost."
        },
      ]
    },
    {
      title: "Returns & Refunds",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer a 14-day return policy in accordance with EU Consumer Rights Directive. Products must be unopened and in original packaging. Opened cosmetic products cannot be returned for hygiene reasons."
        },
        {
          question: "How do I initiate a return?",
          answer: "Email returns@greenlab.com with your order number and reason for return. We'll send you a return authorization and prepaid shipping label within 24 hours."
        },
        {
          question: "How long do refunds take?",
          answer: "Refunds are processed within 5 business days of receiving your return. Depending on your payment method, it may take an additional 5-10 business days for the funds to appear in your account."
        },
        {
          question: "Can I exchange a product?",
          answer: "Yes! If you'd like to exchange for a different product, please initiate a return and place a new order. This ensures you receive your new product as quickly as possible."
        },
      ]
    },
    {
      title: "Legal & Compliance",
      faqs: [
        {
          question: "Is CBD legal in my country?",
          answer: "CBD derived from hemp with less than 0.2% THC is legal in most EU countries for cosmetic use. However, regulations vary. We recommend checking your local laws before purchasing. We take responsibility for ensuring our products meet EU standards."
        },
        {
          question: "Do I need to be 18 to purchase?",
          answer: "Yes, you must be 18 years or older to purchase CBD products from GreenLab. We reserve the right to request age verification."
        },
        {
          question: "Where can I find lab test results?",
          answer: "Third-party lab test results (Certificates of Analysis) are available for all products. You can find them on individual product pages or request them via email at quality@greenlab.com."
        },
        {
          question: "Are your products EU Cosmetics Regulation compliant?",
          answer: "Yes, all GreenLab products are fully compliant with EU Cosmetics Regulation (EC) No 1223/2009. We maintain complete Product Information Files (PIFs) and our products are notified in the EU Cosmetics Products Notification Portal (CPNP)."
        },
      ]
    },
  ];

  const allFaqs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({ ...faq, category: category.title }))
  );

  const filteredFaqs = searchQuery
    ? allFaqs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal animation="fade-up">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              Find answers to common questions about our products, shipping, and policies
            </p>
          </ScrollReveal>

          {/* Search Bar */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="relative mb-12 max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card/50 border border-border/50 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </ScrollReveal>

          {/* Search Results or Categories */}
          {filteredFaqs ? (
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} found
                </p>
                {filteredFaqs.length > 0 ? (
                  <Accordion type="single" collapsible className="space-y-3">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`search-${index}`}
                        className="bg-card/50 rounded-xl border border-border/50 px-6"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:no-underline">
                          <div>
                            <span className="text-xs text-primary mb-1 block">{faq.category}</span>
                            {faq.question}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-12 bg-card/50 rounded-2xl border border-border/50">
                    <p className="text-muted-foreground">No results found. Try a different search term.</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ) : (
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <ScrollReveal key={category.title} animation="fade-up" delay={150 + categoryIndex * 50}>
                  <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                    <h2 className="font-display text-2xl text-foreground mb-6">{category.title}</h2>
                    <Accordion type="single" collapsible className="space-y-3">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`${categoryIndex}-${faqIndex}`}
                          className="bg-background/50 rounded-xl border border-border/30 px-5"
                        >
                          <AccordionTrigger className="text-left text-foreground hover:no-underline text-sm md:text-base">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </section>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Contact CTA */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="mt-12 text-center bg-primary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="font-display text-xl text-foreground mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our team is here to help you find the perfect products for your wellness journey.
              </p>
              <a
                href="mailto:support@greenlab.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
