import Image from "next/image"

const clientImages = [
    {
        img: "https://res.cloudinary.com/drynqkitl/image/upload/v1736168152/new_kolkata_logo_boxcvs.webp"
    },
    {
        img: "https://res.cloudinary.com/drynqkitl/image/upload/v1736168152/MATRIX_FERTILIZER_CHEMICALS_LTD_a2unll.png"
    },
    {
        img: "https://res.cloudinary.com/drynqkitl/image/upload/v1736168151/hindustan-unilever_zn8itp.png"
    },
    {
        img: "https://res.cloudinary.com/drynqkitl/image/upload/v1736168151/INDIAN_OIL_ulw1de.png"
    },
    {
        img: "https://res.cloudinary.com/drynqkitl/image/upload/v1736168150/ESSAR_STEEL_LTD_uo9szl.png"
    },
    {
        img: "https://res.cloudinary.com/drynqkitl/image/upload/v1736168150/electrosteel_opczo2.png"
    },
    {
        img: "https://res.cloudinary.com/drynqkitl/image/upload/v1736168150/EAESTERN_COAL_FIELD_LTD_tx2hd7.png"
    },
    {
        img: "https://res.cloudinary.com/drynqkitl/image/upload/v1736168149/SIMPLEX_INFRASTRUCTURE_LTD_cskpxx.png"
    },
    {
        img: "https://res.cloudinary.com/drynqkitl/image/upload/v1736168148/ALCOVE_mp3hup.png"
    },
    {
        img: "https://res.cloudinary.com/drynqkitl/image/upload/v1736168148/PUNJ_LLOYED_LTD_lefx6l.png"
    },
]
const Clients = () => {
    return (
        <div className="mb-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 place-items-center gap-8 opacity-70">
                {
                    clientImages.map((client, index) => {
                        return (
                            <Image
                                src={client.img}
                                alt="client"
                                width={1000}
                                height={1000}
                                key={index}
                                className="w-24"
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Clients
