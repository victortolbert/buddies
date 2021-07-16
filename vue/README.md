# @victortolbert/buddies/vue

## What is inside?

This project uses many tools like:

## What is inside? (Features)

- [ ] Hand-coded HTML and CSS
- [ ] Search for plants by name through use of a search bar
- [ ] Filter non-toxic and toxic plants by using a dropdown
- [ ] Change the view from either a grid or list
- [ ] Clicking on a plant image or name should show the plant’s details
- [ ] Detail Slide Over
- [ ] Detail Modal
- [ ] Detail Page Route
- [ ] Favorite View
- [ ] List View
- [ ] Grid View
- [ ] Testing Library Example test
- [ ] Storybook
- [ ] Node / Express / JSON-Server API Mocking
- [ ] Some accessibility improvements
- [ ] A few micro-interactions
- [ ] Target highlight micro-interaction

## Build Setup / Getting Started

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Patterns

### Global

- Layout
- Navigation
- Notifications

### Analytics

- Charts
- Data states
- Source tables

<!-- -- Data states provide clear and reassuring communication to users about the state of their report. -->

## Components

- Box
- Badge
- Avatar
- Banner
- Button
- Icon
- Image
- Input
- Select
- Switch
- Tabs

## Example JSON-Server API endpoints

- <https://api.victortolbert.com/plants?q=aloe%20vera>
- <https://api.victortolbert.com/plants?toxicity.symptoms_like=vomiting>
- <https://api.victortolbert.com/plants?toxicity.symptoms_like=diarrhea>
- <https://api.victortolbert.com/plants?names.common_like=aloe>
- <https://api.victortolbert.com/plants?names.scientific_like=ficus>
- <https://api.victortolbert.com/plants?names.common_like=aloe&author=typicode>
- <https://api.victortolbert.com/plants?id=1&id=2>
- <https://api.victortolbert.com/plants?_start=20&_end=30>
- <https://api.victortolbert.com/plants?_start=20&_limit=10>
- <https://api.victortolbert.com/plants?_page=1&_limit=2>
- <https://api.victortolbert.com/plants?_page=7>
- <https://api.victortolbert.com/plants?id_ne=1>
- <https://api.victortolbert.com/plants?id_gte=2&id_lte=4>
- <https://api.victortolbert.com/plants?views_gte=10&views_lte=20>
- <https://api.victortolbert.com/plants?names.common=aloe>
- <https://api.victortolbert.com/plants?names.scientific=aloe>
- <https://api.victortolbert.com/plants?_sort=names.common&_order=asc>
- <https://api.victortolbert.com/plants?_sort=names.scientific&_order=asc>


- <https://api.victortolbert.com/plants/1/comments?_sort=votes&_order=asc>
