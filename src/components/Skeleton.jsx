import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="9" y="9" rx="3" ry="3" width="127" height="22" />
    <rect x="9" y="43" rx="3" ry="3" width="126" height="55" />
    <circle cx="109" cy="101" r="20" />
    <circle cx="39" cy="97" r="20" />
  </ContentLoader>
);

export default Skeleton;
