'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import "./styles.css";
import { AuroraText } from '@/components/magicui/aurora-text';
import { Mic, Search, SendHorizonal } from 'lucide-react';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/lib/auth-actions";

function LandingPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      console.log(user);
    };
    fetchUser();
  }, []);

  const rotatoryTextInputUI = ["Find my meeting notes from last month...", "What ideas did I come up with yesterday?", "When did I drink coffee today?"]

  return (
    <div className='landing-page-main'>
      <div id="banner" className='banner flex items-center justify-center flex-col h-screen gap-5'>
        <h1 className='text-center mb-2'>Make your brain <br/><AuroraText>searchable</AuroraText></h1>
        <h3 className='text-md font-bold text-neutral-400 w-[30%] text-center'>Capture every thought, note, and idea, and find them in seconds with BrainOS.</h3>
        {user ? (
        <InteractiveHoverButton className='border-neutral-400'>Go to dashboard</InteractiveHoverButton>
        ):(
        <InteractiveHoverButton onClick={() => {
          router.push("/login");
        }} className='border-neutral-400'>Get started</InteractiveHoverButton>
        )}
        <div className="mt-10 w-full max-w-3xl reveal rounded-full shadow-md">
          <div className="glass px-5 py-3 flex items-center justify-between gap-3 shadow-elegant pr-5">
            <div className='flex items-center gap-3'>
              <Search className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground"><WordRotate words={rotatoryTextInputUI} /></span>
            </div>
            <div className='flex items-center gap-5'>
              <Mic className='h-5 w-5 text-muted-foreground'/>
              <div className='bg-black p-3 rounded-full'>
                <SendHorizonal className='h-4 w-4 text-muted-foreground text-white'/>
              </div>
            </div>
          </div>
        </div>
        <h3 className='text-neutral-500 text-sm'>Your second brain who will never let you miss another memory, moment, or meeting</h3>
        <Button className='border border-neutral-400 cursor-pointer hover:bg-black hover:text-white' variant={'outline'}>&darr;&nbsp;&nbsp;Check out what we offer&nbsp;&nbsp;&darr;</Button>
      </div>
      {/* <div id="sec-1" className='h-screen'>
        
      </div> */}
    </div>
  )
}

export default LandingPage