/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import arrowLeft from '../img/arrowLeft.svg';
import arrowRight from '../img/arrowRight.svg';

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? 'right: 25px' : 'left: 25px'};
      height: 5px;
      width: 5px;
      justify-content: center;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        width: 20px;
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
    `}
    // eslint-disable-next-line react/jsx-closing-bracket-location
  >
    {direction === 'right' ? (
      <img src={arrowRight} alt="arrow right" />
    ) : (
      <img src={arrowLeft} alt="arrow left" />
    )}
  </div>
);

export default Arrow;
