"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { EpoxyFlooringCoatingContractors, IndustrialFlooringContractorsConsultant, IPSFlooringContractors, PUFlooringContractors, TremixFlooringContractors, VaccumDeWateringFlooringContractors } from "@/lib/images"
import Image from "next/image"

export default function Services() {
  const [activeTabs, setActiveTab] = useState("overview")
  console.log(activeTabs)
  return (
    <div className="min-h-screen bg-background max-w-6xl mx-auto px-4">
      <div className="h-24"></div>
      <h1 className="text-3xl font-bold ml-4 border-[#f58129] border-l-8 pl-3 mb-8">Machines Used In Our Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {machines.map((service, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative h-48 bg-muted">
              <Image
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="flex-1">
              <CardTitle className="text-lg">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>{service.description}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold ml-4 border-[#f58129] border-l-8 pl-3 mb-8">Our Services</h1>
        <Tabs defaultValue="overview" className="mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 h-12 mb-8">
            <TabsTrigger value="overview" className="text-sm font-medium py-2">Services Overview</TabsTrigger>
            <TabsTrigger value="details" className="text-sm font-medium py-2">Service Details</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col overflow-hidden">
                  <div className="relative h-48 bg-muted">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="flex-1">
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="mt-4">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {services.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-2">{service.title}</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
                    {service.steps && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Work Process:</h3>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                          {service.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="text-muted-foreground">
                              <span className="font-medium text-foreground">{step.title}:</span> {step.description}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

const machines = [
  {
    title: "DOUBLE BEAM SCREED BOARD VIBRATOR",
    description: "Vibro screed is used for the leveling as well compaction of concrete it consists of high quality steel bar (4.2 meter) with spacing of 250 MM in between. Special water protective vibrator motor is mounted in the centre which produces 1830 N centrifugal force which is most ideal for compaction of green concrete. They are also available in different sizes from 2 meter to 5.5 meter.",
    image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736433544/Double-Beam-Screed-Vibrators_a0nxfq.jpg"
  },
  {
    title: "VACUUM PUMP",
    description: "This is the core of the system, A continuous discharge. Vacuum pump is complete self contained unit. The unit is mounted on a transportation trolly, 24 sq. Meter freshly laid concrete can be dewatered in on a single operation with one set mat. The pump is powered by 7.5 H. P.3 Phase electric motor.",
    image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736433545/vacuum-dewatered-flooring-machine_b9kh0n.jpg"
  },
  {
    title: "FILTER, SUCTION AND TOP MAT",
    description: "Suction mat is placed directly on the green concrete after vibro screed operation is over. A special high class nylon filter is fixed on plastic mats which act a filter during the vacuum operation filter mats in different sizes are provided with the system. Top mat is provided the junction box and is dewatering placed on top of filter mat for the purpose of sealing special synthetic cloth is used in the top mat it comes in standard sizes of 4x6 meter.",
    image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736433545/Filter-Suction_d3hrpy.jpg"
  },
  {
    title: "POWER FLOATER",
    description: "Its is surface grinding equipment powered by 3 HP Electric motor through gear box with floating RPM of 130. It grinds the surface to make it wear resistance",
    image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736433544/Power-Floater_ale4dd.jpg"
  },
  {
    title: "POWER TROWEL",
    description: "It is surface finishing equipment powered by 3 HP electric motor through gear box trowelling RPM of 135. It polishes the surface after floating operation and 3 to 4 phases are required for giving fine finish of the floor.",
    image: "https://res.cloudinary.com/drynqkitl/image/upload/v1736431506/tremix_zazxue.jpg"
  },
]

const services = [
  {
    title: "Industrial Flooring Contractors and Consultant",
    description: "Jyoti Flooring has a wide range of industrial flooring systems that offer highly resilient and durable workhorse surfaces, perfectly suited for the challenging operating conditions of the industrial sector. We provide complete industrial flooring solutions to match your needs.",
    image: IndustrialFlooringContractorsConsultant,
    steps: [
      {
        title: "Initial Consultation",
        description: "Discuss the client's specific requirements, operational needs, and the type of flooring system suitable for the industrial environment."
      },
      {
        title: "Site Assessment",
        description: "Conduct a thorough inspection of the site, including subfloor conditions, structural integrity, and environmental factors."
      },
      {
        title: "Customized Solution Design",
        description: "Develop a tailored flooring solution based on the client's requirements, including material selection, floor design, and performance criteria."
      },
      {
        title: "Proposal and Budgeting",
        description: "Provide a detailed proposal with cost estimates, timelines, and material specifications to ensure transparency."
      },
      {
        title: "Surface Preparation",
        description: "Prepare the site by cleaning, leveling, and repairing the substrate to create a strong foundation for the flooring."
      },
      {
        title: "Material Application",
        description: "Use advanced equipment and techniques to apply the chosen flooring system, ensuring precision and durability."
      },
      {
        title: "Curing and Finishing",
        description: "Allow proper curing time for the flooring material and apply finishing touches, such as sealing, polishing, or coatings, for enhanced performance."
      },
      {
        title: "Quality Assurance",
        description: "Conduct thorough inspections to ensure the flooring meets industrial standards and client expectations."
      },
      {
        title: "Project Handover",
        description: "Deliver the completed project with detailed documentation, maintenance guidelines, and after-service support options."
      },
      {
        title: "Post-Installation Support",
        description: "Offer ongoing support, including maintenance services and repairs, to ensure the flooring remains in optimal condition over time."
      }
    ]
  },
  // {
  //   title: "EPDM Flooring Contractors",
  //   description: "EPDM flooring contractors provide high-quality, durable, and seamless flooring solutions for various applications, including playgrounds, sports areas, and industrial spaces. Their comprehensive process ensures safe, resilient, and aesthetically appealing floors.",
  //   image: EPDMFlooringContractors,
  //   steps: [
  //     {
  //       title: "Requirement Analysis",
  //       description: "Understand the client's needs, including the application type, design preferences, and budget."
  //     },
  //     {
  //       title: "Site Evaluation",
  //       description: "Inspect the site to assess surface conditions, dimensions, and suitability for EPDM flooring installation."
  //     },
  //     {
  //       title: "Material Selection",
  //       description: "Choose the appropriate EPDM materials, including thickness, color, and texture, based on the project's functional and aesthetic needs."
  //     },
  //     {
  //       title: "Surface Preparation",
  //       description: "Clean, level, and prime the surface to ensure a strong bond between the substrate and EPDM material."
  //     },
  //     {
  //       title: "Base Layer Installation",
  //       description: "Lay a rubber granulate base layer, typically made of SBR, to create a durable foundation for the EPDM top layer."
  //     },
  //     {
  //       title: "EPDM Layer Application",
  //       description: "Apply the EPDM rubber granules mixed with a high-quality polyurethane binder, spreading and leveling the mixture evenly."
  //     },
  //     {
  //       title: "Curing and Setting",
  //       description: "Allow the flooring to cure properly to ensure it adheres firmly and provides optimal performance."
  //     },
  //     {
  //       title: "Finishing Touches",
  //       description: "Perform final smoothing, edging, and any required design detailing to enhance the flooring's functionality and appearance."
  //     },
  //     {
  //       title: "Quality Inspection",
  //       description: "Check the completed flooring for uniformity, adhesion, and compliance with industry standards."
  //     },
  //     {
  //       title: "Project Delivery and Maintenance Tips",
  //       description: "Hand over the finished project and provide maintenance guidelines to ensure long-term durability."
  //     },
  //     {
  //       title: "After-Sales Support",
  //       description: "Offer repair, maintenance, and support services for future needs, ensuring client satisfaction and floor longevity."
  //     }
  //   ]
  // },
  // {
  //   title: "FM2 Flooring Contractors",
  //   description: "FM2 flooring contractors provide highly durable, flat, and functional flooring solutions designed to meet the rigorous demands of industrial environments. Their precise, standards-compliant process ensures long-lasting, high-performance floors.",
  //   image: FM2FlooringContractors,
  //   steps: [
  //     {
  //       title: "Understanding Client Requirements",
  //       description: "Collaborate with the client to determine specific needs such as load-bearing capacity, flatness requirements, and the purpose of the floor."
  //     },
  //     {
  //       title: "Site Inspection and Analysis",
  //       description: "Evaluate the site for soil condition, sub-base level, and potential challenges that may impact the installation process."
  //     },
  //     {
  //       title: "Design Planning",
  //       description: "Develop a detailed FM2 flooring design plan adhering to TR34 standards, specifying floor thickness, reinforcement, joint design, and surface finish."
  //     },
  //     {
  //       title: "Material Selection",
  //       description: "Choose high-quality concrete, reinforcement materials (steel mesh or fibers), and additives to ensure durability and strength."
  //     },
  //     {
  //       title: "Surface Preparation",
  //       description: "Prepare the sub-base by leveling, compacting, and applying a vapor barrier or plastic sheet to prevent moisture ingress."
  //     },
  //     {
  //       title: "Reinforcement Placement",
  //       description: "Lay steel reinforcement mesh or fibers to enhance the floor’s structural integrity and minimize cracking."
  //     },
  //     {
  //       title: "Concrete Pouring and Spreading",
  //       description: "Pour high-grade concrete in a single or continuous process, ensuring consistency and minimizing cold joints."
  //     },
  //     {
  //       title: "Laser Screeding for Flatness",
  //       description: "Use advanced laser screeding technology to achieve precise flatness and levelness, crucial for FM2 flooring standards."
  //     },
  //     {
  //       title: "Vacuum Dewatering (Optional)",
  //       description: "Apply vacuum dewatering if required to enhance the floor’s compressive strength and durability."
  //     },
  //     {
  //       title: "Surface Finishing",
  //       description: "Smooth and finish the surface using power trowels to achieve the desired texture, shine, and abrasion resistance."
  //     },
  //     {
  //       title: "Joint Cutting and Filling",
  //       description: "Cut expansion and contraction joints at precise intervals and fill them with high-quality sealants to allow controlled movement."
  //     },
  //     {
  //       title: "Curing Process",
  //       description: "Allow proper curing time for the floor to gain maximum strength and durability, using curing compounds or water curing methods."
  //     },
  //     {
  //       title: "Final Inspection and Quality Check",
  //       description: "Perform a comprehensive quality assessment to ensure compliance with FM2 standards for flatness, levelness, and load capacity."
  //     },
  //     {
  //       title: "Project Handover and Maintenance Guidance",
  //       description: "Deliver the completed project along with maintenance instructions to ensure long-term performance and reliability."
  //     },
  //     {
  //       title: "Post-Installation Support",
  //       description: "Provide after-sales services, including maintenance, repair, and consultation, for the client’s peace of mind."
  //     }
  //   ]
  // },
  {
    title: "IPS Flooring Contractors",
    description: "IPS flooring contractors offer durable, cost-effective, and visually appealing flooring solutions for industrial, commercial, and residential applications. Their comprehensive process ensures strong, smooth, and long-lasting floors.",
    image: IPSFlooringContractors,
    steps: [
      {
        title: "Client Consultation",
        description: "Understand the client’s requirements, including the type of area (industrial, commercial, or residential), durability expectations, and budget."
      },
      {
        title: "Site Inspection",
        description: "Assess the site conditions, including surface level, moisture content, and any existing structural challenges."
      },
      {
        title: "Material Planning",
        description: "Prepare the appropriate IPS mix, typically a concrete ratio of 1:1.5:3 (cement, sand, and aggregates), ensuring durability and smooth finishing."
      },
      {
        title: "Sub-Base Preparation",
        description: "Clean the surface and level the sub-base with compacted sand or aggregates to create a strong foundation for the IPS flooring."
      },
      {
        title: "Marking and Levelling",
        description: "Use precision leveling techniques to set reference points and ensure uniform floor thickness across the site."
      },
      {
        title: "Concrete Pouring",
        description: "Pour the prepared IPS mix uniformly onto the prepared surface and spread it using a screed board for even distribution."
      },
      {
        title: "Floating and Troweling",
        description: "Smoothen the surface using wooden floats and finish with steel trowels to achieve a fine and level finish."
      },
      {
        title: "Surface Curing",
        description: "Allow the surface to cure properly for 7–14 days, depending on the site conditions, to achieve maximum strength and durability."
      },
      {
        title: "Control Joint Cutting",
        description: "Cut control joints at specific intervals to allow for expansion and prevent random cracking."
      },
      {
        title: "Finishing Touches",
        description: "Apply a curing compound or polishing coat if required to enhance the surface’s longevity and appearance."
      },
      {
        title: "Quality Inspection",
        description: "Conduct a final inspection to ensure the flooring meets the client’s expectations and adheres to industry standards."
      },
      {
        title: "Handover and Maintenance Advice",
        description: "Deliver the project along with detailed maintenance instructions for long-lasting performance."
      },
      {
        title: "Post-Installation Support",
        description: "Offer support services such as crack repair, surface polishing, or resealing to maintain the floor's quality over time."
      }
    ]
  },
  {
    title: "PU Flooring Contractors",
    description: "PU flooring contractors offer durable, chemical-resistant, and aesthetically appealing flooring solutions for industrial, commercial, and residential applications. Their process ensures high-quality finishes that meet specific performance requirements.",
    image: PUFlooringContractors,
    steps: [
      {
        title: "Requirement Analysis",
        description: "Discuss the client’s specific needs, such as the type of facility, chemical resistance, slip resistance, and durability expectations."
      },
      {
        title: "Site Inspection",
        description: "Inspect the site to assess surface conditions, including moisture levels, cracks, and unevenness, to ensure suitability for PU flooring application."
      },
      {
        title: "Surface Preparation",
        description: "Clean the substrate thoroughly to remove dust, oil, and debris. Repair cracks and uneven surfaces, and grind or scarify to enhance adhesion."
      },
      {
        title: "Primer Application",
        description: "Apply a high-quality primer to the prepared substrate to improve bonding between the floor and the PU coating."
      },
      {
        title: "Mixing the PU Material",
        description: "Prepare the polyurethane material according to the manufacturer’s specifications, ensuring precise mixing for optimal performance."
      },
      {
        title: "Base Coat Application",
        description: "Apply the first layer of PU coating evenly using rollers or trowels, allowing sufficient curing time as per material guidelines."
      },
      {
        title: "Intermediate Layers (Optional)",
        description: "Add intermediate layers with reinforcement, such as silica sand or quartz aggregates, for enhanced durability and slip resistance."
      },
      {
        title: "Topcoat Application",
        description: "Apply the final layer of PU coating to achieve a smooth, glossy, or matte finish, ensuring UV resistance, chemical resistance, and abrasion resistance."
      },
      {
        title: "Curing Process",
        description: "Allow the PU floor to cure completely, ensuring maximum strength and adhesion, typically within 24–48 hours."
      },
      {
        title: "Quality Inspection",
        description: "Conduct a thorough inspection to verify uniformity, finish, and performance against required standards."
      },
      {
        title: "Project Handover",
        description: "Provide the client with maintenance guidelines and ensure their satisfaction with the completed flooring."
      },
      {
        title: "After-Sales Support",
        description: "Offer post-installation services, including cleaning, repair, and periodic maintenance, to prolong the lifespan of the PU flooring."
      }
    ]
  },
  {
    title: "Epoxy Flooring/Coating Contractors",
    description: "Epoxy flooring contractors deliver high-performance, durable, and aesthetically pleasing floors for industrial, commercial, and residential spaces. The process ensures a seamless and resilient finish, offering long-lasting protection and functionality.",
    image: EpoxyFlooringCoatingContractors,
    steps: [
      {
        title: "Initial Consultation",
        description: "Understand the client’s specific requirements, such as intended use, desired durability, chemical resistance, and aesthetic preferences."
      },
      {
        title: "Site Assessment",
        description: "Inspect the site to evaluate the substrate’s condition, including moisture levels, cracks, and uneven surfaces, ensuring it is suitable for epoxy application."
      },
      {
        title: "Surface Preparation",
        description: "Clean the floor to remove debris, oil, and grease. Repair cracks, holes, and imperfections using epoxy fillers. Grind or shot-blast the surface to achieve the proper texture for maximum adhesion."
      },
      {
        title: "Moisture Barrier Application",
        description: "If required, apply a moisture barrier to prevent moisture from affecting the epoxy’s performance and longevity."
      },
      {
        title: "Primer Application",
        description: "Apply a high-quality epoxy primer to the prepared surface, enhancing the bond between the substrate and the epoxy coating."
      },
      {
        title: "Mixing the Epoxy",
        description: "Accurately mix the epoxy resin and hardener according to the manufacturer’s guidelines. Add pigments or decorative flakes if a specific color or texture is desired."
      },
      {
        title: "Base Coat Application",
        description: "Apply the first layer of epoxy evenly using rollers or squeegees, ensuring full coverage and a uniform thickness."
      },
      {
        title: "Intermediate Layers (Optional)",
        description: "Apply additional layers with aggregates, such as quartz or color flakes, for added strength or decorative finishes."
      },
      {
        title: "Topcoat Application",
        description: "Apply the final layer of epoxy to seal and protect the floor, ensuring it provides UV resistance, chemical resistance, and the desired gloss level."
      },
      {
        title: "Curing Process",
        description: "Allow the epoxy coating to cure as per the manufacturer’s specifications, typically 24–72 hours, to achieve optimal hardness and durability."
      },
      {
        title: "Quality Assurance",
        description: "Inspect the finished floor to ensure a seamless, defect-free surface that meets the client’s expectations and industry standards."
      },
      {
        title: "Project Handover",
        description: "Provide the client with maintenance tips and recommendations to maximize the floor’s lifespan."
      },
      {
        title: "After-Sales Support",
        description: "Offer post-installation services, such as cleaning, repair, or recoating, to maintain the epoxy flooring’s performance and aesthetics over time."
      }
    ]
  },
  {
    title: "Tremix Flooring Contractors",
    description: "Tremix flooring provides high-strength, wear-resistant, and cost-effective flooring for industrial and heavy-duty applications. The process ensures long-lasting durability and excellent performance in demanding environments.",
    image: TremixFlooringContractors,
    steps: [
      {
        title: "Initial Consultation",
        description: "Understand the client’s specific flooring requirements, such as usage, load capacity, durability, and finishing preferences."
      },
      {
        title: "Site Inspection",
        description: "Evaluate the site to check for subgrade conditions, moisture levels, and layout to ensure it is suitable for Tremix flooring."
      },
      {
        title: "Subgrade Preparation",
        description: "Compact the subgrade to create a stable and uniform base. Add a layer of crushed stone or gravel for proper drainage and support."
      },
      {
        title: "Formwork Setup",
        description: "Install the formwork to define the flooring area, ensuring alignment and maintaining the desired thickness of the slab."
      },
      {
        title: "Concrete Pouring",
        description: "Pour the concrete mix into the designated area, ensuring it is evenly spread to avoid any voids or inconsistencies."
      },
      {
        title: "Leveling and Vibrating",
        description: "Use a vibratory screed to level the concrete and remove air pockets, ensuring a dense and uniform concrete slab."
      },
      {
        title: "Vacuum Dewatering",
        description: "Use a vacuum pump and suction mats to remove excess water from the concrete, enhancing strength and durability by reducing the water-cement ratio."
      },
      {
        title: "Floating and Troweling",
        description: "Use power trowels to smooth and level the surface, achieving the desired finish, such as smooth, textured, or non-slip."
      },
      {
        title: "Joint Cutting",
        description: "Cut expansion and contraction joints at regular intervals to prevent cracking due to thermal or shrinkage stresses."
      },
      {
        title: "Curing Process",
        description: "Allow the floor to cure properly by covering it with wet hessian cloth or applying a curing compound to achieve maximum strength and durability."
      },
      {
        title: "Final Inspection",
        description: "Inspect the floor for uniformity, surface quality, and joint placement, ensuring it meets required standards and client expectations."
      },
      {
        title: "Project Handover",
        description: "Provide the client with guidelines for floor maintenance and care to ensure long-term performance."
      },
      {
        title: "Post-Installation Support",
        description: "Offer after-sales support, including repairs or upgrades, to maintain the flooring’s durability and aesthetics over time."
      }
    ]
  },
  {
    title: "Vacuum De-Watering Flooring Contractors",
    description: "Vacuum De-Watering Flooring (VDF) provides enhanced strength, durability, and cost-effectiveness by reducing the water-cement ratio in concrete floors, making them ideal for industrial and commercial spaces.",
    image: VaccumDeWateringFlooringContractors,
    steps: [
      {
        title: "Site Assessment",
        description: "Evaluate the site to determine suitability for VDF flooring, considering factors like subgrade conditions and moisture levels."
      },
      {
        title: "Subgrade Preparation",
        description: "Compact the subgrade and add a layer of crushed stone or gravel to ensure proper drainage and support."
      },
      {
        title: "Formwork Setup",
        description: "Install formwork to define the flooring area, ensuring alignment and maintaining the desired thickness of the slab."
      },
      {
        title: "Concrete Pouring",
        description: "Pour the concrete mix evenly over the prepared area, ensuring a smooth distribution to eliminate voids and inconsistencies."
      },
      {
        title: "Leveling and Vibrating",
        description: "Use a vibratory screed to level the concrete and remove air pockets, ensuring the slab is dense and uniform."
      },
      {
        title: "Vacuum Dewatering Application",
        description: "Apply vacuum dewatering using suction mats and pumps to remove excess water from the concrete, enhancing strength and durability."
      },
      {
        title: "Floating and Troweling",
        description: "Use power trowels to smooth and finish the surface, achieving a high-quality, level finish with the desired texture."
      },
      {
        title: "Joint Cutting",
        description: "Cut expansion and contraction joints at precise intervals to allow controlled movement and prevent cracking due to shrinkage or thermal stresses."
      },
      {
        title: "Curing Process",
        description: "Allow proper curing to ensure the concrete reaches its full strength and durability. This may include covering with wet hessian cloth or applying curing compounds."
      },
      {
        title: "Final Inspection",
        description: "Inspect the flooring to ensure it meets the specified standards for strength, finish, and uniformity, and that it aligns with the client’s expectations."
      },
      {
        title: "Project Handover",
        description: "Provide the client with maintenance instructions and care guidelines to ensure the longevity of the flooring."
      },
      {
        title: "Post-Installation Support",
        description: "Offer ongoing support services, such as repairs, maintenance, or additional treatments, to preserve the flooring’s performance over time."
      }
    ]
  },
];



