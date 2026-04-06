/**
 * generate-sitemap.js
 * Scans the repository for HTML files and generates a sitemap.xml
 * Excludes: .git, node_modules, css, js, data, images, .github
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const SITE_URL = 'https://go-online-studio.github.io/Perfect-Smile-Dental-Clinic';
const EXCLUDE_DIRS = ['.git', 'node_modules', 'css', 'js', 'data', 'images', '.github', '.vscode'];
const ROOT_DIR = __dirname;

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      const dirName = path.basename(filePath);
      if (!EXCLUDE_DIRS.includes(dirName)) {
        getHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

function getLastModified(filePath) {
  try {
    const result = execSync(
      `git log -1 --format="%aI" -- "${filePath}"`,
      { cwd: ROOT_DIR, encoding: 'utf-8' }
    ).trim();
    
    if (result) {
      return result.split('T')[0]; // YYYY-MM-DD
    }
  } catch (e) {
    // Fallback to file modification time
  }
  
  const stat = fs.statSync(filePath);
  return stat.mtime.toISOString().split('T')[0];
}

function getPriority(filePath) {
  const fileName = path.basename(filePath);
  if (fileName === 'index.html') return '1.0';
  if (fileName === 'services.html') return '0.9';
  if (fileName === 'about.html') return '0.8';
  if (fileName === 'contact.html') return '0.8';
  return '0.5';
}

function generateSitemap() {
  const htmlFiles = getHtmlFiles(ROOT_DIR);
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const filePath of htmlFiles) {
    const relativePath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
    const url = relativePath === 'index.html'
      ? SITE_URL + '/'
      : SITE_URL + '/' + relativePath;
    
    const lastmod = getLastModified(filePath);
    const priority = getPriority(filePath);
    
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  }
  
  xml += '</urlset>\n';
  
  const outputPath = path.join(ROOT_DIR, 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');
  console.log(`✅ Sitemap generated with ${htmlFiles.length} URLs → ${outputPath}`);
}

generateSitemap();
