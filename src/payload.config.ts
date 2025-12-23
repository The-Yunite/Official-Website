// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Events } from './collections/Events'
import { JobOpenings } from './collections/JobOpenings'
import { TechServices } from './collections/TechServices'
import { Faqs } from './collections/Faqs'
import { FormPages } from './collections/FormPages'
import { EventPages } from './collections/EventPages'
import { ServicePages } from './collections/ServicePages'
import { Testimonials } from './collections/Testimonials'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users, 
    Media, 
    Events, 
    TechServices, 
    Faqs, 
    JobOpenings, 
    FormPages,
    EventPages,
    ServicePages,
    Testimonials
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  // database-adapter-config-end
  sharp,
  plugins: [
    // storage-adapter-placeholder
    formBuilderPlugin({
      // see below for a list of available options
      fields: {
        text: true,
        textarea: true,
        select: true,
        radio: true,
        email: true,
        state: true,
        country: true,
        checkbox: true,
        number: true,
        message: true,
        date: true,
        payment: false,
      },
    }),
  ],
})
