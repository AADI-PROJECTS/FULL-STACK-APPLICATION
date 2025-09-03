import { data_conn } from "@/config/database";
async function fetchData() {
  try {
    const [row] = await data_conn.execute("select * from school");
    return row;
  } catch (err) {
    console.log("data not fetch", err);
    return [];
  }
}
export default async function MySchoolData() {
  const data = await fetchData();
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl font-bold mb-4">showSchool Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-1 px-1 border">ID</th>
              <th className="py-1 px-1 border">First Name</th>
              <th className="py-1 px-1 border">Address</th>
              <th className="py-1 px-1 border">City</th>
              <th className="py-1 px-1 border">State</th>
              <th className="py-1 px-1 border">Contact_Number</th>
              <th className="py-1 px-1 border">Image_Name</th>
              <th className="py-1 px-1 border">Email_id</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td className=" border">{row.id}</td>
                <td className=" border">{row.name}</td>
                <td className=" border">{row.address}</td>
                <td className=" border">{row.city}</td>
                <td className=" border">{row.state}</td>
                <td className=" border">{row.contact_number}</td>
                <td className=" border">{row.image}</td>
                <td className=" border">{row.email_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
