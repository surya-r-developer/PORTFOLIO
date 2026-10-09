import fs from 'fs';
import path from 'path';
import { PortfolioData } from '@/types/portfolio';
import { initialPortfolioData } from './initial-data';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'portfolio.json');

// Ensure directory exists
function ensureDataFile() {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE_PATH)) {
      fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(initialPortfolioData, null, 2), 'utf-8');
    }
  } catch (error) {
    console.error('Error initializing portfolio data file:', error);
  }
}

export function getPortfolioData(): PortfolioData {
  try {
    ensureDataFile();
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileData = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error('Error reading portfolio data:', error);
  }
  return initialPortfolioData;
}

export function savePortfolioData(data: PortfolioData): boolean {
  try {
    ensureDataFile();
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error saving portfolio data:', error);
    return false;
  }
}
