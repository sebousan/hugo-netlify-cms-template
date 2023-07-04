import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { press } from '../fields/press.js'
import { publications_concerned } from '../fields/publications_concerned.js'
import { featured_image } from '../fields/featured-image.js'
import { images } from '../fields/images.js'
import { body } from '../fields/body.js'

const publications = {
    name: 'publications',
    label: 'Parutions',
    label_singular: 'Parution',
    folder: 'content/publications',
    create: true,

    editor: { preview: false },

    i18n: true,

    path: '{{year}}/{{month}}/{{slug}}',
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
    sortable_fields: ['date', 'title'],
    summary: '{{title}} — {{year}}',

    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        draft,
        date,
        publications_concerned,
        title,
        description,
        press,
        featured_image,
        images,
        body
    ]
}

export default publications