import { cn } from "@/lib/utils";


export default function Features() {
    const features = [
        {
          title: 'Expert Consultation',
          description: 'Our experienced team provides tailored advice to ensure your flooring needs are met with the best solutions, backed by years of industry expertise.',
        },
        {
          title: 'Custom Solutions',
          description: 'We offer bespoke flooring designs and strategies, catering to the unique requirements of each client and project, ensuring optimal results.',
        },
        {
          title: 'Quality Materials',
          description: 'We source only the highest-grade materials, ensuring durability, strength, and a flawless finish for all our flooring projects.',
        },
        {
          title: 'Timely Delivery',
          description: 'We prioritize efficiency and punctuality, completing projects within the agreed timeline without compromising on quality.',
        },
        {
          title: 'After-Sales Support',
          description: 'Our commitment extends beyond project completion, offering reliable after-sales services to ensure long-lasting satisfaction and performance.',
        },
        {
          title: 'Eco-Friendly Options',
          description: 'We provide sustainable flooring solutions, utilizing environmentally-friendly materials and methods to reduce the ecological footprint.',
        },
      ];
    return (
        <>
            <h2 className="text-3xl font-bold mb-8 border-[#f58129] border-l-8 pl-3">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-[90rem] mx-auto">
                {features.map((feature, index) => (
                    <FeatureSection key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </>
    );
}

const FeatureSection = ({
    title,
    description,
    index,
}: {
    title: string;
    description: string;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#f58129] transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
