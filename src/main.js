
import { createApp, h } from 'vue'
import Button from './components/Button.vue'
import './style.css'

// Scan all .vue-app divs
document.querySelectorAll('.vue-app').forEach((el) => {
  const props = {
    label: el.dataset.label,
    variant: el.dataset.variant,
    disabled: el.dataset.disabled === 'true'
  }

  createApp({
    render: () => h(Button, props)
  }).mount(el)
})
