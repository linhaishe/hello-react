import React from 'react';

export function Mark({ name, keyword }: { name: string; keyword: string }) {
  if (!keyword) {
    return <div>{name}</div>;
  }
  const arr = name.split(keyword);
  return (
    <>
      {arr.map((str, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={index}>
          {str}
          {index === arr.length - 1 ? null : <span style={{ color: '#257AFD' }}>{keyword}</span>}
        </span>
      ))}
    </>
  );
}
