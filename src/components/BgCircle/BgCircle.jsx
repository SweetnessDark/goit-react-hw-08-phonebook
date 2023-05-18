import { createPortal } from 'react-dom';
import { Area, CirclesItem } from './BgCircle.styled';
const bgRoot = document.querySelector('#bg-root');

export const BgCircle = () => {
  return createPortal(
    <Area>
      <ul>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
      </ul>
    </Area>,
    bgRoot
  );
};
