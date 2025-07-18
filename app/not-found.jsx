"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="text-center mt-10">
      <Link href="/">Go Home</Link>
      <p className="cursor-pointer hover:text-red-500 hover:underline" onClick={() => router.back()}>Go Back</p>
      <h1 className="text-3xl font-bold text-red-500">404 Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        We couldn’t find a doctor with that ID.
      </p>
    </div>
  );
}
