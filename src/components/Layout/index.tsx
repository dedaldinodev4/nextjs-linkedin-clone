import React, { useState, useEffect } from 'react';

import { MobileHeader } from '../MobileHeader';
import {Header } from '../DesktopHeader';
import { AddBanner } from '../AdBanner';
import { LeftColumn } from '../LeftColumn';
import { MiddleColumn } from '../MiddleColumn';
import { RightColumn } from '../RightColumn';

import { Container } from './styled';

export const Layout = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
    
      <MobileHeader />
      <Header />

    <span>{!isLoading && <AddBanner />}</span>

      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
}
