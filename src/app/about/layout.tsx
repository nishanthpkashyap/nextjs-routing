import Link from "next/link";

export default function PageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div>
        <Link href={"/"}> {'<- Back To Home'}</Link>
        {children}
    </div>
  )
}
