import React from "react";
import { db } from "@/config/db";
import { Mail, Phone, MapPin, Calendar, Award, User } from "lucide-react";
import NotFound from "@/app/not-found";

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export async function generateStaticParams() {
  const [doctors] = await db.execute(`SELECT doctor_id FROM doctors`);
  return doctors.map((doctor) => ({
    id: doctor.doctor_id.toString(),
  }));
}



const SingleDoctor = async ({ params }) => {
  const [[doctor]] = await db.execute(
    "SELECT * FROM doctors WHERE doctor_id = ?",
    [params.id]
  );

  console.log(doctor);

  if (!doctor) {
    return <NotFound />;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <User className="text-blue-500" />
        {doctor.name}
      </h1>

      <div className="space-y-3 text-gray-700">
        <p className="flex items-center gap-2">
          <Mail className="text-gray-500" /> {doctor.email}
        </p>
        <p className="flex items-center gap-2">
          <Phone className="text-gray-500" /> {doctor.phone}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="text-gray-500" /> {doctor.address}
        </p>
        <p className="flex items-center gap-2">
          <Calendar className="text-gray-500" /> Joined:{" "}
          {formatDate(doctor.created_at)}
        </p>
        <p className="flex items-center gap-2">
          <Award className="text-gray-500" /> Specialization:{" "}
          {doctor.specialization}
        </p>
      </div>
    </div>
  );
};

export default SingleDoctor;
