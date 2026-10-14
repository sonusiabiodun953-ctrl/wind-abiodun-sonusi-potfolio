import { process } from "@/data/portfolio";

export function Process() {
  return (
    <section id="process" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">04 / Process</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl text-ink">
          From the business question to a recommendation someone can use.
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-5">
          {process.map((item) => (
            <li key={item.step} className="border-t-2 border-accent pt-4">
              <p className="font-serif text-2xl text-accent">{item.step}</p>
              <h3 className="mt-3 font-serif text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
