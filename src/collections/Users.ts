//import { PrimaryActionEmailHtml } from '../components/emails/PrimaryActionEmail'
import { Access, CollectionConfig } from 'payload/types'

// const adminsAndUser: Access = ({ req: { user } }) => {
//   if (user.role === 'admin') return true

//   return {
//     id: {
//       equals: user.id,
//     },
//   }
// }

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: () => true,
    create: () => true,
  },
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        const verifyUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`;
        return `<a href="${verifyUrl}">Verify account</a>`;
      },
    },
  },
//   access: {
//     read: adminsAndUser,
//     create: () => true,
//     update: ({ req }) => req.user.role === 'admin',
//     delete: ({ req }) => req.user.role === 'admin',
//   },
//   admin: {
//     hidden: ({ user }) => user.role !== 'admin',
//     defaultColumns: ['id'],
//   },
  fields: [
    {
        name: 'role',
        required: true,
        defaultValue: 'user',
        // admin: {
        //     condition: () => false
        // },
        type: 'select',
        options: [
            { label: 'Admin', value: 'admin'},
            { label: 'User', value: 'user'},
        ]  
    },
    // {
    //   name: 'products',
    //   label: 'Products',
    //   admin: {
    //     condition: () => false,
    //   },
    //   type: 'relationship',
    //   relationTo: 'products',
    //   hasMany: true,
    // },
    // {
    //   name: 'product_files',
    //   label: 'Product files',
    //   admin: {
    //     condition: () => false,
    //   },
    //   type: 'relationship',
    //   relationTo: 'product_files',
    //   hasMany: true,
    // },
    // {
    //   name: 'role',
    //   defaultValue: 'user',
    //   required: true,

    //   type: 'select',
    //   options: [
    //     { label: 'Admin', value: 'admin' },
    //     { label: 'User', value: 'user' },
    //   ],
    // },
  ],
}