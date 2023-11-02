'use client';
import Link from "next/link";

export default function error() {
  return (
    <div>
        <h1>Something went wrong, please</h1>
        <Link href={"/about"}>Try again...</Link>
    </div>
  )
}
