import { cva, type VariantProps } from 'class-variance-authority'

export { default as Alert } from './Alert.vue'
export { default as AlertDescription } from './AlertDescription.vue'
export { default as AlertTitle } from './AlertTitle.vue'

export const alertVariants = cva(
  'relative w-full rounded-lg border border-neutral-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-neutral-950 dark:border-neutral-800 dark:[&>svg]:text-neutral-50',
  {
    variants: {
      variant: {
        default: 'bg-white text-green-500 dark:bg-green-500 dark:text-green-500',
        destructive:
          'border-red-500 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-500 dark:text-red-500 dark:dark:border-red-500 dark:[&>svg]:text-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type AlertVariants = VariantProps<typeof alertVariants>
