import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useDeleteBookMutation, useGetAllBookQuery } from "@/redux/api/bookApi";

export default function Book() {
  const { data, isLoading, isError } = useGetAllBookQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  if (isLoading) return <p className="text-center">Loading books...</p>;
  if (isError) return <p className="text-center text-red-500">Something went wrong.</p>;

  const allBooks = data?.data || [];

  const genres = ["All", ...new Set(allBooks.map((book: any) => book.genre))];

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
      await deleteBook(id).unwrap();
      alert("✅ Book deleted successfully");
    } catch (error) {
      console.error("❌ Delete failed:", error);
      alert("Failed to delete the book.");
    }
  };

  return (
    <div className="p-6 md:p-10">
      <Tabs defaultValue="All" className="space-y-6">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-6 mx-auto">
          {genres.map((genre) => (
            <TabsTrigger key={genre as string} value={genre as string}>
              {genre as string}
            </TabsTrigger>
          ))}
        </TabsList>

        {genres.map((genre) => {
          const filteredBooks =
            genre === "All"
              ? allBooks
              : allBooks.filter((book: any) => book.genre === genre);

          return (
            <TabsContent key={genre as string} value={genre as string}>
              {filteredBooks.length === 0 ? (
                <p className="text-center text-gray-500">No books found for this genre.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                  {filteredBooks.map((book: any) => (
                    <Card key={book._id || book.isbn} className="flex flex-col justify-between hover:shadow-2xl">
                      <div>
                        <CardHeader>
                          <CardTitle className="text-xl">{book.title}</CardTitle>
                          <CardDescription>by {book.author}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-1 py-2">
                          <p className="text-sm truncate">{book.description}</p>
                          <p className="text-sm text-muted-foreground">Genre: {book.genre}</p>
                          <p className="text-sm text-muted-foreground">Copies: {book.copies}</p>
                        </CardContent>
                      </div>
                      <div>
                        <CardFooter className="pb-2">
                          <p className={`font-medium ${book.available ? "text-green-600" : "text-red-600 "}`}>
                            {book.available ? "Available" : "Not Available"}
                          </p>
                        </CardFooter>
                        <div className="flex flex-wrap gap-2 px-4 py-1 pt-0">
                          <Button variant="outline" onClick={() => navigate(`/books/${book._id}`)}>View</Button>
                          <Button variant="outline" onClick={() => navigate(`/edit-book/${book._id}`)}>Edit</Button>
                          <Button variant="destructive" onClick={() => handleDelete(book._id)}>Delete</Button>
                          <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => navigate(`/borrow/${book._id}`)}>
                            Borrow
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
