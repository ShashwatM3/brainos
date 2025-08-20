import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/lib/auth-actions"
import SignInWithGoogleButton from "./SignInWithGoogleButton"

export function LoginForm() {
  return (
    <Card className="mx-auto w-[30vw]">
      <CardHeader>
        <CardTitle className="text-2xl mb-3">Login</CardTitle>
        <CardDescription>
          {/* Enter your email below to login to your account */}
          Get access to this platform with your google account. Simple and easy.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="">
            <div className="grid gap-4">
              {/* <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" formAction={login} className="w-full">
                Login
              </Button> */}
              {/* <h3 className="font-semibold">Note: <span className="text-red-500">We currently only have Google Auth</span></h3> */}
             <SignInWithGoogleButton/> 
            </div>
        </form>
        {/* <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div> */}
      </CardContent>
    </Card>
  )
}
