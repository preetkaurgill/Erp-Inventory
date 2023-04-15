import React from 'react'

function SidebarLinks({ item }) {
  return (
    <div>
                     <link to={item.path}>
            <span className='text-xl'>{item.icon}</span>
        </link>

        </div>
  )
}

export default SidebarLinks