### 3. Deployment (vercel)

```bash
vercel project
vercel link --yes --project uvex-driver
bun run build && vercel build --prod && vercel --prebuilt --prod
```
