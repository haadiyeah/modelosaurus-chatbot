export const getContrastColor = (hexColor: string): string => {
  // Remove # if present
  const hex = hexColor.replace('#', '');

  // Convert hex to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate perceived brightness (YIQ formula)
  const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

  // Return white for dark colors and black for light colors
  return brightness < 150 ? '#ffffff' : '#000000';
};

export const darkenColor = (hexColor: string, percentage: number = 20): string => {
  // Remove # if present
  const hex = hexColor.replace('#', '');

  // Convert hex to RGB
  let r = parseInt(hex.substr(0, 2), 16);
  let g = parseInt(hex.substr(2, 2), 16);
  let b = parseInt(hex.substr(4, 2), 16);

  // Darken each component
  r = Math.max(0, Math.floor(r * (100 - percentage) / 100));
  g = Math.max(0, Math.floor(g * (100 - percentage) / 100));
  b = Math.max(0, Math.floor(b * (100 - percentage) / 100));

  // Convert back to hex
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};
