export default function Skills({ title, items }) {
  return (
    <>
      <div className='subheading mb-3'>{title}</div>

      <ul className='fa-ul'>
        {items.map((item, index) => (
          <li key={index}>
            <span className='fa-li'><i className={item.icon}></i></span>
            {item.label}
          </li>
        ))}
      </ul>
    </>
  )
}
