import fs from 'fs';
import path from 'path';
import { Tool } from '@/app/types';

export function getToolsData(): Tool[] {
  const filePath = path.join(process.cwd(), 'app', 'data', 'tools.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data: Tool[] = JSON.parse(fileContents);
  return data;
}