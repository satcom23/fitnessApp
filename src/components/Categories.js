import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import { Typography } from '@mui/material';

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

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
      ({ getItemById, scrollToItem }) => {
        const itemSelected = isItemSelected(id);

        setSelected((currentSelected) =>
          itemSelected
            ? currentSelected.filter((el) => el !== id)
            : currentSelected.concat(id)
        );
      };
  console.log(items)
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ muscle, id }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={muscle}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}

    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Typography disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Typography disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
}

function Card({ onClick, selected, title, itemId, bodyParts, setBodyPart, bodyPart }) {
  const visibility = React.useContext(VisibilityContext);

  return (

    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '360px',
      }}
      tabIndex={0}
    >
      {/* {console.log(title)} */}
      <div className="card">
        <BodyPart item={title} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </div>
      {/* <div
        style={{
          height: '200px',
        }}
      /> */}
    </div>

  );
}

export default Categories;