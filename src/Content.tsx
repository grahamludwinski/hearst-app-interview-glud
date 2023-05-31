import React from 'react';
import './App.css';

export type ContentType = {
    type: string;
    contents: string;
    position: string;
}

function Content({ type, contents, position }: ContentType) {
  return (
    <div className="row" dangerouslySetInnerHTML={{ __html: contents }}></div>
  );
}

export default Content;
