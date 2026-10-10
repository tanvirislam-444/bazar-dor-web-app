import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth'
 
export async function proxy(request: NextRequest) {
const session = await auth.api.getSession({
    headers: await headers()
})
const user = session?.user
console.log(user)
if(!user){
  return NextResponse.redirect(new URL('/signup', request.url))
}

}
 

export const config = {
  matcher: ['/details/:path*'],
}