import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => (dir === 'col' ? 'column' : 'row')};
  justify-content: ${({ row }) =>
    row === 'center' ? 'center' :
    row === 'start' ? 'flex-start' :
    row === 'end' ? 'flex-end' :
    row === 'between' ? 'space-between' :
    row === 'around' ? 'space-around' :
    row === 'evenly' ? 'space-evenly' :
    'flex-start'};

  align-items: ${({ col }) =>
    col === 'center' ? 'center' :
    col === 'start' ? 'flex-start' :
    col === 'end' ? 'flex-end' :
    col === 'baseline' ? 'baseline' :
    col === 'stretch' ? 'stretch' :
    'stretch'};

  width: ${({ width }) => width || 'fit-content'};
  height: ${({ height }) => height || 'fit-content'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ radius }) => radius || '0'};
`;

export default FlexBox;