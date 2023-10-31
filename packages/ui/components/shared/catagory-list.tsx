/**
 * @fileoverview CategoryList.tsx
 * Component that displays a list of the specified catgories, separated by horizontal lines.
 */

import React, { ReactNode } from "react";

import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export type Category = {
  title: string;
  items: CategoryItem[];
};

type CategoryItem = {
  label: string;
  value: ReactNode;
};

const titleVariants = cva("font-medium opacity-90", {
  variants: {
    titleSize: {
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    titleSize: "md",
  },
});

interface CategoryListProps extends VariantProps<typeof titleVariants> {
  categories: Category[];
  showDivider?: boolean;
}

/**
 *
 * @param props.categories - The categories to be displayed.
 * @returns Component that displays a list of the specified catgories, separated by horizontal lines, with the values of the items getting a highlighted color.
 */
const CategoryList = React.forwardRef<HTMLDivElement, CategoryListProps>(
  ({ categories, showDivider = true, titleSize }, ref) => {
    return (
      <div className="space-y-4" ref={ref}>
        {categories.map((category) => (
          <div key={category.title}>
            <div className="flex flex-row items-center gap-x-2">
              <p className={cn(titleVariants({ titleSize }))}>
                {category.title}
              </p>
              {showDivider && (
                <div className="mt-1 h-0.5 grow rounded-full bg-accent" />
              )}
            </div>
            {category.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-row justify-between gap-x-2"
              >
                <p className="text-left text-popover-foreground/80">
                  {item.label}
                </p>
                <p className="text-primary-highlight">{item.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
);
CategoryList.displayName = "CategoryList";
export default CategoryList;
