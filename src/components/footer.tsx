import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer text-1x1 md:text-base p-4 w-full fixed bottom-0 flex flex-col items-center">
      <a href="https://github.com/ElMalditoEmi" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="GitHub" />
      </a>
      <p className='pt-2'>&copy; {new Date().getFullYear()} ElMalditoEmi. All rights reserved.</p>
    </div>
  );
};

export default Footer;