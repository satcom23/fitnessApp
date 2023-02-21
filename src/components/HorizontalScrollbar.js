import React from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box } from '@mui/material'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  // console.log(data)
  // let excercies = data.map(item => console.log(item))
  // console.log(excercies)
  return (
    <>
      <ScrollMenu>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m='0 40px'
          >
            <BodyPart item={item.muscle} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Box>
        ))}
      </ScrollMenu>
    </>

  )
}

export default HorizontalScrollbar