# HARBOR//MIND 03

Local-first storm-port controller with a real-model option through Token Harbor. This is a real LLM integration, not Jev.

## Run locally

```sh
npm start
# open http://127.0.0.1:8787
```

Choose Token Harbor or OpenRouter, select a model from the provider catalog, then paste a project-specific provider key into the app. Token Harbor shows `:free` routes first and labels them FREE; the paid catalog follows. OpenRouter loads its current catalog when selected. It lives only in current-tab memory, is never saved, and is cleared on page close or with FORGET. The default is the free route `deepseek-v4.1-flash:free`; if unavailable, the deterministic safety controller takes over.

The optional workspace encrypts incident history at rest and in JSON exports with AES-256-GCM. A user passphrase derives a non-exportable key in-browser using PBKDF2-SHA-256 with 310,000 iterations and a random 128-bit salt. Every save/export uses a fresh 96-bit IV. The passphrase and derived key are never stored. Authentication failure is handled as a clean unlock error.

Security: strict CSP, no third-party scripts, analytics, cookies, or backend; API key format validation; model output and actions constrained; imported JSON capped at 1 MB; allowlisted provider endpoints and a user-selected catalog model. Direct model calls expose the BYO key only to the current trusted browser session and Token Harbor, so localhost is the recommended mode.

## Personal-agent behavior

When its encrypted workspace is unlocked, Harbor can remember private facts, track open goals, recall the latest relevant fact in the live interface, and make proactive suggestions from both memory and current port state. Recommendations remain pending until the user explicitly approves or rejects them. Approved actions and their state snapshot are encrypted into the workspace, so follow-through survives reloads without exposing plaintext.
