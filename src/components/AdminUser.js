import React from 'react'
import HeaderComponent from './HeaderComponent'
import Footercomponent from './FooterComponent'

function AdminUser({content,headertitle}) {
  return (
    <section className='googlesans text-select-one position-fixed'>
      <HeaderComponent headertitle={headertitle}/>
      <div className='overflow-auto custom-scroll' style={{marginTop:"90px",minHeight:"80vh",maxHeight:"87vh"}}>
      {content}
      </div>
      <Footercomponent/>
    </section>
  )
}

export default AdminUser