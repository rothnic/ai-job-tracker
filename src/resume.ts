import fs from 'fs/promises';

export async function loadResume(filePath: string): Promise<Record<string, string>> {
  const raw = await fs.readFile(filePath, 'utf-8');
  const sections: Record<string, string> = {};
  let current = 'root';
  sections[current] = '';

  for (const line of raw.split(/\r?\n/)) {
    const heading = line.match(/^##\s*(.+)$/);
    if (heading) {
      current = heading[1].trim();
      sections[current] = '';
    } else {
      sections[current] += line + '\n';
    }
  }

  return sections;
}
