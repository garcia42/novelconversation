'use client';

import Image from 'next/image';
import React from 'react';

export default function ComponentPage() {
  return (
    <main>
      {/* Title and image */}
      <div className='flex'>
        <div>
          <h1>NovelConversation</h1>
          <h3>
            📚 Discover a New Dimension of Reading: Step beyond the pages and
            into engaging discussions about your favorite books
          </h3>
        </div>
        <Image alt='meeting' src='images/zoom.jpg' />
      </div>
    </main>
  );
}
