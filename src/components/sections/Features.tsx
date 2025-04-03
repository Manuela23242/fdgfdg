import Image from "next/image";

const features = [
  {
    icon: "/images/icons/products-sold.svg",
    title: "4500+ Products sold",
    description: "Trusted by 850+ active users, Nyron has sold more than 4500 products."
  },
  {
    icon: "/images/icons/games.svg",
    title: "10+ Games Supported",
    description: "Nyron works for many games with our universal model, no extra payments for other games."
  },
  {
    icon: "/images/icons/security.svg",
    title: "Unique Security",
    description: "Benefit from unique, private builds and undetectable external object detection to stay secure."
  },
  {
    icon: "/images/icons/easy-to-use.svg",
    title: "Easy To Use",
    description: "User friendly UI, simple installation, and 24/7 customer support."
  }
];

export function Features() {
  return (
    <section className="py-16">
      <div className="nyron-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="mb-2"
                />
                <h3 className="text-lg font-medium text-white">{feature.title}</h3>
              </div>
              <p className="text-sm text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
