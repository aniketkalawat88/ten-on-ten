import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            text-align: center;
            font-family: sans-serif;
            background-color: #E7FFFF;
          }

          h1, a {
            margin: 0;
            padding: 0;
            text-decoration: none;
          }

          .section {
            padding: 4rem 2rem;
          }

          .section .error {
            font-size: 150px;
            color: #C6A669;
            text-shadow: 
              1px 1px 1px #E7FFFF,    
              2px 2px 1px #E7FFFF,
              3px 3px 1px #E7FFFF,
              4px 4px 1px #E7FFFF,
              5px 5px 1px #E7FFFF,
              6px 6px 1px #E7FFFF,
              7px 7px 1px #E7FFFF,
              8px 8px 1px #C6A669,
              25px 25px 8px rgba(0,0,0, 0.2);
          }

          .page {
            margin: 2rem 0;
            font-size: 20px;
            font-weight: 600;
            color: #C6A669;
          }

          .back-home {
            display: inline-block;
            color: #fff;
            text-transform: uppercase;
            font-weight: 600;
            padding: 0.75rem 1rem 0.6rem;
            transition: all 0.2s linear;
            box-shadow: 0 15px 15px -11px rgba(0,0,0, 0.4);
            background: #C6A669;
            border-radius: 6px;
          }

          .back-home:hover {
            background: #222;
            color: #ddd;
          }
        `}
      </style>
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">Ooops!!! The page you are looking for is not found</div>
        <Link href="/" className="back-home">Back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
