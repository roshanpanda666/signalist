import Header from '@/components/header'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='min-h-screen text-gray-400'>
        {/* header */}
        <Header></Header>
        <div className='container py-10'>
            {children}
        </div>
    </main>
  )
}

export default layout
