import { useGetAllBookQuery } from "@/redux/api/bookApi";
import image from "../../assets/image/avatar-man-person.jpg"

export default function Author() {
  const { data, isLoading, isError } = useGetAllBookQuery(undefined);

  if (isLoading) return <p className="text-center py-10">Loading books...</p>;
  if (isError || !data?.data) return <p className="text-center py-10">Failed to load books.</p>;

  return (
    <div className="bg-white py-12 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {data.data.slice(0, 4).map((book: any) => (
            <div key={book._id} className="group">
              <div className="overflow-hidden rounded-md">
                <img
                  src={image || "https://via.placeholder.com/300x400?text=Book+Cover"}
                  alt={book.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-500">{book.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="/books">
            <button className="px-6 py-3 bg-black text-white tracking-wider uppercase hover:bg-gray-800 transition">
              View More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
