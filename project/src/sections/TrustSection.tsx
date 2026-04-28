const partners = [
  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'Anthropic', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Anthropic_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg' },
  { name: 'Twilio', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
];
 
 export default function TrustSection() {
   return (
     <section className="py-12 bg-white border-y border-slate-100/50 overflow-hidden">
       <div className="container-standard">
         <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-10">
           Trusted by engineering & ops teams at
         </p>
 
         <div className="relative">
           {/* Gradient Overlays */}
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
 
           <div className="flex gap-16 items-center animate-scroll whitespace-nowrap">
             {[...partners, ...partners].map((partner, i) => (
               <img
                 key={i}
                 src={partner.logo}
                 alt={partner.name}
                 className="h-7 md:h-8 grayscale opacity-[0.25] hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer object-contain min-w-[140px]"
               />
             ))}
           </div>
         </div>
       </div>
 
       <style dangerouslySetInnerHTML={{
         __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 45s linear infinite;
          }
        `}} />
     </section>
   );
 }
