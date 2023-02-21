import React, { useState } from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import Search from '../components/Search'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('')

  return (
    <Box>
      <HeroBanner />
      <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home