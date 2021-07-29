---
title: Overview
---

- [Testing](#testing)
- [Design](#design)
- [Components](#components)
  - [Templates](#templates)
    - [Announcements](#announcements)
    - [Billing](#billing)
    - [Calendar](#calendar)
    - [Customers](#customers)
    - [Dashboard](#dashboard)
    - [NotFound](#notfound)
    - [Projects](#projects)
    - [Regions](#regions)
    - [Reports](#reports)
    - [Settings](#settings)
  - [Patterns](#patterns)
    - [Breadcrumbs](#breadcrumbs)
    - [Kendo UI Grid](#kendo-ui-grid)
    - [Kendo UI Window](#kendo-ui-window)
    - [List](#list)
    - [Navbar](#navbar)
    - [Sidebar Menu](#sidebar-menu)
    - [Table](#table)
  - [Elements](#elements)
    - [Avatar](#avatar)
    - [Badge](#badge)
    - [Chart](#chart)
    - [Date Picker](#date-picker)
    - [Heading](#heading)
    - [Icon](#icon)
  - [Tokens](#tokens)
    - [Colors](#colors)
    - [Typography](#typography)
    - [Spacing](#spacing)

## Testing

```json
{
  "toc": [{
    "id": "welcome",
    "depth": 2,
    "text": "Welcome!"
  }]
}
```

<base-alert>

Testing

</base-alert>

## Design

<details>

<summary> Core 10 UI Screens</summary>

[![Dashboard Announcements](/assets/images/comps/dashboard-notifications.png "Dashboard Announcments")](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/c13f04d8-e61b-4dbf-b1a1-b874e33c780f)

[![Dashboard Collapsed](/assets/images/comps/dashboard-collapsed.png "Dashboard")]()

[![Bulk Service Tech Assignment](/assets/images/comps/bulk-service-tech-assignment.png "Bulk Service Tech Assignment")]()
[![Calendar](/assets/images/comps/calendar.png "Calendar")](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/8aec80b9-a195-46f7-a186-d240f3af826b)
[![Customer Setup](/assets/images/comps/customer-setup.png "Customer Setup")](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/a0672825-8eea-40c0-a908-e032a931dc41)
[![Customers](/assets/images/comps/customers.png "Customers")]()



[![Project Details 1 Comments](/assets/images/comps/project-details-1-comments.png "Project Details 1 Comments")](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/ded10744-9c77-467a-a259-377fd291bba9)
[![Project Details 1 History](/assets/images/comps/project-details-1-history.png "Project Details 1 History")](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/6980f6f5-8d78-4da6-b1c5-43588aec69b8)
[![Project Details 1 Schedule](/assets/images/comps/project-details-1-schedule.png "Project Details 1 Schedulue")](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/8384a6e0-862b-4090-95b3-b7ec3a73d4ae)
[![Project Details 2 Comments](/assets/images/comps/project-details-2-comments.png "Project Details 2 Comments")](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/cb5fc81a-3d31-4078-af7e-87f7f224202a)
[![Project Details 2 History](/assets/images/comps/project-details-2-history.png "Project Details 2 History")](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/c3e8452e-2a21-4514-b6a2-e1e4eae5a835)
[![Project Details 2 Schedulue](/assets/images/comps/project-details-2-schedule.png "Project Details 2 Schedulue")]()
[![Project Details](/assets/images/comps/project-details.png "Project Details")](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/c4348e65-13ec-4e6c-b0f2-91ae9a790228)
[![Projects](/assets/images/comps/projects.png "Projects")]()
[![Dashboard](/assets/images/comps/users.png "Dashboard")](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/)

</details>

## Components

### Templates

#### [Announcements](/announcements)

#### [Billing](/billing)

#### [Calendar](/calendar)

#### [Customers](/customers)

#### [Dashboard](/dashboard)

#### [NotFound](/not-found)

#### [Projects](/projects)

#### [Regions](/regions)

#### [Reports](/customers)

#### [Settings](/customers)

### Patterns

#### Breadcrumbs

#### Kendo UI Grid

<code-group>
  <code-block label="HTML" active>

  ```html
  <grid
    :data-items="projects"
    :pageable="pageable"
    :sortable="sortable"
    :sort="sort"
    :take="take"
    :skip="skip"
    :columns="columns"
    :style="{ height: '400px' }"
    @datastatechange="dataStateChange"
    @rowclick="rowClick"
  >
    <template #discontinuedTemplate="{ props }">
      <td colspan="1">
        <input
          type="checkbox"
          :checked="props.dataItem.Discontinued"
          disabled="disabled"
        />
      </td>
    </template>
  </grid>
  ```

  </code-block>
  <code-block label="JavaScript">

  ```js
  export default {
    props: {
      projects: {
        type: Array,
        default: () => [],
      },
    },
  }
  ```

  </code-block>
</code-group>

#### Kendo UI Window

#### List

#### Navbar

#### Sidebar Menu

#### Table

### Elements

#### Avatar

<code-group>
  <code-block label="HTML" active>

  ```html
  <img class="avatar" :src="src" alt="" />
  ```

  </code-block>
  <code-block label="CSS">

  ```scss
  .avatar {

  }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```js
  export default {
    props: {
      src: {
        type: String,
        default: 'images/avatar.jpeg',
      },
      appearance: {
        type: String,
        default: 'circle',
      },
    },
  }
  ```

  </code-block>
  <code-block label="TypeScript">

  ```ts
  export default {
    props: {
      src: {
        type: String,
        default: 'images/avatar.jpeg',
      },
      appearance: {
        type: String,
        default: 'circle',
      },
    },
  }
  ```

  </code-block>
</code-group>

#### Badge

<code-group>
  <code-block label="HTML" active>

  ```html
  <span :class="classes">
    <slot></slot>
  </span>
  ```

  </code-block>
  <code-block label="JavaScript">

  ```js
  export default {
    props: {
      type: {
        type: String,
        default: '',
      },
    },
    computed: {
      classes() {
        return type === 'toxic' && 'is-toxic'
      },
    },
  }
  ```

  </code-block>
</code-group>

#### Chart

<code-group>
  <code-block label="HTML" active>

  ```html
  <component :is="is" :data="data" :donut="true"></component>
  ```

  </code-block>
  <code-block label="JavaScript">

  ```js
  export default {
    props: {
      type: {
        type: String,
        default: 'column',
      },
      data: {
        type: [Array, Object],
        default: () => [],
      },
    },
    computed: {
      is() {
        return `${this.type}-chart`
      },
    },
  }
  ```

  </code-block>
</code-group>

```vue
<template>
  <img class="avatar" :src="src" alt="" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'images/avatar.jpeg',
    },
    appearance: {
      type: String,
      default: 'circle',
    },
  },
}
</script>
```

#### Date Picker

#### Heading

#### Icon

### Tokens

- <https://eager-swanson-09f1d6.netlify.app/>

Design tokens are the atoms of the system as Salesforce describes them. They are used instead of hard coded values to ensure a better consistency across any platform. To give you a concrete example, here's how they are defined using Sass

<code-group>
  <code-block label="Sass variables" active>

  ```scss
  // FONT-SIZE
  $font-size-2xl:  "64px";
  $font-size-xl:   "48px";
  $font-size-lg:   "24px";
  $font-size-base: "16px";
  $font-size-sm:   "13px";
  $font-size-xs:   "11px";
  ```

  </code-block>
  <code-block label="CSS custom properties">

  ```css
  /* FONT-SIZE */
  :root {
    --font-size-2xl:  "64px";
    --font-size-xl:   "48px";
    --font-size-lg:   "24px";
    --font-size-base: "16px";
    --font-size-sm:   "13px";
    --font-size-xs:   "11px";
  }
  ```

  </code-block>
</code-group>


#### Colors

#### Typography

#### Spacing



- [Dashboard](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/)
- [Collapsed Side-Nav](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/213bbfd1-031f-4382-8c5b-01544228b65e)
- [Announcements](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/c13f04d8-e61b-4dbf-b1a1-b874e33c780f)
- [Reports](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/0bf51314-06b2-4955-b15a-90c3ef53d404)
- [Calendar](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/8aec80b9-a195-46f7-a186-d240f3af826b)
- [Customers](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/3ecfc7be-bfea-44b2-a1d6-43ebbed4e53b)
- [Project Details](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/c4348e65-13ec-4e6c-b0f2-91ae9a790228)
- [Project Details v2](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/e15684c2-f8d9-4b15-9a51-5583bb7676fe)
- [Project Details History Tab](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/c3e8452e-2a21-4514-b6a2-e1e4eae5a835)
- [Project Details Comments](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/cb5fc81a-3d31-4078-af7e-87f7f224202a)
- [Add Customer](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/a0672825-8eea-40c0-a908-e032a931dc41)
- [Schedule Tab](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/8384a6e0-862b-4090-95b3-b7ec3a73d4ae)
- [History Tab](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/6980f6f5-8d78-4da6-b1c5-43588aec69b8)
- [Comments Tab](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/ded10744-9c77-467a-a259-377fd291bba9)
