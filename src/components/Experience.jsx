import React from 'react';

export default function Experience({ title, company, location, tasks, dates }) {
  return (
    <div className='d-flex flex-column flex-md-row justify-content-between mt-5'>
      <div className='flex-grow-1'>
        <h3 className='mb-0'>{title}</h3>

        <div className='subheading mb-3'>
          <a href={company.website} target='_blank' rel='noopener noreferrer'>{company.name}</a> · {location}
        </div>

        <p>
          {tasks.map((item, index) => (
            <React.Fragment key={index}>{item} <br /></React.Fragment>
          ))}
        </p>
      </div>

      <div className='flex-shrink-0'>
        <span className='text-primary'>{dates}</span>
      </div>
    </div>
  )
}
