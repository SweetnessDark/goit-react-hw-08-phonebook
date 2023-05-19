import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const ContactsItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border-radius: 5px;
`;

export const Name = styled.span`
  text-align: left;
  font-size: 22px;
  color: #fff;
`;

export const Number = styled.span`
  text-align: right;
  font-weight: 500;
  font-size: 22px;
  color: #fff;
`;

export const DelBtn = styled.button`
  padding: 5px 15px;
  flex-basis: 15%;
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
    color: white;
    background-color: dimgray;
  }
`;
