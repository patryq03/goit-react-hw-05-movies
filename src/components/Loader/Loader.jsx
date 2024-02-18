import { ThreeCircles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <ThreeCircles
  color="red"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
  </LoaderContainer>
);