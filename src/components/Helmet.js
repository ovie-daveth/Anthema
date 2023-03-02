

export default function Helmet(props) {
    document.title = 'Gross - ' + props.title
  return (
    <div>
        {props.children}
    </div>
  )
  
}
