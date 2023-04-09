import { Image } from '@packages/packages';

function Logo({ src, height, Width, alt }) {
  return (
    <Image src={src} height={height} width={Width} alt={alt} preview={false} />

  )
}

export default Logo