import { Link, useRouter } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export default function Header() {
  return (
    <header className="bg-base-300">
      <nav className="navbar">
        <div className="navbar-start">
          <div className="px-2">
            <Link to="/">
              Home
            </Link>
          </div>

          <div className="px-2 flex items-center gap-1">
            
            <Link to="/todos">
                Todos
            </Link>
          </div>

        </div>

      </nav>
    </header>
  )
}