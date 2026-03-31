"use client";

import * as React from "react";
import { Accordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof Accordion.Root>,
  React.ComponentPropsWithoutRef<typeof Accordion.Root>
>(({ className, ...props }, ref) => (
  <Accordion.Root
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
AccordionRoot.displayName = "AccordionRoot";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Accordion.Item>,
  React.ComponentPropsWithoutRef<typeof Accordion.Item>
>(({ className, ...props }, ref) => (
  <Accordion.Item
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Accordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ className, children, ...props }, ref) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-4 font-medium transition-all",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[panel-open]:rotate-180" />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Accordion.Panel>,
  React.ComponentPropsWithoutRef<typeof Accordion.Panel>
>(({ className, children, ...props }, ref) => (
  <Accordion.Panel
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all",
      className
    )}
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </Accordion.Panel>
));
AccordionContent.displayName = "AccordionContent";

export { AccordionRoot as Accordion, AccordionItem, AccordionTrigger, AccordionContent };
