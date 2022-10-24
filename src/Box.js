import React from 'react'


const Box = (props) => {
    const styles={
        backgroundColor:props.on?"black":"white"
   }
  return (
    <div style={styles}className='box' ></div>
  )
}

export default Box