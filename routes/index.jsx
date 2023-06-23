import List from "../components/list.jsx";
import Form from "../islands/Form.jsx";
export default function Home() {
  return (
    <html>
      <head>
        <title>ImgUpload</title>
        <link rel="stylesheet" href="styles/styles.css" />
      </head>
      <main>
        <Form />
        <List />
      </main>
    </html>
  )
}
