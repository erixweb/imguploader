import { readFileSync } from "node:fs"

export default function List () {
    let read = readFileSync("images/images.txt", { encoding: "utf-8" })
    read = read.split("\n")
    read.pop()

    return (
        <section id="cards">
            {
                read.map(el => {
                    const [name, ...image] = el.split(":")
                    const content = image.join(":")


                    return (
                        <div className="card">
                            <img src={content} alt={`Imagen de ${name}`} />
                            <h1>
                                {name}
                            </h1>
                        </div>
                    )
                })
            }
        </section>
    )
}