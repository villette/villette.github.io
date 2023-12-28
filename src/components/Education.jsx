export default function Education({ label, school, description, date }) {
  return (
    <div className='d-flex flex-column flex-md-row justify-content-between mt-5'>
      <div className='flex-grow-1'>
        <h3 className='mb-0'>{label}</h3>
        <div className='subheading'>{school}</div>
        <div>{description}</div>
      </div>

      <div className='flex-shrink-0'>
        <span className='text-primary'>{date}</span>
      </div>
    </div>
  )
}
