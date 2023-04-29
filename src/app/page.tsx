import { db } from "@/lib/db"


export default async function Home() {
  await db.set("hello", "world")
  
  return <div className="text-red-500">hello world</div>
}
