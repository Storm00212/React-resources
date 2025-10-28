/// <reference types="vite/client" />

/**
 * vite-env.d.ts - Vite TypeScript Environment Declarations
 *
 * This file contains TypeScript declarations for Vite-specific features.
 * The triple-slash reference directive tells TypeScript to include type
 * definitions from the "vite/client" module.
 *
 * This enables:
 * - Import of static assets (images, CSS, etc.) as modules
 * - Hot Module Replacement (HMR) types
 * - Environment variable types
 * - Other Vite-specific development features
 *
 * Without this file, TypeScript would not understand Vite's special import syntax
 * like: import logo from './logo.svg'
 */
