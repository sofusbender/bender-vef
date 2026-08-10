// Bender ehf — Tailwind litakerfi
// Litir sóttir beint úr lógói Bender (logo_bender_png.png):
// grænn #28AB4A, kolsvartur texti #221F20

tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#28AB4A', // fyllilitur — notaður með dökkum texta ofan á
          deep: '#167A3A',    // notaður sem texti/broddur/rammi ofan á hvítt — uppfyllir AA
          light: '#EAF7EE',   // ljós grænn tónn fyrir bakgrunna og merki
        },
        ink: {
          DEFAULT: '#221F20', // fyrirsagnir og dökkir fletir
          soft: '#55504F',    // meginmál / secondary texti
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
