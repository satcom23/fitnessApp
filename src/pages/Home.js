import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import Search from '../components/Search'
import Exercises from '../components/Exercises'

import { excerciseOptions, fetchData } from '../utils/fetchData'


const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('')

  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://api.api-ninjas.com/v1/exercises?muscle=', excerciseOptions)

      // const parsedBodyParts = bodyPartsData.map(item => item.muscle)


      setBodyParts([...bodyPartsData])

    }
    fetchExercisesData()
  }, [])

  return (
    <Box>
      <HeroBanner />
      <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} bodyParts={bodyParts} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} bodyParts={bodyParts} />
    </Box>
  )
}

export default Home