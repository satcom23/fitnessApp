import React, { useContext, useState } from 'react';
import { ScrollMenu, VisibilityContext, ScrollContainer } from 'react-horizontal-scrolling-menu';

import { Box } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {

  const [position, setPosition] = useState(0)
  const [selected, setSelected] = useState([])
  const isItemSelected = (id) => !!selected.find((el) => el === id)

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id);
    console.log('arrow clicked');
    setSelected((currentSelected) =>
      itemSelected ? currentSelected.filter((el) => el !== id) : currentSelected.concat(id)
    )
  }
  const muscleGroup = ['Forearms', 'Quadriceps', 'Abdominals', 'Lats', 'Middle Back', 'Lower Back', 'Shoulders', 'Biceps']

  const RightArrow = () => {
    console.log('RightArrow rendering');
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
    const handleClick = () => {
      if (!isLastItemVisible) {
        setPosition((prevPosition) => prevPosition + 100);
        scrollNext();
        console.log(position)

      }
    };

    return (
      <button
        // sx={{
        //   cursor: 'pointer'
        // }}
        onClick={handleClick}
        className="right-arrow"
        disabled={isLastItemVisible}>
        <img src={RightArrowIcon} alt="right-arrow" />
      </button>
    )

  }
  const LeftArrow = () => {
    console.log('LeftArrow rendering');
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
    const handleClick = () => {
      if (!isFirstItemVisible) {
        setPosition((prevPosition) => prevPosition - 100);
        scrollPrev();
        console.log(position)

      }
    };
    return (
      <button
        // sx={{
        //   cursor: 'pointer'
        // }}
        disabled={isFirstItemVisible}
        onClick={handleClick}
        className="left-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </button>
    )
  }

  return
  //  (
  //   <ScrollContainer>
  //     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} selected={selected} isItemSelected={isItemSelected} translate={position}>
  //       {muscleGroup.map((item) => (
  //         <Box
  //           key={item.id || item}
  //           itemID={item.id || item}
  //           title={item.id || item}
  //           m="0 40px"
  //           onClick={handleClick(item)}
  //           selected={isItemSelected(item)}
  //         >
  //           {bodyParts ? (<BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />) : (<ExerciseCard exercise={item} />)}
  //         </Box>
  //       ))}
  //     </ScrollMenu>
  //   </ScrollContainer>

  // )
};

export default HorizontalScrollbar;