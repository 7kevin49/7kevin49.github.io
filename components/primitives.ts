import { tv } from "tailwind-variants";

export const title = tv({
	base: "tracking-tight inline font-semibold",
	variants: {
		color: {
			violet: "from-[#FF1CF7] to-[#b249f8]",
			yellow: "from-[#FF705B] to-[#FFB457]",
			blue: "from-[#5EA2EF] to-[#0072F5]",
			cyan: "from-[#00b7fa] to-[#01cfea]",
			green: "from-[#6FEE8D] to-[#17c964]",
			pink: "from-[#FF72E1] to-[#F54C7A]",
			foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
		},
		size: {
			sm: "text-3xl lg:text-4xl",
			md: "text-[2.3rem] lg:text-5xl leading-9",
			lg: "text-4xl lg:text-6xl",
		},
		fullWidth: {
			true: "w-full block",
		},
	},
	defaultVariants: {
		size: "md",
	},
	compoundVariants: [
		{
			color: [
				"violet",
				"yellow",
				"blue",
				"cyan",
				"green",
				"pink",
				"foreground",
			],
			class: "bg-clip-text text-transparent bg-gradient-to-b",
		},
	],
});

export const subtitle = tv({
	base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
	variants: {
		fullWidth: {
			true: "!w-full",
		},
	},
  defaultVariants:{
    fullWidth: true
  }
});

export const paragraph = tv({
    base: "text-base lg:text-lg leading-normal",
    variants: {
        color: {
            light: "text-gray-100",
            dark: "text-gray-800",
        },
        fontWeight: {
            normal: "font-normal",
            bold: "font-bold",
        }
    },
    defaultVariants: {
        color: "light",
        fontWeight: "normal"
    }
});

export const h1 = tv({
    base: "text-4xl lg:text-6xl font-bold leading-tight",
    variants: {
        color: {
            primary: "text-blue-800",
            secondary: "text-gray-800",
            accent: "text-red-600",
        }
    },
    defaultVariants: {
        color: "primary"
    }
});

export const h2 = tv({
    base: "text-3xl lg:text-5xl font-semibold leading-snug",
    variants: {
        color: {
            primary: "text-blue-700",
            secondary: "text-gray-700",
            accent: "text-red-500",
        }
    },
    defaultVariants: {
        color: "primary"
    }
});

export const h3 = tv({
    base: "text-2xl lg:text-4xl font-medium leading-normal",
    variants: {
        color: {
            primary: "text-blue-600",
            secondary: "text-gray-600",
            accent: "text-red-400",
        }
    },
    defaultVariants: {
        color: "primary"
    }
});