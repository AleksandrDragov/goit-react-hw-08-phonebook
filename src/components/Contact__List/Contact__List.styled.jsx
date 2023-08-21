import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const MatButton = Button;

export const ContactList = styled.ul`
  padding-left: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-betwen;
  gap: 15px;
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const DeleteBtn = styled(MatButton)`
  padding-top: 7px;
  margin-top: auto;
  margin-left: auto;
  border-radius: 10px;
  padding-right: 0 auto;
  &:hover {
    background-color: #add8e6;
    color: black;
  }
`;
