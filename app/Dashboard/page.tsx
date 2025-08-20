'use client'
import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import DashboardPage from "./comps/DashboardPage";
import { useCounterStore } from "../store";
import { Brain, MoonStar, PersonStandingIcon, Sun, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import LoginButton from "@/components/LoginLogoutButton";

function Page() {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();
  const setTheme = useCounterStore((state) => state.setTheme);
  const { theme } = useCounterStore()

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      // console.log(user);
    };
    fetchUser();
  }, []);

  return (
    <div className="dashboard-main h-screen overflow-scroll">
      {user ? (
        <DashboardPage/>
      ):(
        <div className="flex items-center justify-center h-full">
          <DotLottieReact
            src="https://lottie.host/4a659599-682c-4a9c-855d-680c9b017e11/bsLqGvFkqy.lottie"
            className="h-14 w-auto w-fit"
            loop
            autoplay
          />
        </div>
      )}
      {/* -------------------------------- Theme Switching + Profile — FIXED RIGHT ------------------------ */}
      <div className='fixed top-6 right-7 flex items-center gap-8 z-2'>
        {theme == "dark" ? (
          <Sun onClick={() => {
            setTheme("light");
          }}/>
        ):(
          <MoonStar onClick={() => {
            setTheme("dark");
          }}/>
        )}
        <Dialog>
          <DialogTrigger asChild>
            <UserRound/>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription>
                This action cannot be undone.<br/><br/>
                <LoginButton/>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      {/* -------------------------------------- Guide — FIXED CENTER -------------------------------------- */}
      <div className="fixed top-7 w-full flex items-center justify-center left-0">
        <h1 className="border-b border-neutral-700 hover:border-neutral-500 transition-all cursor-pointer">How to use</h1>
      </div>
      {/* -------------------------------------- Title of APP — FIXED LEFT ------------------------------------ */}
      <div className="fixed left-7 top-7">
        <div className='flex items-center gap-2'>
          <Brain/>
          <h3 className='text-xl font-bold'>BrainOS</h3>
        </div>
      </div>
    </div>
  )
}

export default Page