module.exports = {
  preview: '@preview',
  context: {
    // Default context if no variants are selected
    label: 'Default Button',
    variant: 'primary',
    disabled: false
  },
  // Define variants as an array of objects.
  // Each variant provides a name and a specific context.
  variants: [
    {
      name: 'Primary',
      context: { label: 'Primary Button', variant: 'primary', disabled: false }
    },
    {
      name: 'Secondary',
      context: { label: 'Secondary Button', variant: 'secondary', disabled: false }
    },
    {
      name: 'Disabled',
      context: { label: 'Disabled Button', variant: 'disabled', disabled: true }
    }
  ]
};
