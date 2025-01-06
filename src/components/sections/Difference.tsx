import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const Difference = () => {
    return (
        <section className="mb-16">
            <div className="h-24 px-2 text-center border rounded-lg md:text-3xl text-2xl font-bold flex justify-center items-center mb-8">Delivering Excellence, Every Step of the Way</div>
            <h2 className="text-3xl font-bold mb-6  ml-4 border-[#f58129] border-l-8 pl-3">Why Us?</h2>
            <p className="text-lg mb-8">At Jyoti Flooring Works, we pride ourselves on delivering top-quality flooring solutions tailored to meet the unique needs of our clients. Our expertise in both engineered and conventional flooring sets us apart in the industry.</p>
            <ComparisonTable />
        </section>
    )
}

export default Difference

const ComparisonTable = () => {
    const comparisons = [
        {
            engineered: {
                title: "Wide Panels",
                description: "With laser-screed technology, we can lay 25m wide panels in a single pour. This results in a 70 to 80% reduction in construction joints."
            },
            conventional: {
                title: "Random Cracking",
                description: "Bad concrete, uneven sub-base, thin slab, delayed saw cutting, poor workmanship, and bad design can all lead to a severely cracked floor."
            }
        },
        {
            engineered: {
                title: "Edge Protection",
                description: "A proprietary armored joint and plate dowel system protects the construction joints from heavy traffic and ensures smooth load transfer."
            },
            conventional: {
                title: "Dusting Floor",
                description: "Poor finishing techniques, wrong concrete mix, and incorrect use of dry-shake hardener result in a concrete slab that is porous."
            }
        },
        {
            engineered: {
                title: "Steel Reinforcement",
                description: "Laying a steel mesh or adding steel fibers in concrete increases the slab's strength and is instrumental in eliminating cracking in concrete."
            },
            conventional: {
                title: "Damaged Edges",
                description: "Lack of load transfer mechanism across joints, warped formwork, and lack of edge protection cause rapid deterioration of floor edges."
            }
        },
        {
            engineered: {
                title: "Surface Hardening",
                description: "Using a dry-shake hardener increases the surface's abrasion resistance, and using a silicate-based densifier makes the floor dust-free and glossy."
            },
            conventional: {
                title: "Too Many Joints",
                description: "The conventional strip construction method results in construction joints every 3 to 4 meters, leading to accelerated floor damage."
            }
        }
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">
                    Difference between Engineered Flooring vs Conventional Flooring
                </CardTitle>
            </CardHeader>
            <CardContent>
                {/* Desktop View */}
                <div className="hidden md:block">
                    <Table className="text-md">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-xl font-bold">Engineered Flooring</TableHead>
                                <TableHead className="text-xl font-bold">Conventional Flooring</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comparisons.map((comparison, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <strong>{comparison.engineered.title}</strong><br />
                                        {comparison.engineered.description}
                                    </TableCell>
                                    <TableCell>
                                        <strong>{comparison.conventional.title}</strong><br />
                                        {comparison.conventional.description}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Mobile View */}
                <div className="md:hidden space-y-6">
                    {comparisons.map((comparison, index) => (
                        <div key={index} className="space-y-4">
                            <div className="border p-4 rounded-lg">
                                <div className="font-bold text-lg text-primary mb-2">Engineered Flooring</div>
                                <strong>{comparison.engineered.title}</strong><br />
                                {comparison.engineered.description}
                            </div>
                            <div className="border p-4 rounded-lg">
                                <div className="font-bold text-lg text-primary mb-2">Conventional Flooring</div>
                                <strong>{comparison.conventional.title}</strong><br />
                                {comparison.conventional.description}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};