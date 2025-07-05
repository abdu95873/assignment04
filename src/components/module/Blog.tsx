import bookImage from "../../assets/image/book-covers.jpg"
export default function Blog() {
  const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "An inspiring tale about following your dreams and listening to your heart. It follows Santiago, a young shepherd, on his journey to find treasure—and ultimately himself.",
    publishDate: "1988",
    image:bookImage,
  };

  return (
   <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-white flex items-center p-4 md:p-10">
      <div className="flex flex-col md:flex-row w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-200 transition-shadow duration-300">
        
        {/* Image Section */}
        <div className="md:w-1/2 w-full h-64 md:h-full p-10">
          <img
            src={book.image}
            alt={book.title}
            className="w-fit h-full object-cover mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{book.title}</h2>
          <p className="text-sm text-gray-500 mb-4">by {book.author}</p>
          <p className="text-gray-700 mb-4 leading-relaxed">{book.description}</p>
          <span className="text-sm text-indigo-600 font-medium">Published: {book.publishDate}</span>
        </div>
      </div>
    </div>
  );
}
