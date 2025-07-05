import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useGetBorrowSummaryQuery } from "@/redux/api/borrowApi";

export default function BorrowSummary() {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) return <p className="text-center mt-6">Loading borrow summary...</p>;
  if (isError) return <p className="text-center mt-6 text-red-600">Failed to load borrow summary.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-20 ">
      {data?.data?.map((item: any, index: number) => (
        <Card key={index} className="shadow-md hover:shadow-2xl">
          <CardHeader>
            <CardTitle>{item.book.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>ISBN:</strong> {item.book.isbn}</p>
            <p><strong>Total Borrowed:</strong> {item.totalQuantity}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
