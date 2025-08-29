
const longestKindCharacterCount: number = 8; 
type Kind = "info" | "warn" | "error" | "critical";


export default function LogMessage(kind: Kind, text: string): HTMLElement {
  const whitespaces: string = whitespacePadding(kind, longestKindCharacterCount);

  const p = document.createElement('p');
 
  // TODO implement this function returning paragraph elements for a single log statement. 

  return (
    <p className="boot-log-message">
      {`[${<span className={`boot-log-message-kind ${kind}`}>{kind.toUpperCase()}</span>}]${whitespaces}${text}`}
    </p>
  );
}

// this function returns the correct amount of padding to equalize the lenght of the log-message-kinds
// the function returns at least one whitespace!
function whitespacePadding(text: string, longestCharacterCount: number): string {
  const textLength = text.length;

  if (textLength > longestCharacterCount)
    throw new Error("Assertion failed: got a text that is longer than longestCharacterCount!");

  return ' '.repeat(longestCharacterCount - textLength);
}