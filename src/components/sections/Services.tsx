import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { EpoxyFlooringCoatingContractors, IndustrialFlooringContractorsConsultant, IPSFlooringContractors, PUFlooringContractors, TremixFlooringContractors, VaccumDeWateringFlooringContractors } from "@/lib/images";

const Skeleton = ({ imageLink }: { imageLink: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <Image
      src={imageLink}
      alt="Services"
      width={2000}
      height={2000}
      className="object-cover"
    />
  </div>
);

const items = [
  {
    title: "Industrial Flooring Contractors and Consultant",
    description: "Providing durable, high-performance flooring solutions for industrial environments.",
    header: <Skeleton imageLink={IndustrialFlooringContractorsConsultant} />,
  },
  // {
  //   title: "EPDM Flooring Contractors",
  //   description: "Specialists in EPDM flooring for long-lasting, flexible, and resilient surfaces.",
  //   header: <Skeleton imageLink={EPDMFlooringContractors} />,
  // },
  // {
  //   title: "FM2 Flooring Contractors",
  //   description: "Experts in FM2 flooring, designed for precision and load-bearing efficiency.",
  //   header: <Skeleton imageLink={FM2FlooringContractors} />,
  // },
  {
    title: "IPS Flooring Contractors",
    description: "Delivering reliable IPS flooring for durable and versatile applications.",
    header: <Skeleton imageLink={IPSFlooringContractors} />,
  },
  {
    title: "PU Flooring Contractors",
    description: "Providing seamless and high-durability polyurethane flooring solutions.",
    header: <Skeleton imageLink={PUFlooringContractors} />,
  },
  {
    title: "Epoxy Flooring / Coating Contractors",
    description: "Specialists in epoxy coatings for smooth, durable, and heavy-duty floors.",
    header: <Skeleton imageLink={EpoxyFlooringCoatingContractors} />,
  },
  {
    title: "Tremix Flooring Contractors",
    description: "Offering Tremix flooring for enhanced wear resistance and strength.",
    header: <Skeleton imageLink={TremixFlooringContractors} />,
  },
  {
    title: "Vaccum De-Watering Flooring Contractors",
    description: "Experts in vacuum dewatering for smooth and durable concrete flooring.",
    header: <Skeleton imageLink={VaccumDeWateringFlooringContractors} />,
  },
];

export default function Services() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6 ml-4 mt-14 border-[#f58129] border-l-8 pl-3">Our Services</h2>
      <BentoGrid className="mx-auto mb-14">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={`cursor-pointer`}
          />
        ))}
      </BentoGrid>
    </>
  );
}

