import { auth } from "auth"
import { NextResponse } from "next/server"

export async function GET() {
  const session = await auth()
  
  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: "您需要先登录" }),
      {
        status: 401,
        headers: { "content-type": "application/json" }
      }
    )
  }

  return NextResponse.json({
    content: "这是受保护的内容。",
    session
  })
}