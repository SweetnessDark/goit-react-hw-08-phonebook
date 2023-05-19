import styled from 'styled-components';
import { Field } from 'formik';

export const Wrapper = styled.div`
  margin-bottom: 30px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 22px;
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const InputForm = styled(Field)`
  padding: 15px;
  width: 100%;

  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 300ms ease-in-out;

  outline: none;
`;

export const AddBtn = styled.button`
  padding: 16px 32px;

  font-weight: 700;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  background-color: transparent;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 250ms ease-in-out;

  cursor: pointer;

  :hover {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
