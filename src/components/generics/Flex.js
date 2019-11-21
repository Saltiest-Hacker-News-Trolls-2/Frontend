/// external modules ///
import styled , { css } from 'styled-components';

/***************************************
  COMPONENT
***************************************/
const Flex = (X) => styled (X) `
  display: flex;

  /* flex-direction */
  ${(props) => ((props.row || props.lr) && css `
    flex-direction: row;
  `)}
  ${(props) => ((props.col || props.tb) && css `
    flex-direction: column;
  `)}
  ${(props) => (props.rl && css `
    flex-direction: row-reverse;
  `)}
  ${(props) => (props.bt && css `
    flex-direction: column-reverse;
  `)};

  /* flex-wrap */
  ${(props) => {
    if (props.wrap) {
      return (css `flex-wrap: wrap;`);
    } else {
      return (css `flex-wrap: nowrap;`);
    }
  }};

  /* align lines across box : align-content */
  ${(props) => {
    switch (props.lines) {
      case 'flex-start' :
      case 'start' :
        return (css `align-content: flex-start;`);
      case 'center' :
      case 'middle' :
        return (css `align-content: center;`);
      case 'flex-end' :
      case 'end' :
        return (css `align-content: flex-end;`);
      case 'space-around' :
      case 'around' :
        return (css `align-content: space-around;`);
      case 'space-between' :
      case 'between' :
        return (css `align-content: space-between;`);
      case 'space-evenly' :
      case 'evenly' :
      case 'space-equally' :
      case 'equally' :
        return (css `align-content: space-evenly;`);
      case 'stretch' :
        return (css `align-content: stretch;`);
      default :
        return (css ``);
    }
  }}

  /* align items along lines : justify-content */
  ${(props) => {
    if (props.items) {
      switch (props.items.along) {
        case 'flex-start' :
        case 'start' :
          return (css `justify-content: flex-start;`);
        case 'center' :
        case 'middle' :
          return (css `justify-content: center;`);
        case 'flex-end' :
        case 'end' :
          return (css `justify-content: flex-end;`);
        case 'space-around' :
        case 'around' :
          return (css `justify-content: space-around;`);
        case 'space-between' :
        case 'between' :
          return (css `justify-content: space-between;`);
        case 'space-evenly' :
        case 'evenly' :
        case 'space-equally' :
        case 'equally' :
          return (css `justify-content: space-evenly;`);
        default :
          return (css ``);
      }
    } else {
      return (css ``);
    }
  }}

  /* align items across lines : align-items */
  ${(props) => {
    if (props.items) {
      switch (props.items.across) {
        case 'flex-start' :
        case 'start' :
          return (css `align-items: flex-start;`);
        case 'center' :
        case 'middle' :
          return (css `align-items: center;`);
        case 'flex-end' :
        case 'end' :
          return (css `align-items: flex-end;`);
        case 'stretch' :
          return (css `align-items: stretch;`);
        default :
          return (css ``);
      }
    } else {
      return (css ``);
    }
  }}
`

/**************************************/
export default Flex;
