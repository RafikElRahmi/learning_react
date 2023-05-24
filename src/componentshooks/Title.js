import React from 'react'

const Title = () => {
  console.log('from title');
  return (
    <div>useCallBack test components</div>
  )
}

export default React.memo(Title)