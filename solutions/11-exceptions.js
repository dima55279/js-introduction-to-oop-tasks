export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export const parseJson = (json) => {
  try {
    return JSON.parse(json);
  }
  catch (error) {
    throw new ParseError("Invalid JSON string");
  }
}
// END
