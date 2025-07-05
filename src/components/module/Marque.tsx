import Marquee from "react-fast-marquee";
import { useGetAllBookQuery } from "@/redux/api/bookApi";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

export default function Marque() {
    const { data, isLoading, isError } = useGetAllBookQuery(undefined);

    if (isLoading) return <p>Loading books...</p>;
    if (isError || !data?.data) return <p>Failed to load books.</p>;

    return (
        <div className="my-20">
            <Marquee pauseOnHover speed={60} gradient={false}>
                {data.data.map((book: any) => (
                    <Card key={book._id} className="w-80 h-[200px] mx-4 shadow-md flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold">{book.title}</CardTitle>
                            <CardDescription className="text-sm">{book.author}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm">
                            <p><strong>Genre:</strong> {book.genre}</p>
                        </CardContent>
                    </Card>

                ))}
            </Marquee>
        </div>
    );
}
