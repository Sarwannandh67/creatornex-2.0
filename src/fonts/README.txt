# Fonts Directory

This directory should contain the following font files:

1. `Croogla-4F-Medium.woff2` - The Croogla 4F Medium font file
2. `HarmoniaSansProCond-Regular.woff2` - The Harmonia Sans Pro Condensed Regular font file
3. `HarmoniaSansProCond-Bold.woff2` - The Harmonia Sans Pro Condensed Bold font file

## Important
These font files are proprietary and are not included in the repository. You need to purchase or obtain licenses for these fonts and place them in this directory.

## Current Implementation
Currently, the site is using Google Fonts as fallbacks:
- Montserrat Bold as a fallback for Croogla 4F Medium
- Poppins as a fallback for Harmonia Sans Pro Condensed

When you're ready to use the actual custom fonts:
1. Place the font files in this directory
2. Go to `src/app/layout.tsx` 
3. Uncomment the `localFont` section
4. Comment out or remove the Google Fonts section

After adding the font files and updating the layout file, the website will use Croogla 4F Medium for headings and Harmonia Sans Pro Condensed for body text. 