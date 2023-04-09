import { Image } from '@packages/packages'

function Img({ src, alt }) {
    return (
        <Image src={src} width={width} height={height} alt={alt} />
    )
}

export default Img