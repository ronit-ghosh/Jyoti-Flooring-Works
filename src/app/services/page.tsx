import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
    {
      title: "Industrial Flooring Contractors and Consultant",
      description: "Jyoti Flooring specializes in providing a comprehensive range of industrial flooring systems designed to withstand the most demanding operating conditions. Our solutions deliver highly resilient and durable surfaces that are ideal for the industrial sector. We take pride in offering complete industrial flooring solutions tailored to meet the specific requirements of our clients, ensuring long-lasting performance and reliability.",
      image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/4_q6zjve.jpg"
    },
    {
      title: "EPDM Flooring Contractors",
      description: "EPDM flooring is crafted from synthetic elastomer, offering exceptional durability and flexibility for a wide range of applications. The advanced chemical composition of ethylene propylene diene monomer (EPDM) ensures its suitability for challenging environments. Jyoti Flooring provides professional EPDM flooring solutions, designed to deliver superior performance and longevity, tailored to the unique needs of every project.",
      image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/4_q6zjve.jpg"
    },
    {
      title: "FM2 Flooring Contractors",
      description: "FM2 flooring is engineered to meet high-performance standards, making it an ideal choice for warehouses and industrial facilities. At Jyoti Flooring, we work closely with clients to design floors that fulfill specific operational requirements. Our FM2 flooring solutions are designed to handle imposed loads, ensure durability, and deliver exceptional performance for long-term industrial use.",
      image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/4_q6zjve.jpg"
    },
    {
      title: "IPS Flooring Contractors",
      description: "IPS flooring, or Indian Patent Stone flooring, is a robust and versatile flooring option suitable for a wide variety of applications. Jyoti Flooring offers professional IPS flooring solutions, using a precise concrete mix ratio of 1:1.5:3 (cement, sand, and aggregate). Our expertise ensures a strong, wear-resistant floor that stands the test of time while maintaining high performance.",
      image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/4_q6zjve.jpg"
    },
    {
      title: "PU Flooring Contractors",
      description: "Polyurethane (PU) flooring is one of the most widely used types of industrial flooring due to its durability and versatility. Jyoti Flooring specializes in providing PU flooring solutions that are ideal for industrial and commercial settings. Our solutions include coatings for concrete floors that enhance abrasion resistance and ensure a seamless, high-performance surface capable of withstanding heavy usage.",
      image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/4_q6zjve.jpg"
    },
    {
      title: "Epoxy Flooring / Coating Contractors",
      description: "Epoxy flooring is renowned for its high-performance, smooth, and durable finish, making it a preferred choice for industrial and commercial spaces. Jyoti Flooring offers professional epoxy coating services, providing robust protection for concrete surfaces. Our solutions are designed to handle heavy loads, resist wear and tear, and deliver long-lasting durability while maintaining an impeccable appearance.",
      image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/4_q6zjve.jpg"
    },
    {
      title: "Tremix Flooring Contractors",
      description: "Tremix flooring is a specialized type of industrial flooring known for its exceptional durability and wear resistance. Jyoti Flooring offers professional Tremix flooring services, delivering high-quality solutions tailored to meet industrial demands. Our expertise ensures superior performance and reliability, making Tremix flooring an excellent choice for heavy-duty industrial applications.",
      image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/4_q6zjve.jpg"
    },
    {
      title: "Vacuum De-Watering Flooring Contractors",
      description: "Vacuum De-watering flooring is a highly advanced method for creating durable, long-lasting concrete floors. Jyoti Flooring specializes in providing professional Vacuum Dewatered Concrete (VDC) flooring services, utilizing the vacuum process to optimize the water-cement ratio. This system enhances the strength and durability of the floor while reducing surface imperfections, making it a preferred choice for factories and industrial environments requiring superior flooring solutions.",
      image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/4_q6zjve.jpg"
    }
  ];
  

export default function Services() {
    return (
        <>
        <div className="h-16"></div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold ml-4 border-[#f58129] border-l-8 pl-3 mb-12">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

