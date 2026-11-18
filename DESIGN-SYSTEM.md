# COMPLY interface system

## Tokens

| Token | Value | Usage |
|---|---|---|
| Text / navy | `#14243a` / `#182941` | Headings, dark tables and active navigation |
| Action green | `#08713e` | Primary actions and links |
| Canvas | `#f7f8ff` | Application and alternating public sections |
| Border | `#dde3ed` | Cards, fields and dividers |
| Secondary text | `#637087` | Supporting information |
| Font | Inter, locally bundled | UI and editorial website |
| Monospace | Consolas / system monospace | IDs, IRNs and references |
| Card radius | 11px | White surfaces |
| Control radius | 6px | Inputs and buttons |
| Application sidebar | 240px desktop | Green-grey horizontal wash |
| Application header | 64px desktop | White / sticky |
| Content inset | 24px desktop | Main workspace rhythm |

## Shared components

`Logo`, `Button`, `Badge`, `Field`, `Title`, `Card`, `SearchBox`, `Empty`, `Modal`, `DownloadButton`, `FAQ`, `MiniDashboard`, `DemoNotice` are defined in `src/components.jsx`. Fields expose labels/help/invalid state; dialogs support Escape, focus containment and return focus.

Application-specific tables, tabs and KPIs share consistent wrappers. Tables scroll within cards on narrow screens. The mobile sidebar opens from the header and closes after navigation. Reduced-motion preferences disable animation.

## Visual families

- Account access: high-key stationery/photo backdrop; central logo and compact white/mint/error cards.
- Onboarding: dedicated header and five-step progress bar, washed calculator/papers backdrop, bottom action rail; no app sidebar.
- Workspace: 240px sidebar, navy active item outlined mint, white header, pale lavender content, ruled white cards, separate clearance/payment chips.
- Unknown submission/service unavailable: alternate white sidebar and pale-blue active item, following those specific reference screens.
- Billing: shared Settings navigation, coin/block background for plans, office background for methods, plain checkout and illustrated success.
- Website: editorial white/lavender bands, dark navy feature section, dark footer, green calls to action and invoice imagery.

## Reference vs extrapolation

Provided first-run, supporting states, auth, onboarding, billing and public references guide their corresponding layouts. Most populated product destinations, note forms and administrative screens are extrapolations. Source screenshots remain outside the repository in the design-reference workspace; no screenshot is used as a flattened interactive page.

Generated image assets approximate photographic/3D references. Safety wording and accurate demo arithmetic take precedence over claims that would imply a real provider, valid IRN, payment, certification or email delivery.
