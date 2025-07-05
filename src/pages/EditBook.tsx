import { useGetSingleBookQuery, useUpdateBookMutation } from "@/redux/api/bookApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function EditBook() {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(id);
    const [updateBook] = useUpdateBookMutation();
    const navigate = useNavigate();

    const form = useForm({
        defaultValues: {
            title: "",
            author: "",
            genre: "",
            isbn: "",
            description: "",
            copies: 0, 
        },
    });

    
    useEffect(() => {
        if (data?.data) {
            form.reset(data.data);
        }
    }, [data, form]);

    const onSubmit = async (formData:any) => {
        const updatedData = {
            ...formData,
            available: formData.copies > 0,
        };

        try {
            await updateBook({ id, payload: updatedData }).unwrap();
            alert("Book updated successfully!");
            navigate(`/books`);
        } catch (error) {
            console.error("Update failed:", error);
            alert("Failed to update book");
        }
    };

    if (isLoading || !data?.data) return <p>Loading...</p>;

    return (
       <div className=" p-20 ">
            <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-lg mx-auto p-4 space-y-4 bg-gray-50 rounded shadow hover:shadow-2xl"
        >
            <div>
                <Label htmlFor="title" className="py-1">Title</Label>
                <Input id="title" {...form.register("title")} />
            </div>
            <div>
                <Label htmlFor="author"className="py-1">Author</Label>
                <Input id="author" {...form.register("author")} />
            </div>
            <div>
  <Label htmlFor="genre" className="py-1">Genre</Label>
  <select
    id="genre"
    {...form.register("genre", { required: "Genre is required" })}
    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select Genre</option>
    <option value="FICTION">Fiction</option>
    <option value="NON_FICTION">Non-Fiction</option>
    <option value="SCIENCE">Science</option>
    <option value="HISTORY">History</option>
    <option value="BIOGRAPHY">Biography</option>
    <option value="FANTASY">Fantasy</option>
  </select>

  {form.formState.errors.genre && (
    <p className="text-red-500 text-sm mt-1">
      {form.formState.errors.genre.message as string}
    </p>
  )}
</div>

            <div>
                <Label htmlFor="isbn"className="py-1">ISBN</Label>
                <Input id="isbn" {...form.register("isbn")} />
            </div>
            <div>
                <Label htmlFor="description"className="py-1">Description</Label>
                <Textarea id="description" {...form.register("description")} />
            </div>
            <div>
                <Label htmlFor="copies"className="py-1">Copies</Label>
                <Input
                    id="copies"
                    type="number"
                    min={0}
                    {...form.register("copies", { valueAsNumber: true })}
                />
            </div>
            <Button type="submit" className="flex mx-auto">Update Book</Button>
        </form>
        </div>
       
    );
}
