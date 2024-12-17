/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
	
		screens: {
			xs: '375px', // Define un breakpoint personalizado
		},
		minWidth: {
			screen: '375px', // Define un ancho mínimo para cualquier contenedor
		},
    
		colors: {
		  primary: {
			light: '#7dd3fc', // Azul claro
			DEFAULT: '#166bcb', // Azul predeterminado
			dark: '#09215c', // Azul oscuro
		  },
		  secondary: {
			light: '#fef3c7', // Amarillo claro
			DEFAULT: '#facc15', // Amarillo predeterminado
			dark: '#ca8a04', // Amarillo oscuro
		  },
		  accent: '#9333ea', // Púrpura
		  neutral: '#374151', // Gris neutro
		},
	  },
	},
	plugins: [],
  };
  