#!/bin/bash

# 🚀 Quick Deploy to Vercel Script
# This script helps you push to GitHub and deploy to Vercel

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║       🚀 Iron Man Portfolio - Vercel Deploy Script          ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📍 Step 1: Initializing Git Repository..."
    git init
    echo "✅ Git initialized"
    echo ""
fi

# Get GitHub username if not provided
if [ -z "$1" ]; then
    echo "📍 Step 2: Enter your GitHub username:"
    read -p "GitHub Username: " GITHUB_USER
else
    GITHUB_USER=$1
fi

if [ -z "$2" ]; then
    echo "📍 Repository name (default: portfolio-template):"
    read -p "Repository Name: " REPO_NAME
    REPO_NAME=${REPO_NAME:-portfolio-template}
else
    REPO_NAME=$2
fi

GITHUB_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"

echo ""
echo "📍 Step 3: Setting up remote repository..."
echo "   Repository URL: $GITHUB_URL"

# Check if remote already exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  Remote 'origin' already exists. Updating..."
    git remote set-url origin "$GITHUB_URL"
else
    git remote add origin "$GITHUB_URL"
fi

echo "✅ Remote configured"
echo ""

echo "📍 Step 4: Adding files to staging..."
git add .
echo "✅ Files staged"
echo ""

echo "📍 Step 5: Creating commit..."
git commit -m "🔥 Iron Man Arc Reactor Portfolio - Ready for Vercel deployment"
echo "✅ Commit created"
echo ""

echo "📍 Step 6: Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Code pushed to GitHub!"
    echo ""
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║              ✨ Next Steps - Deploy to Vercel:              ║"
    echo "╠══════════════════════════════════════════════════════════════╣"
    echo "║                                                              ║"
    echo "║  1. Go to: https://vercel.com/dashboard                    ║"
    echo "║  2. Click: Add New... → Project                            ║"
    echo "║  3. Select: $REPO_NAME repository                          ║"
    echo "║  4. Configure:                                             ║"
    echo "║     - Framework: React                                     ║"
    echo "║     - Root Directory: ./frontend                           ║"
    echo "║     - Build Command: npm run build                         ║"
    echo "║  5. Click: Deploy                                          ║"
    echo "║                                                              ║"
    echo "║  That's it! Your portfolio will be live in ~2 minutes ⚡   ║"
    echo "║                                                              ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo ""
    echo "📊 Your GitHub Repository:"
    echo "   $GITHUB_URL"
    echo ""
else
    echo "❌ Failed to push to GitHub. Make sure:"
    echo "   1. Repository exists on GitHub"
    echo "   2. You have push access"
    echo "   3. GitHub credentials are configured"
fi
