import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        bim30
      </h1>
      <p className="mb-4">
        {`BIM 30 es un ERP código abierto desarrollado por Marlon Falcón Hernández, sobre Pascal`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
