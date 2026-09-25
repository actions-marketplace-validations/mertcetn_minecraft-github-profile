const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../assets/source/images/icons');

// Ensure local icons directory exists
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

/**
 * Comprehensive mapping of language/technology names (lowercase normalized)
 * to Devicon / Simple Icons paths.
 */
const LANGUAGE_CONFIGS = {
  // TypeScript & JavaScript
  'typescript': { file: 'typescript.svg', devicon: 'typescript/typescript-original.svg', simple: 'typescript' },
  'ts': { file: 'typescript.svg', devicon: 'typescript/typescript-original.svg', simple: 'typescript' },
  'javascript': { file: 'javascript.svg', devicon: 'javascript/javascript-original.svg', simple: 'javascript' },
  'js': { file: 'javascript.svg', devicon: 'javascript/javascript-original.svg', simple: 'javascript' },

  // Python
  'python': { file: 'python.svg', devicon: 'python/python-original.svg', simple: 'python' },
  'py': { file: 'python.svg', devicon: 'python/python-original.svg', simple: 'python' },

  // Java & JVM
  'java': { file: 'java.svg', devicon: 'java/java-original.svg', simple: 'openjdk' },
  'kotlin': { file: 'kotlin.svg', devicon: 'kotlin/kotlin-original.svg', simple: 'kotlin' },
  'scala': { file: 'scala.svg', devicon: 'scala/scala-original.svg', simple: 'scala' },
  'groovy': { file: 'groovy.svg', devicon: 'groovy/groovy-original.svg', simple: 'apachegroovy' },
  'clojure': { file: 'clojure.svg', devicon: 'clojure/clojure-original.svg', simple: 'clojure' },

  // C-family
  'c#': { file: 'csharp.svg', devicon: 'csharp/csharp-original.svg', simple: 'csharp' },
  'csharp': { file: 'csharp.svg', devicon: 'csharp/csharp-original.svg', simple: 'csharp' },
  'c++': { file: 'cplusplus.svg', devicon: 'cplusplus/cplusplus-original.svg', simple: 'cplusplus' },
  'cpp': { file: 'cplusplus.svg', devicon: 'cplusplus/cplusplus-original.svg', simple: 'cplusplus' },
  'c': { file: 'c.svg', devicon: 'c/c-original.svg', simple: 'c' },
  'objective-c': { file: 'objectivec.svg', devicon: 'objectivec/objectivec-plain.svg', simple: 'apple' },
  'objectivec': { file: 'objectivec.svg', devicon: 'objectivec/objectivec-plain.svg', simple: 'apple' },

  // Systems & Modern Languages
  'rust': { file: 'rust.svg', devicon: 'rust/rust-original.svg', simple: 'rust' },
  'go': { file: 'go.svg', devicon: 'go/go-original.svg', simple: 'go' },
  'golang': { file: 'go.svg', devicon: 'go/go-original.svg', simple: 'go' },
  'swift': { file: 'swift.svg', devicon: 'swift/swift-original.svg', simple: 'swift' },
  'dart': { file: 'dart.svg', devicon: 'dart/dart-original.svg', simple: 'dart' },
  'zig': { file: 'zig.svg', devicon: 'zig/zig-original.svg', simple: 'zig' },
  'nim': { file: 'nim.svg', devicon: 'nim/nim-original.svg', simple: 'nim' },
  'd': { file: 'd.svg', devicon: 'd/d-original.svg', simple: 'd' },
  'v': { file: 'v.svg', simple: 'v' },
  'crystal': { file: 'crystal.svg', devicon: 'crystal/crystal-original.svg', simple: 'crystal' },

  // Web & Markup Languages
  'html': { file: 'html5.svg', devicon: 'html5/html5-original.svg', simple: 'html5' },
  'html5': { file: 'html5.svg', devicon: 'html5/html5-original.svg', simple: 'html5' },
  'css': { file: 'css3.svg', devicon: 'css3/css3-original.svg', simple: 'css3' },
  'css3': { file: 'css3.svg', devicon: 'css3/css3-original.svg', simple: 'css3' },
  'scss': { file: 'sass.svg', devicon: 'sass/sass-original.svg', simple: 'sass' },
  'sass': { file: 'sass.svg', devicon: 'sass/sass-original.svg', simple: 'sass' },
  'less': { file: 'less.svg', devicon: 'less/less-plain-wordmark.svg', simple: 'less' },
  'stylus': { file: 'stylus.svg', devicon: 'stylus/stylus-original.svg', simple: 'stylus' },
  'vue': { file: 'vuejs.svg', devicon: 'vuejs/vuejs-original.svg', simple: 'vuedotjs' },
  'vue.js': { file: 'vuejs.svg', devicon: 'vuejs/vuejs-original.svg', simple: 'vuedotjs' },
  'svelte': { file: 'svelte.svg', devicon: 'svelte/svelte-original.svg', simple: 'svelte' },

  // Scripting & Shell
  'php': { file: 'php.svg', devicon: 'php/php-original.svg', simple: 'php' },
  'ruby': { file: 'ruby.svg', devicon: 'ruby/ruby-original.svg', simple: 'ruby' },
  'perl': { file: 'perl.svg', devicon: 'perl/perl-original.svg', simple: 'perl' },
  'raku': { file: 'raku.svg', simple: 'raku' },
  'lua': { file: 'lua.svg', devicon: 'lua/lua-original.svg', simple: 'lua' },
  'shell': { file: 'bash.svg', devicon: 'bash/bash-original.svg', simple: 'gnubash' },
  'bash': { file: 'bash.svg', devicon: 'bash/bash-original.svg', simple: 'gnubash' },
  'sh': { file: 'bash.svg', devicon: 'bash/bash-original.svg', simple: 'gnubash' },
  'zsh': { file: 'zsh.svg', simple: 'zsh' },
  'powershell': { file: 'powershell.svg', devicon: 'powershell/powershell-original.svg', simple: 'powershell' },
  'batchfile': { file: 'batchfile.svg', simple: 'windows' },

  // Functional & Scientific
  'haskell': { file: 'haskell.svg', devicon: 'haskell/haskell-original.svg', simple: 'haskell' },
  'elixir': { file: 'elixir.svg', devicon: 'elixir/elixir-original.svg', simple: 'elixir' },
  'erlang': { file: 'erlang.svg', devicon: 'erlang/erlang-original.svg', simple: 'erlang' },
  'ocaml': { file: 'ocaml.svg', devicon: 'ocaml/ocaml-original.svg', simple: 'ocaml' },
  'f#': { file: 'fsharp.svg', devicon: 'fsharp/fsharp-original.svg', simple: 'fsharp' },
  'fsharp': { file: 'fsharp.svg', devicon: 'fsharp/fsharp-original.svg', simple: 'fsharp' },
  'r': { file: 'r.svg', devicon: 'r/r-original.svg', simple: 'r' },
  'julia': { file: 'julia.svg', devicon: 'julia/julia-original.svg', simple: 'julia' },
  'matlab': { file: 'matlab.svg', devicon: 'matlab/matlab-original.svg', simple: 'mathworks' },
  'fortran': { file: 'fortran.svg', devicon: 'fortran/fortran-original.svg', simple: 'fortran' },
  'common lisp': { file: 'lisp.svg', devicon: 'clisp/clisp-original.svg', simple: 'commonlisp' },
  'scheme': { file: 'scheme.svg', simple: 'scheme' },
  'racket': { file: 'racket.svg', devicon: 'racket/racket-original.svg', simple: 'racket' },
  'coq': { file: 'coq.svg', simple: 'coq' },

  // Smart Contracts / Web3
  'solidity': { file: 'solidity.svg', devicon: 'solidity/solidity-original.svg', simple: 'solidity' },
  'vyper': { file: 'vyper.svg', simple: 'vyper' },

  // Databases & Query Languages
  'sql': { file: 'sql.svg', devicon: 'azuresqldatabase/azuresqldatabase-original.svg', simple: 'sqlite' },
  'plsql': { file: 'plsql.svg', devicon: 'oracle/oracle-original.svg', simple: 'oracle' },
  'pl/sql': { file: 'plsql.svg', devicon: 'oracle/oracle-original.svg', simple: 'oracle' },
  'tsql': { file: 'tsql.svg', devicon: 'microsoftsqlserver/microsoftsqlserver-plain.svg', simple: 'microsoftsqlserver' },
  't-sql': { file: 'tsql.svg', devicon: 'microsoftsqlserver/microsoftsqlserver-plain.svg', simple: 'microsoftsqlserver' },
  'mysql': { file: 'mysql.svg', devicon: 'mysql/mysql-original.svg', simple: 'mysql' },
  'postgresql': { file: 'postgresql.svg', devicon: 'postgresql/postgresql-original.svg', simple: 'postgresql' },
  'sqlite': { file: 'sqlite.svg', devicon: 'sqlite/sqlite-original.svg', simple: 'sqlite' },
  'graphql': { file: 'graphql.svg', devicon: 'graphql/graphql-plain.svg', simple: 'graphql' },

  // Low-level & Hardware
  'assembly': { file: 'assembly.svg', devicon: 'embeddedc/embeddedc-original.svg', simple: 'assemblyscript' },
  'arduino': { file: 'arduino.svg', devicon: 'arduino/arduino-original.svg', simple: 'arduino' },
  'pascal': { file: 'pascal.svg', simple: 'delphi' },
  'vim script': { file: 'vim.svg', devicon: 'vim/vim-original.svg', simple: 'vim' },
  'viml': { file: 'vim.svg', devicon: 'vim/vim-original.svg', simple: 'vim' },
  'vim': { file: 'vim.svg', devicon: 'vim/vim-original.svg', simple: 'vim' },
  'emacs lisp': { file: 'gnuemacs.svg', devicon: 'gnuemacs/gnuemacs-original.svg', simple: 'gnuemacs' }
};

/**
 * Normalizes a language name to a safe alphanumeric slug
 */
function normalizeName(name) {
  return (name || '')
    .trim()
    .toLowerCase()
    .replace(/#/g, 'sharp')
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Generates an authentic Minecraft-styled fallback SVG icon
 */
function generateFallbackSvg(langName, langColor = '#55ffff') {
  const color = langColor || '#55ffff';
  let initials = (langName || 'CODE')
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .trim()
    .split(/\s+/)
    .map(w => w[0])
    .join('')
    .toUpperCase();

  if (initials.length === 1 && langName.length >= 2) {
    initials = langName.slice(0, 3).toUpperCase();
  }
  if (initials.length > 4) {
    initials = initials.slice(0, 3);
  }

  const fontSize = initials.length >= 4 ? 26 : initials.length === 3 ? 32 : initials.length === 2 ? 38 : 46;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" shape-rendering="crispEdges">
  <!-- Outer Minecraft 3D Beveled Item Slot Base -->
  <rect x="8" y="8" width="112" height="112" fill="#181822"/>
  
  <!-- Top & Left Light Bevel (3D Highlight) -->
  <rect x="8" y="8" width="112" height="6" fill="#3c3f4e"/>
  <rect x="8" y="8" width="6" height="112" fill="#3c3f4e"/>

  <!-- Bottom & Right Dark Bevel (3D Shadow) -->
  <rect x="8" y="114" width="112" height="6" fill="#0d0d12"/>
  <rect x="114" y="8" width="6" height="112" fill="#0d0d12"/>

  <!-- Inner Recessed Panel -->
  <rect x="14" y="14" width="100" height="100" fill="#22222c"/>
  <rect x="18" y="18" width="92" height="92" fill="${color}" fill-opacity="0.16"/>

  <!-- Pixelated Corner Gems in Language Color -->
  <rect x="16" y="16" width="12" height="12" fill="${color}"/>
  <rect x="100" y="16" width="12" height="12" fill="${color}"/>
  <rect x="16" y="100" width="12" height="12" fill="${color}"/>
  <rect x="100" y="100" width="12" height="12" fill="${color}"/>
  
  <!-- Gem Specular Highlights -->
  <rect x="18" y="18" width="4" height="4" fill="#ffffff" fill-opacity="0.8"/>
  <rect x="102" y="18" width="4" height="4" fill="#ffffff" fill-opacity="0.8"/>
  <rect x="18" y="102" width="4" height="4" fill="#ffffff" fill-opacity="0.8"/>
  <rect x="102" y="102" width="4" height="4" fill="#ffffff" fill-opacity="0.8"/>

  <!-- Inner Glowing Stepped Border in Language Color -->
  <rect x="24" y="24" width="80" height="80" fill="none" stroke="${color}" stroke-width="4" stroke-opacity="0.55" stroke-dasharray="10 6"/>

  <!-- Minecraft Drop Shadow Text & Main Text -->
  <text x="67" y="79" text-anchor="middle" font-family="'Minecraft', 'Consolas', monospace, sans-serif" font-weight="900" font-size="${fontSize}" fill="#08080c" letter-spacing="1">${initials}</text>
  <text x="64" y="76" text-anchor="middle" font-family="'Minecraft', 'Consolas', monospace, sans-serif" font-weight="900" font-size="${fontSize}" fill="#ffffff" letter-spacing="1">${initials}</text>
</svg>`;
}

// Automatically normalize all keys in LANGUAGE_CONFIGS so aliases with spaces/symbols match cleanly
const NORMALIZED_CONFIGS = {};
for (const [key, val] of Object.entries(LANGUAGE_CONFIGS)) {
  NORMALIZED_CONFIGS[normalizeName(key)] = val;
}

/**
 * Checks whether a local icon file exists and has valid SVG content
 */
function isLocalIconValid(filename) {
  const fullPath = path.join(ICONS_DIR, filename);
  if (!fs.existsSync(fullPath)) return false;
  try {
    const stat = fs.statSync(fullPath);
    if (stat.size < 50) return false;
    const content = fs.readFileSync(fullPath, 'utf8');
    return content.includes('<svg') || content.includes('<SVG');
  } catch {
    return false;
  }
}

/**
 * Fetches an icon with prioritized candidate URLs and falls back to SVG generation
 */
async function resolveAndFetchIconWithDetails(langName, langColor) {
  const norm = normalizeName(langName);
  const cfg = NORMALIZED_CONFIGS[norm] || {};
  const filename = cfg.file || `${norm}.svg`;

  // 1. If already cached and valid locally, reuse immediately!
  if (isLocalIconValid(filename)) {
    return { filename, status: 'cached' };
  }

  // 2. Build candidate internet URLs
  const candidateUrls = [];

  // A. Devicon candidates
  if (cfg.devicon) {
    candidateUrls.push(
      `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${cfg.devicon}`,
      `https://raw.githubusercontent.com/devicons/devicon/master/icons/${cfg.devicon}`
    );
  } else {
    // Try auto devicon slugs
    candidateUrls.push(
      `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${norm}/${norm}-original.svg`,
      `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${norm}/${norm}-plain.svg`
    );
  }

  // B. Simple Icons candidates
  const simpleSlug = cfg.simple || norm;
  candidateUrls.push(`https://cdn.simpleicons.org/${simpleSlug}`);

  // C. Try fetching candidates
  const failedReasons = [];
  for (const url of candidateUrls) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Minecraft-Profile-Card/1.0' },
        signal: AbortSignal.timeout(5000)
      });
      if (res.ok) {
        const text = await res.text();
        const isSvg = text &&
          (text.includes('<svg') || text.includes('<SVG')) &&
          !text.includes('<html') &&
          !text.includes('<!DOCTYPE html');
        if (isSvg) {
          const destPath = path.join(ICONS_DIR, filename);
          fs.writeFileSync(destPath, text, 'utf8');
          console.log(`  [Icon] Downloaded icon for '${langName}' from ${url} -> ${filename}`);
          return { filename, status: 'downloaded' };
        }
        failedReasons.push(`${url} (Invalid SVG)`);
      } else {
        failedReasons.push(`${url} (HTTP ${res.status})`);
      }
    } catch (err) {
      failedReasons.push(`${url} (${err.message})`);
    }
  }

  // 3. Fallback: icon could not be fetched from any remote source
  console.warn(`  [Icon] ⚠️ Icon NOT fetched from internet for '${langName}'. Tried:`);
  failedReasons.forEach(r => console.warn(`    - ${r}`));
  console.warn(`  [Icon] Generating Minecraft-styled fallback icon -> ${filename}`);

  const fallbackSvg = generateFallbackSvg(langName, langColor);
  const destPath = path.join(ICONS_DIR, filename);
  fs.writeFileSync(destPath, fallbackSvg, 'utf8');
  return { filename, status: 'not_fetched' };
}

/**
 * Public wrapper returning the icon filename
 */
async function resolveAndFetchIcon(langName, langColor) {
  const res = await resolveAndFetchIconWithDetails(langName, langColor);
  return typeof res === 'object' ? res.filename : res;
}

/**
 * Ensures all icons for the provided language list are available locally
 */
async function ensureIconsForLanguages(languages = []) {
  const iconMap = {};
  const notFetched = [];

  const promises = languages.map(async lang => {
    const res = await resolveAndFetchIconWithDetails(lang.name, lang.color);
    const filename = typeof res === 'object' ? res.filename : res;
    iconMap[lang.name] = filename;
    if (res && res.status === 'not_fetched') {
      notFetched.push(lang.name);
    }
  });

  await Promise.all(promises);

  if (notFetched.length > 0) {
    console.warn(`\n[IconFetcher] ⚠️ Notice: ${notFetched.length} icon(s) could not be fetched from the internet (using generated fallbacks):`);
    notFetched.forEach(name => console.warn(`  - ${name}`));
    console.warn('');
  }

  return iconMap;
}

const POPULAR_LANGUAGES = [
  'TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'C++', 'C', 'Go', 'Rust',
  'PHP', 'Ruby', 'Swift', 'Kotlin', 'Dart', 'HTML', 'CSS', 'SCSS', 'Shell',
  'PowerShell', 'Lua', 'R', 'Julia', 'Scala', 'Elixir', 'Haskell', 'Zig',
  'Nim', 'Solidity', 'Vue', 'Svelte', 'SQL', 'GraphQL', 'Vim script', 'MATLAB', 'Perl'
];

async function prefetchPopularIcons() {
  console.log(`[IconFetcher] Prefetching ${POPULAR_LANGUAGES.length} popular language icons...`);
  const notFetched = [];
  for (const name of POPULAR_LANGUAGES) {
    const res = await resolveAndFetchIconWithDetails(name);
    if (res && res.status === 'not_fetched') {
      notFetched.push(name);
    }
  }
  if (notFetched.length > 0) {
    console.warn(`\n[IconFetcher] ⚠️ ${notFetched.length} icon(s) could not be fetched from the internet:`);
    notFetched.forEach(name => console.warn(`  - ${name}`));
    console.warn('');
  }
  console.log('[IconFetcher] Popular icons prefetch complete!');
}

if (require.main === module) {
  prefetchPopularIcons().catch(err => {
    console.error('Error prefetching icons:', err);
    process.exit(1);
  });
}

module.exports = {
  resolveAndFetchIcon,
  ensureIconsForLanguages,
  prefetchPopularIcons,
  generateFallbackSvg,
  LANGUAGE_CONFIGS,
  POPULAR_LANGUAGES,
  ICONS_DIR
};

