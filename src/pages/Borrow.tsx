import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useBorrowBookMutation } from "@/redux/api/borrowApi";
import { CalendarIcon } from "lucide-react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useParams } from "react-router";
import { useGetSingleBookQuery } from "@/redux/api/bookApi";
import { useState } from "react";


export default function Borrow() {
    const { id } = useParams();
    const { data, isLoading, refetch } = useGetSingleBookQuery(id, {
    });

    const [borrowBook] = useBorrowBookMutation();

    const [popoverOpen, setPopoverOpen] = useState(false);




    const form = useForm({
        defaultValues: {
            book: "id",
            quantity: "",
            dueDate: undefined,
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
        const borrowData = {
            ...formData,
            book: id,
        };

        try {
            await borrowBook(borrowData).unwrap();
            alert("✅ Book borrowed successfully!");
            refetch();

            form.reset();
        } catch (error: any) {
            const message =
                error?.data?.message || error?.message || "❌ Failed to borrow book.";
            alert(message);
        }
    };

    if (isLoading) return <p className="text-center">Loading book...</p>;





    return (
        <div className="flex justify-center items-center min-h-screen px-4 ">
            <div className="w-full max-w-xl bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-2xl">
                <h2 className="text-2xl font-semibold mb-6 text-center">Borrow New Book</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <strong>Book:</strong> {data?.data?.title || "Unknown Book"}

                        </div>
                        <div>
                            <strong>Available Copies:</strong> {data?.data?.copies || "0"}
                        </div>

                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            min={0}
                                            {...field}
                                            onChange={(e) => {
                                                const value = Number(e.target.value);
                                                if (value >= 0) field.onChange(value);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Due Date</FormLabel>
                                    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                    onClick={() => setPopoverOpen(true)}
                                                >
                                                    {field.value ? format(field.value, "dd/MM/yyyy") : <span>Pick a date</span>}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={(date) => {
                                                    field.onChange(date);
                                                    setPopoverOpen(false); 
                                                }}
                                                disabled={(date) => date <= new Date()}
                                                captionLayout="dropdown"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="pt-4 text-center">
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Processing..." : "Borrow Book"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
