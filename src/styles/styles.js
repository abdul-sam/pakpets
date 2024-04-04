export const theme = {
  // When you need to change the theme color 
  // please add the color scheme in the colors.js file
  color: "indigo"
}

export const styles = {
  icon:{
    wrapper: "flex absolute inset-y-0 left-0 items-center pointer-events-none",
    default: `h-6 w-6 text-${theme.color}-600`,
  },
  input: {
    default: `w-full px-4 py-3 pl-12 border border-${theme.color}-200 rounded-full md:rounded-none focus:outline-none md:py-5 placeholder:text-gray`,
  },
  pill: {
    default: "bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm font-bold transition-all inline-flex",
    indigo: `bg-${theme.color}-100 text-${theme.color}-900 hover:bg-${theme.color}-400 hover:text-white`,
  },
  listing: {
    wrapper: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-10 p-5 sm:p-0",
  },
  container: "w-full max-w-screen-2xl mx-auto px-5",
  tag: {
    default: "absolute top-0 left-0 p-2 text-xs font-semibold rounded-ee-2xl",
  },
  footer: {
    wrapper: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-5 sm:p-0",
  }
}

export default {
  styles,
  theme
}