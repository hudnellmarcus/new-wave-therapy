import FAQ from "../components/FAQ";


export default function FAQPage() {
  return (
    <div className="min-h-screen bg-stripe-fixed relative pt-20">
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative z-10">
        <FAQ />
      </div>
    </div>
  );
}

export const metadata = {
  title: 'FAQ - New Wave Therapy',
  description: 'Frequently asked questions about New Wave Therapy services, insurance, scheduling, and our approach to mental health care.',
};
