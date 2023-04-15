import React from 'react'
import {FcBullish} from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINK } from '../../Lib/consts/navigation'
import SidebarLinks from './SidebarLinks'



function Sidebar() {
  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white '>
       <div className='flex items-center gap-2 px-1 py-3 '>
        {/* Logo */}
        <FcBullish fontSize={24}></FcBullish>
        <span className='text-neutral-100 text-lg'>Billing ERP</span>
       </div>
        <div className='flex-1'>
            {DASHBOARD_SIDEBAR_LINK.map((item) =>(
                  <div key={item.key}>{item.label}
                  </div>
                // <div>
                //     <SidebarLinks key={item.key} item={item.icon}/> 
                // </div>
            )

            )}
        </div>
        <div className=''>Bottom</div>
    </div>      
  )
}
export default Sidebar