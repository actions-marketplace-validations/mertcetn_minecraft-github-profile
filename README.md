<div align="center">

# ⛏️ Minecraft GitHub Profile Card

An authentic, animated, pixel-perfect Minecraft contribution card for your GitHub profile README.

[![GitHub Action](https://img.shields.io/badge/GitHub%20Action-minecraft--github--profile-brightgreen?logo=github)](https://github.com/marketplace/actions/minecraft-github-profile-card)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

<br />

<img src="https://raw.githubusercontent.com/mertcetn/mertcetn/output/assets/source/generated/profile-card.gif" width="850" alt="Minecraft Profile Card Preview" />

</div>

---

## 🎮 Features

- **52-Week Contribution Grid** : Shows your contribution graph
- **Animated Soul Fire Streak Badge**: Tracks and animates your continuous commit streak.
- **Dynamic HUD**:
  - **Hearts (Health)**: Drops after hunger is depleted, regenerates at full hunger.
  - **Hunger Points (Food)**: Depletes gradually with inactivity.
- **Experience Bar**: Minecraft curve XP calculation based on your lifetime GitHub commits.
- **Language Hotbar**: 9-slot inventory displaying your top repository languages with authentic pixel icons and percentages.
---

## 🚀 Quick Setup

Adding this card to your GitHub profile takes less than **2 minutes**.

### Step 1: Add the image to your profile `README.md`

In your `username/username` repository, add the following snippet to your `README.md`:

```markdown
<div align="center">
  <a href="https://github.com/YOUR_USERNAME">
    <img src="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_USERNAME/output/assets/source/generated/profile-card.gif" width="850" alt="Minecraft Profile Card" />
  </a>
</div>
```
*(Replace `YOUR_USERNAME` with your actual GitHub username)*

### Step 2: Create the GitHub Actions workflow

In your `username/username` repository, create `.github/workflows/card.yml`:

```yaml
name: Update Minecraft Contribution Card

on:
  schedule:
    # Run once every hour
    - cron: '0 * * * *'
  workflow_dispatch: # Allows manual trigger from Actions tab
  push:
    branches:
      - main
    paths-ignore:
      - 'README.md'

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Generate Minecraft Profile Card
        uses: mertcetn/minecraft-github-profile@main
        # Zero configuration! Built-in token is used automatically.
```

### Step 3: Run the workflow!
Go to the **Actions** tab in your repository, select **Update Minecraft Contribution Card**, and click **Run workflow**.

Once finished, it will automatically create an `output` branch hosting your animated card!

---

## ⚙️ Action Inputs

| Input | Description | Required | Default |
| :--- | :--- | :---: | :--- |
| `github_token` | GitHub token for querying GraphQL API and deploying assets | **No** | `${{ github.token }}` |
| `github_username` | GitHub user to generate stats for | **No** | `${{ github.repository_owner }}` |
| `start_year` | Year to start fetching contribution history from | **No** | `'2020'` |
| `output_branch` | Branch name where generated assets are stored | **No** | `'output'` |

---

### 🔒 About `github_token` & Private Repositories

#### 1. Default Mode (Zero Setup - Recommended)
By default, you don't even need to pass a token. The action automatically uses GitHub's built-in `${{ github.token }}`:
- Safely accesses your public repositories and contribution calendar.
- **Private Contribution Counts**: If you enable **"Include private contributions on my profile"** in your GitHub account settings, GitHub's API automatically includes your private commit counts in the grid, streaks, and XP level calculations without exposing any repository names or code!

#### 2. Optional: Accessing Private Repos for Language Stats
If you want the **Language Hotbar** (inventory slots) to also analyze source code from your private repositories, you can create a Personal Access Token (PAT) with `repo` read access:
- **Fine-grained PAT**: Select **"Only select repositories"** to grant access only to chosen private repos.
- **Classic PAT**: Check the **`repo`** scope for access across all private repos.

Add the PAT as a secret in your repository settings (e.g. `PAT_TOKEN`) and pass it to the action:
```yaml
      - name: Generate Minecraft Profile Card
        uses: mertcetn/minecraft-github-profile@main
        with:
          github_token: ${{ secrets.PAT_TOKEN }}
```

---

## 📄 License
This project is open-source under the MIT License.

*Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.*
