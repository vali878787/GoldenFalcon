interface Props {
  content: string;
}

const headingPattern = /^\d+(?:\.\d+)?(?:-|\.)\s+.+/;

export default function RawArticleContent({ content }: Props) {
  return (
    <div className="space-y-5 whitespace-pre-wrap text-lg leading-8 text-gray-700 text-justify">
      {content.split(/\r?\n/).map((line, index) => {
        if (headingPattern.test(line.trim())) {
          return (
            <h2 key={index} className="pt-8 text-3xl font-bold text-[#0F2E4D] text-left">
              {line}
            </h2>
          );
        }

        return line.trim() ? <p key={index}>{line}</p> : null;
      })}
    </div>
  );
}
