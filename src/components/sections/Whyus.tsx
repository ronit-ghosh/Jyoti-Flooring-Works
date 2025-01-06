import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Whyus = () => {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 ml-4 border-[#f58129] border-l-8 pl-3">So Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Trust</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>With years of experience and a track record of satisfied clients, we&apos;ve built a reputation for reliability and excellence in the flooring industry.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Best Advice</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Our team of experts provides personalized recommendations to ensure you get the perfect flooring solution for your specific needs and budget.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Perfect Implementation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>From planning to execution, we ensure every project is completed to the highest standards, on time and within budget.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Whyus
