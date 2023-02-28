import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import { Typography, Box } from '@mui/material';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

import "./hideScrollbar.css";


const muscleGroup = ['Forearms', 'Quadriceps', 'Abdominals', 'Lats', 'Middle Back', 'Lower Back', 'Shoulders', 'Biceps'];
const getItems = () =>
  muscleGroup
    .map((muscle, ind) => ({ id: `element-${ind}`, muscle }));




function Categories({ data, bodyParts, setBodyPart, bodyPart }) {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  // const isItemSelected = (id) => !!selected.find((el) => el === id);

  // const handleClick =
  //   (id) =>
  //     ({ getItemById, scrollToItem }) => {
  //       const itemSelected = isItemSelected(id);

  //       setSelected((currentSelected) =>
  //         itemSelected
  //           ? currentSelected.filter((el) => el !== id)
  //           : currentSelected.concat(id)
  //       );
  //     };
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ muscle, id }) => (
        <Box
          itemId={id} // NOTE: itemId is required for track items
          title={muscle}
          key={id}
          m="0 40px"
        // onClick={handleClick(id)}
        // selected={isItemSelected(id)}
        >
          {items ?(<BodyPart item={muscle} setBodyPart={setBodyPart} bodyPart={bodyPart} />)
            : (<ExerciseCard exercise={muscle} />)}
        </Box>
      ))}

    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button className='left-arrow' disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button className='right-arrow' disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="left-arrow" />
    </button>
  );
}

function Card({ onClick, selected, title, itemId, bodyParts, setBodyPart, bodyPart }) {

  // const visibility = React.useContext(VisibilityContext);

  return (

    // <div
    //   onClick={() => onClick(visibility)}

    // >
    <div
      // tabIndex={0}
      style={{
        width: '460px',
      }}
      className="card">
      <BodyPart item={title} bodyParts={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    </div>

    // </div>

  );
}

export default Categories;