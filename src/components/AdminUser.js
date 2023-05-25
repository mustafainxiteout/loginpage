import React from 'react'
import HeaderComponent from './HeaderComponent'
import Footercomponent from './FooterComponent'
import Usecases from './Usecases'

function AdminUser() {
  return (
    <section className='googlesans text-select-one'>
      <HeaderComponent/>
      <div className='overflow-auto custom-scroll' style={{marginTop:"90px",maxHeight:"84vh"}}>
      <Usecases/>
      </div>
      <Footercomponent/>
    </section>
  )
}

export default AdminUser