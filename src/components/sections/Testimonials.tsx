import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <>
      <h2 className="text-3xl font-bold ml-4 border-[#f58129] border-l-8 pl-3">Reviews from Our Clients</h2>
      <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "We are impressed with the precision and professionalism of Jyoti Flooring Works. The 25,000 sqm of flooring they installed for us has surpassed our expectations in terms of durability and finish. Truly a dependable partner in industrial flooring.",
    name: "MATRIX FERTILIZER & CHEMICALS LTD.",
    title: "Pannagarh (25000 sqm)",
  },
  {
    quote:
      "Despite the smaller scale of our project, Jyoti Flooring Works delivered top-notch quality with the same dedication. Their timely execution and attention to detail have enhanced our facility significantly.",
    name: "PRASAD SEEDS PVT.LTD.",
    title: "Hyderabad (2500 sqm)",
  },
  {
    quote:
      "Jyoti Flooring Works has transformed our industrial space with their flawless flooring solutions. Their ability to handle complex requirements and provide high-quality results is commendable.",
    name: "NEEL KAMAL STEEL PVT. LTD.",
    title: "Patna (5000 sqm)",
  },
  {
    quote:
      "The team at Jyoti Flooring Works ensured that our residential project received impeccable flooring solutions. Their expertise in large-scale projects is evident in every inch of the work delivered.",
    name: "ALCOVE GLORIA",
    title: "Laketown, Kolkata (25000 sqm)",
  },
  {
    quote:
      "Jyoti Flooring Works demonstrated exceptional capability in completing this massive project. Their dedication, timely delivery, and high standards make them the go-to choice for flooring requirements.",
    name: "INDIAN OIL REFINERY",
    title: "Paradeep, Odisha (45000 sqm)",
  },
  {
    quote:
      "We were highly impressed with the efficiency and quality of Jyoti Flooring Works. They provided industrial-grade flooring that stands the test of time and heavy usage.",
    name: "ESSAR STEEL LTD.",
    title: "Dhulagarh, Howrah (20000 sqm)",
  },
  {
    quote:
      "Jyoti Flooring Works delivered flooring solutions that perfectly meet our industrial needs. Their professionalism and commitment to quality are truly commendable.",
    name: "ELECTRO STEEL CASTING LTD.",
    title: "Bansberia (5000 sqm)",
  },
  {
    quote:
      "The team at Jyoti Flooring Works provided excellent flooring solutions for our facility. Their attention to detail and timely delivery set them apart.",
    name: "HINDUSTAN UNILIVER LTD.",
    title: "Garden Reach, Kolkata (2000 sqm)",
  },
  {
    quote:
      "Jyoti Flooring Works is a reliable partner for large-scale infrastructure projects. Their quality of work and adherence to deadlines were instrumental in our project's success.",
    name: "SIMPLEX INFRASTRUCTURE LTD.",
    title: "Pannagarh",
  },
  {
    quote:
      "The 40,000 sqm flooring project was executed seamlessly by Jyoti Flooring Works. Their professionalism and ability to meet stringent requirements are truly remarkable.",
    name: "EASTERN COAL FIELD LTD.",
    title: "Jhanjhra Project (40000 sqm)",
  },
  {
    quote:
      "Jyoti Flooring Works showcased their expertise in delivering high-quality flooring solutions for our refinery project. Their work ethic and attention to detail are second to none.",
    name: "PUNJ LLOYED LTD",
    title: "IOCL Paradeep Refinery (45000 sqm)",
  },
  {
    quote:
      "The flooring installed by Jyoti Flooring Works added great value to our residential project. Their ability to handle complex designs and large areas is impressive.",
    name: "ALCOVE GROUP",
    title: "Shreebhumi, Kolkata (35000 sqm)",
  },
  {
    quote:
      "Jyoti Flooring Works delivered outstanding flooring for our project in Assam. Their commitment to quality and timeline adherence has been exemplary.",
    name: "DELHI ENGINEERING COMPANY",
    title: "Assam (20000 sqm)",
  },
  {
    quote:
      "We are highly satisfied with the flooring solutions provided by Jyoti Flooring Works. Their work enhanced the aesthetic and functionality of our project.",
    name: "NEW KOLKATA",
    title: "Hooghly, Mahesh (10000 sqm)",
  },
  {
    quote:
      "Jyoti Flooring Works delivered exceptional results for our residential project in Kolkata. Their precision, efficiency, and professionalism make them our trusted partner.",
    name: "CHOURANGEE RESIDENCY PVT. LTD.",
    title: "Kolkata (25000 sqm)",
  },
];


