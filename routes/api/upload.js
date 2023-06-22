import { writeFileSync } from "node:fs"

export const handler = (_req, _ctx) => {
  console.log(_req)
  writeFileSync(`./images/${Math.random()}.webp`, "E", (e) => {
    if (e) {
      console.log(e)
    }
  })

  return new Response("202")
}