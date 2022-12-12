import styled from "styled-components";

export const VideoSectionContainer = styled.section`
  height: 100vh;
  width: 100%;

  position: relative;

  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
