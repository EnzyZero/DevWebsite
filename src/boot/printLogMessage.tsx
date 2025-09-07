
const longestKindCharacterCount: number = 8; 
export type Kind = "info" | "warn" | "error" | "critical";


export default function printLogMessage(kind: Kind, text: string): HTMLElement {
  const whitespaces: string = whitespacePadding(kind, longestKindCharacterCount);

  const logMessageKind: string = `<span class="boot-log-message-kind ${kind}">${kind.toUpperCase()}</span>`;

  const p = document.createElement('p');
  p.classList = 'boot-log-message';

  //p.innerHTML = `[${logMessageKind}]${whitespacePadding(kind, longestKindCharacterCount)}`;
  p.innerHTML = `[${logMessageKind}]`;
  p.innerHTML += whitespaces;
  p.innerHTML += text;

  return p; 
}

// this function returns the correct amount of padding to equalize the lenght of the log-message-kinds
// the function returns at least one whitespace!
function whitespacePadding(text: string, longestCharacterCount: number): string {
  const textLength = text.length;

  if (textLength > longestCharacterCount)
    throw new Error("Assertion failed: got a text that is longer than longestCharacterCount!");

  return '&nbsp'.repeat(longestCharacterCount - textLength + 1);
}