import React from 'react'

const page = async ({params}) => {
    const {id} = await params
  return (
    <div>page</div>
  )
}

export default page