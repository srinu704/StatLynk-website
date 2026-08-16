---
name: Deploy build boundary
description: Root production builds must target the deployable StatLynk frontend, while mockup and service workspaces remain development-only.
---

The repository root production build is intentionally scoped to the StatLynk Solutions web artifact. Mockup/demo workspaces may keep workflow-specific environment requirements such as `PORT`; they must not be included in the deploy build.

**Why:** Static hosting builds run without Replit workflow environment variables, so a workspace-wide build can fail before reaching the actual frontend.

**How to apply:** Keep the root `build` script deploy-focused. Use the separate workspace-wide build script only when validating the whole monorepo. The StatLynk Vite config should default `PORT` and `BASE_PATH` for static builds while still honoring workflow-provided values.