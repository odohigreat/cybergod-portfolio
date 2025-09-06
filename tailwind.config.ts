import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Space Theme Colors
				space: {
					deep: 'hsl(var(--space-deep))',
					medium: 'hsl(var(--space-medium))',
					light: 'hsl(var(--space-light))'
				},
				arch: {
					primary: 'hsl(var(--arch-primary))',
					secondary: 'hsl(var(--arch-secondary))',
					accent: 'hsl(var(--arch-accent))'
				},
				cosmic: {
					primary: 'hsl(var(--cosmic-primary))',
					secondary: 'hsl(var(--cosmic-secondary))',
					tertiary: 'hsl(var(--cosmic-tertiary))'
				},
				structure: {
					primary: 'hsl(var(--structure-primary))',
					secondary: 'hsl(var(--structure-secondary))',
					muted: 'hsl(var(--structure-muted))'
				}
			},
			backgroundImage: {
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-arch': 'var(--gradient-arch)',
				'gradient-space': 'var(--gradient-space)',
				'gradient-hero': 'var(--gradient-hero)'
			},
			boxShadow: {
				'cosmic': 'var(--shadow-cosmic)',
				'arch': 'var(--shadow-arch)',
				'glow-arch': 'var(--glow-arch)',
				'glow-cosmic': 'var(--glow-cosmic)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'slide-in': 'slide-in 0.8s ease-out',
				'fade-up': 'fade-up 0.6s ease-out'
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				glow: {
					'from': { boxShadow: '0 0 20px hsl(var(--arch-primary) / 0.2)' },
					'to': { boxShadow: '0 0 30px hsl(var(--arch-primary) / 0.4)' }
				},
				'slide-in': {
					'from': { opacity: '0', transform: 'translateX(-50px)' },
					'to': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-up': {
					'from': { opacity: '0', transform: 'translateY(30px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
