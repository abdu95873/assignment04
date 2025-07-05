import { Link } from "react-router"
import image from "../../assets/image/Website_Banners.jpg"
export default function Banner() {
    return (

        <section className="bg-gray-50 py-20">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6">
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-bold leading-tight text-gray-900">
                        Read Peoples Story, Reach The World
                    </h1>
                    <p className="mt-6 text-lg text-gray-700">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quod, quam unde veniam excepturi dicta fugiat reprehenderit est, temporibus modi sunt soluta dolore cupiditate nemo commodi consectetur explicabo. Maiores, quis.
                    </p>
                    <Link to="/books">
                        <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Book Image */}
                <div className="md:w-1/2">
                    <img
                        src={image} // Replace with your image path
                        alt="Book cover example"
                        className="mx-auto max-w-xs md:max-w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}
