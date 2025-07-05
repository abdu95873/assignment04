import { useGetSingleBookQuery } from "@/redux/api/bookApi";
import { useParams } from "react-router";

export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id);

  if (isLoading) return <p className="text-center mt-10">Loading book details...</p>;
  if (isError || !data) return <p className="text-center mt-10 text-red-600">Book not found.</p>;

  const book = data.data;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center">{book.title}</h2>
      <div className="space-y-2">
        <p><span className="font-semibold">Author:</span> {book.author}</p>
        <p><span className="font-semibold">Genre:</span> {book.genre}</p>
        <p><span className="font-semibold">ISBN:</span> {book.isbn}</p>
        <p><span className="font-semibold">Copies:</span> {book.copies}</p>
        <p>
          <span className="font-semibold">Availability:</span>{" "}
          <span className={book.available ? "text-green-600" : "text-red-600"}>
            {book.available ? "Available" : "Not Available"}
          </span>
        </p>
        <p><span className="font-semibold">Description:</span> {book.description}</p>
      </div>
    </div>
  );
}
