"use client"
import React from 'react'
import { Home, Share2, Menu, Hand } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-16 md:w-20 z-50 flex flex-col items-center justify-center gap-8 bg-black/10 backdrop-blur-sm">
      <Home className="hover:text-teal-400 cursor-pointer" />
      <Menu className="hover:text-teal-400 cursor-pointer" />
      <Hand className="hover:text-teal-400 cursor-pointer" />
      <Share2 className="hover:text-teal-400 cursor-pointer" />
    </aside>
  )
}

export default Sidebar
