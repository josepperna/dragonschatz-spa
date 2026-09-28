# Dragon Schatz SPA

A responsive, German-language single-page website concept for Restaurant Dragon Schatz in Rotkreuz.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173). Use `npm run build` to create a static deployment in `dist/`.

## Content & assets

Photos and the original logo are sourced from [dragonschatz.ch](https://www.dragonschatz.ch/), resized and stored in `public/images/`. The original site's Mittag, Abend and Deklaration PDFs are copied to `public/menus/`, so the menu links work without relying on Wix. Contact details and opening hours reflect the source website at the time of creation. The imprint/privacy link points to the existing site's legal page; replace it with a locally reviewed version before switching the live domain. Confirm menu prices, hours, rights to reuse assets, and legal text with the restaurant before publishing.

## Continuous deployment

### GitHub Pages preview

`.github/workflows/pages.yml` builds on pull requests and publishes `main` to GitHub Pages at `https://josepperna.github.io/dragonschatz-spa/`. Pages must be enabled in repository Settings → Pages with **GitHub Actions** as the build source. The repository stays private, but the published website is publicly accessible. GitHub may require a paid account to publish Pages from a private repository.

### Google Cloud Run

`.github/workflows/cloud-run.yml` deploys `main` using short-lived GitHub OIDC credentials. It skips deployment until these **repository variables** are set in Settings → Secrets and variables → Actions:

| Variable | Example |
| --- | --- |
| `GCP_PROJECT_ID` | `my-gcp-project` |
| `GCP_REGION` | `europe-west6` |
| `GCP_WIF_PROVIDER` | `projects/123456789/locations/global/workloadIdentityPools/github/providers/github` |
| `GCP_DEPLOY_SA` | `github-deployer@my-gcp-project.iam.gserviceaccount.com` |

In the GCP project, enable Cloud Run, Cloud Build, Artifact Registry, and IAM Credentials APIs. Create a Workload Identity Pool and OIDC provider for `https://token.actions.githubusercontent.com`, restricted to `assertion.repository == 'josepperna/dragonschatz-spa'` (preferably also restrict `assertion.ref == 'refs/heads/main'`). Grant the deploy service account `roles/run.admin`, `roles/cloudbuild.builds.editor`, and `roles/iam.serviceAccountUser`, and grant the GitHub principal `roles/iam.workloadIdentityUser` on that service account. The Cloud Build service account also needs permission to write images to Artifact Registry and logs to Cloud Logging (the exact service account depends on your project's Cloud Build setup). `gcloud run deploy --source` builds the included Dockerfile and serves the SPA with nginx on port 8080. If your org blocks public Cloud Run access, remove `--allow-unauthenticated` and use an access-controlled frontend instead.

No GCP credentials or project configuration are committed to the repository.
