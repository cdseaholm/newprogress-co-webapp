import Image from "next/legacy/image"

export default function ImageFormat({imSize, image, index}: {imSize: number, image: string, index: number}) {
    return (
        <div style={{ position: 'relative', width: `${imSize}px`, height: `${imSize}px`}} key={index}>
            <Image src={image} alt={`Logo Version ${index}`} width={imSize} height={imSize} className='rounded-full' placeholder='blur' blurDataURL={image} priority/>
        </div>
    )
}