/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-param-reassign */
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SizeButton({ text, selectSize, isSelected }) {
  const [selected, setSelected] = useState(isSelected);

  function handleClick() {
    setSelected(!selected);
    selectSize(text);
  }

  return (
    <SizeButtonStyled selected={selected} onClick={handleClick}>
      {text}
    </SizeButtonStyled>
  );
}

SizeButton.propTypes = {
  text: PropTypes.node.isRequired,
  selectSize: PropTypes.node.isRequired,
  isSelected: PropTypes.node.isRequired,
};

const SizeButtonStyled = styled.button`
  font-weight: 600;
  font-size: 15px;
  padding: 0;
  height: 26px;
  width: 24px;
  text-align: center;
  margin-left: 15px;
  border: 0;
  border-radius: 3px;
  background-color: ${(props) => (props.selected ? '#183E63' : '#E5E5E5')};
  color: ${(props) => (props.selected ? '#ffffff' : '#000000')};
`;

export default SizeButton;
