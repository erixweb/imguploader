import { useSignal } from "@preact/signals";

export default function Form () {

    const file = useSignal("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg")

    const uploadImage = (e) => {
        const inputBox = document.getElementById(e.target.id)
        const firstFile = inputBox.files[0]
        const canvas = document.getElementById("canvas")
        const ctx = canvas.getContext("2d")

        const fr = new FileReader()
        fr.onload = firstFile
        fr.readAsDataURL(firstFile)

        const img = new Image()
        img.src = fr.result
        img.onload = () => {
            ctx.drawImage(img, 0, 0)
        }
        /*
        const formData = new FormData()
        formData.append("image", URL.createObjectURL(firstFile), firstFile.name)


        file.value = URL.createObjectURL(firstFile)
        fetch(`api/upload`, {
            method: "POST",
            body: firstFile
        })

        console.log(firstFile)
        */
    }

    return (
        <form>
            <canvas width="100" height="100" id="canvas"/>
            <span id="info"></span>
            <label htmlFor="input-image">Upload</label>
            <input type="file" id="input-image" onChange={uploadImage}/>
        </form>
    )
}