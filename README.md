# TrailMate

TrailMate is a mobile hiking-trail prototype built with Expo and React Native. It offers searchable fixture trails, difficulty filters, saved trails that persist on the device, unit preferences, a local notification preference, mock profile settings, and external-map directions.

## Run it

```bash
npm install
npx expo start
```

The application has no API keys, backend, location access, or notification permissions. Images use public remote URLs and include graceful in-app fallbacks if unavailable.

## Color contrast

This code-level WCAG 2.1 AA audit checks normal text at 4.5:1 and meaningful icons, component boundaries, and large text at 3:1. Run `npm run check:contrast` to reproduce it.

| Semantic pair | Ratio | Result |
| --- | ---: | --- |
| Primary text / background | 14.53:1 | Pass (4.5:1) |
| Secondary text / background | 5.54:1 | Pass (4.5:1) |
| White / primary green | 6.51:1 | Pass (4.5:1) |
| White / Easy, Moderate, Hard badges | 5.34:1, 5.23:1, 5.93:1 | Pass (4.5:1) |
| Favorite gold / white | 5.37:1 | Pass (3:1 graphical control) |
| Muted icon / background | 4.60:1 | Pass (3:1) |
| Borders and switch-off track / white | 3.79:1 | Pass (3:1) |
| Destructive text / background | 6.26:1 | Pass (4.5:1) |
| White / hero overlay | 12.64:1 | Pass (3:1) |

This is a source-code color audit, not accessibility certification. Device-level testing with VoiceOver and TalkBack remains recommended.
