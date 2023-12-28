export default function Section({ id, title, children }) {
  return (
    <section id={id} className='resume-section'>
      <div className='resume-section-content'>
        {title && <h2 className='mb-5'>{title}</h2>}

        {children}
      </div>
    </section>
  )
}
