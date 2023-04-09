import { Link } from '@packages/packages';


const Linked = ({ href, title }) => {
  return (
    <Link href={href} >{title}</Link>
  )
}

export default Linked