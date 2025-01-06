import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

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
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton imageLink="https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/3_jiiyv2.jpg" />,
  },
  {
    title: "EPDM Flooring Contractors",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton imageLink="https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/3_jiiyv2.jpg" />,
  },
  {
    title: "FM2 Flooring Contractors",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton imageLink="https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/3_jiiyv2.jpg" />,
  },
  {
    title: "IPS Flooring Contractors",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton imageLink="https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/3_jiiyv2.jpg" />,
  },
  {
    title: "PU Flooring Contractors",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton imageLink="https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/3_jiiyv2.jpg" />,
  },
  {
    title: "Epoxy Flooring / Coating Contractors",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton imageLink="https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/3_jiiyv2.jpg" />,
  },
  {
    title: "Tremix Flooring Contractors",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton imageLink="https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/3_jiiyv2.jpg" />,
  },
  {
    title: "Vaccum De-Watering Flooring Contractors",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton imageLink="https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/3_jiiyv2.jpg" />,
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

