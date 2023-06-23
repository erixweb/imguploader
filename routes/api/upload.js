import { appendFileSync } from "node:fs"
export const handler = {
  async POST(req, _ctx) {
    const form = await req.formData()

    const name = form.get("imgName")
    const content = form.get("image")

    appendFileSync(`images/images.txt`, `${name}: ${content}\n`)

    return new Response("Imagen subida correctamente")
  },
};