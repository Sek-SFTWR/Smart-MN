import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 border-black text-slate-50 hover:bg-slate-900/90 ",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 ",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 ",
        secondary:
          "bg-amber-500 text-slate-900 hover:bg-amber-300 border-2 border-amber-500  rounded-lg",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 ",
        link: "text-slate-900 underline-offset-4 hover:underline-offset-2 ",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded px-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
