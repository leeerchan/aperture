import React from 'react'
import './index.less'
import Header from '@/components/header'
import Selection from './components/selection'
import Operation from './components/operation'

const File = () => {
  const a = 100;
  
  return (
    <div className='file_ctn'>
      <Header/>
      <div className='core_ctn'>
        <Selection/>
        <Operation/>
      </div>
    </div>

  )
}

export default File