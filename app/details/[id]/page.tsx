export default async function DetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#1e1f24] text-gray-200 p-8">
      <h1 className="text-2xl font-semibold mb-4">
        User Details
      </h1>

      <div className="bg-[#2a2b31] p-6 rounded border border-gray-700">
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p className="mt-2 text-gray-400">
          (This is a demo details page.)
        </p>
      </div>
    </div>
  );
}