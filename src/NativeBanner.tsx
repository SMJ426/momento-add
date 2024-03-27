import React from 'react';

type TProps = {
  imageUrl: string;
  title: string;
  clickUrl: string;
  description: string;
  cta: string;
  logoUrl: string;
  adChoiceImageUrl: string;
  adChoiceClickUrl: string;
};

const NativeBanner: React.FC<TProps> = ({
  imageUrl,
  title,
  clickUrl,
  description,
  cta,
  logoUrl,
  adChoiceClickUrl,
  adChoiceImageUrl,
}) => {
  return <div>hello</div>;
};

export default NativeBanner;
