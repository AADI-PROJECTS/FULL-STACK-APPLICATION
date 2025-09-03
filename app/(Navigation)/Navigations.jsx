import Link from "next/link";
export default function (){
    return (
   <div className="grid grid-cols-2   bg-gray-200 ">
    <Link href="/">
  <div className="place-items-center p-4">
    <p>Student Registration</p>
  </div>
  </Link>
  <Link href="/showSchool">
    <div className=" place-items-center p-4">
    <p>Data fetch from Database</p>
  </div>
  </Link>
</div>
    );
}
