import { useSignal } from "@preact/signals";

export default function Form() {

    const file = useSignal("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg")

    const uploadImage = async (e) => {
        const inputBox = document.getElementById(e.target.id)
        const firstFile = inputBox.files[0]
        const canvas = document.getElementById("canvas")
        const ctx = canvas.getContext("2d")

        const fr = new FileReader()
        fr.onload = firstFile
        await fr.readAsDataURL(firstFile)
        fr.onloadend = () => {
            const img = new Image()
            img.src = fr.result
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            }

            const formData = new FormData()
            formData.append("image", firstFile, firstFile.name)

            fetch(`api/upload`, {
                method: "POST",
                bodyUsed: true,
                body: formData
            })
        }
    }

    return (
        <form>
            <canvas id="canvas" />
            <span id="info"></span>
            <label htmlFor="input-image">Upload</label>
            <input type="file" id="input-image" onChange={uploadImage} />
        </form>
    )
}