"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

const SignInWithGoogleButton = () => {
  return (
    <Button
      type="button"
      className="w-full"
      onClick={() => {
        toast.info("Loading Google sign in....")
        signInWithGoogle();
      }}
    >
      <Image alt="" width={20} height={20} src={"https://www.svgrepo.com/show/475656/google-color.svg"}/>
      Login with Google
    </Button>
  );
};

export default SignInWithGoogleButton;