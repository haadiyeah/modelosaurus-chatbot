export const formatBotResponse = (response:string) => {
  if (!response) return '';

  // Replace </s> if it appears (common in LLM outputs)
  response = response.replace(/<\/s>/g, '');

  // Convert markdown-style bold text to HTML
  response = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Handle lists - add proper spacing after list items
  response = response.replace(/(\d+\.\s.+?)(?:\n|$)/g, '$1\n\n');
  response = response.replace(/(-\s.+?)(?:\n|$)/g, '$1\n\n');

  // Handle paragraphs but avoid adding newlines after numbered list items and ellipses
  response = response.replace(/\./g, (match, offset, string) => {
    // Check if the period is preceded by a digit (numbered list)
    if (offset > 0 && /\d/.test(string[offset - 1])) {
      return '.'; // Return just the period without adding newlines
    }
    // Check if the period is part of an ellipsis (...)
    else if (
      // Check if there's a period before or after this one
      (offset > 0 && string[offset - 1] === '.') ||
      (offset < string.length - 1 && string[offset + 1] === '.')
    ) {
      return '.'; // Return just the period without adding newlines
    }
    // Regular period - add paragraph break
    else {
      return '.\n\n'; // Add newlines after other periods
    }
  });

  // Clean up excessive newlines
  response = response.replace(/\n{3,}/g, '\n\n');

  return response;
};
