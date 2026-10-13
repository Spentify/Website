import type { ReactNode } from "react";

function inlineMarkdown(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a key={index} href={link[2]} className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 transition hover:decoration-blue-700">
          {link[1]}
        </a>
      );
    }

    return part;
  });
}

export default function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/);

  return (
    <div className="mt-10 text-[1.0625rem] leading-8 text-slate-700">
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return <h2 key={index} className="mb-4 mt-12 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{inlineMarkdown(block.slice(3))}</h2>;
        }

        const lines = block.split("\n");
        if (lines.every((line) => /^\d+\. /.test(line))) {
          return (
            <ol key={index} className="mb-6 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-blue-700">
              {lines.map((line) => <li key={line}>{inlineMarkdown(line.replace(/^\d+\. /, ""))}</li>)}
            </ol>
          );
        }

        if (lines.every((line) => line.startsWith("- "))) {
          return (
            <ul key={index} className="mb-6 list-disc space-y-2 pl-6 marker:text-blue-700">
              {lines.map((line) => <li key={line}>{inlineMarkdown(line.slice(2))}</li>)}
            </ul>
          );
        }

        return <p key={index} className="mb-6">{inlineMarkdown(block.replace(/\n/g, " "))}</p>;
      })}
    </div>
  );
}
