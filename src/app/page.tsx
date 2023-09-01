'use client';

import Image from 'next/image';
import * as React from 'react';

import ConvertForm from '@/components/ConvertForm';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main className='mx-auto max-w-7xl'>
      {/* Title and image */}
      <div className='border-b-1 mx-4 my-10 flex flex-wrap items-center border-black md:mx-16 md:my-24'>
        <div className='mx-3 my-auto flex-1'>
          <h1 className='font-garamond my-2 text-center text-3xl lg:text-6xl'>
            NovelConversation
          </h1>
          <h4 className='max-w-lg text-center font-normal'>
            📚 Discover a New Dimension of Reading: Step beyond the pages and
            into engaging video discussions about your favorite books
          </h4>
          <div className='my-2'>
            <ConvertForm />
          </div>
        </div>
        <Image
          className='flex-1 md:mt-6'
          width={200}
          height={200}
          alt='meeting'
          src='/images/bookCall.jpg'
        />
      </div>
      {/* Join Live or Schedule Ahead */}
      <div className='flex flex-wrap'>
        <Image
          className='hidden flex-1 sm:block'
          width={200}
          height={200}
          alt='meeting'
          src='/images/coffeeBook.jpg'
        />
        <div className='mx-7 my-auto flex-1 md:mx-16'>
          <h1 className='mb-2 text-2xl lg:text-3xl'>
            Join Live or Schedule Ahead
          </h1>
          <h4 className='font-normal'>
            🎙️ Whether you're a spontaneous conversationalist or a meticulous
            planner, we've got you covered. Hop into ongoing live video talks or
            schedule discussions in advance to fit your schedule perfectly.
          </h4>
        </div>
      </div>
      {/* Connect with Fellow Book Enthusiasts */}
      <div className='flex flex-wrap'>
        <div className='mx-7 my-auto flex-1 md:mx-16'>
          <h1 className='mb-2 mt-8 text-2xl lg:text-3xl'>
            Connect with Fellow Book Enthusiasts
          </h1>
          <h4 className='font-normal'>
            🌎 Forge meaningful connections with like-minded individuals who
            share your passion for literature. Explore diverse perspectives,
            learn from others, and create lasting friendships through your
            mutual love for books.
          </h4>
        </div>
        <Image
          className='flex-1'
          width={300}
          height={300}
          alt='meeting'
          src='/images/businessBooks.jpg'
        />
      </div>
      {/* CTA */}
      <div className='flex flex-wrap'>
        <Image
          className='hidden flex-1 sm:block'
          width={300}
          height={300}
          alt='meeting'
          src='/images/goodreads2.jpeg'
        />
        <div className='mx-7 my-auto flex-1 md:mx-16'>
          <h1 className='mb-2 mt-8 text-2xl lg:text-3xl'>
            Goodreads Integration
          </h1>
          <h4>
            Seamlessly Connect with Goodreads to Stay Notified about Exciting
            Events for Your Favorite Reads
          </h4>
        </div>
      </div>
      <div className='flex'>
        <div className='mx-auto my-2 place-items-center items-center justify-center self-center'>
          <ConvertForm />
        </div>
      </div>
    </main>
  );
}
