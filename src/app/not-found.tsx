import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex h-screen items-center justify-center flex-col gap-[20px]'>
      <h2>Page Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}