import styled from '../../utils/styled';

const PaddingView : any = styled.View<{ size: number }>`
  flex-grow: ${({ size }) => size};
`;

export default PaddingView;
