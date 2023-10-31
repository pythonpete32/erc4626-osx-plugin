/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Toast component built on top of `@radix-ui/react-toast`.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/toast - Radix UI Accordion Primitive
 *
 * inspired by https://ui.shadcn.com/docs/primitives/toast
 */

import * as React from "react";

import * as ToastPrimitives from "@radix-ui/react-toast";
import { VariantProps, cva } from "class-variance-authority";
import { HiCheck, HiXMark } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { Loading } from "../icons";
import { buttonVariants } from "./buttons/button-base";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed left-1/2 top-0 z-[100] flex max-h-screen w-full -translate-x-1/2 transform flex-col-reverse p-4 sm:flex-col md:max-w-[350px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "border border-border data-[swipe=move]:transition-none grow-1 group relative pointer-events-auto flex flex-row w-full items-center justify-between space-x-3 overflow-hidden rounded-md min-h-[3.5rem] px-4 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full mt-2 data-[state=closed]:slide-out-to-right-full last:mt-0 sm:last:mt-2",
  {
    variants: {
      variant: {
        default: "bg-highlight text-highlight-foreground",
        loading: "bg-highlight text-highlight-foreground",
        destructive:
          "group destructive bg-destructive-background text-destructive-foreground",
        success: "group success bg-success-background text-success-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const icons = {
  default: null,
  loading: Loading,
  success: HiCheck,
  destructive: HiXMark,
};

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, children, ...props }, ref) => {
  const icon =
    variant && variant !== "default"
      ? React.createElement(icons[variant], {
          className: "w-6 h-6 shrink-0",
        })
      : null;

  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    >
      {icon && icon}
      <div className="m-0 flex w-full items-center justify-between">
        {children}
      </div>
    </ToastPrimitives.Root>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline", size: "xs" }),
      // 'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive-background group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-highlight-foreground/80 opacity-0 transition-opacity hover:text-highlight-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
      className
    )}
    toast-close=""
    {...props}
  >
    <HiXMark className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold leading-4", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-xs leading-4 opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
