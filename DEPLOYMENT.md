# Deploying to GitHub Pages

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

## 🚀 Deployment Setup

### 1. Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

### 2. Repository Configuration

#### For Custom Domain (Recommended for Student Developer Pack)

1. Go to your GitHub repository → **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: GitHub Actions
3. Under "Custom domain":
   - Enter your custom domain (e.g., `gouravmukherjee.dev`)
   - Click "Save"
   - Wait for DNS check to complete
4. Enable **Enforce HTTPS** (after DNS verification)

#### For username.github.io

1. Create a repository named `yourusername.github.io`
2. Go to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: GitHub Actions
4. In `next.config.mjs`, keep `basePath` commented out

#### For Project Repository (username.github.io/repo-name)

1. In `next.config.mjs`, uncomment and set:
   ```javascript
   basePath: '/portfolio-site',
   assetPrefix: '/portfolio-site',
   ```
2. Go to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: GitHub Actions

### 3. DNS Configuration

#### Using Custom Domain from GitHub Student Developer Pack

**For Cloudflare DNS:**

1. Log in to your domain registrar (Namecheap, Namecheap, etc.)
2. Add the following DNS records:

```
Type    Name    Value                   TTL
A       @       185.199.108.153         Auto
A       @       185.199.109.153         Auto
A       @       185.199.110.153         Auto
A       @       185.199.111.153         Auto
CNAME   www     yourusername.github.io  Auto
```

3. If using Cloudflare, set SSL/TLS to **Full**

**Verification:**
- DNS changes can take up to 24 hours
- Check status at: https://www.whatsmydns.net/

### 4. Push to Deploy

```bash
# Commit your changes
git add .
git commit -m "Configure GitHub Pages deployment"

# Push to main branch (triggers deployment)
git push origin main
```

### 5. Verify Deployment

1. Go to your repository → **Actions** tab
2. Watch the "Deploy Next.js to GitHub Pages" workflow
3. Once complete, visit your site at:
   - Custom domain: https://yourdomain.com
   - GitHub Pages: https://yourusername.github.io
   - Project repo: https://yourusername.github.io/repo-name

## 📝 Environment Variables

If you have environment variables (API keys, etc.):

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click "New repository secret"
3. Add your variables
4. Reference them in `.github/workflows/deploy.yml`:
   ```yaml
   env:
     NEXT_PUBLIC_API_KEY: ${{ secrets.API_KEY }}
   ```

## 🔧 Local Testing

Test the static export locally before deploying:

```bash
# Build and export
npm run build

# Serve the out directory
npx serve out
```

## 🐛 Troubleshooting

### Images not loading
- Ensure `images.unoptimized: true` is set in `next.config.mjs`
- Use relative paths for images in the `public` folder

### CSS not loading
- Check that `basePath` and `assetPrefix` match your deployment type
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### 404 on refresh
- GitHub Pages serves static files; no server-side routing
- Next.js export handles this with `output: 'export'`

### Custom domain not working
- Verify DNS records are correct
- Check DNS propagation: https://www.whatsmydns.net/
- Ensure HTTPS is enabled in GitHub Pages settings

## 📚 Resources

- [Next.js Static HTML Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Student Developer Pack](https://education.github.com/pack)
- [Cloudflare DNS Setup](https://developers.cloudflare.com/dns/)

## 🎓 GitHub Student Developer Pack Domains

Popular domain providers in the Student Pack:
- **Namecheap**: Free .me domain for 1 year
- **Name.com**: Free domain for 1 year
- **.tech**: Free .tech domain for 1 year

Apply at: https://education.github.com/pack
