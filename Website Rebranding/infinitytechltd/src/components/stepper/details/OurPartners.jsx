import React from 'react';

const OurPartners = () => {

const clients = [
  { name: "Bangladesh Bank", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Bangladesh Bank.jpeg" },
  { name: "ICT Division", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/ICT Division.png" },
  { name: "Rupali Bank", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Rupali Bank.png" },
  { name: "Agrani Bank", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/agrani bank plc.jpeg" },
  { name: "Rajshahi Krishi Unnayan Bank", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Rajshahi krishi unnayan bank.jpeg" },
  { name: "Banbeis", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Banbeis.png" },
  { name: "Janata Bank Ltd", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Janata Bank Ltd.png" },
  { name: "LEDP", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/LEDP.png" },
  { name: "Bangladesh Navy", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Bangladesh Navy.jpeg" },
  { name: "Bangladesh Police", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Bangladesh Police.jpeg" },
  { name: "Bangladesh Hi-Tech Park Authority", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Bangladesh hi-tech park authority.jpeg" },
  { name: "Bangladesh Development Bank", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Bangladesh development bank.jpeg" },
  { name: "Agrani SME Financial Company", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Agrani sme financial company.jpeg" },
  { name: "Ansar VDP Unnayan Bank", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Ansar vdp unnayan bank.jpeg" },
  { name: "Pubali Bank Ltd", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Pubali bank ltd.png" },
  { name: "Her Power", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Her power.jpeg" },
  { name: "a2i", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/a2i.png" },
  { name: "Exim Bank", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Exim bank.jpeg" },
  { name: "Standard Bank Ltd", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Standard bank ltd.png" },
  { name: "Sonali Bank Ltd", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Sonali bank ltd.jpeg" },
  { name: "Markal Tine Bank Ltd", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Markal tine bank ltd.jpeg" },
  { name: "Modhumoti Bank Ltd", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Modhumoti  bank ltd.png" },
  { name: "Ansar VDP Bank", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/Ansar vdp bank.jpeg" },
  { name: "BRTC", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/BRTC.jpg" },
  { name: "Bangladesh Economic Zones Authority", logo: "https://www.infinitytechltd.com/storage/ourclientslogo/bangladesh_economic_zones_authority_logo.jpeg" },
];

  return (
    <section className="px-5 py-16 ">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-8">
          Our Partners
        </h2>
        <div className="grid gap-5 grid-cols-4 w-full ">

            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-32 h-20 object-contain transition-transform transform hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}

        </div>
      </div>
    </section>
  );
};

export default OurPartners;