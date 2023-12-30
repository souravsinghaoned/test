import Image from "next/image";
import img from '../../public/1.jpg'
function PetsPage() {
    return (
        <>
            <Image
                src='/1.jpg'
                alt="pet"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" class="bi bi-image" viewBox="0 0 16 16"><path d="M0 0h16v16H0z"/></svg>'
                ).toString('base64')}`}
                width={280}
                height={420}
            />

            {
                ['1', '2', '3', '4', '5'].map(path => {
                    return (
                        <div key={path}>
                            <Image
                                src={`/${path}.jpg`}
                                alt="pet"
                                width={280}
                                height={420}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}
export default PetsPage;