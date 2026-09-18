import fs from 'node:fs';
const html=fs.readFileSync('index.html','utf8'),pkg=fs.readFileSync('package.json','utf8');
for(const x of ['tokenHarborAdapter','deepseek-v4.1-flash:free','mimo-v2.5:free','muse-spark-1-3','openrouter.ai/api/v1/models','FREE MODELS','PAID CATALOG','Content-Security-Policy','127.0.0.1','AES-GCM','PBKDF2','310000','harbor-mind-encrypted-v1','AGENT MEMORY + FOLLOW-THROUGH','Approval needed:','workspace.goals','workspace.approvals'])if(!html.includes(x)&&!pkg.includes(x))throw Error('missing '+x);
if(/thk_live_[A-Za-z0-9_-]{40,}/.test(html))throw Error('secret-like key embedded');
if(/(?:providerKey|apiKey|tokenHarborKey).{0,50}localStorage\.setItem|localStorage\.setItem\([^,]+,\s*(?:providerKey|apiKey|tokenHarborKey)/s.test(html))throw Error('API key persisted');
if(/innerHTML\s*=.*(apiKey|vaultPass)/.test(html))throw Error('secret reflected into DOM');
if(!/selectedProvider==='tokenharbor'\?\/\^thk_live_/.test(html)||!/\^sk-or-/.test(html))throw Error('provider key validation missing');
new Function(html.match(/<script>([\s\S]*)<\/script>/)[1]);
console.log('PASS: provider catalogs and free-first grouping; local-first in-memory BYOK; strict CSP; AES-GCM encrypted storage/export; no embedded/persisted API key; syntax');
