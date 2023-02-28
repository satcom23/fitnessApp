import React, { useEffect, useState } from 'react'
import { Pagination } from "@mui/material"
import { Box, Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'

import { excerciseOptions, fetchData } from "../utils/fetchData"

const Exercises = ({ exercises, setExercises, bodyPart, bodyParts }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://api.api-ninjas.com/v1/exercises', excerciseOptions);
      } else {
        exercisesData = await fetchData("https://api.api-ninjas.com/v1/exercises?muscle=" + bodyPart, excerciseOptions);
      }

      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart])
  console.log(typeof (bodyPart))
  console.log(exercises)
  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px ' } }}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb='46px'>

      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems='center'>
        {bodyParts.length > 9 && (
          <Pagination
            variant='outlined'
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(bodyParts.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'

          />
        )}

      </Stack>
    </Box>
  )
}

export default Exercises