import { useCounterStore } from '@/app/store';
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import { Camera, Mic, Moon, MoonIcon, MoonStar, Sun, Text } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function DashboardPage() {
  const setTheme = useCounterStore((state) => state.setTheme);
  const setIndexData = useCounterStore((state) => state.setIndexData);
  const { theme, indexData, userData } = useCounterStore()
  const supabase = createClient();

  function formatString(str: string) {
    return str
      .toLowerCase()                     // 1. Lowercase everything
      .replace(/\s+/g, '-')              // 2. Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, '');       // 3. Remove all other special characters
  }

  async function createIndex() {
    const res = await fetch('/api/createIndex', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        indexName: formatString(userData.email),
      }),
    });

    const data = await res.json();
    
    if (!res.ok) {
      console.error('Request failed:', data.error || 'Unknown error');
      if (data.created) {
        console.log("User index created despite HTTP error");
        return;
      }
      return;
    }
  
    // console.log(data);
    if (data.created) {
      console.log("User index created")
    }
  }

  async function checkIndex() {
    const res = await fetch('/api/checkIndex', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        indexName: formatString(userData.email),
      }),
    });

    if (!res.ok) {
      console.error('Request failed');
      return;
    }
  
    const data = await res.json();
    // console.log(data);

    if (!(data.exists)) {
      createIndex()
    } else {
      setIndexData(data.description)
    }
  }

  useEffect(() => {
    if (Object.keys(userData).length > 0 && Object.keys(indexData).length==0) {
      checkIndex()
    }
  }, [userData])
  return (
    <div className={`dashboard-page-main flex items-center justify-center h-full flex-col gap-5`}>
      <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance'>So what's the update?</h1>
      <h3 className='text-neutral-500 mb-4'>Add a moment in your life right now</h3>
      {/* -------------------------------------- Input icons -------------------------------------- */}
      <div className='flex items-center justify-center gap-3'>
        <div className={`p-3 rounded-lg flex items-center cursor-pointer justify-center ${theme == "dark" ? "border p-4 hover:bg-neutral-900 transition-all" : "border border-neutral-200"} shadow-md hover:shadow-sm`}>
          <Mic/>
        </div>
        <div className={`p-3 rounded-lg flex items-center cursor-pointer justify-center ${theme == "dark" ? "border p-4 hover:bg-neutral-900 transition-all" : "border border-neutral-200"} shadow-md hover:shadow-sm`}>
          <Camera/>
        </div>
        <div className={`p-3 rounded-lg flex items-center cursor-pointer justify-center ${theme == "dark" ? "border p-4 hover:bg-neutral-900 transition-all" : "border border-neutral-200"} shadow-md hover:shadow-sm`}>
          <Text/>
        </div>
      </div>
      {/* ---------------------------------------- Buttons -------------------------------------- */}
      <div className='flex items-center justify-center gap-3 mt-7'>
        <Button variant={'outline'}>Go to BrainGPT</Button>
      </div>
    </div>
  )
}

export default DashboardPage